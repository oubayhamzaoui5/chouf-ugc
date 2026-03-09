'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function BenefitsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* For Brands */}
          <Card className="p-8 md:p-12 border-0 bg-white shadow-lg">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Pour les Marques</h3>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-foreground">Trouvez rapidement</p>
                    <p className="text-sm text-muted-foreground">des créateurs pour vos campagne</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-foreground">Lancez des campagnes UGC percutantes</p>
                    <p className="text-sm text-muted-foreground" />
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-foreground">Générez du contenu authentique et engageant</p>
                    <p className="text-sm text-muted-foreground" />
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Commencer
              </Button>
            </div>
          </Card>

          {/* For Creators */}
          <Card className="p-8 md:p-12 border-0 bg-white shadow-lg">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Pour les Créateurs</h3>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="font-semibold text-foreground">Monétisez votre talent</p>
                    <p className="text-sm text-muted-foreground">en collaborant avec des marques</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-foreground">Postulez à des briefs qui vous correspondent</p>
                    <p className="text-sm text-muted-foreground" />
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-foreground">Développez votre portefeuille et vos opportunités</p>
                    <p className="text-sm text-muted-foreground" />
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                S'inscrire maintenant
              </Button>
            </div>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center space-y-6 py-12">
          <p className="text-lg text-foreground">
            Plus de <span className="font-bold">500 marques</span> et{' '}
            <span className="font-bold">2,000+ créateurs</span> font confiance à notre plateforme
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <span className="text-xl font-bold text-muted-foreground">Coca-Cola</span>
            <span className="text-xl font-bold text-muted-foreground">Sephora</span>
            <span className="text-xl font-bold text-muted-foreground">Decathlon</span>
            <span className="text-xl font-bold text-muted-foreground">Air France</span>
            <span className="text-xl font-bold text-muted-foreground">Monoprix</span>
            <span className="text-xl font-bold text-muted-foreground">Puma</span>
          </div>
        </div>
      </div>
    </section>
  )
}
