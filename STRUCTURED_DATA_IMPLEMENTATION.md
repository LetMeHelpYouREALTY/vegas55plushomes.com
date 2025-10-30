# Structured Data Implementation Guide

## Overview

This document outlines the structured data (JSON-LD) implementations for enhanced Google Search appearance and rich results.

## Implemented Structured Data Types

### 1. **RealEstateAgent Schema** ✅
- **Location:** `app/layout.tsx`
- **Purpose:** Identifies Dr. Jan Duffy as a real estate agent
- **Rich Results:** Local business knowledge panel, enhanced search results
- **Properties:**
  - Name, description, contact information
  - Physical address (28 Lake Oasis St, Henderson, NV 89011)
  - Area served (Las Vegas, Henderson)
  - Geographic coordinates
  - Price range

### 2. **Organization Schema** ✅
- **Location:** `app/layout.tsx`
- **Purpose:** Identifies the business organization
- **Rich Results:** Enhanced knowledge panel
- **Properties:**
  - Organization name
  - Contact point (phone, type, area served)
  - Languages available

### 3. **WebSite Schema with SearchAction** ✅
- **Location:** `app/layout.tsx`
- **Purpose:** Enables sitelinks search box in Google Search
- **Rich Results:** Search box in Google search results
- **Properties:**
  - Site name and URL
  - Search action with query input template

### 4. **FAQPage Schema** ✅
- **Location:** `app/communities/sun-city-summerlin/faq/page.tsx`
- **Purpose:** Enables FAQ rich snippets
- **Rich Results:** FAQ accordion in search results
- **Properties:**
  - Multiple Q&A pairs
  - Question and answer text

### 5. **Article Schema** ✅
- **Location:** `app/blog/google-trends-insights/page.tsx`
- **Purpose:** Identifies blog posts as articles
- **Rich Results:** Article rich snippets, date, author
- **Properties:**
  - Headline, description
  - Author information
  - Publisher information
  - Publication date
  - Featured image

### 6. **AggregateRating Schema** ✅
- **Location:** `app/reviews/page.tsx`
- **Purpose:** Shows star ratings and review count
- **Rich Results:** Star ratings in search results
- **Properties:**
  - Rating value (5 out of 5)
  - Review count
  - Best/worst rating

## Structured Data Library

**File:** `lib/structured-data.ts`

Centralized utility functions for generating structured data:

- `generateOrganizationSchema()` - Organization schema
- `generateWebSiteSchema()` - WebSite with SearchAction
- `generateBreadcrumbSchema()` - Breadcrumb navigation
- `generateFAQPageSchema()` - FAQ rich snippets
- `generateArticleSchema()` - Article/blog post schema
- `generateReviewSchema()` - Aggregate rating schema
- `generateIndividualReviewSchema()` - Individual review items
- `generateRealEstateListingSchema()` - Property listings
- `generateServiceSchema()` - Service offerings

## Additional Structured Data Types to Consider

### BreadcrumbList Schema
- **Status:** Function exists in `lib/structured-data.ts`
- **When to use:** Pages with breadcrumb navigation
- **Implementation:** Add to pages using breadcrumbs component

### Service Schema
- **Status:** Function exists in `lib/structured-data.ts`
- **When to use:** Service pages (e.g., "Why Hire an Agent")
- **Implementation:** Add Script tag to service pages

### RealEstateListing Schema
- **Status:** Function exists in `lib/structured-data.ts`
- **When to use:** Individual property listing pages
- **Implementation:** When property detail pages are created

### Individual Review Schema
- **Status:** Function exists in `lib/structured-data.ts`
- **When to use:** Individual review/testimonial pages
- **Implementation:** For detailed review pages

## Testing Structured Data

### Google Rich Results Test
1. Visit: https://search.google.com/test/rich-results
2. Enter page URL
3. Validate structured data
4. Fix any errors or warnings

### Schema.org Validator
1. Visit: https://validator.schema.org/
2. Paste page HTML or URL
3. Review validation results

## Best Practices

1. **Use JSON-LD format** (preferred by Google)
2. **Place in `<head>` or before closing `</body>`** tag
3. **Use Next.js Script component** with appropriate strategy
4. **Validate after implementation** using Rich Results Test
5. **Keep schemas updated** when content changes
6. **Use centralized functions** from `lib/structured-data.ts`

## Pages with Structured Data

- ✅ Homepage (`app/layout.tsx`) - RealEstateAgent, Organization, WebSite
- ✅ FAQ Page (`app/communities/sun-city-summerlin/faq/page.tsx`) - FAQPage
- ✅ Reviews Page (`app/reviews/page.tsx`) - AggregateRating
- ✅ Blog Article (`app/blog/google-trends-insights/page.tsx`) - Article

## Next Steps

1. Add BreadcrumbList to pages using breadcrumbs
2. Add Article schema to all blog posts
3. Add Service schema to service pages
4. Add RealEstateListing schema when property pages exist
5. Test all structured data with Rich Results Test
6. Monitor Search Console for structured data errors

## Resources

- [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data)
- [Schema.org Documentation](https://schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Search Console Structured Data Report](https://search.google.com/search-console)

