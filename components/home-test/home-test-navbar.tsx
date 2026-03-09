"use client"

import Image from 'next/image'

type Audience = 'brand' | 'creator'

type HomeTestNavbarProps = {
  audience: Audience
  onAudienceChange: (audience: Audience) => void
  monoFontClass: string
}

export function HomeTestNavbar({ audience, onAudienceChange, monoFontClass }: HomeTestNavbarProps) {
  return (
    <div className="pointer-events-none sticky top-2 z-40 h-0 sm:top-4">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="relative flex items-center justify-between">
          <a href="#top" className="pointer-events-auto inline-flex items-center justify-center" aria-label="Retour en haut">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="h-14 w-14 object-contain sm:h-24 sm:w-24" />
          </a>

          <div className="pointer-events-auto absolute left-1/2 w-[min(58vw,500px)] -translate-x-1/2 sm:w-[min(62vw,500px)]">
            <div className="relative flex rounded-full border border-black/15 bg-white/85 p-1 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur">
              <span
                aria-hidden="true"
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-[color:var(--home-test-accent)] shadow-[0_8px_18px_var(--home-test-accent-shadow)] transition-transform duration-300 ease-out ${
                  audience === 'brand' ? 'translate-x-0' : 'translate-x-full'
                }`}
              />
              <button
                type="button"
                onClick={() => onAudienceChange('brand')}
                aria-pressed={audience === 'brand'}
                className={`relative z-10 flex-1 rounded-full px-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 sm:px-4 sm:py-3 sm:text-base sm:tracking-[0.12em] ${
                  audience === 'brand' ? 'text-white' : 'text-black/70 hover:text-black'
                }`}
              >
                Pour les marque
              </button>
              <button
                type="button"
                onClick={() => onAudienceChange('creator')}
                aria-pressed={audience === 'creator'}
                className={`relative z-10 flex-1 rounded-full px-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 sm:px-4 sm:py-3 sm:text-base sm:tracking-[0.12em] ${
                  audience === 'creator' ? 'text-white' : 'text-black/70 hover:text-black'
                }`}
              >
                Pour les créateur
              </button>
            </div>
          </div>

          <a
            href="#contact"
            className={`${monoFontClass} pointer-events-auto inline-flex items-center rounded-full bg-[color:var(--home-test-accent)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_10px_22px_var(--home-test-accent-shadow)] transition-all duration-300 ease-out hover:-translate-y-0.3 hover:scale-[1.01] hover:shadow-[0_16px_30px_var(--home-test-accent-shadow)] sm:px-6 sm:py-3 sm:text-sm sm:tracking-[0.16em]`}
          >
            Connexion
          </a>
        </div>
      </div>
    </div>
  )
}
