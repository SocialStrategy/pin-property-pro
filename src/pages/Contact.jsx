import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MessageCircle, Instagram, Phone, Mail, MapPin, Clock, Users, Star } from 'lucide-react'
import SEO from '@/components/SEO'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
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

  const faqs = [
    {
      question: "What's your service fee?",
      answer: "My service is completely free for tenants. Landlords pay the standard agency commission, so you get expert representation at no cost."
    },
    {
      question: "How quickly can you find me a place?",
      answer: "Typically 1-2 weeks for most clients. I pre-screen properties to show you only verified, available options that match your criteria."
    },
    {
      question: "Do you help with the rental contract?",
      answer: "Absolutely! I review all contracts, negotiate terms when possible, and ensure you understand every detail before signing."
    },
    {
      question: "What if I find a property online myself?",
      answer: "Perfect! Thanks to Bangkok's co-agency system, I can represent you for any property, ensuring your interests are protected throughout the process."
    },
    {
      question: "Do you provide support after I move in?",
      answer: "Yes! I help with utilities setup, internet installation, and provide ongoing support for any property-related issues during your tenancy."
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Contact Pin Hemmawan | Bangkok Real Estate Agent | Free Consultation"
        description="Contact Pin Hemmawan for expert Bangkok real estate services. Schedule your free consultation via LINE, WhatsApp, or phone. Professional relocation support for expats."
        keywords="contact Pin Hemmawan, Bangkok real estate agent contact, free consultation, LINE WhatsApp, Bangkok property agent, expat relocation services"
        canonicalUrl="https://pinpropertypro.com/contact"
      />
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
                  <Card key={index} className={`mb-4 hover:shadow-lg transition-shadow cursor-pointer ${method.primary ? 'border-red-400 bg-red-50' : ''}`}>
                    <CardContent className="p-6">
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
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-slate-50 to-gray-50">
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Your Free Consultation</CardTitle>
                <p className="text-gray-600">
                  Tell me about your needs and I'll prepare a personalized property selection for our first meeting.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" required placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input id="nationality" placeholder="e.g., British, German, Japanese" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone/WhatsApp</Label>
                      <Input id="phone" placeholder="+66 XX XXX XXXX" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="budget">Monthly Budget (THB)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30000-50000">฿30,000 - ฿50,000</SelectItem>
                          <SelectItem value="50000-80000">฿50,000 - ฿80,000</SelectItem>
                          <SelectItem value="80000-120000">฿80,000 - ฿120,000</SelectItem>
                          <SelectItem value="120000-200000">฿120,000 - ฿200,000</SelectItem>
                          <SelectItem value="200000+">฿200,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="moveDate">Preferred Move-in Date</Label>
                      <Input id="moveDate" type="date" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="bedrooms">Bedrooms</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="studio">Studio</SelectItem>
                          <SelectItem value="1">1 Bedroom</SelectItem>
                          <SelectItem value="2">2 Bedrooms</SelectItem>
                          <SelectItem value="3">3 Bedrooms</SelectItem>
                          <SelectItem value="4+">4+ Bedrooms</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="areas">Preferred Areas</Label>
                      <Input id="areas" placeholder="e.g., Sukhumvit, Sathorn, Thonglor" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requirements">Special Requirements or Questions</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Tell me about your lifestyle, work location, must-have amenities, or any specific needs..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-semibold shadow-lg">
                    Schedule My Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
            <Button size="lg" className="bg-white hover:bg-red-50 text-red-800 font-semibold shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Message on LINE
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-800 font-semibold">
              <Instagram className="w-5 h-5 mr-2" />
              Follow on Instagram
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

