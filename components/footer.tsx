import Link from 'next/link'
import { lasVegasCommunities } from '@/lib/communities-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const featuredCommunities = lasVegasCommunities.filter(c => c.featured).slice(0, 4)

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dr. Jan Duffy</h3>
            <p className="text-sm text-muted-foreground">
              Del Webb Lake Las Vegas 55+ REALTOR®. Your trusted Las Vegas 55+ real estate specialist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/homes-for-sale" className="text-muted-foreground hover:text-foreground">
                  Homes For Sale
                </Link>
              </li>
              <li>
                <Link href="/communities" className="text-muted-foreground hover:text-foreground">
                  Las Vegas 55+ Communities
                </Link>
              </li>
              <li>
                <Link href="/las-vegas-55-guide" className="text-muted-foreground hover:text-foreground">
                  Las Vegas 55+ Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Featured Communities</h4>
            <ul className="space-y-2 text-sm">
              {featuredCommunities.map((community) => (
                <li key={community.slug}>
                  <Link href={`/communities/${community.slug}`} className="text-muted-foreground hover:text-foreground">
                    {community.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/communities" className="text-muted-foreground hover:text-foreground font-medium">
                  View All Communities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:7025551234" className="hover:text-foreground">
                  (702) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@vegas55plushomes.com" className="hover:text-foreground">
                  info@vegas55plushomes.com
                </a>
              </li>
              <li className="mt-4">
                <p className="text-xs">Serving Las Vegas & Henderson</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Dr. Jan Duffy. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            {' | '}
            <Link href="/accessibility" className="hover:text-foreground">Accessibility</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
