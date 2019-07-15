#include "Socket.h"
#include "SocketAPI.h"

#if !defined(WIN32) && !defined(_WIN32_WCE)
#include <sys/socket.h>
#include <netdb.h>
#endif

WinTcp::Socket::Socket () 
{ 
	m_socketId = GAME_SOCKET_BAD ;
	memset( m_Host, 0, IP_SIZE ) ;
	m_Port = 0 ;
}

WinTcp::Socket::Socket ( const char* host , int port )
{ 
	strcpy_s(m_Host,host) ;
	m_Port = port;

	create() ;	
}

WinTcp::Socket::~Socket ()
{ 
	close();
}

bool WinTcp::Socket::create( )
{
	m_socketId = WinTcp::socket_ex();
	
	if(isValid())
		return true ;
	else 
		return false ;
}

// close previous connection and connect to another server socket
bool WinTcp::Socket::reconnect ( const char* host , int port )
{
	// delete old socket impl object
	close();

	// create new socket impl object
	strcpy_s(m_Host,host);
	m_Port = port ;

	create() ;

	// try to connect
	return connect();	
}

void WinTcp::Socket::close ()
{ 
	if( isValid() && !isSockError() ) 
	{
		WinTcp::closesocket_ex( m_socketId );
	}

	m_socketId = GAME_SOCKET_BAD ;
}
	
bool WinTcp::Socket::connect ()
{ 
    return WinTcp::connect_ex(m_socketId,m_Host,m_Port);
}

bool WinTcp::Socket::connect (const char* host, int port)
{ 
	strcpy_s(m_Host,host);
	m_Port = port ;

	return connect() ;
}

int WinTcp::Socket::send (const void* buf, int len, int flags)
{ 
	return WinTcp::send_ex( m_socketId , buf , len , flags );
}

int WinTcp::Socket::receive (void* buf, int len, int flags)
{ 
	return WinTcp::recv_ex( m_socketId , buf , len , flags );
}

int WinTcp::Socket::getLinger ()const
{ 
	struct linger ling;
	int len = sizeof(ling);
	
	WinTcp::getsockopt_ex( m_socketId , SOL_SOCKET , SO_LINGER , &ling , &len );
    return ling.l_linger;
}

bool WinTcp::Socket::setLinger (int lingertime)
{
	struct linger ling;
	
	ling.l_onoff = 1;
	ling.l_linger = lingertime;
	
	return WinTcp::setsockopt_ex( m_socketId , SOL_SOCKET , SO_LINGER , &ling , sizeof(ling) );
}

int WinTcp::Socket::getSockError()const
{ 
	return isSockError(); 
}

bool WinTcp::Socket::setNonBlocking (bool on )
{ 
	return WinTcp::setsocketnonblocking_ex( m_socketId , on );
}

int WinTcp::Socket::getReceiveBufferSize ()const
{ 
	int ReceiveBufferSize;
	int size = sizeof(ReceiveBufferSize);

	WinTcp::getsockopt_ex( m_socketId , SOL_SOCKET , SO_RCVBUF , &ReceiveBufferSize, &size );
    return ReceiveBufferSize;
}

bool WinTcp::Socket::setReceiveBufferSize (int size)
{ 
	return (bool)(WinTcp::setsockopt_ex( m_socketId , SOL_SOCKET , SO_RCVBUF , &size, sizeof(int) ) ) ;
}

int WinTcp::Socket::getSendBufferSize ()const
{ 
	int SendBufferSize;
	int size = sizeof(SendBufferSize);

	WinTcp::getsockopt_ex( m_socketId , SOL_SOCKET , SO_SNDBUF , &SendBufferSize, &size );
	return SendBufferSize;
}

bool WinTcp::Socket::setSendBufferSize (int size)
{ 
	return (bool)(WinTcp::setsockopt_ex( m_socketId , SOL_SOCKET , SO_SNDBUF , &size, sizeof(int) ) );
}

int WinTcp::Socket::getPort ()const
{ 
	return m_Port; 
}

bool WinTcp::Socket::isSockError()const
{
	int error = 0;
	int len   = sizeof(error);
	
	int Result = WinTcp::getsockopt_ex( m_socketId , SOL_SOCKET , SO_ERROR , &error, &len );

	if( Result == 0 )
		return true;
	else
		return false;
}

bool WinTcp::Socket::isReuseAddr ()const
{	
	int reuse = 0;
	int len = sizeof(reuse);
	
	WinTcp::getsockopt_ex( m_socketId , SOL_SOCKET , SO_REUSEADDR , &reuse , &len );
	return reuse == 1;
}

bool WinTcp::Socket::setReuseAddr (bool on)
{
	int opt = on == true ? 1 : 0;
	return WinTcp::setsockopt_ex( m_socketId , SOL_SOCKET , SO_REUSEADDR , &opt , sizeof(opt) );
}

