import { MessageCircle, Instagram, Phone, Mail, MapPin, Clock, Users, Star } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Pin will contact you within 24 hours.')
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "LINE Chat",
      description: "Instant messaging for quick questions",
      action: "Add @pinhemmawan",
      link: "https://line.me/ti/p/@pinhemmawan",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "International messaging",
      action: "+66 89 123 4567",
      link: "https://wa.me/66891234567",
      primary: true
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "See latest properties & updates",
      action: "@pin.propertypro",
      link: "https://www.instagram.com/pin.propertypro",
      primary: false
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Direct consultation",
      action: "+66 89 123 4567",
      link: "tel:+66891234567",
      primary: false
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Find Your Perfect Bangkok Home
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your stress-free condo search? Choose your preferred way to connect, 
            and I'll respond within 24 hours with a personalized consultation plan.
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
                  <div key={index} className={`card mb-4 hover:shadow-lg transition-shadow cursor-pointer ${method.primary ? 'border-red-400 bg-red-50' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${method.primary ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                        <a 
                          href={method.link}
                          className={`text-sm font-medium ${method.primary ? 'text-red-600 hover:text-red-700' : 'text-blue-600 hover:text-blue-700'}`}
                        >
                          {method.action}
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Stats */}
            <div className="card bg-gradient-to-br from-slate-50 to-gray-50">
              <h3 className="font-bold text-gray-900 mb-4">Why Choose Pin?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">1,152+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-700">4.9/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">24hr Response Time</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-700">All Bangkok Areas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card shadow-lg">
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
                      <option value="30000-50000">฿30,000 - ฿50,000</option>
                      <option value="50000-80000">฿50,000 - ฿80,000</option>
                      <option value="80000-120000">฿80,000 - ฿120,000</option>
                      <option value="120000-200000">฿120,000 - ฿200,000</option>
                      <option value="200000+">฿200,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Areas</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Sukhumvit, Sathorn, Thonglor"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
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
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-colors"
                >
                  Schedule My Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Don't Navigate Bangkok's Rental Market Alone
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let me be your unfair advantage. With deep local knowledge and Western service standards, 
            I'll help you find your perfect Bangkok home without the stress and wasted time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://line.me/ti/p/@pinhemmawan" className="bg-white hover:bg-red-50 text-red-800 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors">
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Message on LINE
            </a>
            <a href="https://www.instagram.com/pin.propertypro/" className="border-white border text-white hover:bg-white hover:text-red-800 font-semibold text-lg px-8 py-4 rounded-lg transition-colors">
              <Instagram className="w-5 h-5 inline mr-2" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

