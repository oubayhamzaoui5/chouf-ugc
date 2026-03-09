"use client"

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Audience = 'brand' | 'creator'

type HowItWorksStep = {
  titleLead: string
  titleTail?: string
  descriptionLead: string
  description: string
}

type HowItWorksSectionProps = {
  audience: Audience
}

const displayFont = '[font-family:var(--font-home-test-display)]'
const monoFont = '[font-family:var(--font-home-test-mono)]'

const howItWorks: Record<Audience, HowItWorksStep[]> = {
  brand: [
    {
      titleLead: 'Creez votre',
      titleTail: 'brief',
      descriptionLead: 'Du type de campagne a la description du profil ideal,',
      description: 'creez votre brief parfait en quelques etapes seulement !',
    },
    {
      titleLead: 'Recevez les',
      titleTail: 'candidatures',
      descriptionLead: 'Recevez des candidatures structurees et pertinentes,',
      description: 'pour comparer facilement les profils qui correspondent a vos objectifs.',
    },
    {
      titleLead: 'Selectionnez les',
      titleTail: 'profils',
      descriptionLead: 'Choisissez les createurs les plus alignes a votre image,',
      description: 'en gardant une vision claire sur les styles, delais et formats.',
    },
    {
      titleLead: 'Verifiez et validez les',
      titleTail: 'contenus',
      descriptionLead: 'Relisez chaque proposition avant diffusion,',
      description: 'puis validez rapidement les contenus finaux prets a performer.',
    },
  ],
  creator: [
    {
      titleLead: 'Cree ton',
      titleTail: 'profil',
      descriptionLead: 'Redige ta bio, selectionne tes interets',
      description:
        'et connecte tes reseaux sociaux pour mettre en avant ton profil et attirer tes marques preferees !',
    },
    {
      titleLead: 'Trouve ta',
      titleTail: 'collaboration',
      descriptionLead: 'Decouvre des missions vraiment faites pour toi,',
      description: 'avec des briefs alignes sur ton style et ton audience.',
    },
    {
      titleLead: 'Recois tes',
      titleTail: 'produits',
      descriptionLead: 'Une fois valide, tu recois les produits de la campagne,',
      description: 'pour preparer un contenu naturel et coherent avec la marque.',
    },
    {
      titleLead: 'Publie ton',
      titleTail: 'contenu',
      descriptionLead: 'Livre et publie ton contenu dans les delais,',
      description: 'puis suis tes validations et tes gains en toute simplicite.',
    },
  ],
}

export function HowItWorksSection({ audience }: HowItWorksSectionProps) {
  const [activeHowStepIndex, setActiveHowStepIndex] = useState(0)
  const steps = useMemo(() => howItWorks[audience], [audience])
  const activeHowStep = steps[Math.min(activeHowStepIndex, steps.length - 1)]

  useEffect(() => {
    setActiveHowStepIndex(0)
  }, [audience])

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h3 className={`${displayFont} text-2xl tracking-tight text-[#111111] sm:text-4xl lg:text-5xl`}>
       <span className='font-bold'>    Comment ca </span>marche ?
        </h3>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_0.9fr_0.95fr] lg:items-center">
          <article className="order-1 mx-auto flex h-[300px] w-full max-w-[320px] items-center justify-center rounded-[2rem] border border-dashed border-black/20 bg-white/60 p-8 sm:h-[560px] sm:max-w-[430px] lg:order-2">
            <div className="text-center">
              <p className={`${monoFont} text-xs uppercase tracking-[0.2em] text-black/55`}>Placeholder</p>
              <p className={`${displayFont} mt-3 text-xl font-semibold text-[#111111] sm:text-3xl`}>
                {audience === 'creator' ? 'Carte createur' : 'Carte marque'}
              </p>
              <p className="mt-2 text-xs text-black/60 sm:text-sm">Centre de la section a remplacer par le design final.</p>
            </div>
          </article>

          <div className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:block lg:space-y-3 lg:overflow-visible">
            {steps.map((step, index) => {
              const isActive = index === activeHowStepIndex
              return (
                <button
                  key={`${audience}-${step.titleLead}-${index}`}
                  type="button"
                  onClick={() => setActiveHowStepIndex(index)}
                  aria-pressed={isActive}
                  className={`w-[88%] min-w-[88%] shrink-0 rounded-[1.4rem] border px-4 py-4 text-left transition-all duration-300 sm:w-full sm:min-w-0 sm:px-5 sm:py-5 lg:rounded-[1.6rem] ${
                    isActive
                      ? 'border-[color:var(--home-test-accent)]/45 bg-white shadow-[0_14px_28px_var(--home-test-accent-shadow)]'
                      : 'border-black/10 bg-white/90 hover:border-[color:var(--home-test-accent)]/35 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4
                      className={`${displayFont} text-[clamp(14px,1.2vw,22px)] font-semibold leading-tight text-[#111111]`}
                    >
                      <span>{`${index + 1}. ${step.titleLead}`}</span>{' '}
                      {step.titleTail ? <span className="font-normal italic text-black/65">{step.titleTail}</span> : null}
                    </h4>
                    <span
                      className={`inline-flex h-8 w-12 items-center justify-center rounded-full border transition-colors sm:h-10 sm:w-16 ${
                        isActive
                          ? 'border-[color:var(--home-test-accent)]/45 bg-[color:var(--home-test-accent)]/10 text-[color:var(--home-test-accent)]'
                          : 'border-black/20 text-black/55'
                      }`}
                    >
                      <ArrowRight className={`size-5 transition-transform ${isActive ? 'rotate-180' : 'rotate-0'}`} />
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          <article className="order-3 flex items-start rounded-[2rem] px-2 py-3 lg:px-6 lg:py-6">
            <p className={`${displayFont} max-w-[34ch] text-[clamp(16px,1.45vw,25px)] leading-[1.3] text-[#111111]`}>
              <span className="font-semibold">{activeHowStep.descriptionLead}</span>{' '}
              <span className="font-normal italic text-black/90">{activeHowStep.description}</span>
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
