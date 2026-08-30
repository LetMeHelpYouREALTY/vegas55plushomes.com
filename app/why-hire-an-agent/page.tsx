import Link from 'next/link'
import { Shield, DollarSign, FileCheck, AlertTriangle, Users, CheckCircle, Home, ArrowRight, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph, generateServiceSchema, generateHowToSchema } from '@/lib/structured-data'
import { whyHireFaqs } from '@/lib/page-faqs'

export const metadata = buildMetadata({
  title: 'Why Hire a Buyer\'s Agent for New Construction 55+ Homes | Dr. Jan Duffy',
  description:
    'Builder sales staff represent the builder. Dr. Jan Duffy represents 55+ buyers on new construction at Del Webb Lake Las Vegas and resale homes in Las Vegas, Henderson, and Summerlin. Call (702) 996-3758.',
  path: '/why-hire-an-agent',
  image: siteImages.newConstruction,
  keywords: ['buyer\'s agent new construction', 'Del Webb buyer\'s agent', '55+ community buyer representation'],
})

export default function WhyHireAnAgentPage() {
  const reasons = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary mb-4" />,
      title: 'Save Money & Get Better Deals',
      description: 'Builder contracts are designed to protect the builder, not you. An experienced buyer\'s agent understands builder incentives, upgrade pricing, and can negotiate better terms including closing cost credits, free upgrades, and price reductions.',
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary mb-4" />,
      title: 'Contract Review & Protection',
      description: 'New construction contracts are complex legal documents with numerous clauses, deadlines, and contingencies. Your buyer\'s agent reviews every detail, identifies potential issues, and ensures your interests are protected throughout the process.',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary mb-4" />,
      title: 'Advocate for Your Interests',
      description: 'The builder\'s sales representative works for the builder, not you. Your buyer\'s agent is your dedicated advocate, representing only your interests throughout negotiations, inspections, closing, and any post-closing issues.',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary mb-4" />,
      title: 'Inspection & Quality Assurance',
      description: 'New homes aren\'t always perfect. Your agent coordinates pre-drywall inspections, final walkthroughs, and identifies construction defects that need correction before closing. This protects your investment and ensures quality.',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary mb-4" />,
      title: 'Navigate Complex Processes',
      description: 'From design center selections and upgrade pricing to financing coordination and closing procedures, new construction involves complex processes. Your agent guides you through each step, avoiding costly mistakes.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary mb-4" />,
      title: 'Access to Expert Network',
      description: 'Experienced buyer\'s agents maintain relationships with lenders, inspectors, title companies, and contractors. This network ensures you receive professional, reliable service throughout your home purchase journey.',
    },
  ]

  const pageGraph = generatePageGraph({
    pageType: 'WebPage',
    name: 'Why Hire a Buyer\'s Agent for New Construction 55+ Homes',
    description:
      'Dr. Jan Duffy represents 55+ buyers on new construction so the builder\'s on-site agent is not your only advisor.',
    path: '/why-hire-an-agent',
    image: siteImages.newConstruction,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Why Hire an Agent', url: '/why-hire-an-agent' },
    ],
    faqs: whyHireFaqs,
    extra: [
      generateServiceSchema({
        name: 'New Construction Buyer Representation',
        description:
          'Contract review, inspections, and negotiations for Del Webb and other Las Vegas 55+ new homes.',
      }),
      generateHowToSchema({
        name: 'How to hire a 55+ buyer\'s agent before touring models',
        description: 'Register with a buyer\'s representative before visiting a Las Vegas builder model park.',
        steps: [
          { name: 'Call or email first', text: 'Contact Dr. Jan Duffy at (702) 996-3758 before your first builder visit.' },
          { name: 'Tour with representation', text: 'Tour Del Webb Lake Las Vegas and other 55+ communities with your agent of record.' },
          { name: 'Review the builder contract', text: 'Have your agent review deposits, upgrades, and inspection contingencies before you sign.' },
        ],
      }),
    ],
  })

  return (
    <div>
      <JsonLd id="why-hire-page-graph" data={pageGraph} />
      <PageHero
        image={siteImages.newConstruction}
        title="Why Hire a Buyer’s Agent for New Construction"
        subtitle="The on-site sales desk works for the builder. Dr. Jan Duffy works for you on Del Webb Lake Las Vegas and other 55+ purchases. Call (702) 996-3758."
        breadcrumbs={[{ label: 'Why Hire an Agent' }]}
        primaryCTA={{ text: 'Contact Dr. Duffy', href: '/contact' }}
        secondaryCTA={{ text: 'About Buyer Representation', href: '/about' }}
      />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Top Reasons to Hire a Buyer's Agent for New Construction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
                {reason.icon}
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Understanding the New Construction Purchase Process</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Buying a new construction home involves multiple stages, each with its own complexities and potential pitfalls. Without experienced representation, buyers often miss critical details, make expensive mistakes, or fail to protect their interests adequately. Understanding the process helps you appreciate why professional buyer representation is so valuable.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Initial Contract and Deposits</h3>
            <p>
              The initial contract phase is critical. Builder contracts typically favor the builder with numerous clauses that limit your rights and remedies. Your buyer's agent reviews these contracts carefully, negotiates more favorable terms, and ensures your deposits are properly protected with appropriate contingencies.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Design Center and Upgrades</h3>
            <p>
              Selecting options and upgrades is where many buyers overspend significantly. Builders often charge premium prices for upgrades that could be completed later at lower costs. Your agent helps you identify which upgrades add genuine value versus those you can do more cost-effectively after closing.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Construction Monitoring and Inspections</h3>
            <p>
              Throughout construction, your buyer's agent coordinates professional inspections at critical stages. Pre-drywall inspections identify issues before they're hidden behind walls. Final walkthroughs ensure everything is completed to specification. These inspections protect your investment and identify defects requiring correction.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Closing and Post-Closing Protection</h3>
            <p>
              Even after closing, issues may arise. Builders typically provide warranties, but enforcing warranty claims can be challenging. Your agent understands warranty processes and can help ensure you receive proper resolution of any defects or issues that appear after move-in.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">The Builder's Sales Representative vs. Your Buyer's Agent</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              One of the most important things to understand is the difference between the builder's sales representative and your buyer's agent. These roles serve entirely different purposes, and recognizing this difference is crucial to protecting your interests.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                  <h3 className="text-xl font-semibold">Builder's Representative</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span>Works exclusively for the builder's interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span>Maximizes builder profits and contract terms</span>
                  </li>
                  <li className="flex items-startSame gap-2">
                    <span className="text-warning">•</span>
                    <span>Limited ability to negotiate on your behalf</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span>May not disclose all available incentives or options</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-primary/5 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Your Buyer's Agent</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Works exclusively for your interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Negotiates on your behalf for best terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Provides independent advice and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ensures full disclosure of all information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Cost Savings: How Buyer's Agents Save You Money</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Many buyers wonder whether hiring an agent costs money when buying new construction. The answer is that buyer representation typically costs you nothing—builders pay buyer agent commissions—yet saves you significant money through better negotiations, avoiding overpriced upgrades, and securing incentives.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Builder Incentives and Credits</h3>
            <p>
              Experienced buyer's agents know what incentives are available and how to negotiate for closing cost credits, design center allowances, and other builder contributions. These negotiations can save thousands of dollars that you might not receive working directly with builder representatives.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Upgrade Cost Analysis</h3>
            <p>
              Builders charge premium prices for upgrades installed during construction. Your agent helps you identify which upgrades provide genuine value versus those you can complete more cost-effectively after closing. This analysis can save substantial amounts while still achieving your desired results.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">Price Negotiations</h3>
            <p>
              While many builders claim prices are non-negotiable, experienced buyer's agents understand when and how prices can be adjusted, particularly for inventory homes, homes with extended construction timelines, or market conditions that favor buyers.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Why Dr. Jan Duffy is Your Ideal Buyer's Representative</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Award-winning realtor Dr. Jan Duffy specializes exclusively in representing buyers purchasing new construction homes in Las Vegas 55+ communities, particularly Del Webb Lake Las Vegas. Her recognized excellence and specialized expertise provide you with representation that general-purpose agents simply cannot match.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Del Webb Lake Las Vegas Expertise
                </h3>
                <p className="text-sm">
                  Deep knowledge of Del Webb Lake Las Vegas, its floor plans, upgrade options, community amenities, and builder processes ensures you receive expert guidance specific to this community.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  55+ Community Specialization
                </h3>
                <p className="text-sm">
                  Specialized understanding of active adult community living, amenities, HOA considerations, and buyer needs specific to 55+ communities provides comprehensive representation.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  New Construction Focus
                </h3>
                <p className="text-sm">
                  Exclusive focus on new construction means understanding current builder incentives, contract terms, design processes, and construction timelines that affect your purchase.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Buyer Protection Priority
                </h3>
                <p className="text-sm">
                  As a dedicated buyer's representative, Dr. Jan Duffy works exclusively for your interests, ensuring your protection throughout the entire purchase process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Get Started with Expert Buyer Representation</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Don't navigate the new construction purchase process alone. Having Dr. Jan Duffy as your buyer's representative ensures you receive expert guidance, save money, and have an advocate working exclusively for your interests throughout your Del Webb Lake Las Vegas home purchase.
            </p>
            <p>
              Contact Dr. Jan Duffy today to learn more about buyer representation services for new construction homes. Our initial consultation is complimentary, and we'll explain how buyer representation protects your interests and saves you money during your home purchase.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Dr. Jan Duffy <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/communities/del-webb-lake-las-vegas">
                Learn About Del Webb Lake Las Vegas
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <FaqSection faqs={whyHireFaqs} />
    </div>
    </div>
  )
}

