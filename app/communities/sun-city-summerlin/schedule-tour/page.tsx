'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react'

export default function ScheduleTourPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon to confirm your tour.')
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/communities" className="hover:text-foreground">Communities</a> / <a href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</a> / Schedule Tour
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule a Tour of Sun City Summerlin</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Experience Sun City Summerlin in person. Schedule a personalized tour to explore homes, amenities, and discover why this is one of Las Vegas's premier 55+ communities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Request a Tour</h2>
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
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-md bg-background"
              />
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-2 border rounded-md bg-background"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-2 border rounded-md bg-background"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 6 PM)</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border rounded-md bg-background"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Schedule Tour
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>Community overview and location benefits</span>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <span>Tour of available homes</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <span>Visit to amenities and facilities</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:7025551234" className="hover:text-foreground">(702) 555-1234</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@vegas55plushomes.com" className="hover:text-foreground">info@vegas55plushomes.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

