require ("packet")
Socket={
    m_Conn = {},
    m_nPort = 0,
    m_sIp = "",
    m_nState = 0,
    m_bShuttingDown = false,
    m_pInBuffer = ""
}

TCP_END = "💞♡"          --解决tpc粘包半包,特殊结束标志,pb采用Varint编码高位有特殊含义
TCP_HEAD_SIZE = 4        --解决tpc粘包半包,包头固定长度
TCP_END_LENGTH = #(TCP_END)
SERVICE_NONE          = 0
SERVICE_CLIENT        = 1
SERVICE_GATESERVER    = 2
SERVICE_ACCOUNTSERVER = 3
SERVICE_WORLDSERVER   = 4
SERVICE_MONITORSERVER = 5

function Socket:new(o, ip, port)
    o = o or {}
    setmetatable(o, self)
    self.__index = self
    self.m_sIp = ip
    self.m_nPort = port
    self.m_nState = 0
    self.m_pInBuffer = ""
    return o
end

function Socket:Start()
    return true
end

function Socket:Stop()
    self.m_bShuttingDown = true
    return true
end

function Socket:Restart()
	return true
end

function Socket:Connect()
	return true
end

function Socket:Disconnect()
	return true
end

function Socket:OnNetFail()
	self.Stop()
end

function Socket:Send(buf)
	return  0
end

function Socket:Receive()
end

function Socket:ReceivePacket(Id, dat)
	--找包结束
	seekToTcpEnd = function(dat)
	    nLen = #dat
	    if nLen < TCP_HEAD_SIZE then
	        return false, 0
        end

	    nSize = bytes_to_int(string.sub(dat, 0, 4))
		if nSize + TCP_HEAD_SIZE <= nLen then
        	return true, nSize+TCP_HEAD_SIZE
        end
		return false, 0
	end

	buff = self.m_pInBuffer .. dat
	self.m_pInBuffer = ""
	nCurSize = 0
::ParsePacekt:: do
	nPacketSize = 0
	buff1 = string.sub(buff, nCurSize+1)
	nBufferSize = #(buff1)
	bFindFlag = false
	bFindFlag, nPacketSize = seekToTcpEnd(buff1)
	--print(bFindFlag, nPacketSize, nBufferSize)
	if bFindFlag then
		if nBufferSize == nPacketSize then --完整包
		    --print(string.sub(buff1, TCP_HEAD_SIZE+1, nPacketSize))
			HandlePacket(string.sub(buff1, TCP_HEAD_SIZE+1, nPacketSize))
			nCurSize =  nCurSize + nPacketSize
		elseif (nBufferSize > nPacketSize) then
		    --print(string.sub(buff1, TCP_HEAD_SIZE+1, nPacketSize))
			HandlePacket(string.sub(buff1, TCP_HEAD_SIZE+1, nPacketSize))
			nCurSize =  nCurSize + nPacketSize
			goto ParsePacekt
		end
	elseif nBufferSize < 128 * 1024 then
		self.m_pInBuffer = string.sub(buff, nCurSize+1)
	else
		fmt.Println("超出最大包限制，丢弃该包")
	end
end
end

--[[tcp粘包特殊结束标志
function Socket:ReceivePacket(Id, dat)
	--找包结束
	seekToTcpEnd = function(dat)
		nLen, nEnd = string.find(dat, TCP_END)
		if nLen ~= nil then
			return true, nEnd
		end
		return false, 0
	end

	buff = self.m_pInBuffer .. dat
	self.m_pInBuffer = ""
	nCurSize = 0
::ParsePacekt:: do
	nPacketSize = 0
	buff1 = string.sub(buff, nCurSize+1)
	nBufferSize = #(buff1)
	bFindFlag = false
	bFindFlag, nPacketSize = seekToTcpEnd(buff1)
	--print(bFindFlag, nPacketSize, nBufferSize)
	if bFindFlag then
		if nBufferSize == nPacketSize then --完整包
		    --print(string.sub(buff1, 0, nPacketSize - TCP_END_LENGTH))
			HandlePacket(string.sub(buff1, 0, nPacketSize - TCP_END_LENGTH))
			nCurSize =  nCurSize + nPacketSize
		elseif (nBufferSize > nPacketSize) then
		    --print(string.sub(buff1, 0, nPacketSize - TCP_END_LENGTH))
			HandlePacket(string.sub(buff1, 0, nPacketSize - TCP_END_LENGTH))
			nCurSize =  nCurSize + nPacketSize
			goto ParsePacekt
		end
	elseif nBufferSize < 128 * 1024 then
		self.m_pInBuffer = string.sub(buff, nCurSize+1)
	else
		fmt.Println("超出最大包限制，丢弃该包")
	end
end
end
--]]
