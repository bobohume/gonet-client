#ifndef _TCP_SOCKET_H
#define _TCP_SOCKET_H

#include "ISocket.h"

static char s_tcp_end[32] = { 240,159,146,158,226,153,161 };
#define  TCP_END s_tcp_end //解决tpc粘包半包,结束标志
#define  TCP_END_LENGTH strlen(TCP_END) //tcp结束标志长度
namespace WinTcp {

class CTcpSocket : public ISocket
{
public:
	typedef ISocket Parent;

protected:
	char *	m_pInBuffer;
	int		m_nHalfSize;
	bool	m_bHalf;

protected:
	virtual void OnClear();
	virtual void ReceivePacket(const char *pBuf, int nBufferSize);

public:
	CTcpSocket();
	virtual ~CTcpSocket(void);

	virtual void SetMaxReceiveBufferSize(int MaxReceiveSize);

protected:
	virtual void HandlePacket(const char *pBuf, int nBufferSize);
};
}
#endif