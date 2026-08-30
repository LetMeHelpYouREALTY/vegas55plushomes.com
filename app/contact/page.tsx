import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react'
import EnhancedContactForm from '@/components/enhanced-contact-form'
import PageHero from '@/components/page-hero'
import JsonLd from '@/components/json-ld'
import FaqSection from '@/components/faq-section'
import { siteImages } from '@/lib/site-images'
import { buildMetadata } from '@/lib/page-metadata'
import { generatePageGraph } from '@/lib/structured-data'
import { contactFaqs } from '@/lib/page-faqs'
import { EMAIL, FULL_ADDRESS, GOOGLE_MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from '@/lib/site-config'

export const metadata = buildMetadata({
  title: 'Contact Dr. Jan Duffy | Las Vegas 55+ Homes | (702) 996-3758',
  description:
    'Contact Dr. Jan Duffy at 28 Lake Oasis St, Henderson, NV 89011. Call (702) 996-3758 for Las Vegas, Henderson, and Summerlin 55+ homebuyer representation.',
  path: '/contact',
  image: siteImages.lake,
  keywords: ['contact Las Vegas 55+ realtor', 'Dr. Jan Duffy phone', 'Henderson real estate office'],
})

export default function ContactPage() {
  const pageGraph = generatePageGraph({
    pageType: 'ContactPage',
    name: 'Contact Dr. Jan Duffy | Las Vegas 55+ Homes',
    description:
      'Contact Dr. Jan Duffy at 28 Lake Oasis St, Henderson, NV 89011 or (702) 996-3758 for 55+ buyer representation.',
    path: '/contact',
    image: siteImages.lake,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
    faqs: contactFaqs,
  })

  return (
    <div>
      <JsonLd id="contact-page-graph" data={pageGraph} />
      <PageHero
        image={siteImages.lake}
        title="Contact Dr. Jan Duffy"
        subtitle="28 Lake Oasis St, Henderson, NV 89011. Call (702) 996-3758 for Las Vegas 55+ buyer representation."
        breadcrumbs={[{ label: 'Contact' }]}
        primaryCTA={{ text: 'Call (702) 996-3758', href: `tel:${PHONE_TEL}` }}
      />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <EnhancedContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href={`tel:${PHONE_TEL}`} className="text-muted-foreground hover:text-foreground">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-muted-foreground hover:text-foreground">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <address className="text-muted-foreground not-italic">
                      {FULL_ADDRESS}
                      <br />
                      Serving Las Vegas &amp; Henderson
                    </address>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-primary hover:underline"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <Clock className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: By Appointment
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <MessageSquare className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-muted-foreground">
                We typically respond to inquiries within 24 hours. For urgent matters, please call us directly at the phone number above.
              </p>
            </div>
          </div>
        </div>

        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold mb-4">Office map</h2>
          <iframe
            title="Map to 28 Lake Oasis St, Henderson, NV 89011"
            src="https://maps.google.com/maps?q=28%20Lake%20Oasis%20St%20Henderson%20NV%2089011&z=15&output=embed"
            className="h-72 w-full rounded-lg border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        <section className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold mb-6">Why Contact Our Las Vegas 55+ Real Estate Team?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="answer-first" data-speakable="true">
              Dr. Jan Duffy specializes in Las Vegas 55+ communities, so buyers get HOA, amenity, and new-construction contract guidance that generalist agents often miss.
            </p>
            <p>
              When you contact us, you speak with a specialist who can answer questions about specific communities, current inventory, and buyer representation for resale or new construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <CheckCircle className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Free Consultations</h3>
              <p className="text-muted-foreground">
                Complimentary consultations cover your 55+ search, community shortlist, and next tour dates. No obligation.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <CheckCircle className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Virtual and In-Person Services</h3>
              <p className="text-muted-foreground">
                Local and out-of-state buyers can start with video walkthroughs, then tour in person at Del Webb Lake Las Vegas and other 55+ communities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <FaqSection faqs={contactFaqs} />
    </div>
  )
}
