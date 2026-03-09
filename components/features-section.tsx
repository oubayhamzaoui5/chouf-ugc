'use client'

import { Card } from '@/components/ui/card'

const features = [
  {
    icon: '🤖',
    title: 'Matching Intelligent',
    description: 'Connecte automatiquement les marques et créateurs idéaux',
  },
  {
    icon: '✅',
    title: 'Interface Simple',
    description: 'Lancez des campagnes en toute simplicité',
  },
  {
    icon: '🛡️',
    title: 'Communauté Vérifiée',
    description: 'Franchiez avec des créateurs UGC vérifiés et authentiques',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 border-0 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
