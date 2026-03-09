'use client'

import type { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'

type LenisProviderProps = {
  children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const content = children as any

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 0.8,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        smoothWheel: true,
      }}
    >
      {content}
    </ReactLenis>
  )
}
