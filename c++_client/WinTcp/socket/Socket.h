
#ifndef __SOCKET_H__
#define __SOCKET_H__

#include "SocketAPI.h"

#define IP_SIZE 64

enum ERROR_SOCKET
{
    ERR_PACKET_TOO_BIG      = -3,
    ERR_FREE_CACHE_FULL     = -2,
    ERR_NONE                = 0,
    
};

namespace WinTcp
{
class Socket 
{
public :
	Socket ();
	Socket (const char* host, int port);
	virtual ~Socket ();
public :
	bool create() ;
	
	// close connection
	void close () ;
	
	// try connect to remote host
	bool connect () ;
	bool connect (const char* host, int port) ;

	// close previous connection and connect to another socket
	bool reconnect (const char* host, int port) ;
	
	// send data to peer
	int send (const void* buf, int len, int flags = 0) ;
	
	// receive data from peer
	int receive(void* buf, int len, int flags = 0) ;
public:
    // get/set socket's linger status
    int		getLinger ()const ;
    bool	setLinger (int lingertime) ;

	bool	isReuseAddr ()const ;
	bool	setReuseAddr (bool on = true) ;

	// get is Error
    int		getSockError()const ;
 
    // get/set socket's nonblocking status
    bool	setNonBlocking (bool on = true) ;
 
    // get/set receive buffer size
    int		getReceiveBufferSize ()const ;
    bool	setReceiveBufferSize (int size) ;
 
    // get/set send buffer size
    int		getSendBufferSize ()const ;   
    bool	setSendBufferSize (int size) ;
 
	int		getPort ()const;

	inline bool	isValid(void) const {return m_socketId!=GAME_SOCKET_BAD;}

	inline game_socket_t GetSocketId(void) const {return m_socketId;}
	inline void   SetSocketId(game_socket_t s)   {m_socketId = s;}

	bool	isSockError()const ;
public:
	game_socket_t m_socketId;
		
	// peer host
	char m_Host[IP_SIZE];
	
	// peer port
	int m_Port;
};
}
#endif
