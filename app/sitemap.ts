import { MetadataRoute } from 'next'
import { lasVegasCommunities } from '@/lib/communities-data'
import { absoluteImageUrl, getCommunityImage, siteImages } from '@/lib/site-images'
import { SITE_URL } from '@/lib/site-config'

function entry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  priority: number,
  imageSrc?: string,
): MetadataRoute.Sitemap[number] {
  return {
    url: path.startsWith('http') ? path : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    images: [imageSrc ?? absoluteImageUrl(siteImages.heroHome)],
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    entry('/', 'daily', 1, absoluteImageUrl(siteImages.heroHome)),
    entry('/homes-for-sale', 'daily', 0.9, absoluteImageUrl(siteImages.newConstruction)),
    entry('/communities', 'weekly', 0.9, absoluteImageUrl(siteImages.heroHome)),
    entry('/las-vegas-55-guide', 'weekly', 0.8, absoluteImageUrl(siteImages.heroHome)),
    entry('/summerlin-55-homes', 'weekly', 0.8, absoluteImageUrl(siteImages.summerlin)),
    entry('/henderson-55-homes', 'weekly', 0.8, absoluteImageUrl(siteImages.henderson)),
    entry('/why-hire-an-agent', 'monthly', 0.8, absoluteImageUrl(siteImages.newConstruction)),
    entry('/about', 'monthly', 0.7, absoluteImageUrl(siteImages.interior)),
    entry('/blog', 'weekly', 0.8, absoluteImageUrl(siteImages.golf)),
    entry('/success-stories', 'weekly', 0.7, absoluteImageUrl(siteImages.interior)),
    entry('/reviews', 'weekly', 0.7, absoluteImageUrl(siteImages.interior)),
    entry('/contact', 'monthly', 0.7, absoluteImageUrl(siteImages.lake)),
    entry('/image-license', 'yearly', 0.3, absoluteImageUrl(siteImages.logo)),
    entry('/blog/google-trends-insights', 'monthly', 0.6, absoluteImageUrl(siteImages.golf)),
  ]

  const guidePages: MetadataRoute.Sitemap = [
    entry('/las-vegas-55-guide/overview', 'monthly', 0.7, absoluteImageUrl(siteImages.heroHome)),
    entry('/las-vegas-55-guide/top-10-gated', 'monthly', 0.7, absoluteImageUrl(siteImages.gated)),
    entry('/las-vegas-55-guide/top-10-pickleball', 'monthly', 0.7, absoluteImageUrl(siteImages.pickleball)),
    entry('/las-vegas-55-guide/map', 'monthly', 0.6, absoluteImageUrl(siteImages.summerlin)),
    entry('/las-vegas-55-guide/videos', 'weekly', 0.7, absoluteImageUrl(siteImages.clubhouse)),
  ]

  const communityPages = lasVegasCommunities.map((community) =>
    entry(
      `/communities/${community.slug}`,
      'weekly',
      community.featured ? 0.8 : 0.7,
      absoluteImageUrl(getCommunityImage(community)),
    ),
  )

  const sunCitySummerlinPages: MetadataRoute.Sitemap = [
    entry('/communities/sun-city-summerlin/homes-for-sale', 'daily', 0.8, absoluteImageUrl(siteImages.newConstruction)),
    entry('/communities/sun-city-summerlin/floorplans', 'monthly', 0.7, absoluteImageUrl(siteImages.interior)),
    entry('/communities/sun-city-summerlin/market-updates', 'weekly', 0.7, absoluteImageUrl(siteImages.golf)),
    entry('/communities/sun-city-summerlin/amenities', 'monthly', 0.7, absoluteImageUrl(siteImages.clubhouse)),
    entry('/communities/sun-city-summerlin/schedule-tour', 'monthly', 0.6, absoluteImageUrl(siteImages.golf)),
    entry('/communities/sun-city-summerlin/why-sun-city-summerlin', 'monthly', 0.7, absoluteImageUrl(siteImages.golf)),
    entry('/communities/sun-city-summerlin/faq', 'monthly', 0.6, absoluteImageUrl(siteImages.golf)),
  ]

  return [...mainPages, ...guidePages, ...communityPages, ...sunCitySummerlinPages]
}
