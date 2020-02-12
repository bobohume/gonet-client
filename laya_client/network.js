//Network.js
var gamepb= require("./pb/game");
var Packet = require("./Packet");

var SERVER_VERSION = 102008000;
var MAX_PACKET_SIZE	= 32*1024;
var Socket = {};

(function(){
	console.log('Network initSocket...');
	//this.host = "ws://192.168.1.122:21001";;
	//this.testhost = "ws://echo.websocket.org"
	Socket = new Laya.Socket();
	Socket.endian = Laya.Byte.LITTLE_ENDIAN;
	Socket.connectByUrl("ws://localhost:31700/ws");//建立连接
	Socket.on(Laya.Event.OPEN, this, function(evt){
		console.log('Network onopen...');
		{
			this.isInit = true;
		}
		LoginAccount();
	});

	Socket.on(Laya.Event.MESSAGE, this, function(evt){
		var aa = new Uint8Array(evt);
		Packet.ReceivePacket(aa);
	});

	Socket.on(Laya.Event.ERROR, this, function(evt){
		console.log('Network onerror...');
	});

	Socket.on(Laya.Event.CLOSE, this, function(evt){
		console.log('Network onclose...');
		this.isInit = false;
	});
})();

//发送消息
function Send(data){
	if (!Socket.isInit){
		console.log('Network is not inited...');
	}else {
		Socket.send(data);
	}
}

function Close() {
	if (Socket){
		console.log("Network close...");
		Socket.close();
		Socket = null;
	}
}

function LoginAccount(){
	var AccountName = "test130003";
	var packet1 =  gamepb.message.C_A_LoginRequest.create();
	packet1.PacketHead = Packet.BuildPacketHead(0);
	packet1.AccountName = AccountName;
	packet1.BuildNo = "1,5,1,1";
	packet1.SocketId = 0;
	Packet.SendPacket("C_A_LoginRequest", packet1)
}

module.exports.Send=Send;
module.exports.Close=Close;
