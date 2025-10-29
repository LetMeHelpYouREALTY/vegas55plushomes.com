import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Trophy, Users, Shield, Heart, CheckCircle, Award } from 'lucide-react'

export const metadata = {
  title: 'About Us | Las Vegas 55+ Real Estate Specialists | Vegas 55 Plus Homes',
  description: 'Learn about Vegas 55 Plus Homes, your trusted Las Vegas 55+ real estate specialists. Expert guidance for active adults seeking their perfect home in premier active adult communities.',
  keywords: ['Las Vegas 55+ real estate specialists', 'Vegas 55 Plus Homes', 'active adult real estate Las Vegas', '55+ real estate agent Las Vegas'],
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vegas 55 Plus Homes | Las Vegas 55+ Real Estate Specialists</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12 space-y-8">
          <section className="text-xl text-muted-foreground">
            <p className="mb-6">
              Vegas 55 Plus Homes is your trusted partner for finding the perfect 55+ home in Las Vegas. We specialize exclusively in Las Vegas active adult communities, providing expert guidance to help you make the best real estate decisions for your active retirement years. Our team combines deep local market knowledge with specialized expertise in 55+ community living to ensure you find not just a home, but a lifestyle that matches your vision for retirement.
            </p>
            <p className="mb-6">
              With years of experience serving active adults throughout the Las Vegas Valley, we understand that purchasing a home in a 55+ community is fundamentally different from traditional real estate transactions. These communities offer unique amenities, lifestyle restrictions, homeowner association structures, and social opportunities that require specialized knowledge and guidance. Our mission is to help you navigate these complexities with confidence and find a community where you can thrive.
            </p>
            <p>
              Whether you're relocating from another state, downsizing from a larger home, or seeking to upgrade to a more active lifestyle, our team is here to guide you through every step of the process. We work exclusively with Las Vegas area 55+ communities, allowing us to provide unmatched expertise and insider knowledge that helps our clients make informed decisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-8 mb-6">Our Mission: Helping Active Adults Find Their Perfect Las Vegas Home</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our mission is to help active adults find their dream home in Las Vegas's premier 55+ communities. We understand that purchasing a home in a 55+ community is more than just a real estate transaction—it's a lifestyle choice that will shape your retirement years, your social connections, your daily activities, and your overall quality of life.
              </p>
              <p>
                We believe that finding the right 55+ community requires more than just touring homes. It requires understanding the community's culture, social scene, amenity usage patterns, homeowner association dynamics, and long-term maintenance plans. Our comprehensive approach ensures that our clients don't just find a house—they find a home where they can truly thrive as active adults.
              </p>
              <p>
                Every client receives personalized attention tailored to their unique needs, preferences, budget, and vision for retirement living. We take the time to understand what matters most to you, whether that's championship golf courses, state-of-the-art fitness facilities, vibrant social calendars, peaceful retreats, or something entirely unique. Our goal is to match you with a community that will enhance your retirement years.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-8 mb-6">Why Choose Vegas 55 Plus Homes as Your Real Estate Partner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border bg-card">
                <Trophy className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Specialized 55+ Community Expertise</h3>
                <p className="text-muted-foreground">
                  We focus exclusively on Las Vegas 55+ communities, giving us unmatched knowledge of community amenities, lifestyles, homeowner association structures, and market trends specific to active adult living. This specialization means we can answer questions about golf course access, club memberships, activity calendars, and community culture that general real estate agents simply cannot.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Deep Local Market Knowledge</h3>
                <p className="text-muted-foreground">
                  Our team possesses extensive knowledge of the Las Vegas real estate market, including pricing trends, neighborhood characteristics, and investment potential. We understand the nuances of different areas, from Summerlin's master-planned sophistication to Henderson's suburban charm, helping you make location decisions that align with your preferences.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalized Service Approach</h3>
                <p className="text-muted-foreground">
                  Every client receives individualized attention tailored to their specific needs, preferences, and budget. We take time to understand your vision for retirement living, your lifestyle priorities, and your financial considerations, ensuring we guide you toward communities that truly fit your unique situation.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Comprehensive Transaction Support</h3>
                <p className="text-muted-foreground">
                  From initial search through closing and beyond, we provide comprehensive support that ensures a smooth, stress-free experience. We handle negotiations, coordinate inspections, guide you through homeowner association processes, and maintain clear communication every step of the way.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Additional Advantages of Working with Our Team</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Beyond our specialized expertise, we offer several advantages that set us apart in the Las Vegas 55+ real estate market. Our extensive network of community contacts means we identify new listings quickly, often before they hit the public market. We maintain relationships with homeowner association managers, community activity directors, and even current residents, providing you with insider insights that help you make informed decisions.
              </p>
              <p>
                We understand the unique considerations of relocating to Las Vegas from other states. We can help you navigate Nevada's tax benefits, understand the climate and lifestyle adjustments, and connect you with resources for everything from healthcare providers to favorite restaurants. For long-distance buyers, we offer virtual tours, comprehensive video walkthroughs, and detailed community documentation that helps you evaluate options from afar.
              </p>
              <p>
                Our commitment to transparency means you'll always understand the full picture—from homeowner association fees and what they include to community rules and restrictions. We believe informed clients make the best decisions, so we provide comprehensive information about every aspect of community living, from amenity usage fees to maintenance schedules to social activity calendars.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-8 mb-6">Our Expertise: Comprehensive Knowledge of Las Vegas 55+ Communities</h2>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                We specialize in Las Vegas's premier 55+ communities including Sun City Summerlin, Sun City Anthem, Siena, Desert Shores, Heritage communities, Del Webb communities, and many others. Our team understands the unique features, amenities, and lifestyle each community offers, allowing us to provide nuanced guidance that helps you find your perfect match.
              </p>
              <p>
                Our knowledge extends beyond basic amenity lists. We understand community cultures, social dynamics, typical resident demographics, activity participation rates, and even seasonal patterns that affect community life. This depth of knowledge helps us identify communities where you're likely to find neighbors who share your interests and values.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Mega Communities: Sun City Summerlin and Sun City Anthem</h3>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                Sun City Summerlin and Sun City Anthem represent Las Vegas's largest and most established 55+ communities, each with over 7,000 homes and extensive amenity packages. We have deep experience helping clients navigate these mega-communities, from understanding their multiple recreation centers and golf courses to identifying neighborhoods that match specific lifestyle preferences.
              </p>
              <p>
                These communities offer incredible diversity in home styles, price points, and neighborhood characteristics. Our team can help you understand the differences between various neighborhoods within these large communities, ensuring you find a location that matches both your housing preferences and your desired lifestyle pace.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Mid-Size and Premium Communities</h3>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                We're equally knowledgeable about mid-size communities like Siena, Regency at Summerlin, and newer developments like Heritage at Cadence and Del Webb at Lake Las Vegas. These communities often offer more intimate atmospheres, premium amenities, and specific architectural styles that appeal to different buyer preferences.
              </p>
              <p>
                Our understanding of these communities includes knowledge of builder reputations, construction quality, resale value trends, and how each community has evolved over time. This historical perspective helps us guide clients toward communities that have proven track records of maintaining property values and resident satisfaction.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Value and Budget-Friendly Options</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We also work extensively with value-oriented communities like Los Prados, Tropicana Palms, and other affordable options that provide quality 55+ living at accessible price points. Our expertise helps budget-conscious buyers identify communities that offer the best combination of amenities, location, and price without compromising on the active adult lifestyle experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-8 mb-6">Our Comprehensive Service Approach</h2>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                Our service approach is designed specifically for active adults navigating the 55+ community market. We begin with comprehensive consultations that help us understand your vision for retirement living, your priorities for amenities and lifestyle, and your financial considerations. This foundation allows us to identify communities that truly match your needs rather than simply showing you every available listing.
              </p>
              <p>
                We provide detailed community comparisons that highlight differences in amenity packages, homeowner association fees, community cultures, and location advantages. Our goal is to help you make informed comparisons between communities, understanding not just what homes are available but how each community's lifestyle might fit your retirement vision.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Home Search and Selection</h3>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>
                Our home search process goes beyond simple MLS queries. We create custom search parameters based on your specific needs—whether you prioritize single-story layouts, specific architectural styles, golf course views, or low-maintenance exteriors. We preview homes to ensure listings match your criteria before scheduling your valuable time, and we provide comprehensive property reports that help you evaluate each option efficiently.
              </p>
              <p>
                When you find a home you're interested in, we provide detailed market analysis including comparable sales, pricing trends for that specific neighborhood or floor plan, and insights into how that home fits within the broader community market. This data-driven approach ensures you make purchase decisions based on solid market intelligence rather than emotion alone.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 mt-8">Transaction Management and Support</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Once you've selected a home, our support intensifies. We coordinate all aspects of the transaction, from initial negotiations through inspections and final closing. We work closely with homeowner associations to ensure smooth transitions, coordinate with lenders familiar with 55+ community financing, and guide you through any community-specific requirements or restrictions.
              </p>
              <p>
                For out-of-state buyers, we provide additional support including recommendations for temporary housing, moving companies familiar with Las Vegas, utility connections, and community orientation. We understand that relocating can be stressful, and our goal is to minimize that stress by handling as many details as possible on your behalf.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mt-8 mb-6">Contact Us: Begin Your Las Vegas 55+ Home Search Journey</h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Ready to start your Las Vegas 55+ home search? Contact us today to schedule a consultation and learn how we can help you find your perfect home in one of Las Vegas's premier active adult communities. Whether you're just beginning to explore options or you're ready to make an offer, we're here to provide expert guidance every step of the way.
              </p>
              <p>
                We offer both in-person and virtual consultations to accommodate your schedule and location. During your consultation, we'll discuss your vision for retirement living, answer questions about Las Vegas 55+ communities, and begin developing a customized search strategy tailored to your unique needs and preferences.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/communities">Explore Communities</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
