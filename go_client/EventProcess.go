package main

import (
	"gonet/actor"
	"gonet/message"
	"github.com/golang/protobuf/proto"
	"fmt"
	"gonet/base"
	"gonet/network"
	"gonet/rpc"
)

type (
	EventProcess struct {
		actor.Actor

		Client *network.ClientSocket
		AccountId int64
		PlayerId int64
		AccountName string
		SimId int64
	}

	IEventProcess interface {
		actor.IActor
		LoginGame()
		LoginAccount()
		SendPacket(proto.Message)
	}
)

func SendPacket(packet proto.Message){
	buff := message.Encode(packet)
	buff = base.SetTcpEnd(buff)
	CLIENT.Send(buff)
}

func (this *EventProcess) SendPacket(packet proto.Message){
	buff := message.Encode(packet)
	buff = base.SetTcpEnd(buff)
	this.Client.Send(buff)
}

func (this *EventProcess) PacketFunc(socketid int, buff []byte) bool {
	packetId, data := message.Decode(buff)
	packet := message.GetPakcet(packetId)
	if packet == nil{
		return true
	}
	err := message.UnmarshalText(packet, data)
	if err == nil{
		var io actor.CallIO
		io.Buff = rpc.Marshal(message.GetMessageName(packet), packet)
		io.SocketId = socketid
		this.Send(io)
		return true
	}

	return true
}

func (this *EventProcess) Init(num int) {
	this.Actor.Init(num)
	this.RegisterCall("W_C_SelectPlayerResponse", func(packet *message.W_C_SelectPlayerResponse) {
		this.AccountId = packet.GetAccountId()
		nLen := len(packet.GetPlayerData())
		//fmt.Println(len(packet.PlayerData), this.AccountId, packet.PlayerData)
		if nLen == 0{
			packet1 := &message.C_W_CreatePlayerRequest{PacketHead:message.BuildPacketHead( this.AccountId, message.SERVICE_GATESERVER),
				PlayerName:"我是大坏蛋",
				Sex:int32(0),}
			this.SendPacket(packet1)
		}else{
			this.PlayerId = packet.GetPlayerData()[0].GetPlayerID()
			this.LoginGame()
		}
	})

	this.RegisterCall("W_C_CreatePlayerResponse", func(packet *message.W_C_CreatePlayerResponse) {
		if packet.GetError() == 0 {
			this.PlayerId = packet.GetPlayerId()
			this.LoginGame()
		}else{//创建失败

		}
	})

	this.RegisterCall("A_C_LoginResponse", func(packet *message.A_C_LoginResponse) {
		if packet.GetError() == base.ACCOUNT_NOEXIST {
			packet1 := &message.C_A_RegisterRequest{PacketHead:message.BuildPacketHead( 0, message.SERVICE_GATESERVER),
				AccountName: packet.AccountName, SocketId: 0}
			this.SendPacket(packet1)
		}
	})

	this.RegisterCall("A_C_RegisterResponse", func(packet *message.A_C_RegisterResponse) {
		//注册失败
		if packet.GetError() != 0 {
		}
	})

	this.RegisterCall("W_C_ChatMessage", func(packet *message.W_C_ChatMessage) {
		fmt.Println("收到【", packet.GetSenderName(), "】发送的消息[", packet.GetMessage()+"]")
	})

	this.Actor.Start()
}

func (this *EventProcess)  LoginGame(){
	packet1 := &message.C_W_Game_LoginRequset{PacketHead:message.BuildPacketHead( this.AccountId, message.SERVICE_GATESERVER),
		PlayerId:this.PlayerId,}
	this.SendPacket(packet1)
}

var(
	id int
)

func (this *EventProcess)  LoginAccount() {
	id++
	this.AccountName = fmt.Sprintf("test%d", id)
	//this.AccountName = fmt.Sprintf("test%d", base.RAND.RandI(0, 7000))
	packet1 := &message.C_A_LoginRequest{PacketHead: message.BuildPacketHead(0, message.SERVICE_GATESERVER),
		AccountName: this.AccountName, BuildNo: base.BUILD_NO, SocketId: 0}
	this.SendPacket(packet1)
}

var(
	PACKET *EventProcess
)