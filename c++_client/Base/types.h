#ifndef _COMMON_TYPES_H_
#define _COMMON_TYPES_H_

#include <assert.h>
#ifndef _WIN32
#include <sys/time.h>
#else
#include <time.h>
#endif // !

#if defined(ANDROID)
#include <android/log.h>
#include <time.h>
#endif

#include <new>
#include <iostream>
#include <stdlib.h>
#include <string.h>

namespace Base{
#define POWER_BYTE_ALIGNMENT 4
#define MAX_NAME 32
//------------------------------------------------------------------------------
//-------------------------------------- Basic Types...

typedef signed char         S8;      ///< Compiler independent Signed Char
typedef unsigned char       U8;      ///< Compiler independent Unsigned Char

typedef signed short        S16;     ///< Compiler independent Signed 16-bit short
typedef unsigned short      U16;     ///< Compiler independent Unsigned 16-bit short

typedef signed int          S32;     ///< Compiler independent Signed 32-bit integer
typedef unsigned int        U32;     ///< Compiler independent Unsigned 32-bit integer

typedef signed long long    S64;     ///< Compiler independent Signed 64-bit integer
typedef unsigned long long  U64;     ///< Compiler independent Unsigned 64-bit integer

typedef float               F32;     ///< Compiler independent 32-bit float
typedef double              F64;     ///< Compiler independent 64-bit float

struct EmptyType {};             ///< "Null" type used by templates

//------------------------------------------------------------------------------
//------------------------------------- String Types

typedef char           UTF8;        ///< Compiler independent 8  bit Unicode encoded character
typedef unsigned short UTF16;       ///< Compiler independent 16 bit Unicode encoded character
typedef unsigned int   UTF32;       ///< Compiler independent 32 bit Unicode encoded character

typedef const char* StringTableEntry;

//------------------------------------------------------------------------------
//-------------------------------------- Type constants...
#define __EQUAL_CONST_F F32(0.000001)                             ///< Constant float epsilon used for F32 comparisons

static const F32 Float_One  = F32(1.0);                           ///< Constant float 1.0
static const F32 Float_Half = F32(0.5);                           ///< Constant float 0.5
static const F32 Float_Zero = F32(0.0);                           ///< Constant float 0.0
static const F32 Float_Pi   = F32(3.14159265358979323846);        ///< Constant float PI
static const F32 Float_2Pi  = F32(2.0 * 3.14159265358979323846);  ///< Constant float 2*PI
static const F32 Float_Fly_Speed = 10.0f;

static const S8  S8_MIN  = S8(-128);                              ///< Constant Min Limit S8
static const S8  S8_MAX  = S8(127);                               ///< Constant Max Limit S8
static const U8  U8_MAX  = U8(255);                               ///< Constant Max Limit U8

static const S16 S16_MIN = S16(-32768);                           ///< Constant Min Limit S16
static const S16 S16_MAX = S16(32767);                            ///< Constant Max Limit S16
static const U16 U16_MAX = U16(65535);                            ///< Constant Max Limit U16

static const S32 S32_MIN = S32(-2147483647 - 1);                  ///< Constant Min Limit S32
static const S32 S32_MAX = S32(2147483647);                       ///< Constant Max Limit S32
static const U32 U32_MAX = U32(0xffffffff);                       ///< Constant Max Limit U32

static const F32 F32_MIN = F32(1.175494351e-38F);                 ///< Constant Min Limit F32
static const F32 F32_MAX = F32(3.402823466e+38F);                 ///< Constant Max Limit F32

static const F32 GAMEPLAY_PERCENT_SCALE = 10000.0f;
static const F32 GAMEPLAY_MAX_SCALE = 10.0f;


const unsigned int PACKET_MIN_SIZE			= 128;
const unsigned int PACKET_MAX_SIZE			= 2048;
const unsigned int COMMON_STRING_LENGTH		= 32;
const unsigned int NETWORK_PROTOCOL_VERSION	= 1;
const unsigned int MD5_STRING_LENGTH		= 16;
const unsigned int MAX_ACTOR_COUNT			= 3;
const unsigned int MAX_DROP_TIME			= 30000;
const unsigned int MAX_CREATE_ACTOR_COUNT	= 3;
const unsigned int URL_STRING_LENGTH		= 1024;
const unsigned int MAX_PASS9_ERRMSG_LEN		= 128;
const unsigned int MAX_YY_REQUEST_CODE_LEN	= 1024;
const unsigned int MAX_PASS9_USERNAME_LEN	= 50;
const unsigned int MAX_PASS9_TICKET_LEN		= 32;
const unsigned int MAX_OPENID_LEN			= 128;
const unsigned int ACCOUNT_NAME_LENGTH		= 50;
const unsigned int PASSWORD_LENGTH			= 32;
const unsigned int MAX_NETBAR_DRAW			= 10;
const unsigned int MAX_BADWORDS_LENGTH		= 250;
const unsigned int MAX_PACKET_RECEIEVE_SIZE = 10 * 1024 * 1024;//最大接收缓冲池
#define 	SimTime	 U32

static const int MaxPacketBuffSize = PACKET_MAX_SIZE + 128;

//--------------------------------------
// Enable Asserts in all debug builds -- AFTER compiler types include.
#if defined(_DEBUG)
#define POWER_ENABLE_ASSERTS
#endif


#ifdef NDEBUG
#define	ASSERT(e, info)	((void)0)
#else /* !__DARWIN_UNIX03 */
#define ASSERT(e, info) ((void)0)
#endif /* __DARWIN_UNIX03 */


#if defined(ANDROID)
#define MYPRO  "quick_md"
#define LOGV(...) __android_log_print(ANDROID_LOG_VERBOSE, MYPRO, __VA_ARGS__)
#define LOGD(...) __android_log_print(ANDROID_LOG_DEBUG , MYPRO, __VA_ARGS__)
#define LOGI(...) __android_log_print(ANDROID_LOG_INFO  , MYPRO, __VA_ARGS__)
#define LOGW(...) __android_log_print(ANDROID_LOG_WARN  , MYPRO, __VA_ARGS__)
#define LOGE(...) __android_log_print(ANDROID_LOG_ERROR  , MYPRO, __VA_ARGS__)
#endif
//-------------------------------------- Some all-around useful inlines and globals
//

/// Returns power of 2 number which is as small as possible but
/// still greater than or equal to input number.  Note: returns 0
/// for an input of 0 even though that is not a power of 2.
/// @param num Any U32
inline U32 getNextPow2(U32 num)
{
   // Taken from: http://graphics.stanford.edu/~seander/bithacks.html

   num--;
   num |= num >> 1;
   num |= num >> 2;
   num |= num >> 4;
   num |= num >> 8;
   num |= num >> 16;
   num++;

   return num;
}

/// Return integer log2 of input number (rounding down).  So, e.g.,
/// getBinLog2(7) == 2 whereas getBinLog2(8) == 3.
/// @param num Any U32
inline U32 getBinLog2(U32 num)
{
   // Taken from: http://graphics.stanford.edu/~seander/bithacks.html

   static const U32 MultiplyDeBruijnBitPosition[32] = 
   {
      0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 
      31, 27, 13, 23, 21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9
   };

   num |= num >> 1; // first round down to power of 2 
   num |= num >> 2;
   num |= num >> 4;
   num |= num >> 8;
   num |= num >> 16;
   num = (num >> 1) + 1;

   return MultiplyDeBruijnBitPosition[(num * 0x077CB531UL) >> 27];
}

///   Determines if the given U32 is some 2^n
/// @param num Any U32
///   @returns true if in_num is a power of two, otherwise false
inline bool isPow2(const U32 num)
{
   return (num & (num - 1)) == 0;
}

///   Convert the byte ordering on the U16 to and from big/little endian format.
///   @param in_swap Any U16
///   @returns swaped U16.
inline U16 endianSwap(const U16 in_swap)
{
   return U16(((in_swap >> 8) & 0x00ff) |
              ((in_swap << 8) & 0xff00));
}

///   Convert the byte ordering on the U32 to and from big/little endian format.
///   @param in_swap Any U32
///   @returns swaped U32.
inline U32 endianSwap(const U32 in_swap)
{
   return U32(((in_swap >> 24) & 0x000000ff) |
              ((in_swap >>  8) & 0x0000ff00) |
              ((in_swap <<  8) & 0x00ff0000) |
              ((in_swap << 24) & 0xff000000));
}

//----------------Many versions of min and max-------------
//---not using template functions because MS VC++ chokes---

/// Returns the lesser of the two parameters: a & b.
inline U32 getMin(U32 a, U32 b)
{
   return a>b ? b : a;
}

/// Returns the lesser of the two parameters: a & b.
inline U16 getMin(U16 a, U16 b)
{
   return a>b ? b : a;
}

/// Returns the lesser of the two parameters: a & b.
inline U8 getMin(U8 a, U8 b)
{
   return a>b ? b : a;
}

/// Returns the lesser of the two parameters: a & b.
inline S32 getMin(S32 a, S32 b)
{
   return a>b ? b : a;
}

/// Returns the lesser of the two parameters: a & b.
inline S16 getMin(S16 a, S16 b)
{
   return a>b ? b : a;
}

/// Returns the lesser of the two parameters: a & b.
inline S8 getMin(S8 a, S8 b)
{
   return a>b ? b : a;
}

/// Returns the lesser of the two parameters: a & b.
inline float getMin(float a, float b)
{
   return a>b ? b : a;
}

/// Returns the lesser of the two parameters: a & b.
inline double getMin(double a, double b)
{
   return a>b ? b : a;
}

/// Returns the greater of the two parameters: a & b.
inline U32 getMax(U32 a, U32 b)
{
   return a>b ? a : b;
}

/// Returns the greater of the two parameters: a & b.
inline U16 getMax(U16 a, U16 b)
{
   return a>b ? a : b;
}

/// Returns the greater of the two parameters: a & b.
inline U8 getMax(U8 a, U8 b)
{
   return a>b ? a : b;
}

/// Returns the greater of the two parameters: a & b.
inline S32 getMax(S32 a, S32 b)
{
   return a>b ? a : b;
}

/// Returns the greater of the two parameters: a & b.
inline S16 getMax(S16 a, S16 b)
{
   return a>b ? a : b;
}

/// Returns the greater of the two parameters: a & b.
inline S8 getMax(S8 a, S8 b)
{
   return a>b ? a : b;
}

/// Returns the greater of the two parameters: a & b.
inline float getMax(float a, float b)
{
   return a>b ? a : b;
}

/// Returns the greater of the two parameters: a & b.
inline double getMax(double a, double b)
{
   return a>b ? a : b;
}


inline F32 mClampF(F32 val, F32 low, F32 high)
{
    return (F32) getMax(getMin(val, high), low);
}

inline S32 mClamp(S32 val, S32 low, S32 high)
{
    return getMax(getMin(val, high), low);
}

inline S32 mAbs(const S32 val)
{
    return abs(val);
}

typedef unsigned int  dsize_t;
inline dsize_t dStrlen(const char *str)
{
	return (dsize_t)strlen(str);
}

inline void *dMemmove(void * dst, const void * src, size_t count)
{
    void * ret = dst;
    
    if (dst <= src || (char *)dst >= ((char *)src + count)) {
        /*
         * Non-Overlapping Buffers
         * copy from lower addresses to higher addresses
         */
        while (count--) {
            *(char *)dst = *(char *)src;
            dst = (char *)dst + 1;
            src = (char *)src + 1;
        }
    }
    else {
        /*
         * Overlapping Buffers
         * copy from higher addresses to lower addresses
         */
        dst = (char *)dst + count - 1;
        src = (char *)src + count - 1;
        
        while (count--) {
            *(char *)dst = *(char *)src;
            dst = (char *)dst - 1;
            src = (char *)src - 1;
        }
    }
    
    return(ret);
}
//-------------------------------------- Use this instead of Win32 FOURCC()
//                                        macro...
//
#define makeFourCCTag(ch0, ch1, ch2, ch3)    \
   (((U32(ch0) & 0xFF) << 0)  |             \
    ((U32(ch1) & 0xFF) << 8)  |             \
    ((U32(ch2) & 0xFF) << 16) |             \
    ((U32(ch3) & 0xFF) << 24) )

#define makeFourCCString(ch0, ch1, ch2, ch3) { ch0, ch1, ch2, ch3 }

#ifdef BIT
#undef BIT
#endif

#define BIT(x) (1 << (x))                       ///< Returns value with bit x set (2^x)
#define BIT64(x) (((U64)1) << (x))

#define SAFE_DELETE(a) if( (a) != NULL ) delete (a); (a) = NULL;

//#define STDCALL __stdcall

#ifndef Offset
/// Offset macro:
/// Calculates the location in memory of a given member x of class cls from the
/// start of the class.  Need several definitions to account for various
/// flavors of GCC.

// define all the variants of Offset that we might use
#define _Offset_Normal(x, cls) ((size_t)((const char *)&(((cls *)1)->x)-(const char *)1))
//#define _Offset_Variant_1(x, cls) ((int)(&((cls *)1)->x) - 1)
//#define _Offset_Variant_2(x, cls) offsetof(cls, x) // also requires #include <stddef.h>

// now, for each compiler type, define the Offset macros that should be used.
// The Engine code usually uses the Offset macro, but OffsetNonConst is needed
// when a variable is used in the indexing of the member field (see
// TSShapeConstructor::initPersistFields for an example)

#define __Offset(x, cls) _Offset_Normal(x, cls)
#define __OffsetNonConst(x, cls) _Offset_Normal(x, cls)

#endif

template <class T>
inline T* constructInPlace(T* p)
{
	return new(p) T();
}

template <class T>
inline T* constructInPlace(T* p, const T* copy)
{
	return new(p) T(*copy);
}

template <class T>
inline void destructInPlace(T* p)
{
	p->~T();
}

#define dRealloc realloc
#define dMalloc  malloc
#define dFree    free
#define dMemset  memset
#define dMemcpy  memcpy
#define dStrstr  strstr

#ifdef DEBUG
#include <stdio.h>
#include <assert.h>

#define LIB_ASSERT(x,y) \
	{ if (((bool)(x))==(bool)0) \
		{assert(0);}}

#define SERVER_ASSERT(x,y) \
	{ if (((bool)(x))==(bool)0) \
		{assert(0);}}
#else

#define LIB_ASSERT(x, y) 
#endif

#undef  SAFE_DELETE_ARRAY
#define SAFE_DELETE_ARRAY(a) if( (a) != NULL ) delete [] (a); (a) = NULL;

#undef  SAFE_FREE
#define SAFE_FREE(a)   if( (a) != NULL ) dFree (a); (a) = NULL;
}

#ifndef CCLOG
#define CCLOG std::printf
#endif
#endif
