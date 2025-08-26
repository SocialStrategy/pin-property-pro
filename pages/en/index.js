import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { MessageCircle, MapPin, Shield, Users, Star, Instagram, Phone, CheckCircle, Award, Menu, X } from 'lucide-react'

export default function EnglishHome() {
  const router = useRouter()
  const locale = 'en' // Force English locale
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const content = {
    title: "Pin Hemmawan - Bangkok Real Estate Expert | Find Your Dream Home",
    description: "Professional Bangkok real estate services. Find luxury condos, apartments & homes with Pin Hemmawan, Bangkok's trusted property expert.",
    badge: "Bangkok's Premier Real Estate Expert",
    hero: {
      title: "Find Your Dream Home in Bangkok",
      subtitle: "Professional real estate services with personalized attention. From luxury condos to perfect apartments - I'll help you discover your ideal Bangkok home.",
      consultation: "Schedule Free Consultation",
      explore: "Explore Areas"
    },
    stats: {
      rating: "Client Rating",
      support: "Response Time"
    },
    profile: {
      name: "Pin Hemmawan",
      title: "Bangkok Real Estate Expert",
      rating: "Client Rating",
      quote: "I don't just find you a place to live - I help you find a place you'll love to call home. Every client deserves personalized service and genuine care.",
      whatsapp: "WhatsApp",
      follow: "Follow"
    },
    services: {
      title: "Why Choose Pin Hemmawan?",
      subtitle: "Experience the difference of working with Bangkok's most trusted real estate professional.",
      local: {
        title: "Deep Local Knowledge",
        desc: "Born and raised in Bangkok, I know every neighborhood, hidden gem, and upcoming area. Get insider insights you won't find anywhere else."
      },
      verified: {
        title: "Verified Properties Only",
        desc: "No ghost listings, no surprises. Every property I show you is real, available, and exactly as described. Your time is valuable."
      },
      support: {
        title: "Full-Service Support",
        desc: "From viewing to move-in and beyond. I handle contracts, negotiations, and provide ongoing support throughout your Bangkok journey."
      }
    },
    cta: {
      title: "Ready to Find Your Bangkok Home?",
      subtitle: "Join hundreds of satisfied expats who found their perfect home through personalized service and local expertise.",
      consultation: "Free Consultation",
      whatsapp: "WhatsApp Now"
    }
  }

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/" />
        <link rel="alternate" hrefLang="x-default" href="https://pin-property-pro.vercel.app/en/" />
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
                <span className="text-lg sm:text-xl font-bold text-gray-900">Pin Property Pro</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/en/blog" className="text-gray-700 hover:text-red-600">
                  Blog
                </Link>
                <Link href="/en/areas" className="text-gray-700 hover:text-red-600">
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
                  <Link href="/en" className="px-3 py-1 rounded bg-red-600 text-white">
                    🇬🇧 EN
                  </Link>
                  <Link href="/th" className="px-3 py-1 rounded text-gray-700">
                    🇹🇭 TH
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                  <Link 
                    href="/en/blog" 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/en/areas" 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Areas
                  </Link>
                  <Link 
                    href="/en/testimonials" 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link 
                    href="/en/contact" 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  {/* Mobile Language Toggle */}
                  <div className="flex items-center gap-2 px-3 py-2">
                    <Link href="/en" className="px-3 py-1 rounded bg-red-600 text-white text-sm">
                      🇬🇧 EN
                    </Link>
                    <Link href="/th" className="px-3 py-1 rounded text-gray-700 text-sm">
                      🇹🇭 TH
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-24 lg:py-32" style={{background: 'linear-gradient(135deg, #F9F9DC 0%, #F5F5D0 50%, #E8E8C8 100%)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#800020', color: 'white'}}>
                  <Award className="w-4 h-4" />
                  {content.badge}
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  {content.hero.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {content.hero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/en/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:md:scale-105 transition-all duration-300 text-center">
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    {content.hero.consultation}
                  </Link>
                  <Link href="/en/areas" className="bg-white hover:bg-gray-50 font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:md:scale-105 transition-all duration-300 text-center border-2" style={{borderColor: '#800020', color: '#800020'}}>
                    <MapPin className="w-5 h-5 inline mr-2" />
                    {content.hero.explore}
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-4 sm:gap-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">5★</div>
                    <div className="text-sm text-gray-600">{content.stats.rating}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">Same Day</div>
                    <div className="text-sm text-gray-600">{content.stats.support}</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Profile Card */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="space-y-6">
                    {/* Profile Header */}
                    <div className="flex items-start gap-4">
                      <img
                        src="/images/pin-profile.jpg"
                        alt="Pin Hemmawan - Bangkok Real Estate Expert"
                        className="w-20 h-20 rounded-2xl object-cover shadow-xl border-2 border-red-100"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">{content.profile.name}</h3>
                        <p className="text-red-600 font-medium">{content.profile.title}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm text-gray-500 ml-2">5.0 {content.profile.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-2xl border-l-4 border-red-600">
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        "{content.profile.quote}"
                      </p>
                    </div>

                    {/* Contact Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <a href="https://wa.me/66959124769" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:md:scale-105 transition-all duration-300 text-center">
                        <MessageCircle className="w-4 h-4 inline mr-2" />
                        {content.profile.whatsapp}
                      </a>
                      <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 font-bold px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:md:scale-105 transition-all duration-300 text-center border-2" style={{borderColor: '#800020', color: '#800020'}}>
                        <Instagram className="w-4 h-4 inline mr-2" />
                        {content.profile.follow}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24" style={{backgroundColor: '#F9F9DC'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {content.services.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content.services.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:md:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{content.services.local.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.services.local.desc}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:md:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{content.services.verified.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.services.verified.desc}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:md:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{content.services.support.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {content.services.support.desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 text-white" style={{background: 'linear-gradient(135deg, #800020 0%, #660019 50%, #4d0013 100%)'}}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              {content.cta.title}
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-12" style={{color: '#F9F9DC'}}>
              {content.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/en/contact" className="font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:md:scale-105 transition-all duration-300 text-center" style={{backgroundColor: '#F9F9DC', color: '#800020'}}>
                <MessageCircle className="w-6 h-6 inline mr-3" />
                {content.cta.consultation}
              </Link>
              <a href="https://wa.me/66959124769" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:md:scale-105 transition-all duration-300 text-center">
                <Phone className="w-6 h-6 inline mr-3" />
                {content.cta.whatsapp}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-8 text-red-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Verified Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

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
