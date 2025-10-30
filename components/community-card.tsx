import Link from 'next/link'
import { MapPin, Home, ArrowRight, Sparkles } from 'lucide-react'
import { Community } from '@/lib/communities-data'

interface CommunityCardProps {
  community: Community
  featured?: boolean
}

export default function CommunityCard({ community, featured = false }: CommunityCardProps) {
  return (
    <Link
      href={`/communities/${community.slug}`}
      className="group relative rounded-xl border bg-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold shadow-lg">
            <Sparkles className="h-3 w-3" />
            Featured
          </span>
        </div>
      )}

      <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-muted relative overflow-hidden" aria-label={`${community.name} community image`}>
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <Home className="h-20 w-20 text-muted-foreground/50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span>{community.location}</span>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {community.name}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {community.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-4">
          {community.homesForSale > 0 && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium">
              <Home className="h-3.5 w-3.5" />
              <span>{community.homesForSale} Available</span>
            </div>
          )}
          {community.priceRange && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted text-foreground rounded-lg text-sm">
              <span>From {community.priceRange}</span>
            </div>
          )}
        </div>

        <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

