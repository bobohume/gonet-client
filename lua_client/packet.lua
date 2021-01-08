require("crc")
local pb = require "pb"
local protoc = require "protoc"
m_PacketCreateMap = {}
m_PacketMap = {}


-- 加载pb
assert(pb.loadfile "./pb/message.pb")
assert(pb.loadfile "./pb/game.pb")
assert(pb.loadfile "./pb/client.pb")

local unpack = unpack or table.unpack
--创建包头
function BuildPacketHead(id, destservertype)
    return{
         Stx = 0x27,
         DestServerType = destservertype,
         Ckx=0x72,
         Id = id
    }
end

--包处理回调函数
function RegisterPacket(packetName, func)
    local name = string.lower(packetName)
    local id = CRC32.hash(name)
	print(id, name)
    m_PacketCreateMap[id] = "message." .. packetName
    m_PacketMap[id] = func
end

--处理包函数
function HandlePacket(dat)
    local id = bytes_to_int(string.sub(dat, 0, 4))
    --id = bytes_to_int(string.sub(dat, 1, 4)) lua 坐标从1开始，0和1处理效果一样
    buff = string.sub(dat, 5)
    local packetName = m_PacketCreateMap[id]
    if packetName ~= nil then
        local packet = pb.decode(packetName, buff)
        m_PacketMap[id](packet)
    end
end

--发送包函数
function SendPacket(name, packet)
    local id = CRC32.hash(string.lower(name))
    local packetName = "message." .. name
    if packetName ~= nil then
        local bytes = pb.encode(packetName, packet)
        bytes = int_to_bytes(#bytes + 4) .. int_to_bytes(id) .. bytes
        CLIENTSOCKET:Send(bytes)
    end
end

--[[tcp粘包特殊结束标志
function SendPacket(name, packet)
    local id = CRC32.hash(string.lower(name))
    local packetName = "message." .. name
    if packetName ~= nil then
        local bytes = pb.encode(packetName, packet)
        bytes = int_to_bytes(id) .. bytes .. TCP_END
        CLIENTSOCKET:Send(bytes)
    end
end
--]]

function bytes_to_int(str,endian,signed) -- use length of string to determine 8,16,32,64 bits
    local t={str:byte(1,-1)}
    if endian=="big" then --reverse bytes
        local tt={}
        for k=1,#t do
            tt[#t-k+1]=t[k]
        end
        t=tt
    end
    local n=0
    for k=1,#t do
        n=n+t[k]*2^((k-1)*8)
    end
    if signed then
        n = (n > 2^(#t-1) -1) and (n - 2^#t) or n -- if last bit set, negative.
    end
    return n
end

function int_to_bytes(num,endian,signed)
    if num<0 and not signed then num=-num print"warning, dropping sign from number converting to unsigned" end
    local res={}
    local n = 4--math.ceil(select(2,math.frexp(num))/8) -- number of bytes to be used.
    if signed and num < 0 then
        num = num + 2^n
    end

    for k=n,1,-1 do -- 256 = 2^8 bits per char.
        local mul=2^(8*(k-1))
        res[k]=math.floor(num/mul)
        num=num-res[k]*mul
    end
    assert(num==0)
    if endian == "big" then
        local t={}
        for k=1,n do
            t[k]=res[n-k+1]
        end
        res=t
    end

    return string.char(unpack(res))
end

 -- lua table data
 local data = {
    PacketHead = {
         Stx = 0x27,
         DestServerType = 2,
         Ckx=0x72,
         Id = 0
    },
    Sender = 1000,
    SenderName = "test"
 }

 --local bytes = assert(pb.encode("message.W_C_ChatMessage", data))
 --print(pb.type("message.W_C_ChatMessage"))
 -- encode lua table data into binary format in lua string and return
 --local data2 = assert(pb.decode("message.W_C_ChatMessage", bytes))
 --print(require "serpent".block(data2))