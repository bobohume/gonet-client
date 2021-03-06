﻿#ifndef _TCP_SOCKET_H
#define _TCP_SOCKET_H

#include "ISocket.h"

static unsigned char s_tcp_end[32] = { 240,159,146,158,226,153,161 };
#define  TCP_END ((char *)s_tcp_end)		//解决tpc粘包半包,特殊结束标志,pb采用Varint编码高位有特殊含义
#define  TCP_HEAD_SIZE 4					//解决tpc粘包半包,包头固定长度
#define  TCP_END_LENGTH strlen(TCP_END) //tcp结束标志长度
namespace WinTcp {

class CTcpSocket : public ISocket
{
public:
	typedef ISocket Parent;

protected:
	char	m_pInBuffer[MAX_PACKET_RECEIEVE_SIZE];
	int		m_nHalfSize;//不完整包总长度

protected:
	virtual void OnClear();
	virtual void ReceivePacket(const char *pBuf, int nBufferSize);

public:
	CTcpSocket();
	virtual ~CTcpSocket(void);

protected:
	virtual void HandlePacket(const char *pBuf, int nBufferSize);
};
}
#endif