#include "Packet.h"
#include "Base/MessageCode.h"
#include "WinTcp/TcpSocket.h"
#include "message.pb.h"
#include "client.pb.h"

using namespace message;
using namespace Base;

int Packet::Encode(::google::protobuf::Message* packet, char buff[]) {
	U32 packetId = GetMessageCode(packet->GetDescriptor()->name().c_str());
	buff[0] = static_cast<unsigned char>(packetId);
	buff[1] = static_cast<unsigned char>(packetId >> 8);
	buff[2] = static_cast<unsigned char>(packetId >> 16);
	buff[3] = static_cast<unsigned char>(packetId >> 24);
	std::string str = packet->SerializeAsString();
	memcpy(&buff[4], str.c_str(), str.length());
	return str.length() + 4;
}

int Packet::Decode(char* buff)
{
	auto Id = int((unsigned char)buff[0]) | int((unsigned char)buff[1] << 8) | int((unsigned char)buff[2] << 16) | int((unsigned char)buff[3] << 24);
	return Id;
}

void Packet::BuildPacketHead(Ipacket* packetHead, int id, int destservertype/*= WORLDSERVER*/) {
	packetHead->set_id(id);
	packetHead->set_ckx(114);
	packetHead->set_stx(39);
	packetHead->set_destservertype(destservertype);
}

void Packet::RegisterPacket(::google::protobuf::Message* packet) {
	if (!packet) {
		return;
	}

	std::string Name = packet->GetDescriptor()->name().c_str();
	U32 packetId = GetMessageCode(Name.c_str());

	auto packetFunc = [packet]() {
		return packet->New();
	};

	Packet_CreateFactorStringMap[Name] = packetFunc;
	Packet_CreateFactorMap[packetId] = packetFunc;
}

::google::protobuf::Message* Packet::GetPakcet(int Id) {
	auto itr = Packet_CreateFactorMap.find(Id);
	if (itr != Packet_CreateFactorMap.end()) {
		return itr->second();
	}

	return NULL;
}

void Packet::RegisterPacket(::google::protobuf::Message* packet, std::function<bool(::google::protobuf::Message*)> fun) {
	if (packet) {
		//注册消息
		RegisterPacket(packet);
		Packet_Message_Map[packet->GetDescriptor()->name()] = fun;
	}
}

bool Packet::TriggerPacket(::google::protobuf::Message* packet) {
	if (packet) {
		std::string Name = packet->GetDescriptor()->name();
		auto itr = Packet_Message_Map.find(Name);
		if (itr != Packet_Message_Map.end()) {
			return itr->second(packet);
		}
		else {
			CCLOG("Packet [%s]未注册回调函数", Name.c_str());
		}
	}
	return false;
}