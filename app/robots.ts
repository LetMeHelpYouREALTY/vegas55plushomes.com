import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.vegas55plushomes.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/test-rss'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

