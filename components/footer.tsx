'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-foreground mb-4">Sologrls</h4>
            <p className="text-sm text-muted-foreground">
              Connectez les marques avec les créateurs UGC pour des campagnes authentiques.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Fonctionnement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Plateforme</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Pour les Marques
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Pour les Créateurs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Tableau de Bord
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Réseaux</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Creatis. Tours à ôtis réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
