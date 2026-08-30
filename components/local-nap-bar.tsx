import { Clock, MapPin, Navigation, Phone, Star } from 'lucide-react'
import { GOOGLE_MAPS_URL, PHONE_TEL, PHONE_DISPLAY, FULL_ADDRESS, SITE_NAME } from '@/lib/site-config'

export default function LocalNapBar() {
  return (
    <section className="border-y bg-muted/40">
      <div className="container mx-auto grid grid-cols-1 gap-4 px-4 py-6 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-semibold">{SITE_NAME}</p>
            <address className="text-sm not-italic text-muted-foreground">{FULL_ADDRESS}</address>
          </div>
        </div>
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-start gap-3 hover:text-primary"
        >
          <Phone className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-semibold">Call</p>
            <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
          </div>
        </a>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 hover:text-primary"
        >
          <Navigation className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-semibold">Directions</p>
            <p className="text-sm text-muted-foreground">Google Maps to Henderson office</p>
          </div>
        </a>
        <a
          href="https://www.google.com/search?q=Dr+Jan+Duffy+Vegas+55+Plus+Homes+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 hover:text-primary"
        >
          <Star className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-semibold">View Google Reviews</p>
            <p className="text-sm text-muted-foreground">Hours: Mon–Fri 9–6, Sat 10–4</p>
          </div>
        </a>
      </div>
      <p className="sr-only">
        Office hours: Monday through Friday 9:00 AM to 6:00 PM, Saturday 10:00 AM to 4:00 PM, Sunday by appointment.
        <Clock className="hidden" />
      </p>
    </section>
  )
}
