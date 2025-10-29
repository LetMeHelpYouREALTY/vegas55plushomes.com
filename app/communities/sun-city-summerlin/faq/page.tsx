'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is the age requirement for Sun City Summerlin?',
      answer: 'Sun City Summerlin is a 55+ community, which means at least one resident must be 55 years or older. No one under the age of 19 is allowed to reside permanently in the community, although grandchildren and other visitors may visit for limited periods.',
    },
    {
      question: 'What types of homes are available in Sun City Summerlin?',
      answer: 'Sun City Summerlin offers a variety of home types including single-family detached homes, attached villas, and condominiums. Home sizes range from approximately 1,200 square feet to over 3,500 square feet, with various floor plans to choose from.',
    },
    {
      question: 'What amenities does Sun City Summerlin offer?',
      answer: 'The community features multiple championship golf courses, state-of-the-art fitness centers, swimming pools, tennis courts, pickleball courts, arts and crafts studios, libraries, restaurants, and numerous clubs and organizations. There are multiple recreation centers throughout the community.',
    },
    {
      question: 'Are there homeowner association fees?',
      answer: 'Yes, Sun City Summerlin has homeowner association (HOA) fees that cover maintenance of common areas, amenities, security, and some utilities. The fees vary depending on the type of home and location within the community.',
    },
    {
      question: 'Is Sun City Summerlin pet-friendly?',
      answer: 'Yes, Sun City Summerlin is pet-friendly with certain restrictions. Typically, residents are allowed to have pets, but there may be limits on the number and size of pets. Specific pet policies should be verified with the HOA.',
    },
    {
      question: 'What is the resale value like in Sun City Summerlin?',
      answer: 'Sun City Summerlin has maintained strong property values due to its desirable location, extensive amenities, and well-maintained homes. The community\'s reputation and active lifestyle appeal contribute to consistent demand in the Las Vegas real estate market.',
    },
    {
      question: 'Can I customize or remodel my home?',
      answer: 'Yes, homeowners can customize and remodel their homes, subject to HOA approval for exterior changes. Interior modifications typically have more flexibility, but it\'s always best to check with the HOA for specific guidelines.',
    },
    {
      question: 'How do I schedule a tour of Sun City Summerlin?',
      answer: 'You can schedule a tour by contacting our team through the contact form on this website, calling us at (702) 555-1234, or emailing info@vegas55plushomes.com. We offer personalized tours of available homes and community amenities.',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/communities" className="hover:text-foreground">Communities</a> / <a href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</a> / FAQ
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions about Sun City Summerlin</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Find answers to commonly asked questions about living in Sun City Summerlin, Las Vegas's premier 55+ community.
        </p>
      </div>

      <div className="max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg border bg-card">
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold pr-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Have additional questions about Sun City Summerlin?
        </p>
        <a href="/contact" className="text-primary hover:underline font-medium">
          Contact Us →
        </a>
      </div>
    </div>
  )
}

