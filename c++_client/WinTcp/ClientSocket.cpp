#include "ClientSocket.h"
#include "Base/MemGuard.h"
#include "Account.h"
#ifdef _WINSOCKAPI_
#pragma comment(lib, "Ws2_32.lib")
//#pragma comment(lib, "pthreadVCE2.lib")
#endif

using namespace message;
#define MAX_CONNECT_TIME	(10*1000)
int g_connectResult = 0;
WinTcp::ClientSocket::ClientSocket():m_isConnecting(false), m_isConnected(false)
{
	m_sendConnected = 0;
	m_isConnecting = false;
	m_isConnected  = false;
    m_sendConnected= false;
	m_isDisConnected= false;
	SetMaxReceiveBufferSize(PACKET_MAX_SIZE);
}

WinTcp::ClientSocket::~ClientSocket()
{
}

bool WinTcp::ClientSocket::Initialize()
{
#ifdef _WINSOCKAPI_
	WSADATA wsaData;
	if(0!=WSAStartup( MAKEWORD( 2, 2 ), &wsaData)  || (LOBYTE( wsaData.wVersion ) != 2 ||	HIBYTE( wsaData.wVersion ) != 2 ))
	{
		WSACleanup();
		assert(0);
		return false;
	}

#endif
	return true;
	//CCDirector::sharedDirector()->getScheduler()->scheduleUpdateForTarget(this,0,0);
}

bool  WinTcp::ClientSocket::Disconnect()
{
	Close();
	return true;
}

void WinTcp::ClientSocket::update(float dt)
{
	if (!m_Socket.isValid())
	{
		if (m_isConnected)
		{
			OnDisconnect();
		}
        
        if (g_connectResult < 0)
        {
            //OnDisconnect();
            g_connectResult = 0;
        }

		if (m_isDisConnected)
		{
			CCLOG("player diconnected");
		}
		       
		return;
	}
    
    if (m_sendConnected)
    {
        if(g_connectResult > 0)
        {
            OnConnected();
            m_sendConnected = false;
        }
    }

	if (!Select())
	{
		//ProcessInput();
		return;
	}
}

void WinTcp::ClientSocket::Release(void)
{
	m_Socket.close();
#ifdef _WINSOCKAPI_
	WSACleanup();
#endif
	//CCDirector::sharedDirector()->getScheduler()->scheduleUpdateForTarget(this,0,0);
}

bool WinTcp::ClientSocket::Send(::google::protobuf::Message* packet)
{
	if (!packet)
		return false;

	char buff[PACKET_MAX_SIZE] = "";
	int nPacketSize = Packet::Encode(packet, buff);
	delete packet;
	buff[nPacketSize] = '\0';
	return Send(buff, nPacketSize);
}

//tcp粘包特殊结束标志
/*bool WinTcp::ClientSocket::Send(::google::protobuf::Message* packet)
{
	if (!packet)
		return false;

	char buff[PACKET_MAX_SIZE] = "";
	int nPacketSize = Packet::Encode(packet, buff);
	delete packet;
	memcpy(&buff[nPacketSize], TCP_END, TCP_END_LENGTH);
	nPacketSize = nPacketSize + TCP_END_LENGTH;
	buff[nPacketSize] = '\0';
	return Send(buff, nPacketSize);
}*/

int WinTcp::ClientSocket::Connect(const char* szServerAddr, int nServerPort)
{
	if (m_isConnecting)
	{
		return false;
	}

	if (m_Socket.isValid() && m_sIP == szServerAddr && m_nPort == nServerPort)
	{
		return false;
	}

	Close();

	m_isConnecting = true;
	m_sendConnected = false;
	m_sIP = szServerAddr;
	m_nPort = nServerPort;
	if (!m_Socket.create())
	{
		return -1;
	}

	if (!m_Socket.connect(m_sIP.c_str(), m_nPort))
	{
		m_Socket.close();
		return -2;
	}

	if (!m_Socket.setNonBlocking() || !m_Socket.setLinger(0))
	{
		m_Socket.close();
		return -3;
	}

	m_sendConnected = true;
	m_isConnecting = false;
	ACCOUNT->LoginGate();

	/*#ifdef _WIN32
	m_hConnectThread = CreateThread(NULL, 0, _ConnectThread, NULL, 0, NULL);
#else
	pthread_create(&m_hConnectThread, NULL, _ConnectThread, NULL);
	pthread_detach(m_hConnectThread);
#endif*/
	return 1;
}

bool WinTcp::ClientSocket::Send(const char* buffer, int bufferLen)
{
    if (!m_Socket.isValid())
    {
		return false;
	}
    
    m_Socket.send(buffer, bufferLen);
    return true;
}

void WinTcp::ClientSocket::OnConnected()
{
    OnClear();
	m_isConnected = true;
	m_isDisConnected = false;
}

void WinTcp::ClientSocket::ReceivePacket(const char* buffer, int bufferLen)
{
    CTcpSocket::ReceivePacket(buffer, bufferLen);
}

bool WinTcp::ClientSocket::Select(void)
{
	if (!m_Socket.isValid())
		return false;

	FD_ZERO( &m_ReadFD ) ;
	FD_ZERO( &m_WriteFD ) ;
	FD_ZERO( &m_ExceptFD ) ;

	FD_SET( m_Socket.GetSocketId(), &m_ReadFD ) ;
	FD_SET( m_Socket.GetSocketId(), &m_WriteFD ) ;
	FD_SET( m_Socket.GetSocketId(), &m_ExceptFD ) ;

	timeval	Timeout ;
	Timeout.tv_sec = 0 ;
	Timeout.tv_usec = 0 ;

	int result = WinTcp::select_ex(m_Socket.GetSocketId() + 1 ,
		&m_ReadFD,
		NULL,
		&m_ExceptFD,
		&Timeout);
	if(result == GAME_SOCKET_BAD)
	{
		return false;
	}
	else if(result == 0)//time out
	{

	}
	else
	{
		if(FD_ISSET(m_Socket.GetSocketId(), &m_ReadFD))
		{
			ProcessInput();
		}
		else if(FD_ISSET(m_Socket.GetSocketId(),&m_WriteFD))
		{
		    ProcessOutput();
		}
		else if(FD_ISSET( m_Socket.GetSocketId(), &m_ExceptFD))
		{
			ProcessExcept();
		}
	}

	return true;
}

bool WinTcp::ClientSocket::ProcessInput(void)
{
	if (!m_Socket.isValid())
		return false;

	if (m_isConnecting)
		return true;

	static CMemGuard readBuff(MaxPacketBuffSize MEM_GUARD_PARAM);;
	int ret = m_Socket.receive(readBuff.get(), MaxPacketBuffSize);

	if (ret <= 0)
	{
#ifdef _WIN32
		int nError = WSAGetLastError();
		if (WSAEWOULDBLOCK != nError)
		{
			m_Socket.close();
			return false;
		}
#else
		if (errno != EINTR && errno != EWOULDBLOCK && errno != EAGAIN)
		{
			m_Socket.close();
			return false;
		}
#endif // _WIN32
	}
	else if (ret > 0)
	{
		ReceivePacket((const char *)readBuff.get(), ret);
	}
	/*else
	{
	m_Socket.close();
	}*/

	return true;
}

bool WinTcp::ClientSocket::ProcessOutput(void)
{
	if (!m_Socket.isValid())
		return false;

	return true;
}

bool WinTcp::ClientSocket::ProcessExcept( )
{
    return true;
    
	if (!m_Socket.isValid())
		return false;
    
    m_Socket.close() ;
    return false;
}

void WinTcp::ClientSocket::Close(void)
{
	m_Socket.close();
}

void WinTcp::ClientSocket::OnDisconnect(void)
{
	m_isConnected = false;
	m_isDisConnected = true;
}
/*
WinTcp::CLIENT_TCP->Initialize(NULL);
WinTcp::CLIENT_TCP->Connect("192.168.84.62", 31700);
while (true)
{
WinTcp::CLIENT_TCP->update(0);
}
*/