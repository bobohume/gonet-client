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

		virtual bool Initialize() = 0;		//��ʼ��
		virtual bool Start() = 0;		//��ʼ����
		virtual bool Stop() = 0;		//ֹͣ����
		virtual bool Restart() = 0;		//��������
		virtual bool Send(const char *, int) = 0;		//��������
		virtual int	 Connect(const char* szServerAddr, int nServerPort) = 0;		//����
		virtual bool Disconnect() = 0;		//�Ͽ�����

	protected:
		virtual void OnDisconnect() = 0;		//���Ͽ�����
		virtual void ReceivePacket(const char *pBuf, int nBufferSize) = 0;		//�����յ�����
		virtual void HandlePacket(const char *pBuf, int nBufferSize) = 0;
		virtual void OnConnect(int nErrorCode) = 0;		//���������

		virtual void OnClear() = 0;		//�����¸�λ����Ҫ��һЩ�����������

	public:
		ISocket() :m_nSocket()
		{
			m_nPort = 0; m_sIP[0] = 0;
			m_MaxSendBufferSize = 1024;
			m_MaxReceiveBufferSize = 1024;

			m_SendTimes = 0;


			m_ReceiveTimes = 0;
			m_nIdleTimeout = 0;			//�������ӿ��г�ʱʱ��
		}

		virtual void SetMaxSendBufferSize(int MaxSendSize) { m_MaxSendBufferSize = MaxSendSize; }
		int GetMaxSendBufferSize() { return m_MaxSendBufferSize; }

		virtual void SetMaxReceiveBufferSize(int MaxReceiveSize) { m_MaxReceiveBufferSize = MaxReceiveSize; }
		int GetMaxReceiveBufferSize() { return m_MaxReceiveBufferSize; }


		//��ʱ���
		virtual int CheckTimeout(bool isRestartable) { return 0; }
		void SetIdleTimeout(int idleTimeout) { m_nIdleTimeout = idleTimeout; };
		int GetIdleTimeout() { return m_nIdleTimeout; };

		//���ݱ���
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
		int					m_nIdleTimeout;				//�������ӿ��г�ʱʱ��

	public:
		int					m_SendTimes;                //���͵Ĵ���
		int					m_ReceiveTimes;
	};
}
#endif