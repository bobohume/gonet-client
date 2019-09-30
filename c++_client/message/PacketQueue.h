#include <queue>
#include <mutex>
#include "message.pb.h"

namespace message
{
#pragma optimize("",off) 
	class PacketQueue
	{
	public:
		PacketQueue() {}
		~PacketQueue()
		{
			if (!m_queue.empty())
			{
				::google::protobuf::Message* pPakcet = m_queue.front();
				delete pPakcet;
			}

		}

		void PushPacket(::google::protobuf::Message* pPakcet)
		{
			std::lock_guard<std::mutex> lock(m_queueMutex);
			m_queue.push(pPakcet);
		}

		::google::protobuf::Message* PopPacket()
		{
			::google::protobuf::Message* pPakcet = NULL;
			std::lock_guard<std::mutex> lock(m_queueMutex);
			if (!m_queue.empty())
			{
				pPakcet = m_queue.front();
				m_queue.pop();
			}

			return pPakcet;
		}

	private:
		std::mutex m_queueMutex;
		std::queue<::google::protobuf::Message*> m_queue;
	};
#pragma optimize("",on) 
}