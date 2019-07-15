#ifndef _BASE_BITSTREAM_H_
#define _BASE_BITSTREAM_H_

//Includes
#include "types.h"
#include <assert.h>

namespace Base
{
const int Bit8  = 8;
const int Bit16 = 16;
const int Bit32 = 32;
const int Bit64 = 64;
const int Bit128 = 128;
//-------------------------------------- Some caveats when using this class:
//                                        - Get/setPosition semantics are changed
//                                         to indicate bit position rather than
//                                         byte position.
//
class BitStream
{
protected:
    U8 *dataPtr;
    S32  bitNum;
    S32  flagNum;
    bool tailFlag;
    S32  bufSize;
    S32  bitsLimite;
    bool error;
    S32  maxReadBitNum;
    S32  maxWriteBitNum;
    char *stringBuffer;
    
    struct zipHead
    {
        int  srcSize;
        int  tagSize;
    };
    
    U8		zipflag;	//zipflag
    U8*		tmpBuf;		//zipBuffer
    size_t	zipSize;	//zipBufferSize
    
public:
    bool bindPacketStream(U8 *buffer,U32 writeSize);
    
    void setBuffer(void *bufPtr, S32 bufSize, S32 maxSize = -1);
    U8*  getBuffer() { return dataPtr; }
    U8*  getBytePtr();
    
    U32 getReadByteSize();
    
    S32  getCurPos() const;
    
    BitStream(void *bufPtr, S32 bufSize, S32 maxWriteSize = -1);
    virtual ~BitStream();
    void clear();
    
    //void compress();
    
    void setStringBuffer(char buffer[256]);
    
    void writeInt(S32 value, S32 bitCount);
    S32  readInt(S32 bitCount);
    
    void writeSignedInt(S32 value, S32 bitCount);
    S32  readSignedInt(S32 bitCount);
    
    // read and write floats... floats are 0 to 1 inclusive, signed floats are -1 to 1 inclusive
    
    F32  readFloat(S32 bitCount);
    F32  readSignedFloat(S32 bitCount);
    
    void writeFloat(F32 f, S32 bitCount);
    void writeSignedFloat(F32 f, S32 bitCount);
    
    virtual void writeBits(S32 bitCount, const void *bitPtr);
    virtual void readBits(S32 bitCount, void *bitPtr);
    virtual bool writeFlag(bool val);
    
    /*
     inline bool writeFlag(U32 val)
     {
     return writeFlag(val != 0);
     }*/
    
    
    inline bool writeFlag(void *val)
    {
        return writeFlag(val != 0);
    }
    
    virtual bool readFlag();
    
    void setBit(S32 bitCount, bool set);
    bool testBit(S32 bitCount);
    
    bool isFull() { return bitNum > bitsLimite; }
    bool isValid() { return !error; }
    
    bool _read (const U32 size,void* d);
    bool _write(const U32 size,const void* d);
    
    void readString(char *stringBuf,int maxSize);
    void writeString(const char *stringBuf, S32 maxLen=255);
    
    void readStringEx(char *stringBuf,int maxSize);
    void writeStringEx(const char *stringBuf, S32 maxLen);
    
    //void readCompress(char* outbuf, size_t& outlen);
    //void writeCompress(char* inbuf, int inlen);
    U32  getPosition() const;
    bool setPosition(const U32 in_newPosition);
    U32  getStreamSize();
};

//------------------------------------------------------------------------------
//-------------------------------------- INLINES
//
inline S32 BitStream::getCurPos() const
{
    return bitNum;
}

inline bool BitStream::readFlag()
{
    if((flagNum - ((flagNum>>3)<<3) ==0) && !tailFlag)
    {
        flagNum = bitNum;
        
        if(bitNum + 8 < maxReadBitNum)
            bitNum+=8; //Ray; ????8??????��flag
        else
            tailFlag = true;
    }
    
    if(flagNum + 1 > maxReadBitNum)
    {
        error = true;
        LIB_ASSERT(false, "Out of range read");
        return false;
    }
    
    S32 mask = 1 << (flagNum & 0x7);
    bool ret = (*(dataPtr + (flagNum >> 3)) & mask) != 0;
    flagNum++;
    return ret;
}
}
#endif //_BITSTREAM_H_