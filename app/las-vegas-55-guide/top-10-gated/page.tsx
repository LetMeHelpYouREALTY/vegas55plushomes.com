import Link from 'next/link'
import { Shield, Trophy, Lock, Award, Home } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph, generateItemListSchema } from '@/lib/structured-data'

export const metadata = buildMetadata({
  title: 'Gated 55+ Communities in Las Vegas | Sun City, Siena | Dr. Jan Duffy',
  description:
    'Compare gated 55+ communities in Las Vegas and Henderson, including Sun City Summerlin and Siena. Controlled-access entries and HOA amenities. Call (702) 996-3758.',
  path: '/las-vegas-55-guide/top-10-gated',
  image: siteImages.gated,
  keywords: ['gated 55+ communities Las Vegas', 'Sun City Summerlin gated'],
})

export default function Top10GatedPage() {
  // Filter featured and large communities that are likely gated
  const gatedCommunities = lasVegasCommunities
    .filter(c => c.featured || c.category === 'mega' || c.category === 'large' || c.category === 'premium')
    .slice(0, 10)
    .map((c, index) => ({ ...c, rank: index + 1 }))

  return (
    <div>
      <JsonLd
        id="gated-page-graph"
        data={generatePageGraph({
          pageType: 'CollectionPage',
          name: 'Gated 55+ Communities in Las Vegas',
          description: 'Gated 55+ communities in Las Vegas and Henderson with controlled-access entries.',
          path: '/las-vegas-55-guide/top-10-gated',
          image: siteImages.gated,
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Las Vegas 55+ Guide', url: '/las-vegas-55-guide' },
            { name: 'Gated Communities', url: '/las-vegas-55-guide/top-10-gated' },
          ],
          extra: [
            generateItemListSchema({
              name: 'Gated Las Vegas 55+ communities',
              description: 'Controlled-access 55+ communities in the Las Vegas Valley.',
              items: gatedCommunities.map((community) => ({
                name: community.name,
                url: `/communities/${community.slug}`,
              })),
            }),
          ],
        })}
      />
      <PageHero
        image={siteImages.gated}
        title="Gated 55+ Communities in Las Vegas"
        subtitle="Controlled-access 55+ neighborhoods in Summerlin and Henderson, including Sun City Summerlin and Siena. Call (702) 996-3758."
        breadcrumbs={[
          { label: 'Las Vegas 55+ Guide', href: '/las-vegas-55-guide' },
          { label: 'Gated Communities' },
        ]}
        primaryCTA={{ text: 'Browse Communities', href: '/communities' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="max-w-4xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose a Gated 55+ Community?</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Gated communities offer residents enhanced security, privacy, and a sense of exclusivity that many active adults value in their retirement years. Combined with 55+ age restrictions, these communities provide an ideal environment for active adults seeking a safe, secure, and socially vibrant retirement lifestyle.
            </p>
            <p>
              The controlled access provided by gated communities means that residents can enjoy peace of mind whether they're at home, traveling, or participating in community activities. This security enhances the overall quality of life for residents, allowing them to focus on enjoying their retirement rather than worrying about safety concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
              <p className="text-muted-foreground">
                Gated communities provide controlled access, security patrols, and a clear sense of boundaries that enhance resident safety and security. The presence of gates and security measures acts as a deterrent to unwanted visitors while allowing residents to feel comfortable leaving their homes for travel or extended absences.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Lock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Privacy and Exclusivity</h3>
              <p className="text-muted-foreground">
                Gated communities offer a greater sense of privacy and exclusivity, creating a more intimate community atmosphere where residents know their neighbors and feel part of a cohesive community. The controlled access means fewer through-traffic and a quieter, more peaceful environment.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Trophy className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Amenities</h3>
              <p className="text-muted-foreground">
                Gated 55+ communities typically feature extensive amenity packages including golf courses, fitness centers, pools, and clubhouses that rival resort facilities. The combination of security and amenities creates a resort-like living experience that many active adults find appealing.
              </p>
              </div>
            <div className="p-6 rounded-lg border bg-card">
              <Home className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Property Values</h3>
              <p className="text-muted-foreground">
                Gated communities often maintain property values better than non-gated options due to their perceived exclusivity, security, and maintained standards. The controlled environment and community standards contribute to consistent property values over time.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Top 10 Gated 55+ Communities in Las Vegas</h2>
          <div className="space-y-6 mb-8">
            {gatedCommunities.map((community) => (
              <Link
                key={community.slug}
                href={`/communities/${community.slug}`}
                className="flex items-center gap-6 p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{community.rank}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {community.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{community.location}</p>
                  <p className="text-sm text-muted-foreground">{community.description}</p>
                  {community.priceRange && (
                    <p className="text-sm text-primary font-medium mt-2">{community.priceRange}</p>
                  )}
                  {community.homeCount && (
                    <p className="text-sm text-muted-foreground mt-1">Community Size: {community.homeCount.toLocaleString()}+ homes</p>
                  )}
                </div>
                <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Understanding Gated Community Security Features</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Gated communities offer varying levels of security, and understanding these differences helps you evaluate which communities match your security preferences and lifestyle needs.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Controlled Access Points</h3>
            <p>
              Most gated communities feature controlled entry points with gates, guard stations, or access systems that limit who can enter the community. Some communities have 24-hour security guards, while others use electronic access systems or combination gate codes. Understanding the access system helps you evaluate the level of security provided.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Security Patrols and Monitoring</h3>
            <p>
              Many gated communities employ security patrols that monitor the community, check on properties, and provide additional security presence. Some communities also have surveillance systems, emergency call systems, or other monitoring features that enhance resident security and peace of mind.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Visitor Management</h3>
            <p>
              Understanding how visitors are managed—whether there's a registration process, guest check-in system, or simply resident-controlled access—helps you evaluate how the community balances security with convenience. Well-managed visitor systems provide security while still allowing residents to host family and friends comfortably.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Additional Considerations for Gated Community Living</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Beyond security features, gated communities often have specific characteristics that impact daily living. Understanding these factors helps you determine whether gated community living aligns with your preferences and lifestyle.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Homeowner Association Structures</h3>
            <p>
              Gated communities typically have active homeowner associations that manage security, maintain common areas, enforce community standards, and coordinate amenities. Understanding how the HOA operates, what it covers, and what restrictions exist helps you evaluate whether the community's governance structure works for your preferences.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Community Size and Atmosphere</h3>
            <p>
              Gated communities range from smaller, intimate settings to large mega-communities with thousands of homes. Consider whether you prefer the coziness of a smaller gated community or the extensive amenities and social opportunities of larger gated developments. Each offers different advantages for active adult living.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Location and Access</h3>
            <p>
              While gated communities provide controlled access, consider how this impacts your daily life. Are you comfortable with the access procedures? Does the location provide easy access to services, healthcare, shopping, and entertainment while maintaining the gated security you value? Finding the right balance ensures you get security benefits without feeling isolated.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Making Your Decision: Is a Gated Community Right for You?</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              When choosing a retirement community, consider factors such as location, amenities, healthcare access, social opportunities, budget, and lifestyle preferences to find the perfect fit. Gated communities offer particular advantages for active adults who prioritize security, privacy, and exclusive amenities, but they're not necessarily the right choice for everyone.
            </p>
            <p>
              Consider whether the additional security and exclusivity of a gated community align with your lifestyle preferences and concerns. For active adults who travel frequently, value privacy, or simply prefer the added security of controlled access, gated communities can provide significant peace of mind and quality of life benefits.
            </p>
            <p>
              However, some active adults may prefer the openness and accessibility of non-gated communities while still enjoying the benefits of 55+ age restrictions and active adult amenities. The key is identifying which community characteristics matter most to you and finding communities—whether gated or not—that provide the lifestyle you're seeking.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/communities"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Explore All Communities
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}
