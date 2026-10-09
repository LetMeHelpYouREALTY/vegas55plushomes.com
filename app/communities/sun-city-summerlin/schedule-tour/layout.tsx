import { buildMetadata } from '@/lib/page-metadata'
import { siteImages } from '@/lib/site-images'

export const metadata = buildMetadata({
  title: 'Schedule a Sun City Summerlin Tour | Dr. Jan Duffy',
  description:
    'Schedule a tour of Sun City Summerlin 55+ homes with Dr. Jan Duffy. Golf, recreation centers, and single-story homes. Call (702) 996-3758.',
  path: '/communities/sun-city-summerlin/schedule-tour',
  image: siteImages.golf,
  keywords: ['Sun City Summerlin tour', 'Summerlin 55+ homes', 'Dr. Jan Duffy'],
})

export default function ScheduleTourLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
