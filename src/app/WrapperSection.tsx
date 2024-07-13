'use client'

import { RootLayoutContext } from '@/components/RootLayout';
import { useRef, useState, useContext, useMemo } from 'react'

export default function WrapperSection({ children, sectionTag }: { children: React.ReactNode, sectionTag: string }) {
  const contextRes = useContext(RootLayoutContext);
  const { productRef, solutionRef } = contextRes as any;

  const targetRef = useMemo(() => {
    switch (sectionTag) {
      default:
      case "products":
        return productRef;
      case "solutions":
        return solutionRef;
    }

  }, [productRef, sectionTag, solutionRef]);

  return (
    <div ref={targetRef}>
      {children}
    </div>
  )
}
