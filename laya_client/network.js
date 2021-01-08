//Network.js
var BitStream = require("./BitStream");
var ws = require('ws')
var messagepb= require("./pb/message");
var clientpb= require("./pb/client");
var Packet = require("./Packet");
var dh = require('./dh');

var SERVER_VERSION = 102008000;
var MAX_PACKET_SIZE	= 32*1024;
var Socket = {};

(function(){
	console.log('Network initSocket...');
	//this.host = "ws://192.168.1.122:21001";;
	//this.testhost = "ws://echo.websocket.org"
	Socket = new ws("ws://192.168.215.107:31700/ws", {
		origin: 'http://localhost/'
	});

	Socket.binaryType = "arraybuffer";
	Socket.onopen = function (evt) {
		console.log('Network onopen...');
		{
			Socket.isInit = true;
		}
		LoginGate();
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

function LoginGate() {
    var packet1 =  clientpb.message.C_G_LoginResquest.create();
    packet1.PacketHead = Packet.BuildPacketHead(0);
    packet1.Key = dh.key.PubKey();
    console.log(dh.key.PubKey())
    Packet.SendPacket("C_G_LoginResquest", packet1);
}

module.exports.Send=Send;
module.exports.Close=Close;