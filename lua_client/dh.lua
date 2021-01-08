require("bint")

Dh = {
	q = bint.new(0),--素数q
    a = bint.new(0),--q的原根a
    x = bint.new(0),--私钥
    Y1 = bint.new(0),--自己公钥
    Y2 = bint.new(0)--对方公钥
}

function Dh:new(q, a)
	o = {}
    setmetatable(o, self)
    self.__index = self
    self.q = bint.new(q)
    self.a = bint.new(a)
    self.x = bint.new(0)
    self.Y1 = bint.new(0)
    self.Y2 = bint.new(0)
	self:generatePrik()
	self:generatePubk()
    return o
end

function Dh:ExchangePubk(key)
	self.Y2 = bint.new(key)
end

function Dh:ShareKey()
	local c = bint.new(0)
	local d = bint.new(0)
    local k = self.Y2 ^ self.x
	bint.div(k, self.q, c, d)
	k = d
    return bint.mt.tostring(k)
end

function Dh:PubKey()
	return bint.mt.tostring(self.Y1)
end

function Dh:generatePrik()
	self.x = bint.new(math.floor(math.random(1, 10000000))) % self.q
	self.x = self.x + 1
end

function Dh:generatePubk()
    self.Y1 = self.a ^ self.x
	self.Y1 = self.Y1 % self.q
end

DH = Dh:new(97, 5)
print("dh key is :", DH:PubKey())