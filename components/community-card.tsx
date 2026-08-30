import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Home, ArrowRight, Sparkles } from 'lucide-react'
import { Community } from '@/lib/communities-data'
import { getCommunityImage } from '@/lib/site-images'

interface CommunityCardProps {
  community: Community
  featured?: boolean
}

export default function CommunityCard({ community, featured = false }: CommunityCardProps) {
  const image = getCommunityImage(community)

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

      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image.src}
          alt={`${community.name} 55+ homes in ${community.city}, Nevada — ${image.alt}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
