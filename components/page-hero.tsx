'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Breadcrumbs from '@/components/breadcrumbs'
import type { SiteImage } from '@/lib/site-images'

type Cta = { text: string; href: string }

type PageHeroProps = {
  image: SiteImage
  title: string
  subtitle?: string
  breadcrumbs?: Array<{ label: string; href?: string }>
  primaryCTA?: Cta
  secondaryCTA?: Cta
  priority?: boolean
}

export default function PageHero({
  image,
  title,
  subtitle,
  breadcrumbs,
  primaryCTA,
  secondaryCTA,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[420px] overflow-hidden lg:min-h-[520px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/20" />
      <div className="relative z-10 container mx-auto flex min-h-[420px] flex-col justify-end px-4 py-16 sm:px-6 lg:min-h-[520px] lg:px-8 lg:py-24">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-4 text-white/80 [&_a]:text-white/80 [&_a:hover]:text-white [&_span]:text-white">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p
            className="answer-first mt-6 max-w-3xl text-lg text-white/90 md:text-xl"
            data-speakable="true"
          >
            {subtitle}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryCTA && (
              <Button asChild size="lg">
                <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-white/10 text-white hover:bg-white hover:text-foreground"
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
