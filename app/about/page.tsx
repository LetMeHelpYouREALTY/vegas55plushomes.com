export const metadata = {
  title: 'About Us | Las Vegas 55+ Real Estate Specialists | Vegas 55 Plus Homes',
  description: 'Learn about Vegas 55 Plus Homes, your trusted Las Vegas 55+ real estate specialists. Expert guidance for active adults seeking their perfect home.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vegas 55 Plus Homes</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground mb-6">
            Vegas 55 Plus Homes is your trusted partner for finding the perfect 55+ home in Las Vegas. We specialize exclusively in Las Vegas active adult communities, providing expert guidance to help you make the best real estate decisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-6">
            Our mission is to help active adults find their dream home in Las Vegas's premier 55+ communities. We understand that purchasing a home in a 55+ community is more than just a real estate transaction—it's a lifestyle choice that will shape your retirement years.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
            <li>Deep knowledge of Las Vegas 55+ communities and market trends</li>
            <li>Personalized service tailored to your unique needs and preferences</li>
            <li>Expert guidance through every step of the buying process</li>
            <li>Extensive network of community contacts and resources</li>
            <li>Committed to making your home buying experience smooth and enjoyable</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Expertise</h2>
          <p className="text-muted-foreground mb-6">
            We specialize in Las Vegas's premier 55+ communities including Sun City Summerlin, Sun City Anthem, Siena, Desert Shores, and many others. Our team understands the unique features, amenities, and lifestyle each community offers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-6">
            Ready to start your Las Vegas 55+ home search? Contact us today to schedule a consultation and learn how we can help you find your perfect home.
          </p>
        </div>
      </div>
    </div>
  )
}

