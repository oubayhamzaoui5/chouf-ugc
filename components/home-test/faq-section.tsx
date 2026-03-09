"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const displayFont = '[font-family:var(--font-home-test-display)]'
const monoFont = '[font-family:var(--font-home-test-mono)]'

type FaqItem = {
  id: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'En combien de temps une campagne UGC peut etre lancee ?',
    answer:
      'En general, la campagne est prete en 5 a 10 jours selon le volume. Nous cadrons le brief, selectionnons les createurs puis livrons les videos finalisees.',
  },
  {
    id: 'faq-2',
    question: 'Est-ce que vous gerez aussi le casting des createurs ?',
    answer:
      'Oui. Nous faisons le matching selon votre secteur, votre cible et votre ton de marque pour obtenir des profils vraiment pertinents.',
  },
  {
    id: 'faq-3',
    question: 'Les contenus sont-ils utilisables pour les ads et le social ?',
    answer:
      'Oui, les contenus sont penses pour etre actives sur Meta, TikTok et vos canaux organiques avec des formats adaptes a chaque usage.',
  },
  {
    id: 'faq-4',
    question: 'Comment validez-vous la qualite des videos ?',
    answer:
      'Chaque livrable passe par une revue interne: hook, clarte du message, rythme, branding et conformite au brief avant livraison finale.',
  },
  {
    id: 'faq-5',
    question: 'Pouvez-vous produire des variantes creatives pour tester ?',
    answer:
      'Oui. Nous proposons plusieurs angles, hooks et versions courtes pour accelerer vos tests et identifier rapidement les creatives gagnantes.',
  },
]

export function FaqSection() {
  const [openItemId, setOpenItemId] = useState<string | null>(faqItems[0]?.id ?? null)

  const toggleItem = (itemId: string) => {
    setOpenItemId((current) => (current === itemId ? null : itemId))
  }

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h3 className={`${displayFont} mt-4 text-3xl tracking-tight text-[#111111] sm:text-5xl`}>
           <span className='font-bold'> Questions</span> frequentes.
          </h3>
        </div>

        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <article
              key={item.id}
              className={`rounded-[1.2rem] border bg-white/90 p-4 shadow-[0_12px_24px_rgba(0,0,0,0.05)] transition-colors sm:rounded-[1.4rem] sm:p-6 ${
                openItemId === item.id ? 'border-[color:var(--home-test-accent)]' : 'border-black/10'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItemId === item.id}
                aria-controls={`${item.id}-content`}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className={`${displayFont} text-[20px] font-bold leading-tight text-[#111111] sm:text-[34px]`}>
                  {item.question}
                </span>
                <span
                  className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-black/70 transition ${
                    openItemId === item.id
                      ? 'rotate-180 border-[color:var(--home-test-accent)] text-[color:var(--home-test-accent)]'
                      : 'border-black/15'
                  }`}
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>

              <div
                id={`${item.id}-content`}
                className="grid overflow-hidden transition-all duration-300 ease-out"
                style={{ gridTemplateRows: openItemId === item.id ? '1fr' : '0fr' }}
              >
                <div className="min-h-0">
                  <p className={`${monoFont} mt-4 max-w-4xl text-sm font-semibold leading-relaxed text-black/80 sm:text-[22px]`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
