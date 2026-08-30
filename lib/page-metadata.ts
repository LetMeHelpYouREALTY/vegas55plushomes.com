import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/site-config'
import { absoluteImageUrl, siteImages, type SiteImage } from '@/lib/site-images'

export function buildMetadata({
  title,
  description,
  path,
  image = siteImages.og,
  keywords,
}: {
  title: string
  description: string
  path: string
  image?: SiteImage
  keywords?: string[]
}): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  const imageUrl = absoluteImageUrl(image)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}
