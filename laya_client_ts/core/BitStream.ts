//BitStream.js
class BitStream{
    dataPtr : {}
    bitNum : number = 0
    flagNum : number = 0
    tailFlag : boolean = false
    bufSize : number = 0
    bitsLimite : number = 0
    error : boolean = false
    maxReadBitNum : number = 0
    maxWriteBitNum : number = 0
    constructor(buffPtr, buffSize, maxWriteSize=-1){
        this.setBuffer(buffPtr, buffSize, maxWriteSize);
    }

    bindPacketStream(buffer:{}, writeSize:number):boolean{
        if(!writeSize)
            return false;
    
        this.setBuffer(buffer, writeSize);
        this.setPosition(0);
        return true
    }

    setBuffer(bufPtr:{},size,maxSize : number =-1) : void{
        this.dataPtr = bufPtr;
        this.bitNum = 0;
        //bitNum = 8;			//第1个字节保留，用来标志是否压缩
        this.flagNum = 0;
        this.tailFlag = false;
        this.bufSize = size;
        this.maxReadBitNum = size << 3;
        if(maxSize < 0)
            maxSize = size;
        this.maxWriteBitNum = maxSize << 3;
        this.bitsLimite = this.bufSize<<3; //Ray:设定的阀值 /*(bufSize/2)<<3;*/
        this.error = false;
    }

    getPosition():number{
        return (this.bitNum + 7) >> 3;
    }

    setPosition(pos : number){
        if((pos == 0 || this.flagNum == 0))
            console.log("不正确的setPosition调用");
        if(pos && this.flagNum)
            return false;
    
        this.bitNum = pos << 3;
        this.flagNum = 0;
        return (true);
    }

    getBuffer():{} {
        return this.dataPtr; 
    }

    getBytePtr():{}{
        return this.dataPtr[this.getPosition()];
    }

    getReadByteSize():number{
        return (this.maxReadBitNum >> 3) - this.getPosition();
    }

    getCurPos():number{
        return this.bitNum;
    }

    clear() : void{
        this.dataPtr = {}
    }

    writeBits(bitCount : number, bitPtr : {}) : void{
        if(!bitCount)
            return;
    
        if(this.tailFlag)
        {
            this.error = true;
            console.log("Out of range write");
            return;
        }
    
        if( bitCount & 0x7 )
            bitCount = ( bitCount & ~0x7 ) + 8;
    
        if(bitCount + this.bitNum > this.maxWriteBitNum)
        {
            this.error = true;
            console.log("Out of range write");
            return;
        }
    
        var byteCount = (bitCount + 7) >> 3;
        /*var arrayPtr = new Array(byteCount);
        for(var i = 0; i < byteCount; ++i){
            arrayPtr[i] = (bitPtr >> (8 * i)) & 0x000000FF;
        }*/
    
        for(var i = 0; i < byteCount; ++i){
            this.dataPtr[(this.bitNum >> 3) + i] = bitPtr[i];
        }
    
        this.bitNum += bitCount;
    }

    readBits(bitCount : number, bitPtr:{}) : void{
        if(!bitCount)
            return;
    
        if(this.tailFlag)
        {
            this.error = true;
            console.log("Out of range read");
            return;
        }
    
        if( bitCount & 0x7 )
            bitCount = ( bitCount & ~0x7 ) + 8;
    
        if(bitCount + this.bitNum > this.maxReadBitNum)
        {
            this.error = true;
            console.log("Out of range read");
            return;
        }
    
        var byteCount = (bitCount + 7) >> 3;
        /*var arrayPtr = new Array(byteCount);*/
        for(var i = 0; i < byteCount; ++i){
            bitPtr[i]= this.dataPtr[(this.bitNum >> 3) + i] ;
        }
        
        this.bitNum += bitCount;
    }

    writeInt(value : number, bitCount : number) : void{
        var arrayPtr = new ArrayBuffer(4);
        for(var i = 0; i < 4; ++i){
            arrayPtr[i] = (value >> (8 * i)) & 0x000000FF;
        }
        this.writeBits(bitCount, arrayPtr);
    }

    readInt(bitCount : number) : number{
        var ret = 0;
        var arrayPtr = new ArrayBuffer(4);
        this.readBits(bitCount, arrayPtr);
        for(var i = 0; i < 4; ++i){
            ret |= ((arrayPtr[i] & 0x000000FF) << (8 * i));
        }
        if(bitCount == 32)
            return ret;
        else
            ret &= (1 << bitCount) - 1;
    
        return ret;
    }

    writeFloat(f:number, bitCount:number){
        this.writeInt((f * ((1 << bitCount) - 1)), bitCount);
    }
    
    readFloat(bitCount:number) : number{
        return this.readInt(bitCount) / ((1 << bitCount) - 1);
    }
    
    writeFlag(val:boolean) :boolean{
        if((this.flagNum - ((this.flagNum>>3)<<3) ==0) && !this.tailFlag)
        {
            this.flagNum = this.bitNum;
    
            if(this.bitNum + 8 < this.maxWriteBitNum)
                this.bitNum+=8; //Ray; 跳开8个用于写flag
            else
                this.tailFlag = true;
        }
    
        if(this.flagNum + 1 > this.maxWriteBitNum)
        {
            this.error = true;
            console.log("Out of range write");
            return false;
        }
    
        if(val)
            this.dataPtr[(this.flagNum >> 3)] |= (1 << (this.flagNum & 0x7));
        else
            this.dataPtr[(this.flagNum >> 3)]  &= ~(1 << (this.flagNum & 0x7));
        this.flagNum++;
        return (val);
    }
    
    readFlag():boolean{
        if((this.flagNum - ((this.flagNum>>3)<<3) ==0) && !this.tailFlag)
        {
            this.flagNum = this.bitNum;
    
            if(this.bitNum + 8 < this.maxReadBitNum)
                this.bitNum+=8; //Ray; 跳开8个用于写flag
            else
                this.tailFlag = true;
        }
    
        if(this.flagNum + 1 > this.maxReadBitNum)
        {
            this.error = true;
            console.log("Out of range read");
            return false;
        }
    
        var mask = 1 << (this.flagNum & 0x7);
        var ret = (this.dataPtr[(this.flagNum >> 3)] & mask) != 0;
        this.flagNum++;
        return ret; 
    }
    
    writeString(stringBuf : string, maxSize : number = 255){
        if(stringBuf == null){
            stringBuf = "";
        }
    
        var len = stringBuf.length;
        if(len >= maxSize)
            console.log("BitStream::writeString 越界");
        if(len>=maxSize)
            len = maxSize-1;
    
        if(this.writeFlag(len>0))
        {
            this.writeInt(len,8);
            var arrayPtr = new ArrayBuffer(len);
            for(var i = 0; i < stringBuf.length; ++i)
            {
                arrayPtr[i] = stringBuf.charCodeAt(i);
            }
            this.writeBits(len<<3,arrayPtr);
        }
    }
    
    readString(maxSize: number) :string{
        var stringBuf = "";
        if(this.readFlag())
        {
            var len = this.readInt(8);
            if(len >= maxSize)
                console.log("BitStream::readString 越界");
    
            var arrayPtr = new ArrayBuffer(len);
            if(len>=maxSize)
            {
                this.readBits(len<<3,arrayPtr);
            }
            else
            {
                this.readBits(len<<3,arrayPtr);
            }
            
            for(var i = 0; i < len; ++i)
            {
                arrayPtr[i] = String.fromCharCode(arrayPtr[i]);
                stringBuf += arrayPtr[i];
            }
        }
        return stringBuf;
    }  
}


var Bit8 = 8;
var Bit16 = 16;
var Bit32 = 32;
var Bit64 = 64;
var Bit128 = 128;



//----------发送中文要转码--------------//
//如下
//发送中文
//bitstream.writeString(encodeURI("我是"));
//解码中文
//var string3 = bitstream.readString(256);
//cc.log(decodeURI(string3));