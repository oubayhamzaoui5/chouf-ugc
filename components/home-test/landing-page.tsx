"use client"

import { useEffect, useState } from 'react'

import ParallaxGallery from './parallaxgallery'
import { SectorHashtags } from './sector-hashtags'
import { AudienceJoinPanel } from './audience-join-panel'
import { HowItWorksSection } from './how-it-works-section'
import { TestimonialsSection } from './testimonials-section'
import { BrandsMarqueeSection } from './brands-marquee-section'
import { FaqSection } from './faq-section'
import { FooterSection } from './footer-section'
import { HomeTestNavbar } from './home-test-navbar'

type HomeTestLandingPageProps = {
  displayFontClass: string
  monoFontClass: string
}

type Audience = 'brand' | 'creator'

const displayFont = '[font-family:var(--font-home-test-display)]'
const monoFont = '[font-family:var(--font-home-test-mono)]'

export function HomeTestLandingPage({ displayFontClass, monoFontClass }: HomeTestLandingPageProps) {
  const [audience, setAudience] = useState<Audience>('brand')
  const [hasStartedScroll, setHasStartedScroll] = useState(false)

  useEffect(() => {
    const onScrollStart = () => {
      if (window.scrollY <= 0) {
        return
      }

      setHasStartedScroll(true)
      window.removeEventListener('scroll', onScrollStart)
    }

    onScrollStart()
    window.addEventListener('scroll', onScrollStart, { passive: true })

    return () => window.removeEventListener('scroll', onScrollStart)
  }, [])

  return (
    <div
      className={`${displayFontClass} ${monoFontClass} home-test-soft-gradient ${
        audience === 'brand' ? 'home-test-theme-brand' : ''
      } home-test-theme-transition relative isolate text-[#18181b]`}
    >
      <main id="top">
        <HomeTestNavbar audience={audience} onAudienceChange={setAudience} monoFontClass={monoFont} />

        <section className="relative h-[100svh] min-h-[100svh] px-4 text-center sm:h-screen sm:min-h-screen sm:px-6 lg:px-8">
          <div className="mx-auto flex h-full w-full max-w-8xl items-center justify-center">
            <h1 className={` ${displayFont} text-4xl font-semibold leading-[1.02] tracking-tight text-[#111111] sm:text-7xl lg:text-8xl`}>
              La <span className='font-bold'>Plateforme</span> UGC <span className="home-test-accent-text font-extrabold text-[color:var(--home-test-accent)]">N°1</span> de la Tunisie.
            </h1>
            <a
              href="#hero-parallax"
              aria-label="Scroller vers la section suivante"
              className={`${monoFont} fixed bottom-[calc(env(safe-area-inset-bottom)+10px)] left-1/2 z-30 inline-flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--home-test-accent)] transition sm:bottom-6 sm:text-[13px] sm:tracking-[0.24em] ${
                hasStartedScroll ? 'pointer-events-none opacity-0' : 'opacity-100'
              }`}
            >
              Scroll
              <span className="home-test-scroll-indicator" aria-hidden="true">
                <span className="home-test-scroll-dot" />
              </span>
            </a>
          </div>
        </section>
        <div id="hero-parallax">
          <ParallaxGallery audience={audience} />
        </div>
        <SectorHashtags audience={audience} />
        <AudienceJoinPanel audience={audience} />
        <HowItWorksSection audience={audience} />
        <TestimonialsSection />
        <BrandsMarqueeSection />
        <FaqSection />
      </main>

      <FooterSection audience={audience} />
    </div>
  )
}
