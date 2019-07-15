
#include "SocketAPI.h"

/*
 * Define WIN32 when build target is Win32 API
 */

#if (defined(_WIN32) || defined(__WIN32__)) && \
     !defined(WIN32) && !defined(__SYMBIAN32__)
#define WIN32
#endif

#include <stdio.h>
#include <limits.h>

#if defined(__FreeBSD__) && (__FreeBSD__ >= 2)
/* Needed for __FreeBSD_version symbol definition */
#include <osreldate.h>
#endif

/* The include stuff here below is mainly for time_t! */
#include <sys/types.h>
#include <time.h>

#if defined(WIN32) && !defined(_WIN32_WCE) && !defined(__CYGWIN__)
#if !(defined(_WINSOCKAPI_) || defined(_WINSOCK_H) || defined(__LWIP_OPT_H__))
/* The check above prevents the winsock2 inclusion if winsock.h already was
   included, since they can't co-exist without problems */
#include <winsock2.h>
#include <ws2tcpip.h>
#endif
#endif

/* HP-UX systems version 9, 10 and 11 lack sys/select.h and so does oldish
   libc5-based Linux systems. Only include it on systems that are known to
   require it! */
#if defined(_AIX) || defined(__NOVELL_LIBC__) || defined(__NetBSD__) || \
    defined(__minix) || defined(__SYMBIAN32__) || defined(__INTEGRITY) || \
    defined(ANDROID) || defined(__ANDROID__) || \
   (defined(__FreeBSD_version) && (__FreeBSD_version < 800000))
#include <sys/select.h>
#endif

#if !defined(WIN32) && !defined(_WIN32_WCE)
#include <sys/socket.h>
#include <fcntl.h>
#include <netdb.h>
#include <arpa/inet.h>
#include <unistd.h>
#endif

#if !defined(WIN32) && !defined(__WATCOMC__) && !defined(__VXWORKS__)
#include <sys/time.h>
#endif

#include "errno.h"

#ifndef _WINSOCKAPI_
#define closesocket(s) close(s)
#endif

/* Check if ws2tcpip.h is a recent version which provides getaddrinfo() */
#if defined(GetAddrInfo)
#include <wspiapi.h>
#define HAVE_GETADDRINFO
#endif

//////////////////////////////////////////////////
// external variable
//////////////////////////////////////////////////
#if __LINUX__
extern int errno;
#endif

#if __WINDOWS__
char Error[_ESIZE] = {0};
#endif

static int socket_errno(void) 
{
#ifdef _WINSOCKAPI_
    return(WSAGetLastError());
#else
    return(errno);
#endif
}

//////////////////////////////////////////////////////////////////////
game_socket_t WinTcp::socket_ex (void)
{
#if __WINDOWS__
    
	game_socket_t s = ::socket(PF_INET,SOCK_STREAM,IPPROTO_TCP);
#else
    game_socket_t s = ::socket(PF_INET,SOCK_STREAM,0);
#endif
    
	if ( s == GAME_SOCKET_BAD )
	{
#if __WINDOWS__
		int iErr = WSAGetLastError() ;
		switch ( iErr ) 
		{
		case WSANOTINITIALISED : 
			strncpy_s( Error,sizeof(Error), "WSANOTINITIALISED", _ESIZE ) ;
			break ;
		case WSAENETDOWN : 
			strncpy_s( Error,sizeof(Error), "WSAENETDOWN", _ESIZE ) ;
			break ;
		case WSAEAFNOSUPPORT : 
			strncpy_s( Error,sizeof(Error), "WSAEAFNOSUPPORT", _ESIZE ) ;
			break ;
		case WSAEINPROGRESS : 
			strncpy_s( Error,sizeof(Error), "WSAEINPROGRESS", _ESIZE ) ;
			break ;
		case WSAEMFILE : 
			strncpy_s( Error,sizeof(Error), "WSAEMFILE", _ESIZE ) ;
			break ;
		case WSAENOBUFS : 
			strncpy_s( Error,sizeof(Error), "WSAENOBUFS", _ESIZE ) ;
			break ;
		case WSAEPROTONOSUPPORT : 
			strncpy_s( Error,sizeof(Error), "WSAEPROTONOSUPPORT", _ESIZE ) ;
			break ;
		case WSAEPROTOTYPE : 
			strncpy_s( Error,sizeof(Error), "WSAEPROTOTYPE", _ESIZE ) ;
			break ;
		case WSAESOCKTNOSUPPORT : 
			strncpy_s( Error,sizeof(Error), "WSAESOCKTNOSUPPORT", _ESIZE ) ;
			break ;
		default : 
			{
			strncpy_s( Error,sizeof(Error), "UNKNOWN", _ESIZE ) ;
			break ;
			};
		};//end of switch
#endif
	}

	return s;
}

//////////////////////////////////////////////////////////////////////
static bool connect_ex ( game_socket_t s , const struct sockaddr * addr , int addrlen )
{
	if ( ::connect(s,(const struct sockaddr *)addr,addrlen) == GAME_SOCKET_BAD )
	{
#if __WINDOWS__
		int iErr = WSAGetLastError() ;
		switch ( iErr )
		{
            case WSANOTINITIALISED :
                strncpy_s( Error,sizeof(Error), "WSANOTINITIALISED", _ESIZE ) ;
                break ;
            case WSAENETDOWN :
                strncpy_s( Error,sizeof(Error), "WSAENETDOWN", _ESIZE ) ;
                break ;
            case WSAEADDRINUSE :
                strncpy_s( Error,sizeof(Error), "WSAEADDRINUSE", _ESIZE ) ;
                break ;
            case WSAEINTR :
                strncpy_s( Error,sizeof(Error), "WSAEINTR", _ESIZE ) ;
                break ;
            case WSAEINPROGRESS :
                strncpy_s( Error,sizeof(Error), "WSAEINPROGRESS", _ESIZE ) ;
                break ;
            case WSAEALREADY :
                strncpy_s( Error,sizeof(Error), "WSAEALREADY", _ESIZE ) ;
                break ;
            case WSAEADDRNOTAVAIL :
                strncpy_s( Error,sizeof(Error), "WSAEADDRNOTAVAIL", _ESIZE ) ;
                break ;
            case WSAEAFNOSUPPORT :
                strncpy_s( Error,sizeof(Error), "WSAEAFNOSUPPORT", _ESIZE ) ;
                break ;
            case WSAECONNREFUSED :
                strncpy_s( Error,sizeof(Error), "WSAECONNREFUSED", _ESIZE ) ;
                break ;
            case WSAEFAULT :
                strncpy_s( Error,sizeof(Error), "WSAEFAULT", _ESIZE ) ;
                break ;
            case WSAEINVAL :
                strncpy_s( Error,sizeof(Error), "WSAEINVAL", _ESIZE ) ;
                break ;
            case WSAEISCONN :
                strncpy_s( Error,sizeof(Error), "WSAEISCONN", _ESIZE ) ;
                break ;
            case WSAENETUNREACH :
                strncpy_s( Error,sizeof(Error), "WSAENETUNREACH", _ESIZE ) ;
                break ;
            case WSAENOBUFS :
                strncpy_s( Error,sizeof(Error), "WSAENOBUFS", _ESIZE ) ;
                break ;
            case WSAENOTSOCK : 
                strncpy_s( Error,sizeof(Error), "WSAENOTSOCK", _ESIZE ) ;
                break ;
            case WSAETIMEDOUT : 
                strncpy_s( Error,sizeof(Error), "WSAETIMEDOUT", _ESIZE ) ;
                break ;
            case WSAEWOULDBLOCK  : 
                strncpy_s( Error,sizeof(Error), "WSAEWOULDBLOCK", _ESIZE ) ;
                break ;
            default :
			{
                strncpy_s( Error,sizeof(Error), "UNKNOWN", _ESIZE ) ;
                break ;
			};
		};//end of switch
#endif
		return false ;
	}
    
	return true ;
}


bool WinTcp::connect_ex(game_socket_t s, const char* host, int port)
{
#ifdef _WIN32
	SOCKADDR_IN sockAddr;
	memset( &sockAddr , 0 , sizeof(sockAddr) );
	
	sockAddr.sin_family	       = AF_INET;
	//sockAddr.sin_addr.s_addr   = inet_addr( host );
	inet_pton(AF_INET, host, &sockAddr.sin_addr.s_addr);
	sockAddr.sin_port		   = htons(port);
	bool result = connect_ex(s,(const struct sockaddr *)&sockAddr , sizeof(sockAddr) );
    
	if (result)
		return true;
#else
	{
		struct hostent *h;
		struct sockaddr *addr = NULL;
		struct in_addr ia;
		struct sockaddr_in sockin;
        
		int i;
		memset (&sockin, 0, sizeof(sockin));
        
		h = gethostbyname (host);
        
		if (h == NULL)
		{
			return false;
		}
        
		for (i = 0; h->h_addr_list[i]; i++)
		{
			if (h->h_addrtype == AF_INET)
			{
				/* A records (IPv4) */
				if ((unsigned int) h->h_length > sizeof(ia))
				{
					return false;
				}
                
				memcpy (&ia, h->h_addr_list[i], h->h_length);
				sockin.sin_family = h->h_addrtype;
				sockin.sin_addr   = ia;
				sockin.sin_port   = (u_short)htons ((unsigned short)port);
                
				addr = (struct sockaddr *) &sockin;
                
			}
			else
			{
				continue;
			}
            
			bool result = connect_ex(s,(const struct sockaddr *)addr , sizeof(sockaddr) );
            
			if (result)
				return true;
		}
	}
#endif
    
	return false;
}


//////////////////////////////////////////////////////////////////////
bool WinTcp::getsockopt_ex ( game_socket_t s , int level , int optname , void * optval , int * optlen )
{
#if __WINDOWS__
	if ( getsockopt( s , level , optname , (char*)optval , optlen ) == GAME_SOCKET_BAD ) 
#else
	if ( getsockopt( s , level , optname , optval , (socklen_t*)optlen ) == GAME_SOCKET_BAD ) 
#endif
	{
#if __WINDOWS__
		int iErr = WSAGetLastError() ;
		switch ( iErr ) 
		{
		case WSANOTINITIALISED : 
			strncpy_s( Error,sizeof(Error), "WSANOTINITIALISED", _ESIZE ) ;
			break ;
		case WSAENETDOWN : 
			strncpy_s( Error,sizeof(Error), "WSAENETDOWN", _ESIZE ) ;
			break ;
		case WSAEFAULT : 
			strncpy_s( Error,sizeof(Error), "WSAEFAULT", _ESIZE ) ;
			break ;
		case WSAEINPROGRESS : 
			strncpy_s( Error,sizeof(Error), "WSAEINPROGRESS", _ESIZE ) ;
			break ;
		case WSAEINVAL : 
			strncpy_s( Error,sizeof(Error), "WSAEINVAL", _ESIZE ) ;
			break ;
		case WSAENOPROTOOPT : 
			strncpy_s( Error,sizeof(Error), "WSAENOPROTOOPT", _ESIZE ) ;
			break ;
		case WSAENOTSOCK : 
			strncpy_s( Error,sizeof(Error), "WSAENOTSOCK", _ESIZE ) ;
			break ;
		default : 
			{
			strncpy_s( Error,sizeof(Error), "UNKNOWN", _ESIZE ) ;
			break ;
			};
		};//end of switch
#endif
		return false ;
	}

	return true ;
}

//////////////////////////////////////////////////////////////////////
bool WinTcp::setsockopt_ex ( game_socket_t s , int level , int optname , const void * optval , int optlen )
{
	if ( setsockopt( s , level , optname , (char*)optval , optlen ) == GAME_SOCKET_BAD ) 
	{
#if __WINDOWS__
		int iErr = WSAGetLastError() ;
		switch ( iErr ) 
		{
		case WSANOTINITIALISED : 
			strncpy_s( Error,sizeof(Error), "WSANOTINITIALISED", _ESIZE ) ;
			break ;
		case WSAENETDOWN : 
			strncpy_s( Error,sizeof(Error), "WSAENETDOWN", _ESIZE ) ;
			break ;
		case WSAEFAULT : 
			strncpy_s( Error,sizeof(Error), "WSAEFAULT", _ESIZE ) ;
			break ;
		case WSAEINPROGRESS : 
			strncpy_s( Error,sizeof(Error), "WSAEINPROGRESS", _ESIZE ) ;
			break ;
		case WSAEINVAL : 
			strncpy_s( Error,sizeof(Error), "WSAEINVAL", _ESIZE ) ;
			break ;
		case WSAENETRESET : 
			strncpy_s( Error,sizeof(Error), "WSAENETRESET", _ESIZE ) ;
			break ;
		case WSAENOPROTOOPT : 
			strncpy_s( Error,sizeof(Error), "WSAENOPROTOOPT", _ESIZE ) ;
			break ;
		case WSAENOTCONN : 
			strncpy_s( Error,sizeof(Error), "WSAENOTCONN", _ESIZE ) ;
			break ;
		case WSAENOTSOCK : 
			strncpy_s( Error,sizeof(Error), "WSAENOTSOCK", _ESIZE ) ;
			break ;
		default :
			{
			strncpy_s( Error,sizeof(Error), "UNKNOWN", _ESIZE ) ;
			break ;
			};
		};//end of switch
#endif
		return false ;
	}

	return true ;
}

//////////////////////////////////////////////////////////////////////
int WinTcp::send_ex ( game_socket_t s , const void * buf , int len , int flags )
{
	int nSent = send(s,(const char *)buf,len,0);

	if ( nSent == GAME_SOCKET_BAD ) 
	{
		if (socket_errno() == EWOULDBLOCK)
		{
			nSent = 0;
		}

#if __WINDOWS__
		int iErr = WSAGetLastError() ;
		switch ( iErr ) 
		{
		case WSANOTINITIALISED : 
			strncpy_s( Error,sizeof(Error), "WSANOTINITIALISED", _ESIZE ) ;
			break ;
		case WSAENETDOWN : 
			strncpy_s( Error,sizeof(Error), "WSAENETDOWN", _ESIZE ) ;
			break ;
		case WSAEACCES : 
			strncpy_s( Error,sizeof(Error), "WSAEACCES", _ESIZE ) ;
			break ;
		case WSAEINTR : 
			strncpy_s( Error,sizeof(Error), "WSAEINTR", _ESIZE ) ;
			break ;
		case WSAEINPROGRESS : 
			strncpy_s( Error,sizeof(Error), "WSAEINPROGRESS", _ESIZE ) ;
			break ;
		case WSAEFAULT : 
			strncpy_s( Error,sizeof(Error), "WSAEFAULT", _ESIZE ) ;
			break ;
		case WSAENETRESET : 
			strncpy_s( Error,sizeof(Error), "WSAENETRESET", _ESIZE ) ;
			break ;
		case WSAENOBUFS : 
			strncpy_s( Error,sizeof(Error), "WSAENOBUFS", _ESIZE ) ;
			break ;
		case WSAENOTCONN : 
			strncpy_s( Error,sizeof(Error), "WSAENOTCONN", _ESIZE ) ;
			break ;
		case WSAENOTSOCK : 
			strncpy_s( Error,sizeof(Error), "WSAENOTSOCK", _ESIZE ) ;
			break ;
		case WSAEOPNOTSUPP : 
			strncpy_s( Error,sizeof(Error), "WSAEOPNOTSUPP", _ESIZE ) ;
			break ;
		case WSAESHUTDOWN : 
			strncpy_s( Error,sizeof(Error), "WSAESHUTDOWN", _ESIZE ) ;
			break ;
		case WSAEWOULDBLOCK : 
			strncpy_s( Error,sizeof(Error), "WSAEWOULDBLOCK", _ESIZE ) ;
			break ;
		case WSAEMSGSIZE : 
			strncpy_s( Error,sizeof(Error), "WSAEMSGSIZE", _ESIZE ) ;
			break ;
		case WSAEHOSTUNREACH : 
			strncpy_s( Error,sizeof(Error), "WSAEHOSTUNREACH", _ESIZE ) ;
			break ;
		case WSAEINVAL : 
			strncpy_s( Error,sizeof(Error), "WSAEINVAL", _ESIZE ) ;
			break ;
		case WSAECONNABORTED : 
			strncpy_s( Error,sizeof(Error), "WSAECONNABORTED", _ESIZE ) ;
			break ;
		case WSAECONNRESET : 
			strncpy_s( Error,sizeof(Error), "WSAECONNRESET", _ESIZE ) ;
			break ;
		case WSAETIMEDOUT : 
			strncpy_s( Error,sizeof(Error), "WSAETIMEDOUT", _ESIZE ) ;
			break ;
		default :
			{
			strncpy_s( Error,sizeof(Error), "UNKNOWN", _ESIZE ) ;
			break ;
			};
		};//end of switch
#endif
	}

	return nSent;
}

//////////////////////////////////////////////////////////////////////
int WinTcp::recv_ex ( game_socket_t s , void * buf , int len , int flags )
{
	int nrecv = recv(s,(char*)buf,len,flags);

	if ( nrecv == GAME_SOCKET_BAD ) 
	{
		if (socket_errno() == EWOULDBLOCK)
		{
			nrecv = 0;
		}

#if __WINDOWS__
		int iErr = WSAGetLastError() ;
		switch ( iErr ) 
		{
		case WSANOTINITIALISED : 
			strncpy_s( Error,sizeof(Error), "WSANOTINITIALISED", _ESIZE ) ;
			break ;
		case WSAENETDOWN : 
			strncpy_s( Error,sizeof(Error), "WSAENETDOWN", _ESIZE ) ;
			break ;
		case WSAEFAULT : 
			strncpy_s( Error,sizeof(Error), "WSAEFAULT", _ESIZE ) ;
			break ;
		case WSAENOTCONN : 
			strncpy_s( Error,sizeof(Error), "WSAENOTCONN", _ESIZE ) ;
			break ;
		case WSAEINTR : 
			strncpy_s( Error,sizeof(Error), "WSAEINTR", _ESIZE ) ;
			break ;
		case WSAEINPROGRESS : 
			strncpy_s( Error,sizeof(Error), "WSAEINPROGRESS", _ESIZE ) ;
			break ;
		case WSAENETRESET : 
			strncpy_s( Error,sizeof(Error), "WSAENETRESET", _ESIZE ) ;
			break ;
		case WSAENOTSOCK : 
			strncpy_s( Error,sizeof(Error), "WSAENOTSOCK", _ESIZE ) ;
			break ;
		case WSAEOPNOTSUPP : 
			strncpy_s( Error,sizeof(Error), "WSAEOPNOTSUPP", _ESIZE ) ;
			break ;
		case WSAESHUTDOWN : 
			strncpy_s( Error,sizeof(Error), "WSAESHUTDOWN", _ESIZE ) ;
			break ;
		case WSAEWOULDBLOCK : 
			strncpy_s( Error,sizeof(Error), "WSAEWOULDBLOCK", _ESIZE ) ;
			break ;
		case WSAEMSGSIZE : 
			strncpy_s( Error,sizeof(Error), "WSAEMSGSIZE", _ESIZE ) ;
			break ;
		case WSAEINVAL : 
			strncpy_s( Error,sizeof(Error), "WSAEINVAL", _ESIZE ) ;
			break ;
		case WSAECONNABORTED : 
			strncpy_s( Error,sizeof(Error), "WSAECONNABORTED", _ESIZE ) ;
			break ;
		case WSAETIMEDOUT : 
			strncpy_s( Error,sizeof(Error), "WSAETIMEDOUT", _ESIZE ) ;
			break ;
		case WSAECONNRESET : 
			strncpy_s( Error,sizeof(Error), "WSAECONNRESET", _ESIZE ) ;
			break ;
		default :
			{
			strncpy_s( Error,sizeof(Error), "UNKNOWN", _ESIZE ) ;
			break ;
			};
		};//end of switch
#endif
	} 

	return nrecv;
}

/////////////////////////////////////////////////////////////////////
bool WinTcp::closesocket_ex ( game_socket_t s )
{
	if (s == GAME_SOCKET_BAD)
		return true;

	if (closesocket(s) == GAME_SOCKET_BAD ) 
	{
#if __WINDOWS__
		int iErr = WSAGetLastError() ;
		switch ( iErr ) 
		{
		case WSANOTINITIALISED : 
			strncpy_s( Error,sizeof(Error), "WSANOTINITIALISED", _ESIZE ) ;
			break ;
		case WSAENETDOWN : 
			strncpy_s( Error,sizeof(Error), "WSAENETDOWN", _ESIZE ) ;
			break ;
		case WSAENOTSOCK : 
			strncpy_s( Error,sizeof(Error), "WSAENOTSOCK", _ESIZE ) ;
			break ;
		case WSAEINPROGRESS : 
			strncpy_s( Error,sizeof(Error), "WSAEINPROGRESS", _ESIZE ) ;
			break ;
		case WSAEINTR : 
			strncpy_s( Error,sizeof(Error), "WSAEINTR", _ESIZE ) ;
			break ;
		case WSAEWOULDBLOCK : 
			strncpy_s( Error,sizeof(Error), "WSAEWOULDBLOCK", _ESIZE ) ;
			break ;
		default : 
			{
			strncpy_s( Error,sizeof(Error), "UNKNOWN", _ESIZE ) ;
			break ;
			};
		};//end of switch
#endif
		return false ;
	}


	return true ;
}

//////////////////////////////////////////////////////////////////////
bool WinTcp::setsocketnonblocking_ex ( game_socket_t s , bool on )
{
	int status = -1;

#ifdef _WINSOCKAPI_
    {
        u_long one = 1;
        status = ioctlsocket(s, FIONBIO, &one) == SOCKET_ERROR ? -1 : 0;
    }
#else /* _WINSOCKAPI_ */
    if ((status = fcntl(s, F_GETFL, 0)) != -1) 
	{
        status |= O_NONBLOCK;
        status = fcntl(s, F_SETFL, status);
    }
#endif

	return status != -1;
}

//////////////////////////////////////////////////////////////////////
int WinTcp::select_ex ( int maxfdp1 , fd_set * readset , fd_set * writeset , fd_set * exceptset , struct timeval * timeout )
{
#ifdef _WINSOCKAPI_
    int result = select( maxfdp1 , readset , writeset ,exceptset, timeout );
#else
    int result = select( maxfdp1 , readset , writeset ,0, timeout );
#endif
	
	if( result == GAME_SOCKET_BAD )
	{
#if __WINDOWS__
		int iErr = WSAGetLastError() ;
		switch ( iErr ) 
		{
		case WSANOTINITIALISED : 
			strncpy_s( Error,sizeof(Error), "WSANOTINITIALISED", _ESIZE ) ;
			break ;
		case WSAEFAULT:
			strncpy_s( Error,sizeof(Error), "WSAEFAULT", _ESIZE ) ;
			break ;
		case WSAENETDOWN:
			strncpy_s( Error,sizeof(Error), "WSAENETDOWN", _ESIZE ) ;
			break ;
		case WSAEINVAL:
			strncpy_s( Error,sizeof(Error), "WSAEINVAL", _ESIZE ) ;
			break ;
		case WSAEINTR:
			strncpy_s( Error,sizeof(Error), "WSAEINTR", _ESIZE ) ;
			break ;
		case WSAEINPROGRESS:
			strncpy_s( Error,sizeof(Error), "WSAEINPROGRESS", _ESIZE ) ;
			break ;
		case WSAENOTSOCK:
			strncpy_s( Error,sizeof(Error), "WSAENOTSOCK", _ESIZE ) ;
			break ;
		default :
			{
				strncpy_s( Error,sizeof(Error), "UNKNOWN", _ESIZE ) ;
				break ;
			};
		};
#endif
	}//end if

	return result;
}
