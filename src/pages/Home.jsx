import { Link } from 'react-router-dom'
import { MessageCircle, MapPin, Shield, Users, Star, Instagram, Phone, CheckCircle, Award, Home as HomeIcon } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32" style={{background: 'linear-gradient(135deg, #F9F9DC 0%, #F5F5D0 50%, #E8E8C8 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#800020', color: 'white'}}>
                <Award className="w-4 h-4" />
                Bangkok's Premier Real Estate Expert
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Find Your{' '}
                <span className="text-transparent bg-clip-text" style={{background: 'linear-gradient(45deg, #800020, #660019)', WebkitBackgroundClip: 'text'}}>
                  Dream Home
                </span>
                {' '}in Bangkok
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Professional real estate services with personalized attention. From luxury condos to perfect apartments - I'll help you discover your ideal Bangkok home.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Schedule Free Consultation
                </Link>
                <Link to="/areas" className="btn-secondary text-center">
                  <MapPin className="w-5 h-5 inline mr-2" />
                  Explore Areas
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Card */}
            <div className="relative">
              <div className="card bg-white hover:shadow-2xl transition-all duration-500">
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="flex items-start gap-4">
                    <img
                      src="/images/pin-profile.jpg"
                      alt="Pin Hemmawan - Bangkok Real Estate Expert"
                      className="w-20 h-20 rounded-2xl object-cover shadow-xl border-2 border-red-100"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">Pin Hemmawan</h3>
                      <p className="text-red-600 font-medium">Bangkok Real Estate Specialist</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">5.0 Rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-2xl border-l-4 border-red-600">
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      "Your dream home awaits in Bangkok. Let me guide you to the perfect property with personalized service and expert local knowledge."
                    </p>
                  </div>

                  {/* Contact Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://wa.me/66891234567" target="_blank" rel="noopener noreferrer" className="btn-primary text-center bg-green-600 hover:bg-green-700">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      WhatsApp
                    </a>
                    <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
                      <Instagram className="w-4 h-4 inline mr-2" />
                      Follow
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
              Why Choose Pin Hemmawan?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with Bangkok's most trusted real estate professional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep knowledge of Bangkok neighborhoods, market trends, and hidden gems. I know the best buildings, amenities, and investment opportunities.
              </p>
            </div>

            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Verified Properties</h3>
              <p className="text-gray-600 leading-relaxed">
                No more ghost listings or fake photos. Every property I show is personally verified, available, and accurately represented.
              </p>
            </div>

            <div className="card hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Full Support</h3>
              <p className="text-gray-600 leading-relaxed">
                From initial consultation to move-in day and beyond. I handle negotiations, paperwork, utilities setup, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 text-white" style={{background: 'linear-gradient(135deg, #800020 0%, #660019 50%, #4d0013 100%)'}}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto mb-12" style={{color: '#F9F9DC'}}>
            Don't waste time with unreliable agents or fake listings. Get professional service and verified properties from Bangkok's trusted real estate expert.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-center" style={{backgroundColor: '#F9F9DC', color: '#800020'}}>
              <MessageCircle className="w-6 h-6 inline mr-3" />
              Schedule Free Consultation
            </Link>
            <a href="https://wa.me/66891234567" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-center">
              <Phone className="w-6 h-6 inline mr-3" />
              WhatsApp Now
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 text-red-200">
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
    </div>
  )
}

export default Home

