import Link from 'next/link'
import { Trophy, Activity, Heart, Users, Award, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Sun City Summerlin Amenities | World-Class Facilities & Recreation | Las Vegas 55+ Community',
  description: 'Discover comprehensive world-class amenities at Sun City Summerlin including three championship golf courses, four recreation centers, state-of-the-art fitness facilities, and resort-style pools. Explore everything this premier Las Vegas 55+ community offers.',
  keywords: ['Sun City Summerlin amenities', 'Las Vegas 55+ community facilities', 'golf courses Summerlin', 'active adult amenities'],
}

export default function SunCitySummerlinAmenitiesPage() {
  const amenityCategories = [
    {
      title: 'Golf & Recreation',
      icon: <Trophy className="h-8 w-8 text-primary mb-4" />,
      amenities: [
        'Three championship golf courses',
        'Driving range and putting greens',
        'Tennis courts',
        'Pickleball courts',
        'Bocce ball courts',
        'Shuffleboard',
      ],
    },
    {
      title: 'Fitness & Wellness',
      icon: <Activity className="h-8 w-8 text-primary mb-4" />,
      amenities: [
        'State-of-the-art fitness centers',
        'Group fitness classes',
        'Indoor and outdoor pools',
        'Spa and hot tubs',
        'Walking and jogging trails',
        'Wellness programs',
      ],
    },
    {
      title: 'Social & Activities',
      icon: <Users className="h-8 w-8 text-primary mb-4" />,
      amenities: [
        'Multiple recreation centers',
        'Arts and crafts studios',
        'Woodworking shop',
        'Libraries and computer labs',
        'Restaurants and cafes',
        'Numerous clubs and organizations',
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/communities" className="hover:text-foreground">Communities</Link> / <Link href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</Link> / Amenities
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sun City Summerlin Amenities | World-Class Facilities for Active Adults</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-6">
          Sun City Summerlin offers residents an unparalleled lifestyle with world-class amenities designed specifically for active adults. From three championship golf courses to four comprehensive recreation centers, from state-of-the-art fitness facilities to vibrant social spaces, discover everything this premier Las Vegas 55+ community has to offer.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          The extensive amenity package at Sun City Summerlin rivals luxury resorts, providing residents with everything needed for an active, engaged, and fulfilling retirement lifestyle. Whether you're passionate about golf, fitness, arts and crafts, or simply enjoying the company of neighbors, Sun City Summerlin's amenities support your interests and hobbies.
        </p>
      </div>

      <div className="max-w-6xl space-y-12 mb-12">
        {amenityCategories.map((category) => (
          <section key={category.title}>
            <div className="flex items-center gap-4 mb-6">
              {category.icon}
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {category.amenities.map((amenity) => (
                <div key={amenity} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <div className="mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{amenity}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-bold mb-6">Championship Golf Courses</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin features three championship golf courses that are among the finest in Las Vegas. These meticulously maintained courses offer diverse challenges and stunning desert landscapes, providing golfers with exceptional playing experiences year-round thanks to Las Vegas's ideal climate.
            </p>
            <p>
              Golf enthusiasts at Sun City Summerlin enjoy access to multiple courses with different characteristics and difficulty levels, ensuring variety in their golfing experiences. The courses are designed to challenge players while remaining enjoyable for golfers of all skill levels, and residents appreciate the convenience of having world-class golf right in their community.
            </p>
            <p>
              Beyond the courses themselves, Sun City Summerlin's golf facilities include driving ranges, putting greens, and professional instruction opportunities. The community's active golf clubs organize tournaments, leagues, and social events that bring golfers together and enhance the social aspects of the sport.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Four Comprehensive Recreation Centers</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin's four recreation centers serve as the heart of community activity, each offering unique facilities and programming that keep the community vibrant and engaged. These centers are strategically located throughout the community, ensuring convenient access for all residents regardless of their neighborhood location.
            </p>
            <p>
              Each recreation center features distinct characteristics and specialized facilities, though all provide comprehensive amenities for fitness, social activities, and hobbies. This multi-center approach allows the community to offer more diverse programming and accommodate more residents simultaneously than would be possible with a single facility.
            </p>
            <p>
              Recreation centers host hundreds of activities weekly, from fitness classes and hobby groups to educational programs and social events. The variety ensures that residents can find activities that match their interests and participate as much or as little as they prefer in community life.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">State-of-the-Art Fitness Facilities</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin's fitness facilities rival commercial gyms, featuring modern equipment, professional instruction, and comprehensive programs designed specifically for active adults. Multiple fitness centers throughout the community ensure convenient access and provide diverse workout options that support healthy, active lifestyles.
            </p>
            <p>
              The fitness programs at Sun City Summerlin include group classes, personal training opportunities, and specialized programs for various fitness levels and goals. Whether residents prefer individual workouts or group fitness classes, the facilities accommodate diverse preferences and provide the support needed to maintain active, healthy lifestyles.
            </p>
            <p>
              Beyond traditional fitness, Sun City Summerlin offers wellness programs that address overall health, including nutrition education, stress management, and preventive health initiatives. This comprehensive approach to wellness reflects the community's commitment to supporting residents' long-term health and quality of life.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Social Clubs and Organizations</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin hosts over 80 clubs and organizations covering virtually every interest imaginable, from book clubs and gardening groups to travel clubs and volunteer organizations. This extensive club scene ensures that residents can pursue their passions, develop new interests, and connect with like-minded neighbors who share similar hobbies and values.
            </p>
            <p>
              The diversity of clubs means that whether you're interested in arts and crafts, technology, outdoor activities, or cultural pursuits, you'll find groups that match your interests. Many clubs meet regularly in recreation center facilities, and some organize trips, events, and activities that extend beyond community boundaries.
            </p>
            <p>
              Starting new clubs is encouraged, and the community's support for resident-led organizations ensures that emerging interests can be accommodated. This flexibility means that as resident interests evolve, the community's social offerings can adapt and grow to match changing preferences.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Arts, Crafts, and Hobby Facilities</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin provides extensive facilities for arts, crafts, and hobbies, recognizing that creative pursuits are an important part of many residents' active retirement lifestyles. Multiple studios and workshops throughout the community accommodate diverse creative interests and provide spaces for both individual projects and group activities.
            </p>
            <p>
              The arts and crafts studios feature equipment and facilities for various creative pursuits, from painting and ceramics to quilting and jewelry making. These spaces enable residents to pursue artistic interests, learn new skills, and create projects that bring personal satisfaction and enjoyment.
            </p>
            <p>
              The woodworking shop provides tools and space for residents interested in woodworking projects, from small crafts to larger furniture pieces. This facility allows residents to pursue woodworking hobbies that might not be feasible in typical residential settings, enhancing the community's appeal to hobbyists.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Dining and Gathering Spaces</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Sun City Summerlin features multiple restaurants and cafes within recreation centers, providing convenient dining options and gathering spaces for residents. These dining venues host social events, special dinners, and casual meals, serving as important social hubs that bring neighbors together.
            </p>
            <p>
              The community's dining options range from casual cafes perfect for quick meals or coffee with friends to more formal restaurants suitable for special occasions or entertaining guests. This variety ensures that residents have dining options that match various occasions and preferences without leaving the community.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Libraries and Learning Spaces</h2>
          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Sun City Summerlin maintains libraries and computer labs that support continued learning, research, and technology use among residents. These facilities reflect the community's recognition that active adult living includes intellectual engagement and lifelong learning opportunities.
            </p>
            <p>
              Computer labs provide access to technology and training opportunities, helping residents stay current with digital tools and online resources. These facilities support everything from basic computer skills to advanced applications, ensuring that all residents can access and benefit from modern technology regardless of their prior experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/communities/sun-city-summerlin"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Learn More About Sun City Summerlin
            </Link>
            <Link
              href="/communities/sun-city-summerlin/schedule-tour"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-md hover:bg-accent transition-colors"
            >
              Schedule a Tour
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
