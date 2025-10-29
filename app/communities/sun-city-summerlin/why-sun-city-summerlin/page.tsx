import { Home, Shield, Users, Trophy, Heart, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Why Sun City Summerlin | Las Vegas 55+ Community',
  description: 'Discover why Sun City Summerlin is one of Las Vegas\'s most desirable 55+ communities. Learn about amenities, lifestyle, and community benefits.',
}

export default function WhySunCitySummerlinPage() {
  const reasons = [
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Premier Location',
      description: 'Strategically located in Summerlin, one of Las Vegas\'s most prestigious areas, with easy access to shopping, dining, and entertainment.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Gated Security',
      description: '24/7 gated security provides peace of mind and privacy in a safe, secure environment designed for active adults.',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'World-Class Amenities',
      description: 'Multiple golf courses, fitness centers, pools, and recreation facilities rivaling resort-style living.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Active Social Scene',
      description: 'Hundreds of clubs and organizations offer endless opportunities to meet neighbors and pursue hobbies.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Low-Maintenance Living',
      description: 'Homes designed for easy living with low-maintenance exteriors, allowing more time for enjoyment and relaxation.',
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Excellent Value',
      description: 'Competitive pricing with outstanding amenities and lifestyle benefits make Sun City Summerlin an exceptional value.',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <a href="/" className="hover:text-foreground">Home</a> / <a href="/communities" className="hover:text-foreground">Communities</a> / <a href="/communities/sun-city-summerlin" className="hover:text-foreground">Sun City Summerlin</a> / Why Sun City Summerlin
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Sun City Summerlin?</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Sun City Summerlin stands out as one of Las Vegas's premier 55+ communities, offering an unmatched combination of location, amenities, and lifestyle. Here's why so many active adults choose to call it home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {reasons.map((reason, index) => (
          <div key={index} className="rounded-lg border bg-card p-6">
            <div className="text-primary mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
            <p className="text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-card p-8">
        <h2 className="text-2xl font-semibold mb-4">Experience the Sun City Summerlin Lifestyle</h2>
        <p className="text-muted-foreground mb-6">
          Whether you're looking for an active retirement filled with golf, fitness, and social activities, or prefer quiet relaxation in beautifully maintained surroundings, Sun City Summerlin offers the perfect balance. Our residents enjoy a vibrant community atmosphere where neighbors become friends and every day brings new opportunities for engagement and enjoyment.
        </p>
        <p className="text-muted-foreground">
          Schedule a tour today to see why Sun City Summerlin could be the perfect place for your next chapter.
        </p>
      </div>
    </div>
  )
}

