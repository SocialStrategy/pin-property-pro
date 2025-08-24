import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MapPin, Train, Building, Users, MessageCircle, Instagram } from 'lucide-react'

export default function EnglishAreas() {
  const router = useRouter()
  const locale = 'en'
  
  const content = {
    title: "Bangkok Areas Guide | Pin Property Pro",
    description: "Discover the perfect neighborhood for your lifestyle. Each area offers unique advantages for different types of residents.",
    heading: "Bangkok Areas Guide",
    subtitle: "Discover the perfect neighborhood for your lifestyle. Each area offers unique advantages for different types of residents.",
    cta: {
      title: "Ready to Find Your Perfect Bangkok Home?",
      subtitle: "Let me help you navigate these areas and find the ideal condo that matches your lifestyle and budget.",
      button: "Schedule Your Area Tour"
    }
  }

  const areas = [
    {
      name: "Sukhumvit",
      description: "The heart of expat life in Bangkok. This vibrant corridor offers everything from luxury shopping to world-class dining, with excellent BTS connectivity.",
      bts: ["Nana", "Asok", "Phrom Phong", "Thong Lo", "Ekkamai"],
      highlights: [
        "Terminal 21 & EmQuartier shopping centers",
        "Diverse international dining scene",
        "Active nightlife and entertainment",
        "Multiple BTS stations for easy access",
        "International hospitals nearby"
      ],
      rentRange: "฿30,000 - ฿150,000+",
      suitability: "Perfect for young professionals, expats new to Bangkok, and those who want to be in the center of the action. Great for networking and social life.",
      image: "/images/sukhumvit.jpg"
    },
    {
      name: "Sathorn / Silom",
      description: "Bangkok's central business district (CBD). Professional, polished, and efficient. The beautiful Lumpini Park offers a green escape from the urban hustle.",
      bts: ["Chong Nonsi", "Surasak", "Saphan Taksin"],
      highlights: [
        "Central Business District location",
        "Lumpini Park for jogging and relaxation",
        "High-end office buildings and hotels",
        "River access via Saphan Taksin",
        "Premium shopping at Silom Complex"
      ],
      rentRange: "฿50,000 - ฿300,000+",
      suitability: "Ideal for business executives, finance professionals, and those who prioritize luxury and convenience. Walking distance to major offices.",
      image: "/images/sathorn.jpg"
    },
    {
      name: "Thonglor / Phrom Phong",
      description: "Trendy and upscale area known for its stylish restaurants, rooftop bars, and boutique shopping. Popular among young professionals and creatives.",
      bts: ["Thong Lo", "Phrom Phong"],
      highlights: [
        "Trendy restaurants and cafes",
        "Rooftop bars with city views",
        "Boutique shopping and galleries",
        "International schools nearby",
        "Active expat community"
      ],
      rentRange: "฿60,000 - ฿200,000+",
      suitability: "Perfect for creative professionals, young couples, and those who appreciate trendy lifestyle and high-quality dining experiences.",
      image: "/images/thonglor.jpg"
    },
    {
      name: "Ari",
      description: "Hip neighborhood with authentic local charm. Known for its indie cafes, vintage shops, and artistic community. More affordable while still trendy.",
      bts: ["Ari", "Sanam Pao"],
      highlights: [
        "Authentic local markets and street food",
        "Hip cafes and independent shops",
        "Artistic and creative community",
        "More affordable than central areas",
        "Chatuchak Weekend Market nearby"
      ],
      rentRange: "฿25,000 - ฿80,000",
      suitability: "Great for creative types, budget-conscious professionals, and those who want authentic Bangkok experiences while staying connected.",
      image: "/images/ari.jpg"
    },
    {
      name: "On Nut",
      description: "Family-friendly area offering excellent value for money. Larger living spaces, good schools, and a strong expat family community.",
      bts: ["On Nut", "Bang Chak"],
      highlights: [
        "Larger condos for the same budget",
        "Family-friendly amenities and parks",
        "International schools in the area",
        "Strong expat family community",
        "Easy access to Mega Bangna shopping"
      ],
      rentRange: "฿20,000 - ฿60,000",
      suitability: "Perfect for families with children, budget-conscious professionals, and those who prioritize space and value over central location.",
      image: "/images/onnut.jpg"
    },
    {
      name: "Riverside",
      description: "Peaceful riverside living with stunning Chao Phraya River views. Luxury high-rise condos with hotel-style amenities and river transportation.",
      bts: ["Saphan Taksin"],
      highlights: [
        "Stunning river views and sunsets",
        "Luxury high-rise condos",
        "Hotel-style amenities and services",
        "River taxi transportation",
        "Peaceful escape from city noise"
      ],
      rentRange: "฿80,000 - ฿300,000+",
      suitability: "Ideal for executives, retirees, and those seeking luxury living with tranquil river views while staying connected to the city.",
      image: "/images/riverside.jpg"
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/areas" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/areas" />
      </Head>
      
      <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
        {/* Navbar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/en" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Pin Property Pro</span>
              </Link>
              
              <div className="flex items-center space-x-6">
                <Link href="/en/blog" className="text-gray-700 hover:text-red-600">
                  Blog
                </Link>
                <Link href="/en/areas" className="text-gray-700 hover:text-red-600 font-semibold">
                  Areas
                </Link>
                <Link href="/en/testimonials" className="text-gray-700 hover:text-red-600">
                  Testimonials
                </Link>
                <Link href="/en/contact" className="text-gray-700 hover:text-red-600">
                  Contact
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/en/areas" className="px-3 py-1 rounded bg-red-600 text-white">
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/areas" className="px-3 py-1 rounded text-gray-700">
                    🇹🇭 TH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {content.heading}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            </div>

            {/* Areas Grid */}
            <div className="space-y-12">
              {areas.map((area, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h2 className="text-2xl lg:text-3xl text-gray-900 mb-2 font-bold">
                          {area.name}
                        </h2>
                        <p className="text-gray-600 text-lg">{area.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 mb-1">Rent Range</div>
                        <div className="text-xl font-bold text-green-600">{area.rentRange}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Area Image */}
                      <div className="lg:col-span-1">
                        <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden">
                          <img 
                            src={area.image} 
                            alt={area.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Area Info */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* BTS Access */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Train className="w-5 h-5 text-blue-600" />
                              BTS Access
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {area.bts?.map((station, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                  BTS {station}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Highlights */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-green-600" />
                              Area Highlights
                            </h4>
                            <ul className="space-y-2">
                              {area.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Suitability */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-600" />
                            Best For
                          </h4>
                          <p className="text-gray-600">{area.suitability}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center rounded-3xl p-12 shadow-2xl text-white" style={{background: 'linear-gradient(135deg, #800020 0%, #660019 50%, #4d0013 100%)'}}>
              <h2 className="text-3xl font-bold mb-4">
                {content.cta.title}
              </h2>
              <p className="text-xl mb-8" style={{color: '#F9F9DC'}}>
                {content.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en/contact" className="font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-center" style={{backgroundColor: '#F9F9DC', color: '#800020'}}>
                  <MessageCircle className="w-6 h-6 inline mr-3" />
                  {content.cta.button}
                </Link>
                <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-center border-2" style={{borderColor: '#F9F9DC', color: '#800020'}}>
                  <Instagram className="w-6 h-6 inline mr-3" />
                  See Properties
                </a>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2025 Pin Property Pro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}