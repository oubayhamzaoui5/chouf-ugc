"use client"

import { useEffect, useMemo, useRef, useState } from 'react'

type Audience = 'brand' | 'creator'

type SectorHashtagsProps = {
  audience: Audience
}

type BubbleTone = {
  bg: string
}

type Bubble = {
  tag: string
  x: number
  y: number
  floatX: number
  floatY: number
  duration: number
  delay: number
  popDelay: number
  motion: 'a' | 'b' | 'c'
  tone: BubbleTone
}

type BubbleConfig = {
  tag: string
  x: number
  y: number
  floatX: number
  floatY: number
  duration: number
  delay: number
  motion: 'a' | 'b' | 'c'
}

const displayFont = '[font-family:var(--font-home-test-display)]'
const monoFont = '[font-family:var(--font-home-test-mono)]'

const tones: BubbleTone[] = [
  { bg: '#0ea5e9' },
  { bg: '#2563eb' },
  { bg: '#4f46e5' },
  { bg: '#7c3aed' },
  { bg: '#db2777' },
  { bg: '#ef4444' },
  { bg: '#ea580c' },
  { bg: '#16a34a' },
  { bg: '#0891b2' },
]

// Color sequence used for bubbles (indexes from `tones`), intentionally mixed.
const toneOrder: number[] = [0, 5, 2, 7, 4, 1, 8, 3, 6]

// Tune these values to change each bubble's position and motion.
const bubbleConfigs: BubbleConfig[] = [
  { tag: '#Beauty', x: 18, y: 56, floatX: 1, floatY: 3, duration: 9.8, delay: 0.4, motion: 'c' },
  { tag: '#Food', x: 30, y: 32, floatX: -2, floatY: 4, duration: 9.2, delay: 2.1, motion: 'b' },
  { tag: '#Mode', x: 44, y: 28, floatX: 1, floatY: 4, duration: 10.4, delay: 1.3, motion: 'c' },
  { tag: '#santé', x: 60, y: 30, floatX: -2, floatY: 6, duration: 8.9, delay: 3.6, motion: 'a' },
  { tag: '#Travel', x: 76, y: 34, floatX: 4, floatY: 5, duration: 10.8, delay: 4.2, motion: 'b' },
  { tag: '#Finance', x: 76, y: 58, floatX: -1, floatY: 6, duration: 9.7, delay: 0.9, motion: 'a' },
  { tag: '#Gaming', x: 62, y: 70, floatX: 0, floatY: 4, duration: 10.1, delay: 2.8, motion: 'a' },
  { tag: '#Tech', x: 46, y: 74, floatX: -3, floatY: 5, duration: 9.4, delay: 5.0, motion: 'b' },
  { tag: '#Lifestyle', x: 28, y: 68, floatX: 3, floatY: 6, duration: 11.2, delay: 1.8, motion: 'c' },
]

// Pop sequence (first pops first). Reorder this list to control pop order.
const popOrder: string[] = [
    '#Food',
      '#Gaming',

  '#Finance',
  '#Tech',
  '#Wellness',

  '#Beauty',
  '#Mode',
  '#Travel',
    '#Lifestyle',

]

function buildPopRankByTag(configs: BubbleConfig[]): Map<string, number> {
  const rankByTag = new Map<string, number>()
  const configTagSet = new Set(configs.map((config) => config.tag))

  popOrder.forEach((tag) => {
    if (!configTagSet.has(tag) || rankByTag.has(tag)) {
      return
    }

    rankByTag.set(tag, rankByTag.size)
  })

  configs.forEach((config) => {
    if (!rankByTag.has(config.tag)) {
      rankByTag.set(config.tag, rankByTag.size)
    }
  })

  return rankByTag
}

function buildBubbles(): Bubble[] {
  const popRankByTag = buildPopRankByTag(bubbleConfigs)
  const popBase = 500
  const popStep = 100

  return bubbleConfigs.map((config, index) => {
    const popRank = popRankByTag.get(config.tag) ?? index
    const toneIndex = toneOrder[index % toneOrder.length] ?? (index % tones.length)

    return {
      tag: config.tag,
      x: config.x,
      y: config.y,
      floatX: config.floatX,
      floatY: config.floatY,
      duration: config.duration,
      delay: config.delay,
      popDelay: popBase + popRank * popStep,
      motion: config.motion,
      tone: tones[toneIndex],
    }
  })
}

export function SectorHashtags({ audience: _audience }: SectorHashtagsProps) {
  const bubbles = useMemo(() => buildBubbles(), [])
  const fieldRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = fieldRef.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px 20% 0px',
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div
          ref={fieldRef}
          className={`home-test-sector-shell home-test-sector-field home-test-sector-field-pop rounded-[2rem] px-4 py-8 sm:px-8 lg:px-10 ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {bubbles.map((bubble) => (
            <article
              key={bubble.tag}
              className={`home-test-hashtag-orb home-test-hashtag-orb-motion-${bubble.motion}`}
              style={{
                top: `${bubble.y}%`,
                left: `${bubble.x}%`,
                background: bubble.tone.bg,
                animationDuration: `${bubble.duration}s`,
                animationDelay: `-${bubble.delay}s`,
                ['--orb-x' as any]: `${bubble.floatX}px`,
                ['--orb-y' as any]: `${bubble.floatY}px`,
                ['--pop-delay' as any]: `${bubble.popDelay}ms`,
              }}
            >
              <span className={`${monoFont} font-extrabold leading-none tracking-[0.09em] text-white`}>{bubble.tag}</span>
            </article>
          ))}

          <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
            <h3 className={`${displayFont} text-[clamp(28px,7.2vw,96px)] leading-[0.95] tracking-tight text-[#101014]`}>
              <span className="block font-semibold">dans votre secteur</span>
              <span className="block font-normal">d'activité</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
