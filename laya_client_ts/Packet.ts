import { message } from "./pb/game";
import { Network } from "./Network";

var STX = 0X27;
var CKX = 0x72;

function IntToBytes(v : number):Uint8Array{
    var b = new Uint8Array(4);
    b[0] = v
    b[1] = v >> 8
    b[2] = v >> 16
    b[3] = v >> 24
    return b
}

//字节转换成整形
function BytesToInt(b:number) : number{
    return b[0] | b[1]<<8 | b[2]<<16 | b[3]<<24;
}


export namespace Packet{
    //创建包头
    export function BuildPacketHead(Id:number, DestServerType : number=0):any{
        var pHead =  message.Ipacket.create();
        pHead.Ckx = CKX;
        pHead.Stx = STX;
        pHead.Id = Id;
        pHead.DestServerType = DestServerType;
        return pHead
    }

    //包处理回调函数
    export function RegisterPacket(packetName : string, func : any) : void{
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
    export function HandlePacket(dat :any) : boolean{
        var id = BytesToInt(dat.slice(0,4));
        var buf = dat.slice(4);
        var packetcreator = m_packets[id];
        if (packetcreator != null){
            console.log(m_callbacks);
            var packet = packetcreator().decode(buf);
            m_callbacks[id](packet);
            return true;
        }
        return false;
    }


    //--发送包函数
    export function SendPacket(name : string, dat : any) : boolean{
        var id = CRC32.str(name.toLowerCase());
        var packetName = "message." + name;
        if(packetName != null)
        {
            var packetcreator = m_packets[id];
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
    }

    //解析包
    export function ReceivePacket(dat : any) : void{
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
                    m_pInBuffer = buff.slice(nCurSize)
                }
                else{
                    console.log("超出最大包限制，丢弃该包")
                }
            }
        }

        ParsePacekt();
    };

    //--protobuf-- 自动化解析
    export function RegisterPacketCreator(name : string, func :any) : void{
        var id = CRC32.str(name.toLowerCase());
        m_packets[id] = func;
    };
}

//var TCP_END  = "💞♡";
var TCP_END = new Uint8Array(7);
TCP_END.set( [240,159,146,158,226,153,161],0);
var TCP_END_LENGTH  = TCP_END.length;
var m_pInBuffer = new Uint8Array(1024);
var m_callbacks = new Array();
var m_packets = new Array();


//注册pb消息体
Packet.RegisterPacketCreator("W_C_SelectPlayerResponse", function(){
    return message.W_C_SelectPlayerResponse;
})
Packet.RegisterPacketCreator("W_C_CreatePlayerResponse", function(){
    return message.W_C_CreatePlayerResponse;
})
Packet.RegisterPacketCreator("W_C_ChatMessage", function(){
    return message.W_C_ChatMessage;
})
Packet.RegisterPacketCreator("A_C_LoginRequest", function(){
    return message.A_C_LoginRequest;
})
Packet.RegisterPacketCreator("A_C_RegisterResponse", function(){
    return message.A_C_RegisterResponse;
})
Packet.RegisterPacketCreator("C_A_LoginRequest", function(){
    return message.C_A_LoginRequest;
})
Packet.RegisterPacketCreator("C_W_CreatePlayerRequest", function(){
    return message.C_W_CreatePlayerRequest;
})
Packet.RegisterPacketCreator("C_A_RegisterRequest", function(){
    return message.C_A_RegisterRequest;
})
Packet.RegisterPacketCreator("C_W_Game_LoginRequset", function(){
    return message.C_W_Game_LoginRequset;
})