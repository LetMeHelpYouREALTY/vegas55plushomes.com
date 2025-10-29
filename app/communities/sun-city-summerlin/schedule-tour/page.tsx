'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Phone, Mail, Home, Trophy, Users, CheckCircle, ArrowRight } from 'lucide-react'

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
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/communities" className="hover:text-foreground">Communities</Link> / <Link href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</Link> / Schedule Tour
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule a Tour of Sun City Summerlin | Experience Premier 55+ Living</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Experience Sun City Summerlin in person. Schedule a personalized tour to explore homes, amenities, and discover why this is one of Las Vegas's premier 55+ communities. Our expert team will guide you through everything you need to know about living in this exceptional active adult community.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A personal tour of Sun City Summerlin allows you to experience the community's world-class amenities, diverse home options, and vibrant lifestyle firsthand. Seeing homes, recreation centers, golf courses, and neighborhood areas in person helps you determine if Sun City Summerlin matches your vision for active adult living.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Request Your Personalized Tour</h2>
            <p className="text-muted-foreground mb-6">
              Complete the form below to schedule your tour of Sun City Summerlin. We'll contact you within 24 hours to confirm your preferred date and time, and customize your tour based on your interests and preferences.
            </p>
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
                  aria-label="Preferred tour time"
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
                  placeholder="Tell us about your interests, specific homes you'd like to see, or any questions you have..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Schedule Your Tour
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                What to Expect on Your Tour
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Community Overview</p>
                    <p className="text-sm">Comprehensive introduction to Sun City Summerlin including location benefits, community history, and overall lifestyle.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Home Tours</p>
                    <p className="text-sm">View available homes matching your preferences, with opportunities to see different floor plans and neighborhoods.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Amenities Experience</p>
                    <p className="text-sm">Visit recreation centers, golf courses, fitness facilities, and other amenities to experience the community's offerings firsthand.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Neighborhood Exploration</p>
                    <p className="text-sm">Drive through different neighborhoods to see home styles, landscaping, and understand the community's layout and character.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Q&A Session</p>
                    <p className="text-sm">Comprehensive opportunity to ask questions about homes, amenities, community life, HOA details, and any other topics important to your decision.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Why Tour Sun City Summerlin
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A personal tour provides insights you simply can't get from photos or descriptions. Seeing homes in person, experiencing amenities firsthand, and driving through neighborhoods helps you truly understand whether Sun City Summerlin matches your vision for active adult living.
                </p>
                <p>
                  Our experienced team specializes in Sun City Summerlin and can answer detailed questions about community life, amenities, home features, and what it's really like to live here. We'll customize your tour based on your interests and help you see everything that matters to your decision.
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:7025551234" className="hover:text-foreground">(702) 555-1234</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:DrDuffySells@Vegas55PlusHomes.com" className="hover:text-foreground">DrDuffySells@Vegas55PlusHomes.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Tour Availability</p>
                    <p className="text-sm">Tours available daily, 9 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-6">Preparing for Your Sun City Summerlin Tour</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Preparing for your tour helps you make the most of your visit and ensures you see everything that matters to your decision. Consider your priorities for location, home size, floor plans, and amenities before your tour so we can customize your experience accordingly.
            </p>
            <p>
              Come with questions about community life, amenities, HOA fees and what they cover, home maintenance responsibilities, and anything else important to your decision. Don't hesitate to ask about topics specific to your situation, whether that's downsizing considerations, hosting family, or pursuing specific hobbies or interests.
            </p>
            <h3 className="text-2xl font-semibold text-foreground mt-6 mb-4">What to Bring</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>List of questions or priorities you'd like to address</li>
              <li>Notes about homes you've seen online that interest you</li>
              <li>Information about your timeline and decision-making process</li>
              <li>Camera or smartphone to take photos of homes and amenities you like</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">After Your Tour</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Following your tour, we'll follow up to answer any additional questions and provide information about homes that interested you. We can also connect you with resources for financing, moving, and other aspects of the home-buying process.
            </p>
            <p>
              Take time after your tour to reflect on what you experienced and determine your next steps. Whether you're ready to move forward, want to see additional homes, or need more information, we're here to support you through every stage of your Sun City Summerlin journey.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/communities/sun-city-summerlin"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Learn More About Sun City Summerlin <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/communities/sun-city-summerlin/homes-for-sale"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              View Available Homes
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
