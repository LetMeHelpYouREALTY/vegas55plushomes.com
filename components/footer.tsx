import Link from 'next/link'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'
import { SITE_NAME } from '@/lib/site-config'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const featuredCommunities = lasVegasCommunities.filter(c => c.featured).slice(0, 4)

  return (
    <footer className="border-t border-gold/35 bg-gradient-to-b from-background to-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Dr. Jan Duffy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Del Webb Lake Las Vegas 55+ buyer’s representative. 28 Lake Oasis St, Henderson, NV
                89011. Call (702) 996-3758.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-foreground uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/homes-for-sale" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                  Homes For Sale
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/communities" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                  Las Vegas 55+ Communities
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/las-vegas-55-guide" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                  Las Vegas 55+ Guide
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                  About Us
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                  Blog
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                  Contact
                  <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-foreground uppercase tracking-wide">Featured Communities</h4>
            <ul className="space-y-3 text-sm">
              {featuredCommunities.map((community) => (
                <li key={community.slug}>
                  <Link 
                    href={`/communities/${community.slug}`} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                  >
                    {community.name}
                    <ArrowRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  href="/communities" 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center group transition-colors"
                >
                  View All Communities
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-foreground uppercase tracking-wide">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="tel:7029963758" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group"
                >
                  <Phone className="h-4 w-4 mr-2 text-primary/70 group-hover:text-primary transition-colors" />
                  (702) 996-3758
                </a>
              </li>
              <li>
                <a 
                  href="mailto:DrDuffySells@Vegas55PlusHomes.com" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center group break-all"
                >
                  <Mail className="h-4 w-4 mr-2 text-primary/70 group-hover:text-primary transition-colors flex-shrink-0" />
                  DrDuffySells@Vegas55PlusHomes.com
                </a>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary/70" />
                  <span className="text-xs">Serving Las Vegas & Henderson</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Business Info */}
        <div className="mt-12 pt-8 border-t">
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">{SITE_NAME}</p>
              <p className="text-sm text-muted-foreground">28 Lake Oasis St, Henderson, NV 89011</p>
              <p className="text-sm">
                <a 
                  href="tel:7029963758" 
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center justify-center gap-1"
                >
                  <Phone className="h-3 w-3" />
                  (702) 996-3758
                </a>
              </p>
              <p className="text-sm text-muted-foreground">Licensed for all of Nevada S.0197614</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 pt-4">
              <p className="text-sm text-muted-foreground">© {currentYear} All rights reserved.</p>
              <div className="flex items-center gap-2 text-sm">
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-muted-foreground">|</span>
                <Link 
                  href="/accessibility" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
