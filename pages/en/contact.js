import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { MessageCircle, Instagram, Phone, Mail, MapPin, Clock, Users, Star, Menu, X } from 'lucide-react'

export default function EnglishContact() {
  const router = useRouter()
  const locale = 'en'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const content = {
    title: "Contact Pin Hemmawan | Bangkok Real Estate Expert",
    description: "Ready to start your stress-free condo search? Choose your preferred way to connect, and I'll respond the same day with a personalized consultation plan.",
    heading: "Start Your Dream Home Journey",
    subtitle: "Ready to start your stress-free condo search? Choose your preferred way to connect, and I'll respond the same day with a personalized consultation plan."
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Pin will contact you the same day.')
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "LINE Chat",
      description: "Most popular in Thailand - instant messaging",
      action: "Add @pinhemmawan",
      link: "https://line.me/ti/p/@pinhemmawan",
      primary: true,
      color: "green"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "International messaging",
      action: "+66 95 912 4769",
      link: "https://wa.me/66959124769",
      primary: true,
      color: "green"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "See latest properties & updates",
      action: "@pin.propertypro",
      link: "https://www.instagram.com/pin.propertypro",
      primary: false,
      color: "purple"
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Direct consultation",
      action: "+66 95 912 4769",
      link: "tel:+66959124769",
      primary: false,
      color: "blue"
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pinpropertypro.com/en/contact" />
        <link rel="alternate" hrefLang="th" href="https://pinpropertypro.com/th/contact" />
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
                <Link href="/en/contact" className="text-red-600 font-semibold">
                  Contact
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/en/contact" className="px-3 py-1 rounded bg-red-600 text-white">
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/contact" className="px-3 py-1 rounded text-gray-700">
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
                    className="block px-3 py-2 text-red-600 bg-red-50 rounded-md font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  {/* Mobile Language Toggle */}
                  <div className="flex items-center gap-2 px-3 py-2">
                    <Link href="/en/contact" className="px-3 py-1 rounded bg-red-600 text-white text-sm">
                      🇬🇧 EN
                    </Link>
                    <Link href="/th/contact" className="px-3 py-1 rounded text-gray-700 text-sm">
                      🇹🇭 TH
                    </Link>
                  </div>
                </div>
              </div>
            )}
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

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Methods */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon
                    
                    return (
                      <a key={index} href={method.link} target="_blank" rel="noopener noreferrer" className={`block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:md:scale-105 cursor-pointer ${method.primary ? 'border-2 border-green-400 bg-green-50' : 'border border-gray-200'}`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.primary ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{method.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                            <span className={`text-sm font-medium ${method.primary ? 'text-green-600' : method.color === 'purple' ? 'text-purple-600' : 'text-blue-600'}`}>
                              {method.action}
                            </span>
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Why Choose Pin?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm text-gray-700">5.0/5 Average Rating</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">Same Day Response</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-sm text-gray-700">All Bangkok Areas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">500+ Happy Clients</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h2 className="text-2xl font-bold mb-2">Schedule Your Free Consultation</h2>
                  <p className="text-gray-600 mb-6">
                    Tell me about your needs and I'll prepare a personalized property selection for our first meeting.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                        <input 
                          type="text" 
                          placeholder="e.g., British, German, Japanese"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone/WhatsApp</label>
                        <input 
                          type="tel" 
                          placeholder="+66 XX XXX XXXX"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Budget (THB)</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                          <option value="">Select budget range</option>
                          <option value="under-30000">Under ฿30,000</option>
                          <option value="30000-50000">฿30,000 - ฿50,000</option>
                          <option value="50000-80000">฿50,000 - ฿80,000</option>
                          <option value="80000-120000">฿80,000 - ฿120,000</option>
                          <option value="120000-200000">฿120,000 - ฿200,000</option>
                          <option value="200000+">฿200,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Desired Move-in Date</label>
                        <input 
                          type="date" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Areas</label>
                      <input 
                        type="text" 
                        placeholder="e.g., Sukhumvit, Sathorn, Thonglor"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements or Questions</label>
                      <textarea 
                        placeholder="Tell me about your lifestyle, work location, must-have amenities, or any specific needs..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:md:scale-105 transition-all duration-300" style={{background: 'linear-gradient(135deg, #800020 0%, #660019 50%, #4d0013 100%)'}}
                    >
                      Schedule My Free Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center rounded-2xl p-12 text-white shadow-2xl" style={{background: 'linear-gradient(135deg, #800020 0%, #660019 50%, #4d0013 100%)'}}>
              <h2 className="text-3xl font-bold mb-4">
                Don't Navigate Bangkok's Rental Market Alone
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{color: '#F9F9DC'}}>
                Let me be your unfair advantage. With deep local knowledge and Western service standards, 
                I'll help you find your perfect Bangkok home without the stress and wasted time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://line.me/ti/p/@pinhemmawan" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:md:scale-105 transition-all duration-300" style={{backgroundColor: '#F9F9DC', color: '#800020'}}>
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Message on LINE
                </a>
                <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="border-2 text-white hover:bg-white font-semibold text-lg px-8 py-4 rounded-lg hover:shadow-xl transform hover:md:scale-105 transition-all duration-300" style={{borderColor: '#F9F9DC', '--hover-color': '#800020'}}>
                  <Instagram className="w-5 h-5 inline mr-2" />
                  Follow on Instagram
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