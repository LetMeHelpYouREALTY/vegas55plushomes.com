'use client'

import Image from 'next/image'
import type { SiteImage } from '@/lib/site-images'

type SitePhotoProps = {
  image: SiteImage
  alt?: string
  className?: string
  sizes?: string
  priority?: boolean
}

export default function SitePhoto({
  image,
  alt,
  className = 'aspect-video',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
}: SitePhotoProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={alt ?? image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  )
}
