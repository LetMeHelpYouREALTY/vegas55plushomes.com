/**
 * Structured Data Utilities
 * 
 * Centralized functions to generate JSON-LD structured data for Google Search.
 * These schemas enhance search appearance and enable rich results.
 */

const SITE_URL = 'https://www.vegas55plushomes.com'
const SITE_NAME = 'Del Webb Lake Las Vegas 55+ REALTOR® | Homes Dr. Jan Duffy'

/**
 * Organization Schema
 * Represents the business organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+17029963758',
      contactType: 'Sales',
      areaServed: ['US'],
      availableLanguage: ['English'],
    },
    sameAs: [],
  }
}

/**
 * WebSite Schema with SearchAction
 * Helps Google understand site structure and enables sitelinks search box
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/homes-for-sale?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * BreadcrumbList Schema
 * Improves navigation understanding and may enable breadcrumb display in search
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}

/**
 * FAQPage Schema
 * Enables FAQ rich snippets in search results
 */
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Article Schema
 * For blog posts and articles to enable rich article results
 */
export function generateArticleSchema({
  headline,
  description,
  author = 'Dr. Jan Duffy',
  datePublished,
  dateModified,
  image,
  url,
}: {
  headline: string
  description: string
  author?: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || `${SITE_URL}/og-image.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${SITE_URL}${url}`,
    },
  }
}

/**
 * Review Schema (AggregateRating)
 * For review pages to show star ratings in search
 */
export function generateReviewSchema({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: bestRating.toString(),
      worstRating: worstRating.toString(),
    },
  }
}

/**
 * Individual Review Schema
 * For individual review items
 */
export function generateIndividualReviewSchema({
  author,
  rating,
  reviewBody,
  datePublished,
  itemReviewed = SITE_NAME,
}: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
  itemReviewed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    itemReviewed: {
      '@type': 'Organization',
      name: itemReviewed,
    },
  }
}

/**
 * RealEstateListing Schema (for homes for sale page)
 */
export function generateRealEstateListingSchema({
  name,
  description,
  image,
  address,
  priceRange,
  numberOfBedrooms,
  numberOfBathroomsTotal,
  floorSize,
}: {
  name: string
  description: string
  image?: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
  }
  priceRange: string
  numberOfBedrooms?: number
  numberOfBathroomsTotal?: number
  floorSize?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name,
    description,
    image: image || `${SITE_URL}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      ...address,
      addressCountry: 'US',
    },
    priceRange,
    numberOfBedrooms,
    numberOfBathroomsTotal,
    floorSize: floorSize
      ? {
          '@type': 'QuantitativeValue',
          value: floorSize,
        }
      : undefined,
  }
}

/**
 * LocalBusiness/RealEstateAgent Schema (enhanced)
 * Already exists in layout.tsx but provided here for reference/updates
 */
export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy - Del Webb Lake Las Vegas 55+ REALTOR®',
    description:
      'Dr. Jan Duffy - Las Vegas 55+ real estate specialist serving Sun City Summerlin, Del Webb Lake Las Vegas, and all active adult communities',
    url: SITE_URL,
    telephone: '+17029963758',
    email: 'DrDuffySells@Vegas55PlusHomes.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '28 Lake Oasis St',
      addressLocality: 'Henderson',
      addressRegion: 'NV',
      postalCode: '89011',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Las Vegas',
        postalCode: '89134',
      },
      {
        '@type': 'City',
        name: 'Henderson',
        postalCode: '89011',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.1699',
      longitude: '-115.1398',
    },
    priceRange: '$$',
  }
}

/**
 * Service Schema
 * For service pages
 */
export function generateServiceSchema({
  name,
  description,
  provider = SITE_NAME,
  areaServed = ['Las Vegas', 'Henderson'],
  serviceType = 'Real Estate Services',
}: {
  name: string
  description: string
  provider?: string
  areaServed?: string[]
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType,
  }
}
