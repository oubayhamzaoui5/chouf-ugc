"use client"

import { useEffect, useRef } from 'react'
import { withBasePath } from '@/lib/base-path'

type Audience = 'brand' | 'creator'

type AudienceJoinPanelProps = {
  audience: Audience
}

type JoinContent = {
  titleTop: string
  titleBottom?: string
  ctaLabel: string
  ctaHref: string
}

type JoinImage = {
  src: string
  alt: string
}

const displayFont = '[font-family:var(--font-home-test-display)]'

const joinContent: Record<Audience, JoinContent> = {
  creator: {
    titleTop: 'Rejoins notre communaut\u00E9\u00A0de',
    ctaLabel: 'Rejoindre-Nous',
    ctaHref: '#contact',
  },
  brand: {
    titleTop: 'Collaborez avec',
    titleBottom: 'passionn\u00E9s',
    ctaLabel: 'Planifier un RDV',
    ctaHref: '#contact',
  },
}

const sharedJoinVideos: JoinImage[] = [
  {
    src: '/ugcvid1.mp4',
    alt: 'Video UGC creator',
  },
  {
    src: '/ugcvid2.mp4',
    alt: 'Video UGC creator second',
  },
  {
    src: '/ugcvid3.mp4',
    alt: 'Video UGC creator third',
  },
  {
    src: '/ugcvid4.mp4',
    alt: 'Video UGC creator fourth',
  },
]

const joinImages: Record<Audience, JoinImage[]> = {
  creator: sharedJoinVideos,
  brand: sharedJoinVideos,
}

export function AudienceJoinPanel({ audience }: AudienceJoinPanelProps) {
  const content = joinContent[audience]
  const images = joinImages[audience]
  const leftColumnImages = [images[0], images[2]].filter((image): image is JoinImage => Boolean(image))
  const rightColumnImages = [images[1], images[3]].filter((image): image is JoinImage => Boolean(image))
  const sectionRef = useRef<HTMLElement | null>(null)
  const leftColumnRef = useRef<HTMLDivElement | null>(null)
  const rightColumnRef = useRef<HTMLDivElement | null>(null)
  const renderMedia = (image: JoinImage) => {
    const src = withBasePath(image.src)

    if (image.src.toLowerCase().endsWith('.mp4')) {
      return (
        <video
          src={src}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={image.alt}
        />
      )
    }

    return <img src={src} alt={image.alt} className="h-full w-full object-cover" />
  }

  useEffect(() => {
    let isMounted = true
    let cleanup: (() => void) | undefined

    const setupScrollAnimation = async () => {
      if (!sectionRef.current || !leftColumnRef.current || !rightColumnRef.current) {
        return
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])

      if (!isMounted || !sectionRef.current) {
        return
      }

      gsap.registerPlugin(ScrollTrigger)

      const context = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            end: 'center center',
            scrub: 1,
          },
        })

        timeline
          .fromTo(leftColumnRef.current, { yPercent: -12 }, { yPercent: 0, ease: 'none' }, 0)
          .fromTo(rightColumnRef.current, { yPercent: 12 }, { yPercent: 0, ease: 'none' }, 0)
      }, sectionRef)

      cleanup = () => context.revert()
    }

    setupScrollAnimation()

    return () => {
      isMounted = false
      cleanup?.()
    }
  }, [audience])

  return (
    <section id="rejoindre-equipe" ref={sectionRef} className="px-4 py-20 sm:px-6 lg:px-32 lg:py-24">
      <div className="mx-auto">
        <article className="home-test-join-panel relative py-1 sm:py-2 lg:py-3">
          <div className="grid gap-3 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:justify-items-center">
            <div className="order-2 flex min-h-[280px] w-full flex-col items-center justify-center text-center lg:order-1 lg:min-h-[620px] lg:items-start lg:text-left">
              <h3
                className={`${displayFont} mt-10 mb-4 max-w-[12ch] text-[clamp(38px,9.8vw,62px)] font-semibold leading-[0.95] tracking-tight text-[#111111] sm:mt-0 sm:text-[clamp(34px,4.3vw,86px)]`}
              >
                <span className="block">{content.titleTop}</span>
                <span className="block text-[color:var(--home-test-accent)]">{'+100 cr\u00E9ateurs'}</span>
                {content.titleBottom ? <span className="block">{content.titleBottom}</span> : null}
              </h3>
              <a href={content.ctaHref} className="home-test-join-cta mt-2 md:mt-4 ">
                <span className="home-test-join-cta-circle" aria-hidden="true">
                  <span className="home-test-join-cta-icon home-test-join-cta-arrow"></span>
                </span>
                <span className={`${displayFont} home-test-join-cta-text`}>{content.ctaLabel}</span>
              </a>
            </div>

            <div className="home-test-join-grid order-1 mx-auto w-full max-w-[360px] lg:order-2 lg:max-w-[560px] lg:mr-40">
              <div ref={leftColumnRef} className="home-test-join-col">
                {leftColumnImages.map((image) => (
                  <article key={image.src} className="home-test-join-tile aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                    {renderMedia(image)}
                  </article>
                ))}
              </div>
              <div ref={rightColumnRef} className="home-test-join-col home-test-join-col-shift">
                {rightColumnImages.map((image) => (
                  <article key={image.src} className="home-test-join-tile aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                    {renderMedia(image)}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
