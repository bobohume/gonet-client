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
	m_pInBuffer			= NULL;
	m_bHalf				= false;
	m_nHalfSize			= 0;			//��ʼ������
}

WinTcp::CTcpSocket::~CTcpSocket()
{
	if(m_pInBuffer){
		delete [] m_pInBuffer;
		m_pInBuffer = NULL;
	}
}

void WinTcp::CTcpSocket::SetMaxReceiveBufferSize(int MaxReceiveSize)
{
	if(m_MaxReceiveBufferSize != MaxReceiveSize || 0 == m_pInBuffer)
	{
		if(m_pInBuffer)
		{
			if(m_bHalf && m_nHalfSize >=MaxReceiveSize)
			{
				//����Խ���
				m_bHalf				= false;
				m_nHalfSize = 0;
				CCLOG("(E)������Խ���,�Ѿ������� IP=%s", m_sIP);

				delete [] m_pInBuffer;
				m_pInBuffer = new char [MaxReceiveSize];
			}
			else 
			{
				//��չBUF
				char *pTemp = new char [MaxReceiveSize];
				if(m_nHalfSize)
					memcpy(pTemp,m_pInBuffer, m_nHalfSize);
				delete [] m_pInBuffer;
				m_pInBuffer = pTemp;
			}
		}
		else
		{
			m_pInBuffer = new char [MaxReceiveSize];
		}

		Parent::SetMaxReceiveBufferSize(MaxReceiveSize);
	}
}

void WinTcp::CTcpSocket::OnClear()
{
	m_bHalf				= false;
	m_nHalfSize			= 0;			//��ʼ������
}

void WinTcp::CTcpSocket::HandlePacket(const char* pInData, int nBufferSize)
{
#ifdef DEBUG
	static unsigned long uReceves = 0;
	uReceves++;
	CCLOG(">>>>>>>OnHandleAPacket receive packet %d\n", uReceves);
#endif
	char buff[MAX_PACKET_SIZE] = "";
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

void WinTcp::CTcpSocket::ReceivePacket(const char *pInData, int nBufferSize)
{
	const char *lpVt = pInData;
	int nPacketSize = 0;
	bool bFindFlag = false;

	if (!lpVt || nBufferSize <= 0)
	{
		CCLOG("CTcpSocket::ReceivePacket(), parse packet error!");
		return;				//�д���
	}

	auto seekToTcpEnd = [&](const char *pInData, int nBufferSize, bool &bFind, int& nPacketSize) {
		auto substr = strstr(pInData, TCP_END);
		if (substr != NULL){
			bFind = true;
			nPacketSize = substr - pInData + TCP_END_LENGTH;
			return;
		}
		/*for (auto i = 0; i < nBufferSize - 1; i++) {
			if (pInData[i] == TCP_END[0] && pInData[i + 1] == TCP_END[1]) {
				bFind = true;
				nPacketSize = i + 2;
				return;
			}
		}*/

		bFind = false;
		nPacketSize = 0;
		return;
	};

	if (m_bHalf)
	{
		m_bHalf = false;
		memcpy(&m_pInBuffer[m_nHalfSize], lpVt, nBufferSize);
		m_nHalfSize += nBufferSize;
		seekToTcpEnd(m_pInBuffer, m_nHalfSize, bFindFlag, nPacketSize);
		if (bFindFlag) {
			if (nBufferSize == nPacketSize) {		//������
				HandlePacket(m_pInBuffer, nPacketSize - TCP_END_LENGTH);
			}
			else if (nBufferSize > nPacketSize) {
				HandlePacket(m_pInBuffer, nPacketSize - TCP_END_LENGTH);
				ReceivePacket(&m_pInBuffer[nPacketSize], m_nHalfSize - nPacketSize);
			}
		}
		else {//������
			CCLOG("����һ���������İ�");
		}
	}
	else {
		seekToTcpEnd(pInData, nBufferSize, bFindFlag, nPacketSize);
		if (bFindFlag) {
			if (nBufferSize == nPacketSize) {		//������
				HandlePacket(pInData, nPacketSize - TCP_END_LENGTH);
			}
			else if (nBufferSize > nPacketSize) {
				HandlePacket(pInData, nPacketSize - TCP_END_LENGTH);
				ReceivePacket(&pInData[nPacketSize], nBufferSize - nPacketSize);
			}
		}
		else {
			m_bHalf = true;
			m_nHalfSize = nBufferSize;
			memcpy(m_pInBuffer, lpVt, nBufferSize);
		}
	}
}

