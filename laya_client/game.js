var gamepb = require("./pb/game");
var Packet = require("./Packet");
var Entity = {}

Packet.RegisterPacketCreator("W_C_ENTITY", function(){
    return gamepb.message.W_C_ENTITY;
})

//实体更新
Packet.RegisterPacket("W_C_ENTITY",function(packet){
	var nLen = packet.EntityInfo.length;
	for (var i= 0; i < nLen; i++){
		var pEntity = Entity[packet.EntityInfo[i].Id]
		if(pEntity){
			if(packet.EntityInfo[i].Data){
				//destroy
				if(packet.EntityInfo[i].Data.RemoveFlag){
	
				}
				console.log("W_C_ENTITY_DATA", packet.EntityInfo[i].Data.Type)
			}
			if(packet.EntityInfo[i].Move){
				var pos = pEntity.Box.transform.position;
				pos.setValue(packet.EntityInfo[i].Move.Pos.X,packet.EntityInfo[i].Move.Pos.Y,0);
				pEntity.Box.transform.position = pos;
				console.log("W_C_ENTITY_Move", packet.EntityInfo[i].Move.Pos, packet.EntityInfo[i].Move.Rotation)
			}
		}else{
			Entity[packet.EntityInfo[i].Id]={}
			Entity[packet.EntityInfo[i].Id].Data = packet.EntityInfo[i]
			function addBox(){
				//创建盒型MeshSprite3D
				var box = Laya.stage.getChildAt(0).addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(0.75, 0.5, 0.5)));
				//设置材质
				var transform = box.transform;
				var pos = transform.position;
				pos.setValue(10, 0, 10);
				transform.position = pos;
				return box;
			}
			Entity[packet.EntityInfo[i].Id].Box = addBox()
		}
	}
	Laya.dire
});
