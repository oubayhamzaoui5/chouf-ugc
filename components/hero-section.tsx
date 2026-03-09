'use client'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Connectez les Marques à <br className="hidden sm:block" />
              <span className="text-primary">des Créateurs UGC</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Simplifiez vos campagnes <span className="font-semibold">avec le meilleur talent créatif.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6">
                Commencer en tant Marque
              </Button>
              <Button
                variant="outline"
                className="border-2 border-foreground/20 hover:bg-secondary text-foreground font-semibold px-8 py-6"
              >
                Rejoindre en tant que Créateur
              </Button>
            </div>
          </div>

          {/* Right - Image Placeholder */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-white/50 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">Interface & Créateurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
