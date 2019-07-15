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
		PT_NEG = BIT(0), //Ŀǰ��UDP���ݰ�
		PT_DROP = BIT(1), //Ŀǰ��������Ϣ��
		PT_SYS = BIT(2), //Ŀǰ��һЩ���ӽ���������Ҫ�İ�
		PT_GUARANTEED = BIT(3), //Ŀǰ�Ƿ�UDP����Ϸ�߼���
		PT_RESTART = BIT(4), //���ͺ���������
		PT_FIRST = BIT(5), //��ӱ�־
		PT_TIMETRACE = BIT(6), //ʱ��׷��
		PT_NO_CHECKMARK = BIT(7), //��д���
		PT_PING = BIT(8), //дʱ��LOG
		PT_PONG = BIT(9), //дʱ��LOG
	};

	class ISocket		//Socket�ӿ���
	{
	public:
		virtual ~ISocket() {}

		virtual bool Initialize(const char* ip, int port, void *) = 0;		//��ʼ��
		virtual bool Start() = 0;		//��ʼ����
		virtual bool Stop() = 0;		//ֹͣ����
		virtual bool Restart() = 0;		//��������
		virtual bool Send(const char *, int, int ctrlType = PT_GUARANTEED) = 0;		//��������
		virtual bool Connect() = 0;		//����
		virtual bool Disconnect(bool bForce) = 0;		//�Ͽ�����

	protected:
		virtual void OnDisconnect() = 0;		//���Ͽ�����
		virtual void ReceivePacket(const char *pBuf, int nBufferSize) = 0;		//�����յ�����
		virtual void OnConnect(int nErrorCode) = 0;		//���������

		virtual void OnClear() = 0;		//�����¸�λ����Ҫ��һЩ�����������

	public:
		//��״̬
		enum SERVER_STATE_FLAGS
		{
			SSF_RESTARTING,
			SSF_DEAD,
			SSF_ACCEPTING,
			SSF_CONNECTING,
			SSF_CONNECTED,
			SSF_SHUTTING_DOWN,
			SSF_SHUT_DOWN,     //�Ѿ��ر�
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
			m_nLastTransTickCount = 0;    //�ϴ�������ʱ��
			m_nConnectedTimeout = 0;		//�������ӵĹ�����ʱ��
			m_nIdleTimeout = 0;			//�������ӿ��г�ʱʱ��
		}

		SERVER_STATE_FLAGS GetState() { return m_nState; };

		virtual void SetMaxSendBufferSize(int MaxSendSize) { m_MaxSendBufferSize = MaxSendSize; }
		int GetMaxSendBufferSize() { return m_MaxSendBufferSize; }

		virtual void SetMaxReceiveBufferSize(int MaxReceiveSize) { m_MaxReceiveBufferSize = MaxReceiveSize; }
		int GetMaxReceiveBufferSize() { return m_MaxReceiveBufferSize; }

		//������������
		void SetConnectType(int Type) { m_nConnectType = Type; }
		int GetConnectType() { return m_nConnectType; }
		virtual void SetClientId(int Id) { m_ClientId = Id; }
		int GetClientId() { return m_ClientId; }
		bool HasClientId() { return m_ClientId != 0; }
		S64 GetSeq() { return m_Seq++; }


		//��ʱ���
		virtual int CheckTimeout(bool isRestartable) { return 0; }
		void SetIdleTimeout(int idleTimeout) { m_nIdleTimeout = idleTimeout; };
		int GetIdleTimeout() { return m_nIdleTimeout; };
		void SetConnectionTimeout(int ConnectionTimeout) { m_nConnectedTimeout = ConnectionTimeout; };
		int GetConnectionTimeout() { return m_nConnectedTimeout; };

		//���ݱ���
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
		int					m_nConnectedTimeout;		//�������ӵĹ�����ʱ��
		int					m_nIdleTimeout;				//�������ӿ��г�ʱʱ��

	protected:
		char				m_nConnectType;				//��������
		int					m_ClientId;					//����ID������ʶ���Ӷ���
		S64                 m_Seq;						//������ID

	public:
		int					m_SendTimes;                //���͵Ĵ���
		int					m_PendSendTimes;
		int					m_PendingSendBytes;
		int					m_WaitingSendBytes;

		int					m_TotalNum;                 //���Ӷ�������
		int					m_AcceptedNum;
		int					m_ConnectedNum;


		int					m_ReceiveTimes;
	};
}
#endif