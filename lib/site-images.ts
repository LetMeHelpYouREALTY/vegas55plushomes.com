import type { Community } from '@/lib/communities-data'
import { SITE_URL } from '@/lib/site-config'
import { IMAGE_CDN_ORIGIN, isRemoteImageSrc, toPublicSrc } from '@/lib/image-cdn'

export type SiteImage = {
  /** Live src: Cloudflare R2/CDN when NEXT_PUBLIC_IMAGE_CDN is set, else the Git backup path. */
  src: string
  /** Path in /public — Git backup and R2 object key. */
  localSrc: string
  alt: string
  width: number
  height: number
  name: string
  caption: string
  description: string
}

const PHOTO = { width: 1280, height: 720 } as const

function photo(
  localSrc: string,
  fields: Omit<SiteImage, 'src' | 'localSrc' | 'width' | 'height'>,
): SiteImage {
  return {
    src: toPublicSrc(localSrc),
    localSrc,
    ...PHOTO,
    ...fields,
  }
}

export const siteImages = {
  heroHome: photo('/images/las-vegas-55-plus-homes-hero.jpg', {
    alt: 'Single-story stucco and stone homes with tile roofs on a quiet Las Vegas Valley street, desert landscaping, and red rock mountains',
    name: 'Las Vegas 55+ Homes for Sale',
    caption: 'Single-story homes on a quiet Las Vegas Valley street with red rock mountains',
    description:
      'Photorealistic view of single-story 55+ homes, desert landscaping, and a golf clubhouse in the Las Vegas Valley for active adult homebuyers.',
  }),
  og: {
    src: toPublicSrc('/og-image.jpg'),
    localSrc: '/og-image.jpg',
    alt: 'Mediterranean-style single-story homes along a desert lake in the Las Vegas Valley at sunset',
    width: 1200,
    height: 630,
    name: 'Las Vegas Valley lake homes',
    caption: 'Representative lake view for Vegas 55 Plus Homes',
    description:
      'A representative photo of single-story homes along a desert lake, used as the social preview for Dr. Jan Duffy.',
  },
  golf: photo('/images/sun-city-summerlin-golf.jpg', {
    alt: 'Golf fairway lined with single-story tile-roof homes and desert mountains in the Las Vegas Valley',
    name: 'Las Vegas Valley golf fairway and single-story homes',
    caption: 'Representative golf-course view used for Las Vegas Valley 55+ communities',
    description:
      'A representative golf fairway past single-story homes, with desert mountains behind.',
  }),
  lake: photo('/images/del-webb-lake-las-vegas.jpg', {
    alt: 'Mediterranean-style single-story homes along a desert lake in the Las Vegas Valley',
    name: 'Desert lake homes in the Las Vegas Valley',
    caption: 'Representative lake view used for Las Vegas Valley 55+ communities',
    description:
      'Representative photo of Mediterranean-style single-story homes along a desert lake.',
  }),
  gated: photo('/images/gated-55-plus-community-las-vegas.jpg', {
    alt: 'Gated entrance to a Las Vegas 55+ community with desert landscaping and Red Rock Canyon mountains',
    name: 'Gated Las Vegas 55+ Community Entrance',
    caption: 'Controlled-access entrance to a 55+ community in the Las Vegas Valley',
    description:
      'Stone monument walls, desert plants, and a gated entry to a 55+ community near Red Rock Canyon.',
  }),
  pickleball: photo('/images/las-vegas-pickleball-55-community.jpg', {
    alt: 'Outdoor pickleball courts beside a recreation center at a Las Vegas 55+ active adult community',
    name: 'Las Vegas 55+ Pickleball Courts',
    caption: 'Pickleball courts at a Las Vegas Valley 55+ community recreation center',
    description:
      'Blue and green outdoor pickleball courts next to a clubhouse, a common amenity in Las Vegas 55+ communities.',
  }),
  henderson: photo('/images/henderson-55-plus-homes.jpg', {
    alt: 'Single-story homes on a Las Vegas Valley hillside with desert landscaping and mountains',
    name: 'Las Vegas Valley hillside homes',
    caption: 'Representative hillside view used for Las Vegas Valley 55+ communities',
    description:
      'Representative photo of single-story homes on a Las Vegas Valley hillside.',
  }),
  clubhouse: photo('/images/las-vegas-55-clubhouse-pool.jpg', {
    alt: 'Resort-style clubhouse pool at a Las Vegas 55+ community with desert mountains in the background',
    name: 'Las Vegas 55+ Clubhouse and Pool',
    caption: 'Resort-style pool and clubhouse in a Las Vegas active adult community',
    description:
      'Turquoise resort pool, lounge chairs, and a stucco clubhouse typical of Las Vegas 55+ amenities.',
  }),
  newConstruction: photo('/images/las-vegas-new-construction-55-home.jpg', {
    alt: 'New construction single-story 55+ home in Las Vegas with tile roof, three-car garage, and mountain views',
    name: 'Las Vegas New Construction 55+ Home',
    caption: 'Newly built single-story home for 55+ buyers in the Las Vegas Valley',
    description:
      'Street view of a newly built single-story 55+ home with desert landscaping in Las Vegas, Nevada.',
  }),
  interior: photo('/images/las-vegas-55-home-interior.jpg', {
    alt: 'Limestone great room with a stone fireplace and mountain views in a single-story Las Vegas home',
    name: 'Las Vegas 55+ Home Interior',
    caption: 'Single-story open floor plan designed for 55+ living in Las Vegas',
    description:
      'Representative photo of a limestone great room with a stone fireplace and mountain views.',
  }),
  summerlin: photo('/images/summerlin-55-plus-homes.jpg', {
    alt: 'Single-story homes on a quiet Las Vegas Valley street with mountains in the distance',
    name: 'Las Vegas Valley single-story homes',
    caption: 'Representative street view used for Las Vegas Valley 55+ communities',
    description:
      'Representative photo of single-story homes on a Las Vegas Valley street.',
  }),
  headshot: {
    src: toPublicSrc('/images/dr-jan-duffy.png'),
    localSrc: '/images/dr-jan-duffy.png',
    alt: 'Dr. Jan Duffy, Las Vegas 55+ buyer’s representative, on a phone call',
    width: 1270,
    height: 1270,
    name: 'Dr. Jan Duffy',
    caption: 'Dr. Jan Duffy, Nevada REALTOR® S.0197614',
    description:
      'Portrait of Dr. Jan Duffy, 55+ buyer’s representative with BHHS Nevada Properties in Henderson, Nevada.',
  },
  /**
   * Smaller headshot variation for tight UI slots (nav avatar).
   * Kept as a separate file so we can serve an optimized variant from the image CDN.
   */
  headshotNav: {
    src: toPublicSrc('/images/dr-jan-duffy-256.png'),
    localSrc: '/images/dr-jan-duffy-256.png',
    alt: 'Dr. Jan Duffy, Las Vegas 55+ buyer’s representative, on a phone call',
    width: 256,
    height: 256,
    name: 'Dr. Jan Duffy (Nav)',
    caption: 'Nav avatar portrait of Dr. Jan Duffy',
    description:
      'Square portrait used as the vegas55plushomes.com navigation avatar for Dr. Jan Duffy.',
  },
  favicon: {
    src: toPublicSrc('/favicon.png'),
    localSrc: '/favicon.png',
    alt: 'Dr. Jan Duffy favicon portrait',
    width: 192,
    height: 192,
    name: 'Vegas 55 Plus Homes Favicon',
    caption: 'Favicon portrait of Dr. Jan Duffy',
    description: 'Square portrait used as the vegas55plushomes.com favicon.',
  },
  logo: {
    src: toPublicSrc('/logo.png'),
    localSrc: '/logo.png',
    alt: 'Vegas 55 Plus Homes logo with desert mountains and a house silhouette',
    width: 512,
    height: 512,
    name: 'Vegas 55 Plus Homes Logo',
    caption: 'Logo for Dr. Jan Duffy, Del Webb Lake Las Vegas 55+ REALTOR®',
    description: 'Navy and gold mountain-and-home mark for Vegas 55 Plus Homes.',
  },
} as const satisfies Record<string, SiteImage>

export type SiteImageKey = keyof typeof siteImages

export function absoluteImageUrl(image: SiteImage): string {
  if (isRemoteImageSrc(image.src)) {
    return image.src
  }
  if (IMAGE_CDN_ORIGIN) {
    return `${IMAGE_CDN_ORIGIN}${image.localSrc}`
  }
  return `${SITE_URL}${image.localSrc}`
}

export function getCommunityImage(community: Pick<Community, 'slug' | 'city' | 'location' | 'amenities' | 'yearBuilt'>): SiteImage {
  const slug = community.slug
  const amenityText = community.amenities.join(' ').toLowerCase()
  const location = `${community.location} ${community.city}`.toLowerCase()

  if (slug === 'sun-city-summerlin') return siteImages.golf
  if (slug === 'del-webb-lake-las-vegas') return siteImages.lake
  if (slug === 'siena' || slug === 'regency-summerlin') return siteImages.gated
  if (slug === 'sun-city-anthem' || slug === 'solera-anthem') return siteImages.henderson
  if (amenityText.includes('pickleball')) return siteImages.pickleball
  if (amenityText.includes('golf')) return siteImages.golf
  if (location.includes('lake las vegas') || amenityText.includes('waterfront')) return siteImages.lake
  if (location.includes('summerlin')) return siteImages.summerlin
  if (community.city === 'Henderson') return siteImages.henderson
  if (community.yearBuilt && Number(community.yearBuilt) >= 2020) return siteImages.newConstruction
  if (amenityText.includes('pool')) return siteImages.clubhouse
  return siteImages.heroHome
}

export const allPhotoImages: SiteImage[] = Object.values(siteImages).filter((image) =>
  image.localSrc.startsWith('/images/'),
)
