#ifndef MEM_GUARD_H
#define MEM_GUARD_H

#include "types.h"

namespace Base{

typedef U8* MemPoolEntry;
#define MEMPOOL_ALLOC(p)  malloc(p)
#define MEMPOOL_FREE free

class CMemGuard
{
	int m_size;
	MemPoolEntry m_pBuffer;
public:

	CMemGuard(int Size )
	{
		m_size = Size;
		m_pBuffer = (MemPoolEntry)MEMPOOL_ALLOC( Size );
	}

	~CMemGuard()
	{
		MEMPOOL_FREE( m_pBuffer );
	}

	char *get()
	{
		return  reinterpret_cast<char*>(m_pBuffer);
	}

	int size()
	{
		return m_size;
	}
};

#define MEM_GUARD_PARAM  
}
#endif

