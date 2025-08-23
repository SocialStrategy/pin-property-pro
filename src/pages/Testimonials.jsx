import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Calendar, MapPin, DollarSign, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 'sarah-melbourne-sukhumvit',
      name: 'Sarah Johnson',
      title: 'From Melbourne to Sukhumvit: Sarah\'s Luxury Condo Success Story',
      excerpt: 'How I helped Sarah, a marketing executive from Melbourne, find her perfect 2-bedroom luxury condo in the heart of Sukhumvit within just 3 days.',
      date: '2025-01-16',
      nationality: 'Australia',
      area: 'Sukhumvit',
      budget: '฿80,000/month',
      image: '/images/sukhumvit.jpg',
      testimonial: 'Pin made my Bangkok move completely stress-free. The condo exceeded my expectations, and the entire process was smooth and professional. I couldn\'t have asked for better service!'
    },
    {
      id: 'james-london-sathorn',
      name: 'James Wilson',
      title: 'Investment Banking Executive Finds His Bangkok Base in Sathorn',
      excerpt: 'James from London needed a premium location close to the financial district. Here\'s how we secured him a stunning high-rise condo in Sathorn.',
      date: '2025-01-09',
      nationality: 'UK',
      area: 'Sathorn',
      budget: '฿120,000/month',
      image: '/images/sathorn.jpg',
      testimonial: 'Exceptional service! Pin handled everything from viewing to contract signing. Made my Bangkok relocation stress-free.'
    },
    {
      id: 'michael-nyc-thonglor',
      name: 'Michael Chen',
      title: 'Tech Entrepreneur\'s Dream Home: A Modern Thonglor Penthouse',
      excerpt: 'Michael relocated from New York for his startup. We found him the perfect modern penthouse in trendy Thonglor with all the amenities he needed.',
      date: '2025-01-02',
      nationality: 'USA',
      area: 'Thonglor',
      budget: '฿150,000/month',
      image: '/images/thonglor.jpg',
      testimonial: 'Pin\'s local knowledge is incredible. Found me a penthouse in Thonglor that I never would have discovered on my own.'
    },
    {
      id: 'emma-manchester-ari',
      name: 'Emma Thompson',
      title: 'Young Professional Discovers Hidden Gem in Ari District',
      excerpt: 'Emma from Manchester wanted something unique and artistic. We found her a charming boutique condo in the creative Ari neighborhood.',
      date: '2024-12-26',
      nationality: 'UK',
      area: 'Ari',
      budget: '฿45,000/month',
      image: '/images/ari.jpg',
      testimonial: 'Pin found me the perfect artistic space in Ari. The neighborhood has such character and the rent was very reasonable for what I got.'
    },
    {
      id: 'david-singapore-onnut',
      name: 'David Lim',
      title: 'Smart Investment: Singapore Expat Finds Value in On Nut',
      excerpt: 'David from Singapore wanted maximum value for money. We showed him why On Nut is Bangkok\'s best-kept secret for savvy investors.',
      date: '2024-12-19',
      nationality: 'Singapore',
      area: 'On Nut',
      budget: '฿35,000/month',
      image: '/images/onnut.jpg',
      testimonial: 'Pin showed me incredible value in On Nut. Great location, modern facilities, and my rent is half what I\'d pay in Sukhumvit.'
    },
    {
      id: 'sophie-perth-riverside',
      name: 'Sophie Martinez',
      title: 'Riverside Luxury: Perth Native Finds Her Bangkok Sanctuary',
      excerpt: 'Sophie from Perth dreamed of river views and luxury amenities. We delivered with a stunning riverside condo that exceeded her expectations.',
      date: '2024-12-12',
      nationality: 'Australia',
      area: 'Riverside',
      budget: '฿95,000/month',
      image: '/images/riverside.jpg',
      testimonial: 'The river views are breathtaking! Pin understood exactly what I was looking for and delivered beyond my expectations.'
    }
  ]

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const getFlagEmoji = (nationality) => {
    const flags = {
      'Australia': '🇦🇺',
      'UK': '🇬🇧',
      'USA': '🇺🇸',
      'Singapore': '🇸🇬'
    }
    return flags[nationality] || '🌍'
  }

  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What My Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from expats who found their perfect Bangkok homes. 
            See why clients from around the world trust Pin Hemmawan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.area} area in Bangkok`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge style={{backgroundColor: '#800020', color: 'white'}}>
                    Success Story
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge style={{backgroundColor: '#F9F9DC', color: '#800020'}}>
                    {getFlagEmoji(testimonial.nationality)} {testimonial.nationality}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  {testimonial.name}
                </CardTitle>
                <p className="text-sm text-gray-600">{testimonial.area} • {testimonial.budget}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="text-sm text-gray-500 pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(testimonial.date)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 p-8 rounded-2xl" style={{backgroundColor: '#800020', color: 'white'}}>
          <h2 className="text-3xl font-bold mb-4">Ready to Join My Happy Clients?</h2>
          <p className="mb-6 text-lg" style={{color: '#F9F9DC'}}>
            Experience the same exceptional service that my clients rave about.
          </p>
          <a 
            href="/contact" 
            className="font-bold px-8 py-3 rounded-lg transition-colors inline-block hover:opacity-90"
            style={{backgroundColor: '#F9F9DC', color: '#800020'}}
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
