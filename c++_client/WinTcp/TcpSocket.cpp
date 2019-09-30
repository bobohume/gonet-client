#include "TcpSocket.h"
#include <assert.h>
#include "message/Packet.h"

#ifndef _WIN32
#if !defined(ANDROID)
inline U32 GetTickCount()
{
	return clock();
}
#else
inline U32 GetTickCount()
{
	struct timeval tv;
	gettimeofday(&tv, NULL);
	return tv.tv_sec * 1000 + tv.tv_usec / 1000;
}
#endif // 
#endif // _WIN32

WinTcp::CTcpSocket::CTcpSocket()
{
	m_nHalfSize			= 0;			//初始化变量
}

WinTcp::CTcpSocket::~CTcpSocket()
{
}

void WinTcp::CTcpSocket::OnClear()
{
	m_nHalfSize			= 0;			//初始化变量
}

#pragma optimize("",off) 
void WinTcp::CTcpSocket::HandlePacket(const char* pInData, int nBufferSize)
{
	static char buff[MAX_PACKET_RECEIEVE_SIZE] = "";
	memcpy(buff, pInData, nBufferSize);
	int id = message::Packet::Instance()->Decode(buff);
	auto packet = message::Packet::Instance()->GetPakcet(id);
	if (packet) {
		if (packet->ParseFromArray(&buff[4], nBufferSize - 4)) {
			message::Packet::Instance()->TriggerPacket(packet);
		}
		delete packet;
	}
}

int memstr(const char* pInData, int nInDataSize, const char* pFindData, int nFindDataSize) {
	char* pData = (char *)pInData;
	int nDataSize = nInDataSize;
FindStr:
	const char * pSubData = (const char *)memchr(pData, pFindData[0], nDataSize);
	if (pSubData != NULL) {
		for (int i = 1; i < nFindDataSize; i++) {
			if (pSubData[i] != pFindData[i]) {
				pSubData++;
				nDataSize -= pSubData - pData;
				pData = (char *)pSubData;
				goto FindStr;
			}
		}
		return pSubData - pInData + TCP_END_LENGTH;
	}
	return -1;
}

void seekToTcpEnd(const char* pInData, int nBufferSize, bool &bFind, int& nPacketSize) {
	nPacketSize = memstr(pInData, nBufferSize, TCP_END, TCP_END_LENGTH);
	if (nPacketSize != -1) {
		bFind = true;
		return;
	}

	bFind = false;
	nPacketSize = 0;
	return;
}

void WinTcp::CTcpSocket::ReceivePacket(const char *pInData, int nInDataSize)
{
	if (!pInData || nInDataSize <= 0)
	{
		CCLOG("CTcpSocket::ReceivePacket(), parse packet error!");
		return;				//有错误
	}

	int nCurSize = 0;
	memcpy(&m_pInBuffer[m_nHalfSize], pInData, nInDataSize);
	m_nHalfSize += nInDataSize;
	m_pInBuffer[m_nHalfSize] = '\0';

ParsePacekt:
	int nPacketSize = 0;
	int nBufferSize = m_nHalfSize - nCurSize;
	bool bFindFlag = false;
	seekToTcpEnd(&m_pInBuffer[nCurSize], nBufferSize, bFindFlag, nPacketSize);
	if (bFindFlag) {
		if (nBufferSize == nPacketSize) {		//完整包
			HandlePacket(m_pInBuffer, nPacketSize - TCP_END_LENGTH);
			m_nHalfSize = 0;
		}
		else if (nBufferSize > nPacketSize) {
			HandlePacket(m_pInBuffer, nPacketSize - TCP_END_LENGTH);
			nCurSize += nPacketSize;
			goto ParsePacekt;
		}
	}
	else if (nBufferSize < MAX_PACKET_RECEIEVE_SIZE) {
		memmove(m_pInBuffer, &m_pInBuffer[nCurSize], m_nHalfSize - nCurSize);
		m_pInBuffer[m_nHalfSize - nCurSize] = '\0';
		m_nHalfSize = m_nHalfSize - nCurSize;
	}
	else {
		CCLOG("超出最大包限制，丢弃该包");
		m_nHalfSize = 0;
	}
}
#pragma optimize("",on) 
