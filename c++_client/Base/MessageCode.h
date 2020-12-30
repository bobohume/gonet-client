#ifndef _MESSAGECODE_H_
#define _MESSAGECODE_H_

#include "Base/bitStream.h"

namespace Base {
	extern U32  GetMessageCode(const char* szName);
	extern void GetMessageCodeSimple(const char* szName, U32& m1);
	extern U32  GetMessageCodeSimple(const char* szName);
	extern std::string ToSlat(std::string accountName, std::string pwd);
	extern U32 ToCrc(std::string accountName, std::string pwd, std::string buildNo, U64 nTime);
}
#endif