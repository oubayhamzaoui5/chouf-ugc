"use client"

import Image from 'next/image'
import { withBasePath } from '@/lib/base-path'

const items = Array.from({ length: 12 }, (_, index) => ({
  id: `brand-${index + 1}`,
  src: withBasePath('/logo.png'),
  alt: `Brand logo ${index + 1}`,
}))

const marqueeItems = [...items, ...items]

export function BrandsMarqueeSection() {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="marquee-track">
          <div className="marquee-group items-center">
            {marqueeItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center gap-4">
                <Image src={item.src} alt={item.alt} width={136} height={44} className="h-7 w-auto object-contain sm:h-11" priority={index < 4} />
                <span className="h-2 w-2 rounded-full bg-[color:var(--home-test-accent)]" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
