//IPacket.js
var CRC32 = require('crc-32'); 
var Network = require("./network");
var BitStream = require("./BitStream");
var gamepb= require("./pb/game");

var STX = 0X27;
var CKX = 0x72;

Uint8Array.prototype.indexOfMulti = function(searchElements, fromIndex) {
    fromIndex = fromIndex || 0;

    var index = Array.prototype.indexOf.call(this, searchElements[0], fromIndex);
    if(searchElements.length === 1 || index === -1) {
        // Not found or no other elements to check
        return index;
    }

    for(var i = index, j = 0; j < searchElements.length && i < this.length; i++, j++) {
        if(this[i] !== searchElements[j]) {
            return this.indexOfMulti(searchElements, index + 1);
        }
    }

    return (i === index + searchElements.length) ? index : -1;
};

function IntToBytes(v){
    var b = new Uint8Array(4);
    b[0] = v
    b[1] = v >> 8
    b[2] = v >> 16
    b[3] = v >> 24
    return b
}

//字节转换成整形
function BytesToInt(b){
    return b[0] | b[1]<<8 | b[2]<<16 | b[3]<<24;
}


//创建包头
function BuildPacketHead(Id){
    var pHead =  new gamepb.message.Ipacket.create();
    pHead.Ckx = CKX;
    pHead.Stx = STX;
    pHead.Id = Id;
    return pHead
}

/*Uint8ArrayToString = function(fileData){
      var dataString = "";
      for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
      }

      return dataString
},

stringToUint8Array = function(str){
      var arr = [];
      for (var i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
      }

      var tmpUint8Array = new Uint8Array(arr);
      return tmpUint8Array
},*/

//包处理回调函数
function RegisterPacket(packetName, func){
    var name = packetName.toLowerCase();
    var id = CRC32.str(name);
    if(m_callbacks[id] != null)
    {
        console.log("消息[%s]重复注册!!!!!!!!!!!!!",packetName);
        return;
    }

    m_callbacks[id] = func;
}

//--处理包函数
function HandlePacket(dat){
    var id = BytesToInt(dat.slice(0,4));
    var buf = dat.slice(4);
    var packetcreator = m_packets[id];
    if (packetcreator != null){
        console.log(m_callbacks);
        var packet = packetcreator().decode(buf);
        if(m_callbacks[id] == null)
        {
            console.log("消息[", packet, "]没有注册!!!!!!!!!!!!!");
            return false;
        }
        m_callbacks[id](packet);
        return true;
    }
     return false;
}


//--发送包函数
function SendPacket(name, dat){
    var id = CRC32.str(name.toLowerCase());
    var packetName = "message." + name;
    if(packetName != null)
    {
        var crc =IntToBytes(id);
        var packetcreator = m_packets[id];
        if (packetcreator != null){
            var packet = packetcreator().encode(dat).finish();
            var head =IntToBytes(packet.length + TCP_HEAD_SIZE);
            var buff = new Uint8Array(TCP_HEAD_SIZE + crc.length + packet.length);
            buff.set(head, 0)
            buff.set(crc, TCP_HEAD_SIZE);
            buff.set(packet, TCP_HEAD_SIZE + crc.length);
            Network.Send(buff);
            return true;
        }
    }
    return false;
}

//tcp粘包特殊结束标志
/*function SendPacket(name, dat){
    var id = CRC32.str(name.toLowerCase());
    var packetName = "message." + name;
    if(packetName != null)
    {
        var crc =IntToBytes(id);
        var packetcreator = m_packets[id];
        if (packetcreator != null){
            var packet = packetcreator().encode(dat).finish();
            var buff = new Uint8Array(crc.length + packet.length + TCP_END_LENGTH);
            buff.set(crc, 0);
            buff.set(packet, crc.length);
            buff.set(TCP_END, crc.length+packet.length);
            //var buff = Uint8ArrayToString(IntToBytes(id)) + dat + TCP_END;
            Network.Send(buff);
            return true;
        }
    }
    return false;
}*/

//解析包
function ReceivePacket(dat){
    function seekToTcpEnd(dat){
        var nLen = dat.length;
        if (nLen < TCP_HEAD_SIZE){
            return 0;
        }

        var nSize = BytesToInt(dat.slice(0, 4))
        if (nSize + TCP_HEAD_SIZE <= nLen){
            return nSize + TCP_HEAD_SIZE;
        }
        return 0;
    }

    var buff = new Uint8Array(m_pInBuffer.length + dat.length);
    buff.set(m_pInBuffer, 0);
    buff.set(dat, m_pInBuffer.length);
    m_pInBuffer = new Uint8Array(0);
    var nCurSize = 0
    function ParsePacekt(){
        var nPacketSize = 0
        var buff1 = buff.slice(nCurSize)
        var nBufferSize = buff1.length;
        nPacketSize = seekToTcpEnd(buff1)
        //console.log(nPacketSize, nBufferSize, TCP_END_LENGTH)
        if (nPacketSize != 0){
            if(nBufferSize == nPacketSize){ //完整包
                //print(string.sub(buff1, TCP_HEAD_SIZE, nPacketSize))
                HandlePacket(buff1.slice(TCP_HEAD_SIZE, nPacketSize))
                nCurSize =  nCurSize + nPacketSize
            }
            else if (nBufferSize > nPacketSize){
                //print(string.sub(buff1, TCP_HEAD_SIZE, nPacketSize))
                HandlePacket(buff1.slice(TCP_HEAD_SIZE, nPacketSize))
                nCurSize =  nCurSize + nPacketSize
                ParsePacekt();
            }
            else if(nBufferSize < 128 * 1024){
                self.m_pInBuffer = buff.slice(nCurSize)
            }
            else{
                console.log("超出最大包限制，丢弃该包")
            }
        }
    }

    ParsePacekt();
};

//tcp粘包特殊结束标志
/*
function ReceivePacket(dat){
    function seekToTcpEnd(dat){
        var nCurLen = dat.indexOfMulti(TCP_END);
        if(nCurLen != -1){
            return nCurLen + TCP_END_LENGTH;
        }
        return 0;
    }

    var buff = new Uint8Array(m_pInBuffer.length + dat.length);
    buff.set(m_pInBuffer, 0);
    buff.set(dat, m_pInBuffer.length);
    m_pInBuffer = new Uint8Array(0);
    var nCurSize = 0
    function ParsePacekt(){
        var nPacketSize = 0
        var buff1 = buff.slice(nCurSize)
        var nBufferSize = buff1.length;
        nPacketSize = seekToTcpEnd(buff1)
        //console.log(nPacketSize, nBufferSize, TCP_END_LENGTH)
        if (nPacketSize != 0){
            if(nBufferSize == nPacketSize){ //完整包
                //print(string.sub(buff1, 0, nPacketSize - TCP_END_LENGTH))
                HandlePacket(buff1.slice(0, nPacketSize - TCP_END_LENGTH))
                nCurSize =  nCurSize + nPacketSize
            }
            else if (nBufferSize > nPacketSize){
                //print(string.sub(buff1, 0, nPacketSize - TCP_END_LENGTH))
                HandlePacket(buff1.slice(0, nPacketSize - TCP_END_LENGTH))
                nCurSize =  nCurSize + nPacketSize
                ParsePacekt();
            }
            else if(nBufferSize < 128 * 1024){
                self.m_pInBuffer = buff.slice(nCurSize)
            }
            else{
                console.log("超出最大包限制，丢弃该包")
            }
        }
    }

    ParsePacekt();
};*/

//tcp粘包特殊结束标志
/*var TCP_END = new Uint8Array(7);      //解决tpc粘包半包,特殊结束标志,pb采用Varint编码高位有特殊含义
TCP_END.set( [240,159,146,158,226,153,161],0);
var TCP_END_LENGTH  = TCP_END.length;*/
var TCP_HEAD_SIZE = 4;                  //解决tpc粘包半包,包头固定长度
var m_pInBuffer = new Uint8Array();
var m_callbacks = new Array();
var m_packets = new Array();

//--protobuf-- 自动化解析
function RegisterPacketCreator(name, func){
    var id = CRC32.str(name.toLowerCase());
    m_packets[id] = func;
};


//注册pb消息体
RegisterPacketCreator("W_C_SelectPlayerResponse", function(){
    return gamepb.message.W_C_SelectPlayerResponse;
})
RegisterPacketCreator("W_C_CreatePlayerResponse", function(){
    return gamepb.message.W_C_CreatePlayerResponse;
})
RegisterPacketCreator("W_C_ChatMessage", function(){
    return gamepb.message.W_C_ChatMessage;
})
RegisterPacketCreator("A_C_LoginRequest", function(){
    return gamepb.message.A_C_LoginRequest;
})
RegisterPacketCreator("A_C_RegisterResponse", function(){
    return gamepb.message.A_C_RegisterResponse;
})
RegisterPacketCreator("C_A_LoginRequest", function(){
    return gamepb.message.C_A_LoginRequest;
})
RegisterPacketCreator("C_W_CreatePlayerRequest", function(){
    return gamepb.message.C_W_CreatePlayerRequest;
})
RegisterPacketCreator("C_A_RegisterRequest", function(){
    return gamepb.message.C_A_RegisterRequest;
})
RegisterPacketCreator("C_W_Game_LoginRequset", function(){
    return gamepb.message.C_W_Game_LoginRequset;
})
RegisterPacketCreator("C_W_Game_LoginRequset", function(){
    return gamepb.message.C_W_Game_LoginRequset;
})

module.exports.RegisterPacket = RegisterPacket;
module.exports.BuildPacketHead = BuildPacketHead;
module.exports.SendPacket = SendPacket;
module.exports.ReceivePacket = ReceivePacket;
module.exports.RegisterPacketCreator = RegisterPacketCreator;
