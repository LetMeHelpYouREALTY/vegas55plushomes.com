import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Star, MapPin, Heart, Quote } from 'lucide-react'

export const metadata = {
  title: 'Client Reviews | Las Vegas 55+ Real Estate | Vegas 55 Plus Homes',
  description: 'Read reviews from our satisfied clients who found their perfect Las Vegas 55+ homes. Real testimonials from active adults who worked with our specialized Las Vegas 55+ real estate team.',
  keywords: ['Las Vegas 55+ real estate reviews', 'client testimonials', 'real estate agent reviews Las Vegas', '55+ community realtor reviews'],
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Marcie',
      community: 'Sun City Summerlin',
      date: 'June 2025',
      rating: 5,
      review: 'They were wonderful! We are so thankful for their help in finding our new, beautiful home! The entire process was smooth, and their knowledge of Sun City Summerlin helped us understand all the community had to offer.',
    },
    {
      name: 'Cathy C.',
      community: 'Sun City Summerlin',
      date: 'January 2025',
      rating: 5,
      review: 'I would recommend them to anyone looking for a professional real estate agent and most specifically for Sun City Summerlin! Their expertise in the community and attention to detail made all the difference in our home search.',
    },
    {
      name: 'Errol R.',
      community: 'Sun City Anthem',
      date: 'December 2024',
      rating: 5,
      review: 'Trusted realtor who helped us find our dream 55+ home. Professional, knowledgeable, and patient throughout the entire process. They understood exactly what we were looking for and guided us to the perfect community and home.',
    },
    {
      name: 'Rob and Karin',
      community: 'Siena',
      date: 'September 2024',
      rating: 5,
      review: 'We found our dream home and they helped us through all the details and video walkthroughs. We cannot thank them enough! Moving from out of state was challenging, but their support made it manageable.',
    },
    {
      name: 'Patricia M.',
      community: 'Heritage at Cadence',
      date: 'August 2024',
      rating: 5,
      review: 'Excellent service and deep knowledge of Henderson 55+ communities. They helped us compare several communities and found us the perfect home in Heritage at Cadence. Highly recommend for anyone looking in Henderson.',
    },
    {
      name: 'David and Susan',
      community: 'Del Webb at Lake Las Vegas',
      date: 'July 2024',
      rating: 5,
      review: 'We were among the first buyers in Del Webb at Lake Las Vegas, and their guidance was invaluable. They understood this new community and helped us make an informed decision. We love our new home and community!',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews | What Our Las Vegas 55+ Homebuyers Say</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Read reviews from our satisfied clients who found their perfect homes in Las Vegas 55+ communities. These real testimonials from active adults who worked with our specialized Las Vegas 55+ real estate team demonstrate our commitment to client success and exceptional service.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Our clients consistently praise our specialized knowledge of Las Vegas 55+ communities, personalized service, and comprehensive support throughout the home buying process. These reviews reflect real experiences from buyers who have successfully found their dream homes with our assistance.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say About Our Las Vegas 55+ Real Estate Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="rounded-lg border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-primary mb-3 opacity-50" />
                <p className="text-muted-foreground mb-6 italic">"{review.review}"</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{review.community}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Why Our Clients Recommend Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Specialized Expertise</h3>
              <p className="text-muted-foreground">
                Our clients consistently praise our deep knowledge of Las Vegas 55+ communities, market trends, and unique aspects of active adult living. This specialized expertise helps clients make informed decisions and find communities that truly match their preferences.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Personalized Attention</h3>
              <p className="text-muted-foreground">
                Every review highlights the personalized service and individual attention clients receive throughout their home search. Our team takes time to understand each client's unique needs and preferences, ensuring customized guidance.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-3">Smooth Transactions</h3>
              <p className="text-muted-foreground">
                Clients appreciate our comprehensive support from initial search through closing and beyond. Our attention to detail, clear communication, and transaction management ensure smooth, stress-free home buying experiences.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Understanding Our Commitment to Client Satisfaction</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              These reviews reflect our ongoing commitment to providing exceptional service to every client, regardless of their specific circumstances or requirements. Whether clients are relocating from another state, downsizing from a larger home, or seeking to upgrade their active adult lifestyle, we provide the specialized expertise and comprehensive support needed for successful outcomes.
            </p>
            <p>
              We measure our success not just by completed transactions, but by client satisfaction, successful community matches, and long-term relationships with our clients. Many of our clients become advocates who recommend our services moving to friends and family interested in Las Vegas 55+ living.
            </p>
            <p>
              Our team is grateful for every review and testimonial, as they reflect the trust our clients place in us during one of life's most important decisions. We're committed to maintaining the high standards that have earned us these positive reviews and client recommendations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              If you're a current or past client and would like to share your experience, we'd love to hear from you. Your feedback helps us continue to improve our services and helps future clients understand what to expect when working with our team.
            </p>
            <p>
              We're also grateful for referrals from satisfied clients. If you know someone interested in Las Vegas 55+ living, we'd be honored to help them find their perfect home with the same level of service and expertise you experienced.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/communities">Explore Communities</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
