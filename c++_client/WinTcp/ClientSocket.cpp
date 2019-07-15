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
WinTcp::ClientSocket::ClientSocket():m_enabled(true), m_isConnecting(false), m_isConnected(false), m_sendConnected(0)
{
	m_enabled	   = true;
	m_isConnecting = false;
	m_isConnected  = false;
    m_sendConnected= false;
	m_isDisConnected= false;
	SetMaxReceiveBufferSize(MAX_PACKET_SIZE);
}

WinTcp::ClientSocket::~ClientSocket()
{
}

void WinTcp::ClientSocket::InitCache()
{
    m_Seq = 0;
}

void WinTcp::ClientSocket::Initial(void*)
{
#ifdef _WINSOCKAPI_
	WSADATA wsaData;
	if(0!=WSAStartup( MAKEWORD( 2, 2 ), &wsaData)  || (LOBYTE( wsaData.wVersion ) != 2 ||	HIBYTE( wsaData.wVersion ) != 2 ))
	{
		WSACleanup();
		assert(0);
		return;
	}

#endif

	//CCDirector::sharedDirector()->getScheduler()->scheduleUpdateForTarget(this,0,0);
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
	//CCDirector::sharedDirector()->getScheduler()->unscheduleUpdateForTarget(this);
}

bool WinTcp::ClientSocket::Send(::google::protobuf::Message* packet, int ctrlType)
{
	if (!packet)
		return false;

	char buff[MAX_PACKET_SIZE] = "";
	int nPacketSize = Packet::Encode(packet, buff);
	delete packet;
	strcat(buff, TCP_END);
	nPacketSize = nPacketSize + TCP_END_LENGTH;
	buff[nPacketSize] = '\0';
	return Send(buff, nPacketSize, ctrlType);
}

bool WinTcp::ClientSocket::ConnectToServer(const char* szServerAddr, int nServerPort)
{
	if(m_isConnecting)
	{
		return false;
	}
    
    if (m_Socket.isValid() && m_strServerAddr == szServerAddr && m_nServerPort == nServerPort)
    {
        return false;
    }
    
    if (m_strServerAddr != szServerAddr || m_nServerPort != nServerPort)
    {
        InitCache();
    }
    
    Close();

	m_isConnecting  = true;
    m_sendConnected = false;
	m_strServerAddr = szServerAddr;
	m_nServerPort	= nServerPort;

#ifdef _WIN32
	m_hConnectThread = CreateThread(NULL, 0, _ConnectThread, NULL, 0, NULL);
#else
	pthread_create(&m_hConnectThread, NULL, _ConnectThread, NULL);
	pthread_detach(m_hConnectThread);
#endif

    
	return true;
}

bool WinTcp::ClientSocket::Send(const char* buffer, int bufferLen, int ctrlType)
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

U32 WinTcp::ClientSocket::ReceivePacket(char* buffer, U32 bufferLen)
{
    CTcpSocket::ReceivePacket((const char *)buffer, bufferLen);
    return bufferLen;
}


#ifdef _WIN32
DWORD WINAPI WinTcp::ClientSocket::_ConnectThread(LPVOID data)
{
	g_connectResult = ClientSocket::Instance()->ConnectThread();
	ClientSocket::Instance()->m_sendConnected = true;
	ClientSocket::Instance()->m_isConnecting = false;
	ACCOUNT->LoginAccount();
	return 0;
}
#else
void* WinTcp::ClientSocket::_ConnectThread(void* data)
{
	g_connectResult = ClientSocket::Instance()->ConnectThread();
    ClientSocket::Instance()->m_sendConnected = true;
	ClientSocket::Instance()->m_isConnecting  = false;
	
	pthread_exit(NULL);
	return 0;
}
#endif

int WinTcp::ClientSocket::ConnectThread(void)
{
	m_Socket.close();

	if(!m_Socket.create()) 
	{
		return -1;
	}

	if(!m_Socket.connect( m_strServerAddr.c_str(), m_nServerPort ))
	{
		m_Socket.close();
		return -2 ;
	}

	if(!m_Socket.setNonBlocking() || !m_Socket.setLinger(0))
	{
		m_Socket.close();
		return -3;
	}

	return 1;
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
		ReceivePacket(readBuff.get(), ret);
	}
	/*else
	{
	m_Socket.close();
	}*/

	return true;
}

bool WinTcp::ClientSocket::ProcessOutput(void)
{
	if (!m_enabled)
		return false;

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


bool WinTcp::ConnectServer(const char* szServerAddr, int nServerPort)
{
	return ClientSocket::Instance()->ConnectToServer(szServerAddr,nServerPort);
}

void WinTcp::DisconnectServer(void)
{
	return ClientSocket::Instance()->Close();
}

int WinTcp::SendServer(char* ptr,int len)
{
	ClientSocket::Instance()->Send(ptr, len);
    return 0;
}

void WinTcp::SocketPause(bool isEnabled)
{
	return ClientSocket::Instance()->Enable(isEnabled);
}


/*
WinTcp::CLIENT_TCP->Initial(NULL);
WinTcp::ConnectServer("192.168.84.62", 31700);
while (true)
{
WinTcp::CLIENT_TCP->update(0);
}
*/