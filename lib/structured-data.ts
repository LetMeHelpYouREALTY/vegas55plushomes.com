/**
 * Structured Data (JSON-LD) helpers
 * Following Google's SEO best practices and schema.org standards
 */

export interface BreadcrumbItem {
  name: string
  item: string
}

/**
 * Generates BreadcrumbList structured data
 * Improves SEO and can appear in search results as breadcrumbs
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

/**
 * Generates WebPage structured data
 * Provides additional context about the page
 */
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumbs,
}: {
  name: string
  description: string
  url: string
  breadcrumbs?: BreadcrumbItem[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    ...(breadcrumbs && {
      breadcrumb: generateBreadcrumbSchema(breadcrumbs),
    }),
  }
}

