'use client'

import { Card } from '@/components/ui/card'

const steps = [
  {
    icon: '📋',
    title: 'Publiez un Brief',
    description: 'Décrivez votre campagne et vos besoins.',
  },
  {
    icon: '👥',
    title: 'Trouvez des Créateurs',
    description: 'Parcourez les meilleurs créateurs et invitez-les à collaborer',
  },
  {
    icon: '▶️',
    title: 'Recevez du Contenu',
    description: 'Obtenez des vidéos UGC personnalisées.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Comment ça marche
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-purple-50"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
