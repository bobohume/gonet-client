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
struct stServerInfo
{
    stServerInfo(void)
    {
        memset(this,0,sizeof(stServerInfo));
    }
    
	int Type;			//服务类型编号
	int LineId;			//服务线路编号
	int GateId;			//服务网关编号
	int Ip;             //服务IP
	int Port;			//服务端口
	int SocketId;		//连接句柄
    char IP[32];        //字符串ip
};

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

	//CTcpSocket 废弃接口=============================
	bool Initialize(const char *ip, int nPort, void *Param = NULL) { return false; };
	bool Start() { return false; };
	bool Stop() { return false; };
	bool Restart() { return false; };
	bool Connect() { return false; };
	bool Disconnect(bool bForce) { return false; };

protected:
	void OnDisconnect();
	void OnConnect(int) { return; };
public:
	virtual void	Initial(void*);
	virtual void	update(float dt);
	virtual void	Release(void);
	bool Send(::google::protobuf::Message* packet, int ctrlType = PT_GUARANTEED);
	bool ConnectToServer(const char* szServerAddr, int nServerPort);
	bool Send(const char* buffer, int bufferLen, int ctrlType = PT_GUARANTEED);
	U32 ReceivePacket(char* buffer, U32 bufferLen);
	void OnConnected();
	virtual         void			Close(void);
	void			Enable(bool isEnabled) { m_enabled = isEnabled; }
	void            InitCache();
	inline stServerInfo*   getGateServer()
	{
		return &m_GateServer;
	}

	int ConnectThread(void);
protected:

#ifdef _WIN32
	static DWORD WINAPI	 _ConnectThread(LPVOID data);
#else
	static void*	_ConnectThread(void *data);
#endif

#ifdef _WIN32
	HANDLE				m_hConnectThread;
#else
	pthread_t			m_hConnectThread;
#endif
	bool				Select(void);
	bool				ProcessExcept(void);
	bool				ProcessInput(void);
	bool				ProcessOutput(void);
protected:
	std::string				m_strServerAddr;
	int						m_nServerPort;
	fd_set					m_ReadFD;
	fd_set					m_WriteFD;
	fd_set					m_ExceptFD;
	///SOCKET
	Socket					m_Socket;
	bool					m_enabled;
	bool					m_isConnecting;
	bool                    m_sendConnected;
	bool					m_isConnected;
	bool					m_isDisConnected;
	stServerInfo            m_GateServer;
};

#define  CLIENT_TCP ClientSocket::Instance()

bool ConnectServer(const char* szServerAddr, int nServerPort);


void DisconnectServer(void);

int SendServer(char* ptr,int len);
void SocketPause(bool isEnabled);
}
#endif