#ifndef __ISOCKET_H__
#define __ISOCKET_H__

#pragma once
#include "socket/Socket.h"
#include "Base/types.h"

using namespace Base;
namespace WinTcp {
#define BIT(x) (1 << (x))                       ///< Returns value with bit x set (2^x)

	enum
	{
		PT_NEG = BIT(0), //目前是UDP数据包
		PT_DROP = BIT(1), //目前是聊天消息包
		PT_SYS = BIT(2), //目前是一些连接建立过程需要的包
		PT_GUARANTEED = BIT(3), //目前是非UDP的游戏逻辑包
		PT_RESTART = BIT(4), //发送后重启连接
		PT_FIRST = BIT(5), //插队标志
		PT_TIMETRACE = BIT(6), //时间追踪
		PT_NO_CHECKMARK = BIT(7), //不写标记
		PT_PING = BIT(8), //写时间LOG
		PT_PONG = BIT(9), //写时间LOG
	};

	class ISocket		//Socket接口类
	{
	public:
		virtual ~ISocket() {}

		virtual bool Initialize() = 0;		//初始化
		virtual bool Start() = 0;		//开始服务
		virtual bool Stop() = 0;		//停止服务
		virtual bool Restart() = 0;		//重启服务
		virtual bool Send(const char *, int) = 0;		//发送数据
		virtual int	 Connect(const char* szServerAddr, int nServerPort) = 0;		//连接
		virtual bool Disconnect() = 0;		//断开连接

	protected:
		virtual void OnDisconnect() = 0;		//当断开连接
		virtual void ReceivePacket(const char *pBuf, int nBufferSize) = 0;		//当接收到数据
		virtual void HandlePacket(const char *pBuf, int nBufferSize) = 0;
		virtual void OnConnect(int nErrorCode) = 0;		//当连接完成

		virtual void OnClear() = 0;		//当重新复位后需要做一些变量清理操作

	public:
		ISocket() :m_nSocket()
		{
			m_nPort = 0; m_sIP[0] = 0;
			m_MaxSendBufferSize = 1024;
			m_MaxReceiveBufferSize = 1024;

			m_SendTimes = 0;


			m_ReceiveTimes = 0;
			m_nIdleTimeout = 0;			//整个连接空闲超时时间
		}

		virtual void SetMaxSendBufferSize(int MaxSendSize) { m_MaxSendBufferSize = MaxSendSize; }
		int GetMaxSendBufferSize() { return m_MaxSendBufferSize; }

		virtual void SetMaxReceiveBufferSize(int MaxReceiveSize) { m_MaxReceiveBufferSize = MaxReceiveSize; }
		int GetMaxReceiveBufferSize() { return m_MaxReceiveBufferSize; }


		//超时检测
		virtual int CheckTimeout(bool isRestartable) { return 0; }
		void SetIdleTimeout(int idleTimeout) { m_nIdleTimeout = idleTimeout; };
		int GetIdleTimeout() { return m_nIdleTimeout; };

		//数据保留
		virtual void pushSendList() {};
		virtual void popSendList() {};
#ifndef _SXZ_UNITTEST
	protected:
#endif
		WinTcp::Socket		m_nSocket;
		int					m_nPort;
		std::string			m_sIP;

		int					m_MaxReceiveBufferSize;
		int					m_MaxSendBufferSize;
		int					m_nIdleTimeout;				//整个连接空闲超时时间

	public:
		int					m_SendTimes;                //发送的次数
		int					m_ReceiveTimes;
	};
}
#endif