//Network.js
var BitStream = require("./BitStream");
var ws = require('ws')
var messagepb= require("./pb/message");
var clientpb= require("./pb/client");
var Packet = require("./Packet");

var SERVER_VERSION = 102008000;
var MAX_PACKET_SIZE	= 32*1024;
var Socket = {};

(function(){
	console.log('Network initSocket...');
	//this.host = "ws://192.168.1.122:21001";;
	//this.testhost = "ws://echo.websocket.org"
	Socket = new ws("ws://192.168.84.62:31700/ws", {
		origin: 'http://localhost/'
	});

	Socket.binaryType = "arraybuffer";
	Socket.onopen = function (evt) {
		console.log('Network onopen...');
		{
			Socket.isInit = true;
		}
		LoginAccount();
	};

	Socket.onmessage = function (evt) {
		var aa = new Uint8Array(evt.data);
		Packet.ReceivePacket(aa);
	};

	Socket.onerror = function (evt) {
		console.log('Network onerror...');
	};

	Socket.onclose = function (evt) {
		console.log('Network onclose...');
		this.isInit = false;
	};

	Socket.addEventListener("error", function (event) {
		console.log(event)
	})
})();

//发送消息
function Send(data){
	if (!Socket.isInit){
		console.log('Network is not inited...');
	}else if(Socket.readyState == ws.OPEN){
		Socket.send(data);
	}else{
		console.log('Network WebSocket readState:'+Parent.socket.readyState);
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
	var packet1 =  clientpb.message.C_A_LoginRequest.create();
	packet1.PacketHead = Packet.BuildPacketHead(0, Packet.SERVICE_ACCOUNTSERVER);
	packet1.AccountName = AccountName;
	packet1.BuildNo = "1,5,1,1";
	packet1.SocketId = 0;
	Packet.SendPacket("C_A_LoginRequest", packet1)
};

module.exports.Send=Send;
module.exports.Close=Close;