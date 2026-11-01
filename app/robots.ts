import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.vegas55plushomes.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Do not disallow /_next/: Googlebot needs the JS/CSS bundles to render pages.
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

