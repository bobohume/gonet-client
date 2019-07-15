package main

import (
	"gonet/actor"
	"gonet/message"
	"github.com/golang/protobuf/proto"
	"fmt"
	"gonet/base"
	"gonet/server/world/game/lmath"
	"gonet/network"
)

type (
	EventProcess struct {
		actor.Actor

		Client *network.ClientSocket
		AccountId int64
		PlayerId int64
		AccountName string
		SimId int64
		Pos lmath.Point3F
		Rot lmath.Point3F
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
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("EventProcess PacketFunc", err)
		}
	}()

	packetId, data := message.Decode(buff)
	packet := message.GetPakcet(packetId)
	if packet == nil{
		return true
	}
	err := message.UnmarshalText(packet, data)
	if err == nil{
		bitstream := base.NewBitStream(make([]byte, 1024), 1024)
		if !message.GetMessagePacket(packet, bitstream) {
			return true
		}
		var io actor.CallIO
		io.Buff = bitstream.GetBuffer()
		io.SocketId = socketid
		this.Send(io)
		return true
	}

	return true
}

func (this *EventProcess) Init(num int) {
	this.Actor.Init(num)
	this.Pos = lmath.Point3F{1, 1, 1}
	this.RegisterCall("W_C_SelectPlayerResponse", func(packet *message.W_C_SelectPlayerResponse) {
		this.AccountId = packet.GetAccountId()
		nLen := len(packet.GetPlayerData())
		//fmt.Println(len(packet.PlayerData), this.AccountId, packet.PlayerData)
		if nLen == 0{
			packet1 := &message.C_W_CreatePlayerRequest{PacketHead:message.BuildPacketHead( this.AccountId, int(message.SERVICE_WORLDSERVER)),
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

	this.RegisterCall("A_C_LoginRequest", func(packet *message.A_C_LoginRequest) {
		if packet.GetError() == base.ACCOUNT_NOEXIST {
			packet1 := &message.C_A_RegisterRequest{PacketHead:message.BuildPacketHead( 0, int(message.SERVICE_ACCOUNTSERVER)),
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

	//map
	this.RegisterCall("W_C_LoginMap", func(packet *message.W_C_LoginMap) {
		this.SimId = packet.GetId()
		this.Pos = lmath.Point3F{packet.GetPos().GetX(),  packet.GetPos().GetY(), packet.GetPos().GetZ()}
		this.Rot = lmath.Point3F{0, 0, packet.GetRotation()}
		fmt.Println("login map")
	})

	this.RegisterCall("W_C_Move", func(packet *message.W_C_Move) {
		if this.SimId == packet.GetId(){
			this.Pos = lmath.Point3F{packet.GetPos().GetX(),  packet.GetPos().GetY(), packet.GetPos().GetZ()}
			this.Rot = lmath.Point3F{0, 0, packet.GetRotation()}
			fmt.Printf("self:[%d], Pos:[x:%f, y:%f, z:%f], Rot[%f]\n", packet.GetId(), packet.GetPos().GetX(),  packet.GetPos().GetY(), packet.GetPos().GetZ(), packet.GetRotation())
		}else{
			fmt.Printf("entity:[%d], Pos:[x:%f, y:%f, z:%f], Rot[%f]\n", packet.GetId(), packet.GetPos().GetX(),  packet.GetPos().GetY(), packet.GetPos().GetZ(), packet.GetRotation())
		}
		//this.Move(0, 100.0)
	})

	this.RegisterCall("W_C_ADD_SIMOBJ", func(packet *message.W_C_ADD_SIMOBJ) {
		if this.SimId == packet.GetId(){
			this.Pos = lmath.Point3F{packet.GetPos().GetX(),  packet.GetPos().GetY(), packet.GetPos().GetZ()}
			this.Rot = lmath.Point3F{0, 0, packet.GetRotation()}
			fmt.Printf("self:[%d], Pos:[x:%f, y:%f, z:%f], Rot[%f]\n", packet.GetId(), packet.GetPos().GetX(),  packet.GetPos().GetY(), packet.GetPos().GetZ(), packet.GetRotation())
		}else{
			fmt.Printf("entity:[%d], Pos:[x:%f, y:%f, z:%f], Rot[%f]\n", packet.GetId(), packet.GetPos().GetX(),  packet.GetPos().GetY(), packet.GetPos().GetZ(), packet.GetRotation())
		}
	})
	this.Actor.Start()
}

func (this *EventProcess)  LoginGame(){
	packet1 := &message.C_W_Game_LoginRequset{PacketHead:message.BuildPacketHead( this.AccountId, int(message.SERVICE_WORLDSERVER)),
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
	packet1 := &message.C_A_LoginRequest{PacketHead: message.BuildPacketHead(0, int(message.SERVICE_ACCOUNTSERVER)),
		AccountName: this.AccountName, BuildNo: base.BUILD_NO, SocketId: 0}
	this.SendPacket(packet1)
}

var(
	PACKET *EventProcess
)

func (this *EventProcess)  Move(yaw float32, time float32) {
	packet1 := &message.C_W_Move{PacketHead: message.BuildPacketHead(this.AccountId, int(message.SERVICE_WORLDSERVER)),
		Move: &message.C_W_Move_Move{Mode: 0, Normal:&message.C_W_Move_Move_Normal{Pos:&message.Point3F{X:this.Pos.X, Y:this.Pos.Y, Z:this.Pos.Z}, Yaw:yaw, Duration:time}}}
	this.SendPacket(packet1)
}