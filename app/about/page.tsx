import Link from 'next/link'
import { Shield, Users, Home, CheckCircle, ArrowRight, Briefcase, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph, generateServiceSchema } from '@/lib/structured-data'
import { aboutFaqs } from '@/lib/page-faqs'

export const metadata = buildMetadata({
  title: 'About Dr. Jan Duffy | Las Vegas 55+ Buyer\'s Representative',
  description:
    'Dr. Jan Duffy (Nevada license S.0197614) represents buyers of new-construction and resale 55+ homes at Del Webb Lake Las Vegas, Sun City Summerlin, and Henderson communities. Office: 28 Lake Oasis St, Henderson, NV 89011.',
  path: '/about',
  image: siteImages.interior,
  keywords: ['Dr. Jan Duffy', 'Del Webb Lake Las Vegas buyer\'s agent', 'Las Vegas 55+ realtor'],
})

export default function AboutPage() {
  const pageGraph = generatePageGraph({
    pageType: 'AboutPage',
    name: 'About Dr. Jan Duffy',
    description:
      'Dr. Jan Duffy is a Nevada REALTOR® who represents 55+ homebuyers in Las Vegas, Henderson, and Summerlin.',
    path: '/about',
    image: siteImages.interior,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ],
    faqs: aboutFaqs,
    extra: [
      generateServiceSchema({
        name: '55+ Buyer Representation',
        description:
          'Dedicated buyer representation for new construction and resale 55+ homes in Las Vegas, Henderson, and Summerlin.',
      }),
    ],
  })

  return (
    <div>
      <JsonLd id="about-page-graph" data={pageGraph} />
      <PageHero
        image={siteImages.interior}
        title="About Dr. Jan Duffy"
        subtitle="Nevada REALTOR® S.0197614. Dedicated buyer’s representative for Del Webb Lake Las Vegas and Las Vegas Valley 55+ communities. 28 Lake Oasis St, Henderson, NV 89011."
        breadcrumbs={[{ label: 'About' }]}
        primaryCTA={{ text: 'Contact Dr. Duffy', href: '/contact' }}
        secondaryCTA={{ text: 'Why Hire a Buyer\'s Agent', href: '/why-hire-an-agent' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Dedicated Buyer's Representative</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dr. Jan Duffy specializes exclusively in representing buyers purchasing new construction homes in <Link href="/communities" className="text-primary hover:underline">Las Vegas 55+ communities</Link>, with particular expertise in <Link href="/communities/del-webb-lake-las-vegas" className="text-primary hover:underline">Del Webb Lake Las Vegas</Link>. This specialization means you receive expert guidance tailored specifically to your needs as a buyer of new construction active adult homes.
                </p>
                <p>
                  As a buyer's representative, Dr. Duffy works exclusively for your interests throughout the entire purchase process. This is fundamentally different from builder representatives who work for the builder, or dual agents who attempt to represent both sides. Your buyer's representative is your dedicated advocate, negotiator, and protector.
                </p>
                <p>
                  This exclusive buyer representation ensures you receive honest advice, expert negotiations, thorough contract review, and comprehensive protection that prioritizes your interests above all else.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Award-Winning Realtor</h3>
                    <p className="text-sm text-muted-foreground">Recognized for excellence in real estate</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Dedicated Buyer Representation</h3>
                    <p className="text-sm text-muted-foreground">Works exclusively for your interests</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Del Webb Lake Las Vegas Specialist</h3>
                    <p className="text-sm text-muted-foreground">Deep expertise in this premier community</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">New Construction Focus</h3>
                    <p className="text-sm text-muted-foreground">Specialized in new home purchases</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">55+ Community Expertise</h3>
                    <p className="text-sm text-muted-foreground">Understanding active adult living</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Why Buyer Representation Matters for New Construction</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Many buyers mistakenly believe they don't need representation when purchasing new construction, thinking the builder's sales representative will guide them. However, the builder's representative works exclusively for the builder's interests, not yours. Having a dedicated buyer's representative like Dr. Jan Duffy ensures your interests are protected throughout the entire purchase process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-3">Contract Protection</h3>
                <p className="text-sm">
                  Builder contracts are complex legal documents designed to protect builders. Your buyer's representative reviews every clause, negotiates favorable terms, and ensures your interests are adequately protected.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-3">Cost Savings</h3>
                <p className="text-sm">
                  Experienced buyer's representatives negotiate builder incentives, closing cost credits, and upgrade pricing that saves you money. This representation typically costs you nothing—builders pay commissions—yet saves thousands.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-sm">
                  Professional inspections at critical construction stages identify defects before they're hidden. Your representative ensures quality standards are met and defects are corrected before closing.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
                <p className="text-sm">
                  From design center selections to financing coordination and closing procedures, your buyer's representative guides you through complex processes, avoiding costly mistakes and ensuring smooth completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Del Webb Lake Las Vegas Specialization</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Dr. Jan Duffy maintains deep expertise specifically in <Link href="/communities/del-webb-lake-las-vegas" className="text-primary hover:underline">Del Webb Lake Las Vegas</Link>, Las Vegas's premier 55+ community. Explore all <Link href="/communities" className="text-primary hover:underline">Las Vegas 55+ communities</Link> we serve, including <Link href="/communities/sun-city-summerlin" className="text-primary hover:underline">Sun City Summerlin</Link> and <Link href="/communities/sun-city-anthem" className="text-primary hover:underline">Sun City Anthem</Link>. This specialization provides you with insider knowledge that general-purpose agents simply cannot match.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Floor Plan Expertise</p>
                  <p className="text-sm text-muted-foreground">Understanding of all available floor plans and their features</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Upgrade Knowledge</p>
                  <p className="text-sm text-muted-foreground">Insight into which upgrades provide value versus post-closing options</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Community Insights</p>
                  <p className="text-sm text-muted-foreground">Knowledge of amenities, HOA considerations, and lifestyle benefits</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Builder Relationships</p>
                  <p className="text-sm text-muted-foreground">Established relationships facilitating smoother transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Incentive Knowledge</p>
                  <p className="text-sm text-muted-foreground">Understanding of available builder incentives and how to secure them</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Construction Process</p>
                  <p className="text-sm text-muted-foreground">Familiarity with timelines, processes, and what to expect</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              As an award-winning realtor and dedicated buyer's representative, Dr. Jan Duffy is committed to protecting your interests, saving you money, and ensuring a smooth, successful home purchase experience. Her recognized excellence means you receive the highest level of professional service: honest advice, expert negotiations, thorough protection, and comprehensive guidance throughout your journey.
            </p>
            <p>
              We understand that purchasing a new construction home at Del Webb Lake Las Vegas or another 55+ community represents a significant investment and life decision. Our role is to ensure you make informed decisions, receive optimal value, and have complete protection throughout the process.
            </p>
            <p>
              Unlike agents who may have conflicts of interest or limited expertise, Dr. Jan Duffy's award-winning track record and exclusive focus on buyer representation for new construction 55+ homes ensures you receive the specialized expertise and dedicated advocacy you deserve.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Contact Dr. Jan Duffy</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Ready to experience the benefits of dedicated buyer representation? Contact Dr. Jan Duffy today to learn more about how buyer representation protects your interests and saves you money during your Del Webb Lake Las Vegas home purchase.
            </p>
            <p>
              Our initial consultation is complimentary, and we'll explain how buyer representation differs from working directly with builder representatives, what you can expect throughout the process, and how we'll protect your interests every step of the way.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/why-hire-an-agent">
                Learn Why You Need an Agent
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/communities">
                View All Communities
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <FaqSection faqs={aboutFaqs} />
    </div>
    </div>
  )
}





