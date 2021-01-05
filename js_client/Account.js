//Account.js
//账号一些方法
var BitStream = require("./BitStream");
var Packet = require("./Packet");
var messagepb= require("./pb/message");
var clientpb = require("./pb/client");
var crypto = require('crypto');
var dh = require('./dh');

var BUILD_NO = "1,5,1,1";

(function () {

})();

var AccountId = 0;
var PlayerId = 0;

//选角
Packet.RegisterPacket("W_C_SelectPlayerResponse", function(packet){
	console.log(packet);
	AccountId =  packet.AccountId;
	var nLen = packet.PlayerData.length;
	if (nLen == 0){
		var packet1 = clientpb.message.C_W_CreatePlayerRequest.create();
		packet1.PacketHead = Packet.BuildPacketHead(AccountId);
		packet1.PlayerName = "我是js";
		packet1.Sex = 0;
		Packet.SendPacket("C_W_CreatePlayerRequest", packet1);
	}else{
		PlayerId = packet.PlayerData[0].PlayerID;
		LoginGame();
	}
});

//创建角色
Packet.RegisterPacket("W_C_CreatePlayerResponse", function(packet){
	console.log(packet);
	if (packet.Error == 0){
		PlayerId = packet.PlayerID;
		LoginGame();
	}else{//创建失败
	}
});

//dh验证
Packet.RegisterPacket("G_C_LoginResponse", function (packet) {
    console.log(packet);
    dh.key.ExchangePubk(packet.Key);
    console.log(dh.key.ShareKey())
    LoginAccount()
});

function ToSlat(accountName, pwd) {
    return accountName + "__" + pwd
}

function md5(content) {
    return crypto.createHash('md5').update(content).digest("hex")
}

//账号登录反馈
Packet.RegisterPacket("A_C_LoginResponse", function(packet){
	console.log(packet);
	if (packet.Error == 2) {
	    var AccountName = "test130003";
	    var packet1 = clientpb.message.C_A_RegisterRequest.create();
		packet1.PacketHead = Packet.BuildPacketHead(0);
		packet1.AccountName = AccountName;
		packet1.BuildNo = BUILD_NO;
		packet1.Password = md5(ToSlat(AccountName, "123456"));
		Packet.SendPacket("C_A_RegisterRequest", packet1);
	}
});

//账号注册反馈
Packet.RegisterPacket("A_C_RegisterResponse", function(packet){
	console.log(packet);
	//注册失败
	if (packet.Error != 0){
	}
});

//聊天消息
Packet.RegisterPacket("W_C_ChatMessage",function(packet){
	console.log(packet);
});

//账号登录
function LoginAccount(){
	var AccountName = "test130003";
	var packet1 =  clientpb.message.C_A_LoginRequest.create();
	packet1.PacketHead = Packet.BuildPacketHead(0);
	packet1.AccountName = AccountName;
	packet1.BuildNo = BUILD_NO;
	packet1.Password = md5(ToSlat(AccountName, "123456"));
	packet1.Key = dh.key.ShareKey();
	Packet.SendPacket("C_A_LoginRequest", packet1);
};

//角色登录
function LoginGame(){
	var packet1 = clientpb.message.C_W_Game_LoginRequset.create();
	packet1.PacketHead = Packet.BuildPacketHead(AccountId);
	packet1.PlayerId = PlayerId;
	Packet.SendPacket("C_W_Game_LoginRequset", packet1)
};
