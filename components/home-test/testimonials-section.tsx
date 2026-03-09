"use client"

import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

type Testimonial = {
  id: string
  businessName: string
  personName: string
  text: string
  sector: string
}

const displayFont = '[font-family:var(--font-home-test-display)]'
const monoFont = '[font-family:var(--font-home-test-mono)]'

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    businessName: 'Maison Lina Beauty',
    personName: 'Nour Ben Ali',
    text: 'On a lance une campagne UGC en 3 jours avec une execution tres fluide. Les creatives etaient directement exploitables sur Meta, et on a observe une hausse claire du taux de clic ainsi qu une meilleure qualite de trafic sur nos pages produits.',
    sector: 'Beauty',
  },
  {
    id: 'testimonial-2',
    businessName: 'Medina Coffee House',
    personName: 'Aymen Gharbi',
    text: 'Le format des videos etait naturel, authentique et parfaitement adapte a notre audience locale. En moins de deux semaines, le cout par acquisition a baisse et les publications ont genere plus de saves et de partages que nos formats habituels.',
    sector: 'Food',
  },
  {
    id: 'testimonial-3',
    businessName: 'Sfax Sports Store',
    personName: 'Rim Trabelsi',
    text: 'Les contenus etaient utilisables en ads, en stories et sur la page produit sans retravail lourd. Cette polyvalence nous a permis de lancer plusieurs variantes creatives rapidement tout en gardant une coherence de marque tres propre.',
    sector: 'Retail',
  },
  {
    id: 'testimonial-4',
    businessName: 'Atlas Travel Tunisia',
    personName: 'Sami Kefi',
    text: 'Le ton des videos etait credible et tres humain, ce qui a renforce la confiance autour de nos offres. Nous avons constate une meilleure retention sur les reels et une augmentation nette des demandes qualifiees sur nos formulaires.',
    sector: 'Travel',
  },
  {
    id: 'testimonial-5',
    businessName: 'Nexora SaaS',
    personName: 'Yasmine Harrabi',
    text: 'L equipe a compris notre produit B2B tres vite et a su traduire des messages complexes en contenu simple. Le resultat a clarifie notre proposition de valeur et a ameliore le taux de demo booking sur nos campagnes payantes.',
    sector: 'SaaS',
  },
  {
    id: 'testimonial-6',
    businessName: 'Bardo Home Decor',
    personName: 'Hichem Slama',
    text: 'Le rendu final etait premium, moderne et simple a deployer sur tous nos canaux. On a gagne un temps considerable sur la production marketing et nos equipes ont pu se concentrer sur l optimisation plutot que sur la creation brute.',
    sector: 'Home',
  },
]

export function TestimonialsSection() {
  const [selectedSector, setSelectedSector] = useState('All testimonials')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const sectorOptions = useMemo(
    () => ['All testimonials', ...Array.from(new Set(testimonials.map((testimonial) => testimonial.sector)))],
    [],
  )

  const visibleTestimonials = useMemo(
    () =>
      selectedSector === 'All testimonials'
        ? testimonials
        : testimonials.filter((testimonial) => testimonial.sector === selectedSector),
    [selectedSector],
  )
  const cardsPerView = isMobile ? 1.5 : 2.5
  const gapRem = 1
  const maxIndex = Math.max(visibleTestimonials.length - Math.ceil(cardsPerView), 0)
  const cardWidth = `calc((100% - ${(cardsPerView - 1) * gapRem}rem) / ${cardsPerView})`

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)

    return () => mediaQuery.removeEventListener('change', updateIsMobile)
  }, [])

  useEffect(() => {
    setActiveIndex(0)
  }, [selectedSector])

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  return (
    <section id="testimonials" className="overflow-x-clip px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className={`${displayFont} mt-3 text-3xl tracking-tight text-[#111111] sm:text-5xl`}>
            <span className='font-bold'>  Ce que disent </span> nos clients.
            </h3>
          </div>
          <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
           
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveIndex((current) => Math.max(current - 1, 0))}
                disabled={activeIndex === 0}
                aria-label="Previous testimonials"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black/75 transition hover:border-black/25 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((current) => Math.min(current + 1, maxIndex))}
                disabled={activeIndex >= maxIndex}
                aria-label="Next testimonials"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-black/75 transition hover:border-black/25 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-visible">
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${activeIndex} * (${cardWidth} + ${gapRem}rem)))` }}
          >
            {visibleTestimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="min-h-[320px] rounded-[1.4rem] border border-black/10 bg-white/90 p-4 shadow-[0_14px_28px_rgba(0,0,0,0.06)] sm:aspect-square sm:rounded-[1.7rem] sm:p-7"
                style={{ width: cardWidth, minWidth: cardWidth }}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className={`${displayFont} text-[16px] font-semibold leading-tight text-[#111111] break-words sm:text-[26px]`}>
                      {testimonial.businessName}
                    </h4>
                    <div className="flex shrink-0 items-center gap-1.5 text-[color:var(--home-test-accent)]">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="size-4 fill-current" strokeWidth={1.8} />
                        ))}
                      </div>
                      <span className={`${monoFont} text-[10px] font-semibold uppercase tracking-[0.14em] text-black/65`}>
                        5/5
                      </span>
                    </div>
                  </div>
                  <p className={`${monoFont} mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--home-test-accent)] sm:text-lg sm:tracking-[0.16em]`}>
                    {testimonial.personName}
                  </p>
                  <div className="relative mt-5">
                    <span className="absolute -left-2 -top-2 inline-flex h-8 w-8 items-center justify-center">
                      <Quote className="size-7 text-black" strokeWidth={2.2} />
                    </span>
                    <p className="pt-5 pl-2 text-[13px] font-medium leading-[1.55] text-black break-words sm:text-xl sm:font-semibold">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
