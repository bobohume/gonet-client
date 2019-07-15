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

		virtual bool Initialize(const char* ip, int port, void *) = 0;		//初始化
		virtual bool Start() = 0;		//开始服务
		virtual bool Stop() = 0;		//停止服务
		virtual bool Restart() = 0;		//重启服务
		virtual bool Send(const char *, int, int ctrlType = PT_GUARANTEED) = 0;		//发送数据
		virtual bool Connect() = 0;		//连接
		virtual bool Disconnect(bool bForce) = 0;		//断开连接

	protected:
		virtual void OnDisconnect() = 0;		//当断开连接
		virtual void ReceivePacket(const char *pBuf, int nBufferSize) = 0;		//当接收到数据
		virtual void OnConnect(int nErrorCode) = 0;		//当连接完成

		virtual void OnClear() = 0;		//当重新复位后需要做一些变量清理操作

	public:
		//类状态
		enum SERVER_STATE_FLAGS
		{
			SSF_RESTARTING,
			SSF_DEAD,
			SSF_ACCEPTING,
			SSF_CONNECTING,
			SSF_CONNECTED,
			SSF_SHUTTING_DOWN,
			SSF_SHUT_DOWN,     //已经关闭
		};
	public:
		enum
		{
			CLIENT_CONNECT,
			SERVER_CONNECT
		};

	public:
		ISocket() :m_nSocket()
		{
			m_nState = SSF_DEAD; m_nPort = 0; m_sIP[0] = 0;
			m_MaxSendBufferSize = 1024; m_MaxReceiveBufferSize = 1024;
			m_nConnectType = CLIENT_CONNECT; m_ClientId = 0; m_Seq = 0;

			m_SendTimes = 0;
			m_PendSendTimes = 0;
			m_PendingSendBytes = 0;
			m_WaitingSendBytes = 0;

			m_TotalNum = 0;
			m_AcceptedNum = 0;
			m_ConnectedNum = 0;


			m_ReceiveTimes = 0;
			m_nLastTransTickCount = 0;    //上次运作的时间
			m_nConnectedTimeout = 0;		//整个连接的过程总时间
			m_nIdleTimeout = 0;			//整个连接空闲超时时间
		}

		SERVER_STATE_FLAGS GetState() { return m_nState; };

		virtual void SetMaxSendBufferSize(int MaxSendSize) { m_MaxSendBufferSize = MaxSendSize; }
		int GetMaxSendBufferSize() { return m_MaxSendBufferSize; }

		virtual void SetMaxReceiveBufferSize(int MaxReceiveSize) { m_MaxReceiveBufferSize = MaxReceiveSize; }
		int GetMaxReceiveBufferSize() { return m_MaxReceiveBufferSize; }

		//设置连接类型
		void SetConnectType(int Type) { m_nConnectType = Type; }
		int GetConnectType() { return m_nConnectType; }
		virtual void SetClientId(int Id) { m_ClientId = Id; }
		int GetClientId() { return m_ClientId; }
		bool HasClientId() { return m_ClientId != 0; }
		S64 GetSeq() { return m_Seq++; }


		//超时检测
		virtual int CheckTimeout(bool isRestartable) { return 0; }
		void SetIdleTimeout(int idleTimeout) { m_nIdleTimeout = idleTimeout; };
		int GetIdleTimeout() { return m_nIdleTimeout; };
		void SetConnectionTimeout(int ConnectionTimeout) { m_nConnectedTimeout = ConnectionTimeout; };
		int GetConnectionTimeout() { return m_nConnectedTimeout; };

		//数据保留
		virtual void pushSendList() {};
		virtual void popSendList() {};
#ifndef _SXZ_UNITTEST
	protected:
#endif
		SERVER_STATE_FLAGS	m_nState;
		WinTcp::Socket		m_nSocket;
		int					m_nPort;
		char				m_sIP[30];

		int					m_MaxReceiveBufferSize;
		int					m_MaxSendBufferSize;

		int					m_nLastTransTickCount;      //the time of the system run
		int					m_nConnectedTimeout;		//整个连接的过程总时间
		int					m_nIdleTimeout;				//整个连接空闲超时时间

	protected:
		char				m_nConnectType;				//服务类型
		int					m_ClientId;					//连接ID用来标识连接对象
		S64                 m_Seq;						//包序列ID

	public:
		int					m_SendTimes;                //发送的次数
		int					m_PendSendTimes;
		int					m_PendingSendBytes;
		int					m_WaitingSendBytes;

		int					m_TotalNum;                 //连接队列总数
		int					m_AcceptedNum;
		int					m_ConnectedNum;


		int					m_ReceiveTimes;
	};
}
#endif