#pragma once
//Includes
#include "types.h"

namespace Base
{
	class LittleEndian
	{  
	public:
		LittleEndian() {}

		static LittleEndian* Instance(void)
		{
			static LittleEndian local;
			return &local;
		}

		inline U16 Uint16(char b[]){
			b[1];// bounds check hint to compiler;
			return U16((unsigned char)b[0]) | U16((unsigned char)b[1]) << 8;
		}

		inline void PutUint16(char b[], U16 v) {
			b[1]; // early bounds check to guarantee safety of writes below
			b[0] = char(v);
			b[1] = char(v >> 8);
		}

		inline U32 Uint32(char b[]){
			b[3]; // bounds check hint to compiler;
			return U32((unsigned char)b[0]) | U32((unsigned char)b[1]) << 8 | U32((unsigned char)b[2]) << 16 | U32((unsigned char)b[3]) << 24;
		}

		inline void PutUint32(char b[], U32 v) {
			b[3]; // early bounds check to guarantee safety of writes below
			b[0] = char(v);
			b[1] = char(v >> 8);
			b[2] = char(v >> 16);
			b[3] = char(v >> 24);
		}

		inline U64 Uint64(char b[]) {
			b[7]; // bounds check hint to compiler;
			return U64((unsigned char)b[0]) | U64((unsigned char)b[1]) << 8 | U64((unsigned char)b[2]) << 16 | U64((unsigned char)b[3]) << 24 |
				U64((unsigned char)b[4]) << 32 | U64((unsigned char)b[5]) << 40 | U64((unsigned char)b[6]) << 48 | U64((unsigned char)b[7]) << 56;
		}

		inline void PutUint64(char b[], U64 v) {
			b[7]; // early bounds check to guarantee safety of writes below
			b[0] = char(v);
			b[1] = char(v >> 8);
			b[2] = char(v >> 16);
			b[3] = char(v >> 24);
			b[4] = char(v >> 32);
			b[5] = char(v >> 40);
			b[6] = char(v >> 48);
			b[7] = char(v >> 56);
		}
	};

	class BigEndian
	{
	public:
		BigEndian() {}

		static BigEndian* Instance(void)
		{
			static BigEndian local;
			return &local;
		}

		inline U16 Uint16(char b[]) {
			b[1];// bounds check hint to compiler;
			return U16((unsigned char)b[1]) | U16((unsigned char)b[0]) << 8;
		}

		inline void PutUint16(char b[], U16 v) {
			b[1]; // early bounds check to guarantee safety of writes below
			b[1] = char(v);
			b[0] = char(v >> 8);
		}

		inline U32 Uint32(char b[]) {
			b[3]; // bounds check hint to compiler;
			return U32((unsigned char)b[3]) | U32((unsigned char)b[2]) << 8 | U32((unsigned char)b[1]) << 16 | U32((unsigned char)b[0]) << 24;
		}

		inline void PutUint32(char b[], U32 v) {
			b[3]; // early bounds check to guarantee safety of writes below
			b[3] = char(v);
			b[2] = char(v >> 8);
			b[1] = char(v >> 16);
			b[0] = char(v >> 24);
		}

		inline U64 Uint64(char b[]) {
			b[7]; // bounds check hint to compiler;
			return U64((unsigned char)b[7]) | U64((unsigned char)b[6]) << 8 | U64((unsigned char)b[5]) << 16 | U64((unsigned char)b[4]) << 24 |
				U64((unsigned char)b[3]) << 32 | U64((unsigned char)b[2]) << 40 | U64((unsigned char)b[1]) << 48 | U64((unsigned char)b[0]) << 56;
		}

		inline void PutUint64(char b[], U64 v) {
			b[7]; // early bounds check to guarantee safety of writes below
			b[7] = char(v);
			b[6] = char(v >> 8);
			b[5] = char(v >> 16);
			b[4] = char(v >> 24);
			b[3] = char(v >> 32);
			b[2] = char(v >> 40);
			b[1] = char(v >> 48);
			b[0] = char(v >> 56);
		}
	};

#define  BIG BigEndian::Instance()
#define  LITTLE LittleEndian::Instance()
}