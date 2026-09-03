'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { siteImages } from '@/lib/site-images'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/site-config'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Del Webb', href: '/communities/del-webb-lake-las-vegas' },
    { label: 'Homes', href: '/homes-for-sale' },
    { label: 'Buyer’s Agent', href: '/why-hire-an-agent' },
    { label: 'About', href: '/about' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gold/35 bg-background/90 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={siteImages.headshotNav.src}
              alt={siteImages.headshotNav.alt}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-1 ring-gold"
              priority
            />
            <span className="leading-tight">
              <span className="block font-serif text-xl text-foreground">Dr. Jan Duffy</span>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-bronze">
                Lake Las Vegas
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-muted-foreground hover:text-bronze"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="gold">
              <a href={`tel:${PHONE_TEL}`}>Call {PHONE_DISPLAY}</a>
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="space-y-1 pb-6 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-1 py-3 text-base text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-4 w-full">
              <a href={`tel:${PHONE_TEL}`} onClick={() => setMobileMenuOpen(false)}>
                Call {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
