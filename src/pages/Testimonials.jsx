import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Star, Quote, MapPin, Calendar } from 'lucide-react'
import SEO from '@/components/SEO'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      nationality: "British",
      role: "Marketing Director",
      area: "Thonglor",
      rentRange: "฿85,000/month",
      date: "March 2024",
      rating: 5,
      text: "Pin was absolutely incredible throughout our entire relocation process. As a British family moving to Bangkok, we were overwhelmed by the options and worried about getting scammed. Pin not only found us the perfect 3-bedroom condo in Thonglor but also helped us set up utilities, internet, and even recommended the best international schools nearby. Her knowledge of the expat community and what we actually need was spot-on.",
      highlight: "Found perfect family home + full relocation support"
    },
    {
      name: "Marcus Weber",
      nationality: "German",
      role: "Tech Executive", 
      area: "Sathorn",
      rentRange: "฿120,000/month",
      date: "January 2024",
      rating: 5,
      text: "I've relocated to 6 different countries for work, and Pin provided the best real estate service I've ever experienced. She understood that as a German, I value efficiency and transparency. No ghost listings, no wasted time - just 4 perfectly curated options that matched my criteria exactly. The luxury condo she found in Sathorn is walking distance to my office and has stunning city views. Professional service at its finest.",
      highlight: "Efficient process, zero time wasted, perfect location"
    },
    {
      name: "Yuki Tanaka",
      nationality: "Japanese",
      role: "Finance Manager",
      area: "Phrom Phong",
      rentRange: "฿75,000/month",
      date: "February 2024",
      rating: 5,
      text: "Pin-san understood exactly what I was looking for as a Japanese expat. She knew about the Japanese community in Phrom Phong and found me a beautiful condo near Japanese restaurants and the Emporium shopping center. Her attention to detail and respectful communication style made the entire process stress-free. She even helped me understand Thai rental customs and negotiated a better deal with the landlord.",
      highlight: "Cultural understanding + great negotiation skills"
    },
    {
      name: "David & Emma Thompson",
      nationality: "Australian",
      role: "Couple - Consultant & Teacher",
      area: "Sukhumvit",
      rentRange: "฿55,000/month",
      date: "April 2024",
      rating: 5,
      text: "We were first-time expats and completely clueless about Bangkok's rental market. Pin was like having a local friend who genuinely cared about our success. She spent hours explaining different neighborhoods, took us on area tours, and helped us understand the pros and cons of each location. The 2-bedroom condo she found us in Sukhumvit is perfect - close to BTS, great restaurants, and within our budget. We couldn't have done this without her!",
      highlight: "Perfect for first-time expats, educational approach"
    },
    {
      name: "Alessandro Rossi",
      nationality: "Italian",
      role: "Restaurant Owner",
      area: "Riverside",
      rentRange: "฿95,000/month",
      date: "December 2023",
      rating: 5,
      text: "As someone in the hospitality business, I appreciate exceptional service - and Pin delivered exactly that. I wanted something unique and special, not just another generic condo. She found me a stunning riverside apartment with panoramic views of the Chao Phraya River. The building has a private boat shuttle to BTS, which I didn't even know existed! Her network and insider knowledge are truly impressive.",
      highlight: "Unique property sourcing, insider market knowledge"
    },
    {
      name: "Jennifer Park",
      nationality: "Korean-American",
      role: "Digital Marketing Specialist",
      area: "Ari",
      rentRange: "฿45,000/month",
      date: "May 2024",
      rating: 5,
      text: "Pin helped me find the perfect balance between budget and lifestyle. As a digital nomad, I wanted to experience 'real' Bangkok while still having modern amenities. The condo she found in Ari is in the heart of the creative district, surrounded by amazing local cafes and art galleries, but still has high-speed internet and a modern gym. She really listened to what I wanted and delivered beyond my expectations.",
      highlight: "Perfect lifestyle match, understood unique needs"
    }
  ]

  const stats = [
    { number: "150+", label: "Happy Families Relocated" },
    { number: "30+", label: "Countries Represented" },
    { number: "฿30K-300K+", label: "Rent Range Expertise" },
    { number: "4.9/5", label: "Average Client Rating" }
  ]

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Client Success Stories | Bangkok Real Estate Testimonials | Pin Hemmawan"
        description="Read authentic testimonials from international clients who found their perfect Bangkok homes. British, German, Japanese, Australian expats share their success stories with Pin Hemmawan."
        keywords="Bangkok real estate testimonials, expat reviews, client success stories, Pin Hemmawan reviews, Bangkok property agent reviews, international clients"
        canonicalUrl="https://pinpropertypro.com/testimonials"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real experiences from expats who found their perfect Bangkok homes through our personalized service. 
            From first-time relocators to seasoned international professionals.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Client Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.nationality}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{testimonial.area}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{testimonial.date}</span>
                      </div>
                      <div className="font-semibold text-green-600">
                        {testimonial.rentRange}
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-3">
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-gray-300 mb-2" />
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 border-l-4 border-red-600">
                      <div className="text-sm text-red-700 mb-1">Key Success Factor:</div>
                      <div className="font-semibold text-red-900">{testimonial.highlight}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Highlight */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Clients Choose Pin Hemmawan
            </h2>
            <p className="text-xl text-gray-600">
              The common themes from our client success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Understanding",
                description: "Deep appreciation for different expat needs and communication styles",
                icon: "🌍"
              },
              {
                title: "No Ghost Listings",
                description: "Only verified, available properties that match your exact criteria",
                icon: "✅"
              },
              {
                title: "Full-Service Support",
                description: "From property search to utilities setup and area orientation",
                icon: "🏠"
              },
              {
                title: "Insider Network",
                description: "Access to off-market properties and exclusive opportunities",
                icon: "🔑"
              },
              {
                title: "Transparent Process",
                description: "Clear communication, no hidden fees, honest market insights",
                icon: "💎"
              },
              {
                title: "Long-term Partnership",
                description: "Ongoing support even after you've moved in and settled",
                icon: "🤝"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied expats who found their perfect Bangkok home with personalized, professional service.
          </p>
          <Button size="lg" asChild className="bg-white text-red-800 hover:bg-red-50 font-semibold shadow-lg">
            <Link to="/contact">Start Your Journey Today</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

