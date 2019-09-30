#ifndef _CLIENTSOCKET_H_
#define _CLIENTSOCKET_H_

#include <string>
#include <list>

#include "Socket/Socket.h"
#include "TcpSocket.h"
#include "Base/bitStream.h"
#include "message/Packet.h"

#ifndef _WIN32
#include "pthread.h"
#endif

//#define MAX_PACKET_SIZE                 2048

namespace WinTcp{
#define MAX_VERTIFY_CACHE_PACKET        10
#define MAX_CACHE_PACKET                30
class ClientSocket : public CTcpSocket
{
public:
	ClientSocket();
	virtual ~ClientSocket();

	static ClientSocket* Instance(void)
	{
		static ClientSocket local;
		return &local;
	}

	//CTcpSocket ·ÏÆú½Ó¿Ú=============================
	bool Initialize();
	bool Start() { return false; };
	bool Stop() { return false; };
	bool Restart() { return false; };
	int  Connect(const char* szServerAddr, int nServerPort);
	bool Disconnect();
	bool Send(::google::protobuf::Message* packet);
	bool Send(const char* buffer, int bufferLen);

protected:
	void OnDisconnect();
	void OnConnect(int) { return; };
	virtual void ReceivePacket(const char *pBuf, int nBufferSize);

public:
	virtual void	update(float dt);
	virtual void	Release(void);
	void OnConnected();
	virtual         void			Close(void);

protected:
	bool				Select(void);
	bool				ProcessExcept(void);
	bool				ProcessInput(void);
	bool				ProcessOutput(void);
protected:
	fd_set				m_ReadFD;
	fd_set				m_WriteFD;
	fd_set				m_ExceptFD;
	///SOCKET
	Socket				m_Socket;
	bool				m_isConnecting;
	bool                m_sendConnected;
	bool				m_isConnected;
	bool				m_isDisConnected;
};

#define  CLIENT_TCP ClientSocket::Instance()
}
#endif