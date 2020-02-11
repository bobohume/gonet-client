#include "Packet.h"
#include "Base/MessageCode.h"
#include "Base/binary.h"
#include "WinTcp/TcpSocket.h"
#include "message.pb.h"
#include "client.pb.h"

using namespace message;
using namespace Base;

//tcp粘包特殊结束标志
/*int Packet::Encode(::google::protobuf::Message* packet, char buff[]) {
	U32 packetId = GetMessageCode(packet->GetDescriptor()->name().c_str());
	Base::LITTLE->PutUint32(buff, packetId);
	std::string str = packet->SerializeAsString();
	memcpy(&buff[4], str.c_str(), str.length());
	return str.length() + 4;
}*/

int Packet::Encode(::google::protobuf::Message* packet, char buff[]) {
	std::string str = packet->SerializeAsString();
	Base::LITTLE->PutUint32(buff, str.length() + 4);
	U32 packetId = GetMessageCode(packet->GetDescriptor()->name().c_str());
	Base::LITTLE->PutUint32(&buff[4], packetId);
	memcpy(&buff[8], str.c_str(), str.length());
	return str.length() + 8;
}

int Packet::Decode(char* buff)
{
	auto Id = Base::LITTLE->Uint32(buff);
	return Id;
}

void Packet::BuildPacketHead(Ipacket* packetHead, int64_t id, int destservertype/*= WORLDSERVER*/) {
	packetHead->set_id(id);
	packetHead->set_ckx(114);
	packetHead->set_stx(39);
	packetHead->set_destservertype(destservertype);
}

void Packet::RegisterPacket(::google::protobuf::Message* packet) {
	if (!packet) {
		return;
	}

	std::string Name = packet->GetDescriptor()->name();
	U32 packetId = GetMessageCode(Name.c_str());

	auto packetFunc = [packet]() {
		return packet->New();
	};

	Packet_CreateFactorStringMap[Name] = packetFunc;
	Packet_CreateFactorMap[packetId] = packetFunc;
}

::google::protobuf::Message* Packet::GetPakcet(int Id) {
	//std::lock_guard<std::mutex> lck(m_PacketLocker);
	auto itr = Packet_CreateFactorMap.find(Id);
	if (itr != Packet_CreateFactorMap.end()) {
		return itr->second();
	}

	return NULL;
}

void Packet::RegisterPacket(::google::protobuf::Message* packet, std::function<bool(::google::protobuf::Message*)> fun) {
	if (packet) {
		//std::lock_guard<std::mutex> lck(m_PacketLocker);
		//注册消息
		RegisterPacket(packet);
		Packet_Message_Map[packet->GetDescriptor()->name()] = fun;
	}
}

bool Packet::TriggerPacket(::google::protobuf::Message* packet) {
	if (packet) {
		//std::lock_guard<std::mutex> lck(m_PacketLocker);
		std::string Name = packet->GetDescriptor()->name();
		auto itr = Packet_Message_Map.find(Name);
		if (itr != Packet_Message_Map.end()) {
			return itr->second(packet);
		}
		else {
			//CCLOG("Packet [%s]未注册回调函数", Name.c_str());
		}
	}
	return false;
}
