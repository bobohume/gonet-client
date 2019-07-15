
#ifndef __SOCKET_API_H__
#define __SOCKET_API_H__

// include files


#ifndef game_socket_typedef

/* socket typedef */
#if defined(WIN32) && !defined(__LWIP_OPT_H__)
#include <winsock2.h>
#include <ws2tcpip.h>
typedef SOCKET game_socket_t;
#define GAME_SOCKET_BAD INVALID_SOCKET
typedef int socklen_t;
#define __WINDOWS__	1
#else
#include <sys/select.h>
typedef int game_socket_t;
#define GAME_SOCKET_BAD -1
#endif

#define game_socket_typedef
#endif

//´íÎóÂë³¤¶È
#define _ESIZE 256//Users/firerainmac/Documents/qxy/code/samples/Lua/HelloLua/Resources/lua/main.lua

namespace WinTcp 
{
	game_socket_t socket_ex(void);

    bool	connect_ex(game_socket_t s, const char* host, int port);

	bool	getsockopt_ex (game_socket_t s, int level, int optname, void* optval, int* optlen);
	bool	setsockopt_ex (game_socket_t s, int level, int optname, const void* optval, int optlen);

	bool	setsocketnonblocking_ex(game_socket_t s, bool on);

	int		send_ex(game_socket_t s, const void* buf, int len, int flags);
	int		recv_ex(game_socket_t s, void* buf, int len, int flags);

	bool	closesocket_ex (game_socket_t s);
	int		select_ex (int maxfdp1, fd_set* readset, fd_set* writeset, fd_set* exceptset, struct timeval* timeout);
};

#endif
