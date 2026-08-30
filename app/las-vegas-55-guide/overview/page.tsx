import Link from 'next/link'
import { Home, MapPin, Trophy, Heart, Shield, Sun } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { getCommunityImage, siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import {
  generateHowToSchema,
  generateItemListSchema,
  generatePageGraph,
} from '@/lib/structured-data'
import { overviewFaqs } from '@/lib/page-faqs'

export const metadata = buildMetadata({
  title: 'Las Vegas 55+ Communities Overview | Active Adult Living Guide',
  description:
    'Overview of Las Vegas, Henderson, and Summerlin 55+ communities: amenities, climate, and how to choose a neighborhood. Call Dr. Jan Duffy at (702) 996-3758.',
  path: '/las-vegas-55-guide/overview',
  image: siteImages.heroHome,
  keywords: ['Las Vegas 55+ communities overview', 'active adult living Las Vegas', 'Henderson 55+ communities'],
})

export default function OverviewPage() {
  const featuredCommunities = lasVegasCommunities.filter(c => c.featured).slice(0, 6)

  return (
    <div>
      <JsonLd
        id="overview-graph"
        data={generatePageGraph({
          pageType: 'WebPage',
          name: 'Las Vegas 55+ Communities Overview',
          description:
            'Guide to 55+ communities in Las Vegas, Henderson, and Summerlin, including amenities, climate, and how to choose a neighborhood.',
          path: '/las-vegas-55-guide/overview',
          image: siteImages.heroHome,
          dateModified: '2026-08-30',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Las Vegas 55+ Guide', url: '/las-vegas-55-guide' },
            { name: 'Overview', url: '/las-vegas-55-guide/overview' },
          ],
          faqs: overviewFaqs,
          extra: [
            generateHowToSchema({
              name: 'How to choose a Las Vegas 55+ community',
              description:
                'Steps 55+ homebuyers use to compare Las Vegas Valley age-restricted communities.',
              steps: [
                {
                  name: 'List must-have amenities',
                  text: 'Decide whether golf, pickleball, a large clubhouse, or waterfront access matters most.',
                },
                {
                  name: 'Compare locations',
                  text: 'Tour Summerlin, Henderson, and North Las Vegas neighborhoods and note drive times to healthcare and shopping.',
                },
                {
                  name: 'Review HOA services and home type',
                  text: 'Confirm single-story vs. villa layouts, exterior maintenance, and age-restriction rules.',
                },
                {
                  name: 'Tour with a buyer’s representative',
                  text: 'Call Dr. Jan Duffy at (702) 996-3758 before visiting builder models so representation is in place.',
                },
              ],
            }),
            generateItemListSchema({
              name: 'Featured Las Vegas 55+ communities',
              description: 'Age-restricted neighborhoods highlighted in this overview.',
              items: featuredCommunities.map((community) => ({
                name: community.name,
                url: `/communities/${community.slug}`,
                image: getCommunityImage(community),
              })),
            }),
          ],
        })}
      />
      <PageHero
        image={siteImages.heroHome}
        title="Las Vegas 55+ Communities Overview"
        subtitle="Compare amenities, climate, and locations across Las Vegas, Henderson, and Summerlin 55+ neighborhoods with Dr. Jan Duffy."
        breadcrumbs={[
          { label: 'Las Vegas 55+ Guide', href: '/las-vegas-55-guide' },
          { label: 'Overview' },
        ]}
        primaryCTA={{ href: '/contact', text: 'Plan a community tour' }}
        secondaryCTA={{ href: '/communities', text: 'See all communities' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Las Vegas has emerged as one of America's premier destinations for active adults seeking an exceptional retirement lifestyle. This comprehensive overview explores why the Las Vegas Valley offers unmatched opportunities for 55+ living, from world-class amenities and year-round sunshine to diverse community options and exceptional value.
        </p>
      </div>

      <div className="max-w-4xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Las Vegas for Active Adult Living?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Las Vegas has become one of the nation's premier destinations for active adults seeking an exciting retirement lifestyle. Beyond the famous Strip, Las Vegas offers beautiful desert scenery, world-class amenities, and a vibrant 55+ community scene that rivals any location in the country. The city's transformation into a diverse metropolitan area with exceptional quality of life makes it ideal for active adults seeking more than traditional retirement living.
            </p>
            <p>
              The Las Vegas Valley, including Henderson, Summerlin, and North Las Vegas, features numerous master-planned 55+ communities designed specifically for active adults. These communities offer resort-style living with golf courses, fitness centers, swimming pools, and countless social activities, all within a climate that's perfect for year-round outdoor activities. Unlike many retirement destinations, Las Vegas provides an active, engaging lifestyle that appeals to adults who want to maintain vibrant, connected lives throughout their retirement years.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Exceptional Climate and Year-Round Outdoor Living</h3>
            <p>
              Las Vegas's desert climate provides over 300 days of sunshine annually, with mild winters that rarely dip below freezing and warm summers that are perfect for early morning and evening activities. This climate allows residents of 55+ communities to enjoy outdoor pools, walking trails, golf courses, and recreational facilities throughout the entire year, making it easy to maintain active, healthy lifestyles regardless of the season.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Outstanding Value and Tax Benefits</h3>
            <p>
              Nevada's tax-friendly environment makes Las Vegas particularly attractive for retirees. The state has no income tax, no inheritance tax, and property tax exemptions for qualified seniors. Combined with a cost of living significantly lower than many coastal retirement destinations, Las Vegas allows retirees to stretch their retirement savings further while enjoying premium amenities and lifestyle options that would cost substantially more in other markets.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">World-Class Healthcare and Services</h3>
            <p>
              Las Vegas features excellent healthcare facilities including multiple major hospitals, specialty clinics, and medical centers throughout the valley. The presence of quality healthcare ensures that active adults have access to comprehensive medical services, preventive care, and specialized treatments when needed. Many Las Vegas 55+ communities are strategically located near major medical centers, providing convenience and peace of mind for residents.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">What to Look for in a Las Vegas 55+ Community</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Selecting the right 55+ community in Las Vegas requires careful consideration of multiple factors that will impact your daily life, long-term satisfaction, and financial well-being. Understanding what matters most to you and evaluating communities accordingly ensures you'll find a home where you can truly thrive throughout your retirement years.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 rounded-lg border bg-card">
                <MapPin className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-3">Location and Proximity</h3>
                <p>
                  Consider proximity to healthcare facilities, shopping centers, entertainment venues, and airports. <Link href="/summerlin-55-homes" className="text-primary hover:underline">Summerlin</Link> and <Link href="/henderson-55-homes" className="text-primary hover:underline">Henderson</Link> are particularly popular areas, offering master-planned communities with excellent amenities and convenient access to everything Las Vegas has to offer. Explore all <Link href="/communities" className="text-primary hover:underline">Las Vegas 55+ communities</Link> to find the perfect location for your lifestyle. Think about your transportation needs and whether you want to be within walking distance of services or comfortable driving to destinations.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Trophy className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-3">Amenities That Match Your Interests</h3>
                <p>
                  Look for communities with amenities that align with your lifestyle priorities. Golf enthusiasts will appreciate championship courses, while fitness-focused residents might prioritize state-of-the-art gym facilities. Social butterflies should consider communities with active club scenes and busy event calendars. Discover <Link href="/las-vegas-55-guide/top-10-gated" className="text-primary hover:underline">gated communities</Link> and <Link href="/las-vegas-55-guide/top-10-pickleball" className="text-primary hover:underline">communities with pickleball courts</Link> to match your interests. Make sure amenities you care about are truly accessible and included in your fees.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Home className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-3">Home Types and Architectural Styles</h3>
                <p>
                  Las Vegas 55+ communities offer everything from affordable attached villas to luxury single-family homes. Consider whether you prefer single-story living, attached or detached homes, specific architectural styles, and price ranges that fit your budget. Many communities offer diverse options within different neighborhoods, allowing you to find homes that match both functional needs and aesthetic preferences.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Shield className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-semibold mb-3">Homeowner Association Fees and Value</h3>
                <p>
                  Understand what's included in homeowner association fees and how they fit into your budget. These fees often cover landscaping, exterior maintenance, common area upkeep, and access to amenities. Compare fee structures across communities to understand the value proposition—higher fees may be justified by comprehensive maintenance services and extensive amenities.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Community Culture and Resident Demographics</h3>
            <p>
              Each community has its own personality and demographic profile. Some attract active, outgoing residents with busy social calendars, while others appeal to those seeking quiet, peaceful living. Visiting communities, talking to residents, and attending community events can help you identify where you'll feel most at home. Consider whether you want a large community with extensive amenities or a smaller, more intimate setting.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Popular Las Vegas 55+ Communities</h2>
          <div className="space-y-4 text-muted-foreground mb-6">
            <p>
              Las Vegas is home to many highly-regarded 55+ communities, each offering unique characteristics that appeal to different lifestyles and budgets. From mega-communities with thousands of homes and extensive amenities to smaller, more intimate communities with specialized focuses, the Las Vegas market offers options for every active adult.
            </p>
            <p>
              The most prominent communities include Sun City Summerlin and Sun City Anthem, which are among the largest 55+ communities in the nation. These mega-communities offer extensive amenities, diverse home options, and vibrant social scenes. Mid-size communities like Siena, Regency at Summerlin, and newer developments like Heritage at Cadence offer more intimate atmospheres with premium amenities. Value-oriented options like Los Prados provide quality 55+ living at accessible price points.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Featured Las Vegas 55+ Communities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCommunities.map((community) => (
              <Link
                key={community.slug}
                href={`/communities/${community.slug}`}
                className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow p-6"
              >
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {community.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">{community.location}</p>
                <p className="text-sm text-muted-foreground">{community.description}</p>
                {community.priceRange && (
                  <p className="text-sm text-primary font-medium mt-2">{community.priceRange}</p>
                )}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">The Las Vegas Lifestyle: Beyond Your Community</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Living in a Las Vegas 55+ community means being part of both your specialized active adult community and the vibrant larger Las Vegas metropolitan area. The city offers incredible diversity in dining, entertainment, cultural attractions, shopping, and recreational opportunities that enhance your retirement lifestyle.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Entertainment and Cultural Opportunities</h3>
            <p>
              Beyond the famous Strip, Las Vegas offers world-class entertainment including Broadway shows, concerts, professional sports, museums, art galleries, and cultural festivals. Many 55+ community residents enjoy exploring these offerings while also appreciating the peaceful, resort-like atmosphere of their home communities.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Outdoor Recreation and Natural Beauty</h3>
            <p>
              Las Vegas is surrounded by stunning natural beauty including Red Rock Canyon National Conservation Area, Lake Mead, Valley of Fire State Park, and numerous hiking trails. Active adults enjoy outdoor recreation opportunities that include hiking, boating, scenic drives, and exploring the desert landscape. Many 55+ communities organize group outings to these natural attractions.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Shopping and Dining Excellence</h3>
            <p>
              Las Vegas features exceptional shopping from luxury boutiques to outlet malls, plus diverse dining options ranging from fine dining restaurants to casual eateries representing cuisines from around the world. The city's food scene continues to evolve, offering residents endless opportunities to explore new flavors and dining experiences.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Getting Started: Your Journey to Las Vegas 55+ Living</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Beginning your search for a Las Vegas 55+ community can feel overwhelming given the numerous excellent options available. However, with the right guidance and approach, you can efficiently identify communities that match your vision for retirement living and find your perfect home.
            </p>
            <p>
              Start by clearly defining your priorities—what amenities matter most, what location preferences you have, what budget range works for you, and what type of community culture appeals to you. Use our comprehensive guide resources to learn about different communities, then work with our specialized team to schedule tours and evaluate options based on your specific criteria.
            </p>
            <p>
              Remember that choosing a 55+ community is a significant decision that will shape your retirement years. Take time to visit multiple communities, talk to current residents, experience amenities firsthand, and ensure you understand all aspects of community living before making your choice. Our team is here to provide expert guidance throughout this important journey.
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
      <FaqSection faqs={overviewFaqs} />
    </div>
  )
}
