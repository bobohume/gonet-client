import { message } from "./pb/game";
import { Packet } from "./Packet";

var EntityMap = {}

Packet.RegisterPacketCreator("W_C_ENTITY", function(){
    return message.W_C_ENTITY;
})

//实体更新
Packet.RegisterPacket("W_C_ENTITY",function(packet){
	var nLen = packet.EntityInfo.length;
	for (var i= 0; i < nLen; i++){
		var pEntity = EntityMap[packet.EntityInfo[i].Id]
		if(pEntity){
			if(packet.EntityInfo[i].Data){
				//destroy
				if(packet.EntityInfo[i].Data.RemoveFlag){
					Laya.stage.removeChild(pEntity.Sprite)
				}
				console.log("W_C_ENTITY_DATA", packet.EntityInfo[i].Data.Type)
			}
			if(packet.EntityInfo[i].Move){
				pEntity.Sprite.pos(packet.EntityInfo[i].Move.Pos.X, packet.EntityInfo[i].Move.Pos.Y)
				console.log("W_C_ENTITY_Move", packet.EntityInfo[i].Move.Pos, packet.EntityInfo[i].Move.Rotation)
			}
		}else{
			EntityMap[packet.EntityInfo[i].Id]={}
			EntityMap[packet.EntityInfo[i].Id].Data = packet.EntityInfo[i]
			var sprite = new Laya.Sprite()
			sprite.loadImage("res/aa.png")
			sprite.pos(packet.EntityInfo[i].Move.Pos.X, packet.EntityInfo[i].Move.Pos.Y)
			EntityMap[packet.EntityInfo[i].Id].Sprite = sprite
			Laya.stage.addChild(sprite)
		}
	}
});

export namespace Entity{
	var TEST = "1,5,1,1";
}