'use client'

import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Prêt à lancer votre prochaine campagne UGC?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6">
            Inscription en tant que Marque
          </Button>
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6"
          >
            Inscription en tant que Créateur
          </Button>
        </div>
      </div>
    </section>
  )
}
