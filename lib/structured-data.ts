import {
  ADDRESS_COUNTRY,
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  AGENT_ID,
  AGENT_NAME,
  EMAIL,
  FULL_ADDRESS,
  GEO,
  GOOGLE_MAPS_URL,
  LICENSE,
  OPENING_HOURS,
  ORG_ID,
  PERSON_ID,
  PHONE_SCHEMA,
  POSTAL_CODE,
  SITE_NAME,
  SITE_URL,
  STREET_ADDRESS,
  WEBSITE_ID,
} from '@/lib/site-config'
import { absoluteImageUrl, siteImages, type SiteImage } from '@/lib/site-images'

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: STREET_ADDRESS,
  addressLocality: ADDRESS_LOCALITY,
  addressRegion: ADDRESS_REGION,
  postalCode: POSTAL_CODE,
  addressCountry: ADDRESS_COUNTRY,
}

const geoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: GEO.latitude,
  longitude: GEO.longitude,
}

const openingHoursSpecification = OPENING_HOURS.map((entry) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: entry.days,
  opens: entry.opens,
  closes: entry.closes,
}))

export function generateImageObjectSchema(image: SiteImage) {
  return {
    '@type': 'ImageObject',
    '@id': `${absoluteImageUrl(image)}#image`,
    contentUrl: absoluteImageUrl(image),
    url: absoluteImageUrl(image),
    name: image.name,
    caption: image.caption,
    description: image.description,
    width: image.width,
    height: image.height,
    encodingFormat: image.localSrc.endsWith('.png') ? 'image/png' : 'image/jpeg',
    representativeOfPage: true,
    creator: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_NAME,
    },
    copyrightHolder: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_NAME,
    },
    creditText: SITE_NAME,
    acquireLicensePage: `${SITE_URL}/contact`,
    contentLocation: {
      '@type': 'Place',
      name: 'Las Vegas Valley, Nevada',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        addressCountry: 'US',
      },
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: generateImageObjectSchema(siteImages.logo),
    image: absoluteImageUrl(siteImages.og),
    telephone: PHONE_SCHEMA,
    email: EMAIL,
    address: postalAddress,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_SCHEMA,
      contactType: 'Sales',
      areaServed: ['US'],
      availableLanguage: ['English'],
    },
  }
}

export function generatePersonSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: AGENT_NAME,
    jobTitle: "Buyer's Representative",
    description:
      'Dr. Jan Duffy is a Nevada REALTOR® (S.0197614) who represents buyers of 55+ homes in Las Vegas, Henderson, and Summerlin, including Del Webb at Lake Las Vegas and Sun City Summerlin.',
    telephone: PHONE_SCHEMA,
    email: EMAIL,
    url: `${SITE_URL}/about`,
    image: generateImageObjectSchema(siteImages.headshot),
    worksFor: { '@id': ORG_ID },
    address: postalAddress,
  }
}

export function generateRealEstateAgentSchema() {
  return {
    '@type': 'RealEstateAgent',
    '@id': AGENT_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    description:
      'Dr. Jan Duffy represents buyers of 55+ homes in Sun City Summerlin, Del Webb Lake Las Vegas, Sun City Anthem, and other Las Vegas Valley active adult communities. Nevada license S.0197614.',
    url: SITE_URL,
    telephone: PHONE_SCHEMA,
    email: EMAIL,
    image: absoluteImageUrl(siteImages.heroHome),
    logo: absoluteImageUrl(siteImages.logo),
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Wire Transfer',
    address: postalAddress,
    geo: geoCoordinates,
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification,
    areaServed: [
      { '@type': 'City', name: 'Las Vegas', addressRegion: 'NV', addressCountry: 'US' },
      { '@type': 'City', name: 'Henderson', addressRegion: 'NV', addressCountry: 'US' },
      { '@type': 'City', name: 'Summerlin', addressRegion: 'NV', addressCountry: 'US' },
      { '@type': 'City', name: 'North Las Vegas', addressRegion: 'NV', addressCountry: 'US' },
    ],
    knowsAbout: [
      'Las Vegas 55+ homes',
      'Sun City Summerlin',
      'Del Webb Lake Las Vegas',
      'Sun City Anthem',
      'New construction buyer representation',
      'Active adult communities',
    ],
    employee: { '@id': PERSON_ID },
    identifier: LICENSE,
  }
}

export function generateWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
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

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}

export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
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

export function generateArticleSchema({
  headline,
  description,
  author = AGENT_NAME,
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
  image?: SiteImage
  url: string
}) {
  const img = image ?? siteImages.og
  return {
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_NAME,
      logo: generateImageObjectSchema(siteImages.logo),
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: generateImageObjectSchema(img),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${SITE_URL}${url}`,
    },
  }
}

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
    '@type': 'Organization',
    '@id': ORG_ID,
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
      '@id': ORG_ID,
    },
  }
}

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
  image?: SiteImage
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
  const img = image ?? siteImages.newConstruction
  return {
    '@type': 'RealEstateListing',
    name,
    description,
    image: generateImageObjectSchema(img),
    url: `${SITE_URL}/homes-for-sale`,
    address: {
      '@type': 'PostalAddress',
      ...address,
      addressCountry: 'US',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      price: priceRange,
    },
    numberOfBedrooms,
    numberOfBathroomsTotal,
    floorSize: floorSize
      ? {
          '@type': 'QuantitativeValue',
          value: floorSize,
          unitCode: 'FTK',
        }
      : undefined,
  }
}

export function generateServiceSchema({
  name,
  description,
  provider = SITE_NAME,
  areaServed = ['Las Vegas', 'Henderson', 'Summerlin'],
  serviceType = 'Real Estate Buyer Representation',
}: {
  name: string
  description: string
  provider?: string
  areaServed?: string[]
  serviceType?: string
}) {
  return {
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'RealEstateAgent',
      '@id': AGENT_ID,
      name: provider,
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType,
  }
}

export function generateHowToSchema({
  name,
  description,
  steps,
}: {
  name: string
  description: string
  steps: Array<{ name: string; text: string }>
}) {
  return {
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

export function generateItemListSchema({
  name,
  description,
  items,
}: {
  name: string
  description: string
  items: Array<{ name: string; url: string; image?: SiteImage }>
}) {
  return {
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
      image: item.image ? absoluteImageUrl(item.image) : undefined,
    })),
  }
}

export function generateResidenceCommunitySchema({
  name,
  description,
  url,
  image,
  city,
  amenities,
}: {
  name: string
  description: string
  url: string
  image: SiteImage
  city: string
  amenities: string[]
}) {
  return {
    '@type': 'Residence',
    name,
    description,
    url: url.startsWith('http') ? url : `${SITE_URL}${url}`,
    image: generateImageObjectSchema(image),
    address: {
      '@type': 'PostalAddress',
      addressLocality: city,
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    amenityFeature: amenities.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
      value: true,
    })),
  }
}

type PageType =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'FAQPage'
  | 'ItemPage'
  | 'ProfilePage'
  | 'SearchResultsPage'

export function generatePageGraph({
  pageType = 'WebPage',
  name,
  description,
  path,
  image,
  breadcrumbs,
  faqs,
  extra = [],
  datePublished,
  dateModified,
}: {
  pageType?: PageType
  name: string
  description: string
  path: string
  image: SiteImage
  breadcrumbs: Array<{ name: string; url: string }>
  faqs?: Array<{ question: string; answer: string }>
  extra?: object[]
  datePublished?: string
  dateModified?: string
}) {
  const pageUrl = `${SITE_URL}${path === '/' ? '' : path}`
  const pageId = `${pageUrl}#webpage`
  const imageObject = generateImageObjectSchema(image)

  const webPage = {
    '@type': pageType,
    '@id': pageId,
    url: pageUrl,
    name,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': AGENT_ID },
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    primaryImageOfPage: { '@id': imageObject['@id'] },
    image: imageObject,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.answer-first', '[data-speakable="true"]'],
    },
    breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  }

  const graph: object[] = [
    generateOrganizationSchema(),
    generatePersonSchema(),
    generateRealEstateAgentSchema(),
    generateWebSiteSchema(),
    webPage,
    imageObject,
    { '@id': `${pageUrl}#breadcrumb`, ...generateBreadcrumbSchema(breadcrumbs) },
  ]

  if (faqs && faqs.length > 0) {
    graph.push({
      '@id': `${pageUrl}#faq`,
      ...generateFAQPageSchema(faqs),
      url: pageUrl,
      mainEntityOfPage: { '@id': pageId },
    })
  }

  graph.push(...extra)

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export const NAP = {
  name: SITE_NAME,
  agent: AGENT_NAME,
  street: STREET_ADDRESS,
  city: ADDRESS_LOCALITY,
  region: ADDRESS_REGION,
  postalCode: POSTAL_CODE,
  fullAddress: FULL_ADDRESS,
  phoneDisplay: '(702) 996-3758',
  phoneTel: '7029963758',
  email: EMAIL,
  mapsUrl: GOOGLE_MAPS_URL,
}
