"use client"

type Audience = 'brand' | 'creator'

type FooterSectionProps = {
  audience: Audience
}

const displayFont = '[font-family:var(--font-home-test-display)]'
const monoFont = '[font-family:var(--font-home-test-mono)]'

export function FooterSection({ audience }: FooterSectionProps) {
  const ctaLabel = audience === 'brand' ? 'Planifier un RDV' : 'Rejoindre-Nous'

  return (
    <footer className="border-t border-black/10 bg-white/65">
      <div className="px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className={`${monoFont} text-xs uppercase tracking-[0.2em] text-black/55`}>Chouf UGC Platform</p>
            <h4 className={`${displayFont} mt-2 text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl`}>
              Des campagnes UGC qui convertissent plus vite.
            </h4>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/65 sm:text-base">
              Brief, matching, production et validation dans un seul flux. Concu pour les marques et createurs qui
              veulent aller vite sans perdre en qualite.
            </p>
            <a
              href="#rejoindre-equipe"
              className={`${monoFont} mt-5 inline-flex items-center justify-center rounded-full border border-black/15 bg-[color:var(--home-test-accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:brightness-95`}
            >
              {ctaLabel}
            </a>
          </div>

          <div>
            <p className={`${monoFont} text-[11px] uppercase tracking-[0.18em] text-black/50`}>Navigation</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-black/70">
              <a href="#top" className="transition hover:text-black">
                Accueil
              </a>
              <a href="#hero-parallax" className="transition hover:text-black">
                Galerie
              </a>
              <a href="#testimonials" className="transition hover:text-black">
                Avis clients
              </a>
              <a href="#faq" className="transition hover:text-black">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <p className={`${monoFont} text-[11px] uppercase tracking-[0.18em] text-black/50`}>Contact</p>
            <div className="mt-3 space-y-2 text-sm text-black/70">
              <p>hello@chouf.tn</p>
              <p>+216 00 000 000</p>
              <p>Tunis, Tunisia</p>
            </div>
          </div>

          <div>
            <p className={`${monoFont} text-[11px] uppercase tracking-[0.18em] text-black/50`}>Suivez-nous</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-black/70">
              <a href="#contact" className="transition hover:text-black">
                Instagram
              </a>
              <a href="#contact" className="transition hover:text-black">
                TikTok
              </a>
              <a href="#contact" className="transition hover:text-black">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-5 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Chouf. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#top" className="transition hover:text-black">
              Terms
            </a>
            <a href="#top" className="transition hover:text-black">
              Privacy
            </a>
            <a href="#contact" className="transition hover:text-black">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
