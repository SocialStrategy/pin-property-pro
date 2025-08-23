import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { CheckCircle, MapPin, Users, Shield, Clock, Star, Instagram, MessageCircle, Phone, Award, Home as HomeIcon, Sparkles } from 'lucide-react'
import SEO from '@/components/SEO'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-50/30">
      <SEO 
        title="Pin Property Pro - Premier Bangkok Real Estate Agent | Luxury Condos & Apartments"
        description="Pin Hemmawan - Bangkok's trusted real estate expert specializing in luxury condos and apartments. Professional service, verified properties, complete relocation support for expats."
        keywords="Pin Property Pro, Bangkok real estate, luxury condos, expat housing, Sukhumvit, Sathorn, Thonglor, BTS connected, relocation services, Bangkok property agent"
        canonicalUrl="https://pinpropertypro.com"
      />
      
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/20 to-cream-50 py-24 lg:py-32" role="banner">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" />
                  Bangkok's Premier Real Estate Expert
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Find Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                    Dream Home
                  </span>
                  {' '}in Bangkok
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Professional real estate services with personalized attention. From luxury condos to perfect apartments - I'll help you discover your ideal Bangkok home.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Schedule Free Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold transition-all duration-300">
                  <Link to="/areas" className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Explore Areas
                  </Link>
                </Button>
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

            {/* Right Content - Pin's Profile Card */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cream-100 to-cream-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-red-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-xl">
                        <HomeIcon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">Pin Property Pro</h3>
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
                  <div className="bg-gradient-to-r from-red-50 to-cream-50 p-6 rounded-2xl border-l-4 border-red-600">
                    <p className="text-gray-700 italic text-lg leading-relaxed">
                      "Your dream home awaits in Bangkok. Let me guide you to the perfect property with personalized service and expert local knowledge."
                    </p>
                  </div>

                  {/* Contact Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                      <a href="https://wa.me/66891234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                      <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Instagram className="w-4 h-4" />
                        Follow
                      </a>
                    </Button>
                  </div>

                  {/* Instagram Badge */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-gray-50 py-3 rounded-xl">
                    <Instagram className="w-4 h-4" />
                    <span>@pin.propertypro</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Active Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Pin Property Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with Bangkok's most trusted real estate professional. 
              Personalized service, verified properties, and complete peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-red-50/30 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full -translate-y-8 translate-x-8 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Local Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deep knowledge of Bangkok neighborhoods, market trends, and hidden gems. 
                    I know the best buildings, amenities, and investment opportunities in every district.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-red-50/30 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full -translate-y-8 translate-x-8 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Verified Properties</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No more ghost listings or fake photos. Every property I show is personally verified, 
                    available, and accurately represented with real photos and details.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-red-50/30 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full -translate-y-8 translate-x-8 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Full Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From initial consultation to move-in day and beyond. I handle negotiations, 
                    paperwork, utilities setup, and provide ongoing support throughout your stay.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Integration Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Follow My Latest Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the newest listings, market insights, and success stories on Instagram.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">@pin.propertypro</h3>
                    <p className="text-gray-600">Bangkok Real Estate Expert</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Get exclusive access to new listings, virtual property tours, client testimonials, 
                  and insider tips about Bangkok's real estate market.
                </p>
                <Button asChild className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
                  <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Instagram className="w-5 h-5" />
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Instagram Post Placeholders - Modern Design */}
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-3 flex items-center justify-center">
                  <HomeIcon className="w-12 h-12 text-red-600" />
                </div>
                <p className="text-sm text-gray-600">Luxury Condo in Sukhumvit</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-3 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-red-600" />
                </div>
                <p className="text-sm text-gray-600">Prime Location Tours</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-3 flex items-center justify-center">
                  <Star className="w-12 h-12 text-red-600" />
                </div>
                <p className="text-sm text-gray-600">Client Success Stories</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-3 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-red-600" />
                </div>
                <p className="text-sm text-gray-600">Market Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Simple Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How I Help You Find Home
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My streamlined process ensures you find the perfect property quickly and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "We discuss your needs, budget, and preferences to understand your ideal Bangkok home.",
                icon: MessageCircle
              },
              {
                step: "02", 
                title: "Curated Selection",
                description: "I present only verified, available properties that perfectly match your criteria.",
                icon: CheckCircle
              },
              {
                step: "03",
                title: "Property Tours",
                description: "Personal guided viewings with insider insights about each property and neighborhood.",
                icon: MapPin
              },
              {
                step: "04",
                title: "Complete Support",
                description: "From negotiation to move-in, I handle all paperwork and logistics for you.",
                icon: Shield
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full border-4 border-red-100 flex items-center justify-center shadow-lg">
                      <span className="text-red-600 font-bold text-sm">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Find Your{' '}
              <span className="text-red-200">Perfect Home?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Don't waste time with unreliable agents or fake listings. 
              Get professional service and verified properties from Bangkok's trusted real estate expert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" asChild className="bg-white text-red-700 hover:bg-red-50 font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <a href="https://wa.me/66891234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  WhatsApp Now
                </a>
              </Button>
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
        </div>
      </section>
    </div>
  )
}

export default Home

