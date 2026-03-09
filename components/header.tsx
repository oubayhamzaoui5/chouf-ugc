'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="font-bold text-lg">Sologrls</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            À Propos
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Fonctionnement
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex text-sm font-medium">
            Connexion
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium">
            Tableau de Board Admin
          </Button>
        </div>
      </nav>
    </header>
  )
}
