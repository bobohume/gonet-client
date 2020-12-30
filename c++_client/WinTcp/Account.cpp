#include "Account.h"
#include "Base/bitStream.h"
#include "WinTcp/ClientSocket.h"
#include "Base/MemGuard.h"
#include "Base/md5.h"
#include "Base/MessageCode.h"
#include "message/client.pb.h"

using namespace WinTcp;
using namespace message;
#if defined(ANDROID)
#include<netinet/in.h>
#endif

WinTcp::Account::Account() : m_AccountId(0), m_PlayerId(0)
{
	REGISTER_PACKET(new G_C_LoginResponse(), std::bind(&Account::_G_C_LoginResponse, this, std::placeholders::_1));
	REGISTER_PACKET(new W_C_SelectPlayerResponse(), std::bind(&Account::_W_C_SelectPlayerResponse, this, std::placeholders::_1));
	REGISTER_PACKET(new W_C_CreatePlayerResponse(), std::bind(&Account::_W_C_CreatePlayerResponse, this, std::placeholders::_1));
	REGISTER_PACKET(new A_C_LoginResponse(), std::bind(&Account::_A_C_LoginResponse, this, std::placeholders::_1));
	REGISTER_PACKET(new A_C_RegisterResponse(), std::bind(&Account::_A_C_RegisterResponse, this, std::placeholders::_1));
}

WinTcp::Account* WinTcp::Account::Instance()
{
	static Account s_Instace;
	return &s_Instace;
}


bool Account::_G_C_LoginResponse(::google::protobuf::Message* _packet)
{
	auto packet = (G_C_LoginResponse*)(_packet);
	if (!packet) {
		return false;
	}

	m_dh.ExchangePubk(packet->key());
	LoginAccount();
}

bool Account::_W_C_SelectPlayerResponse(::google::protobuf::Message* _packet) {
	auto packet = (W_C_SelectPlayerResponse*)(_packet);
	if (!packet) {
		return false;
	}

	m_AccountId = packet->accountid();
	auto nLen = packet->playerdata_size();
	if (nLen == 0) {
		auto packet = new C_W_CreatePlayerRequest();
		auto packetHead = packet->mutable_packethead();
		Packet::BuildPacketHead(packetHead, m_AccountId);
		packet->set_playername("1111");
		packet->set_sex(0);
		CLIENT_TCP->Send(packet);
	}
	else {
		m_PlayerId = packet->playerdata(0).playerid();
		LoginGame();
	}

	return true;
}

bool Account::_W_C_CreatePlayerResponse(::google::protobuf::Message* _packet) {
	auto packet = (W_C_CreatePlayerResponse*)(_packet);
	if (!packet) {
		return false;
	}
	if (packet->error() == 0) {
		m_PlayerId = packet->playerid();
		LoginGame();
	}
	else {//´´½¨Ê§°Ü
	}

	return true;
}

bool Account::_A_C_LoginResponse(::google::protobuf::Message* _packet) {
	auto packet = (A_C_LoginResponse*)(_packet);
	if (!packet) {
		return false;
	}
	if (packet->error() == ACCOUNT_NOEXIST) {
		std::string accountName = "test112";
		std::string pwd = Base::md5(Base::ToSlat(accountName, "123456")).hexdigest();
		auto packet = new C_A_RegisterRequest();
		auto packetHead = packet->mutable_packethead();
		Packet::BuildPacketHead(packetHead, m_AccountId);
		packet->set_accountname(accountName);
		packet->set_password(pwd);
		CLIENT_TCP->Send(packet);;
	}

	return true;
}

bool Account::_A_C_RegisterResponse(::google::protobuf::Message* _packet) {
	auto packet = (A_C_RegisterResponse*)(_packet);
	if (!packet) {
		return false;
	}
	if (packet->error() != 0) {
		//×¢²áÊ§°Ü
	}
	return true;
};


bool Account::LoginGame()
{
	auto packet = new C_W_Game_LoginRequset();
	auto packetHead = packet->mutable_packethead();
	Packet::BuildPacketHead(packetHead, this->m_AccountId);
	packet->set_playerid(this->m_PlayerId);
	return ClientSocket::Instance()->Send(packet);
}

bool Account::LoginGate() {
	auto packet = new C_G_LoginResquest();
	auto packetHead = packet->mutable_packethead();
	Packet::BuildPacketHead(packetHead, 0);
	packet->set_key(m_dh.PubKey());
	return ClientSocket::Instance()->Send(packet);
}

bool Account::LoginAccount() {
	auto packet = new C_A_LoginRequest();
	auto packetHead = packet->mutable_packethead();
	Packet::BuildPacketHead(packetHead, 0);
	std::string accountName = "test112";
	std::string pwd = Base::md5(Base::ToSlat(accountName, "123456")).hexdigest();
	packet->set_accountname(accountName);
	packet->set_buildno(BUILD_NO);
	packet->set_password(pwd);
	packet->set_key(m_dh.ShareKey());
	//packet->set_crc(Base::ToCrc(accountName, pwd, BUILD_NO, m_dh.ShareKey()));
	return ClientSocket::Instance()->Send(packet);
}