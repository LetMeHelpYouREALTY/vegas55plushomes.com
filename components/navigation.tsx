'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { lasVegasCommunities } from '@/lib/communities-data'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const featuredCommunities = lasVegasCommunities.filter(c => c.featured).slice(0, 4)

  const navLinks = [
    {
      label: 'Las Vegas 55+ Communities',
      href: '/communities',
      dropdown: [
        ...featuredCommunities.map(c => ({ label: c.name, href: `/communities/${c.slug}` })),
        { label: 'All Communities', href: '/communities' },
      ],
    },
    {
      label: 'Homes For Sale',
      href: '/homes-for-sale',
    },
    {
      label: 'Las Vegas 55+ Guide',
      href: '/las-vegas-55-guide',
    },
    {
      label: 'Why Hire an Agent',
      href: '/why-hire-an-agent',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Success Stories',
      href: '/success-stories',
    },
    {
      label: 'Reviews',
      href: '/reviews',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-foreground">
                Dr. Jan Duffy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md border bg-popover p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
