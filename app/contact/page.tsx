'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react'
import { lasVegasCommunities } from '@/lib/communities-data'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    community: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your message! We will contact you soon.')
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us | Las Vegas 55+ Real Estate Specialists</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-6">
            Get in touch with our Las Vegas 55+ real estate specialists. We're here to help you find your dream home in one of Las Vegas's premier active adult communities. Whether you're just beginning to explore options or you're ready to start your home search, we're ready to assist you.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Our team specializes exclusively in Las Vegas 55+ communities, providing expert guidance tailored to active adults seeking exceptional retirement living. Contact us today to schedule a consultation and learn how we can help you find your perfect Las Vegas 55+ home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="community" className="block text-sm font-medium mb-2">
                    Interested Community
                  </label>
                  <select
                    id="community"
                    value={formData.community}
                    onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md bg-background"
                  >
                    <option value="">Select a community</option>
                    {lasVegasCommunities.map((community) => (
                      <option key={community.slug} value={community.slug}>
                        {community.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md bg-background"
                    placeholder="Tell us about your 55+ home search needs, questions, or how we can help..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:7025551234" className="text-muted-foreground hover:text-foreground">
                      (702) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@vegas55plushomes.com" className="text-muted-foreground hover:text-foreground">
                      info@vegas55plushomes.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <address className="text-muted-foreground not-italic">
                      28 Lake Oasis St<br />
                      Henderson, NV 89011<br />
                      Serving Las Vegas & Henderson
                    </address>
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

        <section className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold mb-6">Why Contact Our Las Vegas 55+ Real Estate Team?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our specialized focus on Las Vegas 55+ communities means we can provide expert guidance that general real estate agents simply cannot match. We understand the unique aspects of active adult community living, from homeowner association structures to community cultures to amenity packages, ensuring you receive comprehensive information to make informed decisions.
            </p>
            <p>
              When you contact us, you'll speak with specialists who truly understand Las Vegas 55+ real estate. We can answer detailed questions about specific communities, provide market insights relevant to active adult properties, and offer guidance tailored to your unique needs and preferences. This specialized expertise makes all the difference in finding the perfect community and home match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border bg-card">
              <CheckCircle className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Free Consultations</h3>
              <p className="text-muted-foreground">
                We offer complimentary consultations to discuss your Las Vegas 55+ home search, answer questions, and provide guidance on communities that might match your preferences. There's no obligation—we're here to help you explore your options.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <CheckCircle className="h-6 w-6 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Virtual and In-Person Services</h3>
              <p className="text-muted-foreground">
                Whether you're local to Las Vegas or relocating from another state, we offer both virtual consultations and in-person services to accommodate your needs and preferences. We can help you begin your search remotely and transition to in-person tours when you're ready.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
