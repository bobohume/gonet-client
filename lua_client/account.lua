require("packet")
require("dh")
require("md5")

local AccountId = 0
local PlayerId = 0
local AccountName = ""
local Password = ""

BUILD_NO = "1,5,1,1"
NONE_ERROR = 0
VERSION_ERROR = 1		    -- 版本不正确
ACCOUNT_NOEXIST = 2			--账号不存在

function ToSlat(accountName, pwd)
    return accountName .. "__" .. pwd
end

function LoginGate()
	local packet1 = {PacketHead=BuildPacketHead(0),
		Key=DH:PubKey()}
	SendPacket("C_G_LoginResquest",packet1)
end

function LoginAccount()
	local id = 10003
	AccountName = "test"..id
	Password = md5.sumhexa(ToSlat(AccountName, "123456"))
	print(Password)
	local packet1 = {PacketHead=BuildPacketHead(0),
		AccountName=AccountName, BuildNo=BUILD_NO, Password = Password, Key = DH:ShareKey()}
	SendPacket("C_A_LoginRequest",packet1)
end

function LoginGame()
	local packet1 = {PacketHead=BuildPacketHead(AccountId),
		PlayerId=PlayerId}
	SendPacket("C_W_Game_LoginRequset", packet1)
	print("登录游戏")
end

--注册消息
--RegisterPacket("C_A_LoginRequest", nil)
--RegisterPacket("C_A_RegisterRequest", nil)
--RegisterPacket("C_W_CreatePlayerRequest", nil)
--RegisterPacket("C_W_Game_LoginRequset", nil)
--dh验证
RegisterPacket("G_C_LoginResponse", function(packet)
	DH:ExchangePubk(packet.Key)
    print("dh验证", DH:ShareKey())
	LoginAccount()
end)

--登录回调
RegisterPacket("A_C_LoginResponse", function(packet)
    if packet.Error == ACCOUNT_NOEXIST then
        local packet1 = {PacketHead=BuildPacketHead(0),
                        AccountName=AccountName, Password = Password}
        SendPacket("C_A_RegisterRequest", packet1)
    end
    print("登录回调")
end)
--注册角色回调
RegisterPacket("W_C_CreatePlayerResponse", function(packet)
    if packet.Error == 0 then
        PlayerId = packet.PlayerId
    end
    print("注册角色回调")
end)
--注册账号
RegisterPacket("A_C_RegisterResponse", function(packet)
    --注册失败
    if packet.Error == 0 then
    end
    print("注册账号")
end)
--选角回调
RegisterPacket("W_C_SelectPlayerResponse", function(packet)
    AccountId = packet.AccountId
    if packet.PlayerData == nil or #(packet.PlayerData) == 0 then
        local packet1 ={PacketHead=BuildPacketHead(AccountId),
            PlayerName="我是大坏蛋",
            Sex=0}
        SendPacket("C_W_CreatePlayerRequest", packet1)
    else
        PlayerId = packet.PlayerData[1].PlayerID
        LoginGame()
    end
    print("选角回调")
end)
