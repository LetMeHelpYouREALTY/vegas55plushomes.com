'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Info, HelpCircle } from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is the age requirement for Sun City Summerlin?',
      answer: 'Sun City Summerlin is a 55+ community, which means at least one resident must be 55 years or older. No one under the age of 19 is allowed to reside permanently in the community, although grandchildren and other visitors may visit for limited periods. This age restriction helps maintain the active adult focus and ensures that residents share similar life stages and interests, enhancing the community experience for all residents.',
      category: 'Community Requirements',
    },
    {
      question: 'What types of homes are available in Sun City Summerlin?',
      answer: 'Sun City Summerlin offers a variety of home types including single-family detached homes, attached villas, and condominiums. Home sizes range from approximately 1,200 square feet to over 3,500 square feet, with 17 distinct floor plans to choose from. The community\'s diverse home options ensure that residents can find homes that match their preferences for size, style, and maintenance level while enjoying access to all community amenities.',
      category: 'Home Options',
    },
    {
      question: 'What amenities does Sun City Summerlin offer?',
      answer: 'Sun City Summerlin features three championship golf courses, four recreation centers, state-of-the-art fitness centers, swimming pools, tennis courts, pickleball courts, arts and crafts studios, libraries, computer labs, restaurants, and over 80 clubs and organizations. The extensive amenity package rivals luxury resorts and provides residents with everything needed for an active, engaged retirement lifestyle without ever leaving the community.',
      category: 'Amenities',
    },
    {
      question: 'Are there homeowner association fees?',
      answer: 'Yes, Sun City Summerlin has homeowner association (HOA) fees that cover maintenance of common areas, landscaping, exterior maintenance, amenities, security, and some utilities. The fees vary depending on the type of home and location within the community. Understanding what's included in HOA fees helps residents evaluate the value proposition and total cost of living in the community.',
      category: 'Fees & Costs',
    },
    {
      question: 'Is Sun City Summerlin pet-friendly?',
      answer: 'Yes, Sun City Summerlin is pet-friendly with certain restrictions. Typically, residents are allowed to have pets, but there may be limits on the number and size of pets. Specific pet policies should be verified with the HOA, as policies may vary and it's important to understand all restrictions before purchasing a home in the community.',
      category: 'Policies',
    },
    {
      question: 'What is the resale value like in Sun City Summerlin?',
      answer: 'Sun City Summerlin has maintained strong property values due to its desirable location in Summerlin, extensive amenities, well-maintained homes, and established reputation. The community's combination of location, amenities, and active lifestyle appeal contributes to consistent demand in the Las Vegas real estate market. Property values have historically been stable or appreciating, making it a sound investment for active adults.',
      category: 'Investment & Value',
    },
    {
      question: 'Can I customize or remodel my home?',
      answer: 'Yes, homeowners can customize and remodel their homes, subject to HOA approval for exterior changes. Interior modifications typically have more flexibility, but it's always best to check with the HOA for specific guidelines before beginning work. The HOA approval process ensures that changes maintain community standards while allowing residents to personalize their homes.',
      category: 'Homeownership',
    },
    {
      question: 'How do I schedule a tour of Sun City Summerlin?',
      answer: 'You can schedule a tour by contacting our team through the contact form on this website, calling us at (702) 555-1234, or emailing info@vegas55plushomes.com. We offer personalized tours of available homes and community amenities. Tours typically include visits to recreation centers, golf courses, and available homes, helping you experience the community firsthand.',
      category: 'Tours & Visits',
    },
    {
      question: 'What makes Sun City Summerlin different from other Las Vegas 55+ communities?',
      answer: 'Sun City Summerlin's size and comprehensive amenities set it apart. With 7,700+ homes across 2,400+ acres, three championship golf courses, and four recreation centers, the community offers unmatched scale and diversity of amenities. The Summerlin location provides access to master-plan amenities while maintaining the specialized focus of a 55+ community, creating a unique combination that appeals to many active adults.',
      category: 'Community Comparison',
    },
    {
      question: 'Are there activities and social opportunities for residents?',
      answer: 'Absolutely. Sun City Summerlin features over 80 clubs and organizations covering diverse interests from arts and crafts to travel to volunteer work. The community hosts hundreds of events monthly, from fitness classes and hobby groups to social gatherings and educational programs. This extensive social calendar ensures that residents can be as active and engaged as they wish in community life.',
      category: 'Lifestyle',
    },
  ]

  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/communities" className="hover:text-foreground">Communities</Link> / <Link href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</Link> / FAQ
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions about Sun City Summerlin | Complete Community Guide</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Find comprehensive answers to commonly asked questions about living in Sun City Summerlin, Las Vegas's premier 55+ community. This FAQ covers everything from community requirements and home options to amenities, policies, and lifestyle questions.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Whether you're evaluating Sun City Summerlin as a potential home or seeking specific information about community features, these frequently asked questions provide detailed answers to help you understand what makes this community special and what to expect when living here.
        </p>
      </div>

      <div className="max-w-4xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Most Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border bg-card">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-start gap-3 flex-grow">
                    <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-semibold pr-4">{faq.question}</span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="ml-8">
                      <p className="text-muted-foreground whitespace-pre-wrap">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Understanding Sun City Summerlin: Additional Information</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin represents one of the largest and most established 55+ communities in Las Vegas, with a reputation built over decades of providing exceptional active adult living. The community's scale and comprehensive amenities create opportunities for engagement, recreation, and social connection that smaller communities simply cannot match.
            </p>
            <p>
              Living in Sun City Summerlin means being part of a vibrant, active community where neighbors share similar life stages and interests. The community's extensive amenities, clubs, and activities ensure that residents can pursue their passions, develop new interests, and build lasting friendships with like-minded neighbors.
            </p>
            <p>
              The Summerlin location provides additional advantages, including access to master-plan amenities, proximity to healthcare and shopping, and the prestige associated with this premier Las Vegas area. These location benefits, combined with Sun City Summerlin's comprehensive amenities, create a compelling value proposition for active adults seeking exceptional retirement living.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Getting More Information</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              If you have additional questions about Sun City Summerlin that aren't answered in this FAQ, our team is here to help. We can provide detailed information about specific aspects of the community, help you understand how Sun City Summerlin might match your preferences, and guide you through the process of learning more about available homes and community features.
            </p>
            <p>
              Contact us to schedule a consultation, tour, or simply to have your questions answered. Our specialized knowledge of Sun City Summerlin ensures you receive accurate, comprehensive information that helps you make informed decisions about whether this community matches your vision for active adult living.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Our Team
            </Link>
            <Link
              href="/communities/sun-city-summerlin/schedule-tour"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
