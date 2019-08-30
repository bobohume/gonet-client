//Account.js
//账号一些方法
var BitStream = require("./BitStream");
var Packet = require("./Packet");
var gamepb= require("./pb/game");


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
		var packet1 = gamepb.message.C_W_CreatePlayerRequest.create();
		packet1.PacketHead = Packet.BuildPacketHead(AccountId, Packet.SERVICE_WORLDSERVER);
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
		PlayerId = packet.PlayerData[0].PlayerID;
		LoginGame();
	}else{//创建失败
	}
});

//账号登录反馈
Packet.RegisterPacket("A_C_LoginRequest", function(packet){
	console.log(packet);
	if (packet.Error == 2){
		var packet1 = gamepb.message.C_A_RegisterRequest.create();
		packet1.PacketHead = Packet.BuildPacketHead(0, Packet.SERVICE_ACCOUNTSERVER);
		packet1.AccountName = "test130003";
		packet1.SocketId = 0;
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
	var packet1 =  gamepb.message.C_A_LoginRequest.create();
	packet1.PacketHead = Packet.BuildPacketHead(0, Packet.SERVICE_ACCOUNTSERVER);
	packet1.AccountName = AccountName;
	packet1.BuildNo = BUILD_NO;
	packet1.SocketId = 0;
	Packet.SendPacket("C_A_LoginRequest", packet1);
};

//角色登录
function LoginGame(){
	var packet1 = gamepb.message.C_W_Game_LoginRequset.create();
		packet1.PacketHead = Packet.BuildPacketHead(AccountId, Packet.SERVICE_WORLDSERVER);
		packet1.PlayerId = PlayerId;
		Packet.SendPacket("C_W_Game_LoginRequset", packet1)
};