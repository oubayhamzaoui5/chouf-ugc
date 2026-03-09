import type { Metadata } from 'next'
import { IBM_Plex_Mono, Montserrat } from 'next/font/google'

import { HomeTestLandingPage } from '@/components/home-test/landing-page'
import './home-test.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-home-test-display',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-home-test-mono',
})

export const metadata: Metadata = {
  title: 'Chouf | UGC Tunisien premium',
  description:
    "Landing page premium pour Chouf, startup UGC tunisienne orientee conversion et campagnes locales haute performance.",
}

export default function HomeTestPage() {
  return (
    <HomeTestLandingPage
      displayFontClass={montserrat.variable}
      monoFontClass={ibmPlexMono.variable}
    />
  )
}
