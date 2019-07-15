#include "tVector.h"

#ifdef POWER_DEBUG_GUARD
bool Base::VectorResize(U32 *aSize, U32 *aCount, void **arrayPtr, U32 newCount, U32 elemSize,
                  const char* fileName,
                  const U32   lineNum)
{
   if (newCount > 0) {
      U32 blocks = newCount / VectorBlockSize;
      if (newCount % VectorBlockSize)
         blocks++;
      S32 mem_size = blocks * VectorBlockSize * elemSize;

      const char* pUseFileName = fileName != NULL ? fileName : __FILE__;
      U32 useLineNum           = fileName != NULL ? lineNum  : __LINE__;

      if (*arrayPtr != NULL)
      {
         *arrayPtr = dRealloc_r(*arrayPtr, mem_size, pUseFileName, useLineNum);
      }
      else
      {
         *arrayPtr = dMalloc_r(mem_size, pUseFileName, useLineNum);
      }

      *aCount = newCount;
      *aSize = blocks * VectorBlockSize;
      return true;
   }

   if (*arrayPtr) {
      dFree(*arrayPtr);
      *arrayPtr = 0;
   }

   *aSize  = 0;
   *aCount = 0;
   return true;
}

#else

bool Base::VectorResize(U32 *aSize, U32 *aCount, void **arrayPtr, U32 newCount, U32 elemSize)
{
   if (newCount > 0)
   {
      U32 blocks = newCount / VectorBlockSize;
      if (newCount % VectorBlockSize)
         blocks++;
      S32 mem_size = blocks * VectorBlockSize * elemSize;
      *arrayPtr = *arrayPtr ? dRealloc(*arrayPtr,mem_size) :
         dMalloc(mem_size);

      *aCount = newCount;
      *aSize = blocks * VectorBlockSize;
      return true;
   }

   if (*arrayPtr) 
   {
      dFree(*arrayPtr);
      *arrayPtr = 0;
   }

   *aSize = 0;
   *aCount = 0;
   return true;
}
#endif
