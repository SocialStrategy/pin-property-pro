import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { MapPin, Train, Building, Users, ShoppingBag, Coffee } from 'lucide-react'
import SEO from '@/components/SEO'

const Areas = () => {
  const areas = [
    {
      name: "Sukhumvit",
      description: "The heart of expat life in Bangkok. Central location with excellent BTS connectivity, diverse dining, and vibrant nightlife.",
      bts: ["Nana", "Asok", "Phrom Phong", "Thong Lo", "Ekkamai"],
      highlights: ["Shopping malls", "International restaurants", "Nightlife", "Large expat community"],
      primeCondos: [
        { name: "The Prime 11", location: "Sukhumvit Soi 11", btsDistance: "10 min walk to Nana BTS" },
        { name: "Prime Mansion Sukhumvit 31", location: "Sukhumvit Soi 31", btsDistance: "Near Phrom Phong BTS" },
        { name: "Royce Private Residences", location: "Sukhumvit Road", btsDistance: "Super-luxury on main road" }
      ],
      rentRange: "฿30,000 - ฿150,000+",
      suitability: "Singles, couples, professionals seeking convenience and nightlife"
    },
    {
      name: "Sathorn / Silom",
      description: "Bangkok's Wall Street. Premium business district with luxury apartments, close to Lumpini Park and major offices.",
      bts: ["Chong Nonsi", "Surasak", "Saphan Taksin"],
      mrt: ["Silom", "Lumpini"],
      highlights: ["Business district", "Luxury condos", "Lumpini Park", "Fine dining"],
      primeCondos: [
        { name: "Knightsbridge Prime Sathorn", location: "Near Chong Nonsi BTS", btsDistance: "Close to BTS & BRT" },
        { name: "The Reserve Sathorn", location: "CBD location", btsDistance: "Near BTS Chong Nonsi" },
        { name: "Tait Sathorn 12", location: "Luxury location", btsDistance: "Near BTS Sathorn" }
      ],
      rentRange: "฿50,000 - ฿300,000+",
      suitability: "High-income professionals, families, luxury seekers"
    },
    {
      name: "Ari",
      description: "Trendy, bohemian neighborhood with a relaxed local vibe. Known for independent cafes, art galleries, and creative community.",
      bts: ["Ari", "Sanam Pao"],
      highlights: ["Hipster cafes", "Art scene", "Local markets", "Relaxed atmosphere"],
      primeCondos: [
        { name: "Via ARI", location: "Soi Ari 1", btsDistance: "Near Ari BTS" },
        { name: "Noble Ploenchit", location: "Ploenchit area", btsDistance: "BTS connected" },
        { name: "The Line Jatujak-Mochit", location: "Near Chatuchak", btsDistance: "BTS/MRT access" }
      ],
      rentRange: "฿25,000 - ฿80,000",
      suitability: "Young professionals, creatives, those seeking local culture"
    },
    {
      name: "Thonglor / Phrom Phong",
      description: "Upscale and sophisticated area, particularly popular with Japanese expats. Premium dining and boutique shopping.",
      bts: ["Thong Lo", "Phrom Phong"],
      highlights: ["High-end restaurants", "Boutique shopping", "Japanese community", "Luxury condos"],
      primeCondos: [
        { name: "Porsche Design Tower", location: "Near BTS Thonglor", btsDistance: "Premium location" },
        { name: "The Emporio Place", location: "Sukhumvit 24", btsDistance: "Near Phrom Phong BTS" },
        { name: "185 Rajadamri", location: "Rajadamri Road", btsDistance: "BTS Rajadamri" }
      ],
      rentRange: "฿60,000 - ฿200,000+",
      suitability: "Affluent professionals, Japanese expats, luxury lifestyle seekers"
    },
    {
      name: "On Nut",
      description: "Affordable yet well-connected area on the BTS Sukhumvit line. Growing amenities with good value for money.",
      bts: ["On Nut", "Bang Chak"],
      highlights: ["Affordable living", "Good BTS access", "Local markets", "Growing amenities"],
      primeCondos: [
        { name: "Altitude Forest Onnut", location: "Near On Nut BTS", btsDistance: "BTS connected" },
        { name: "Dolce Lasalle", location: "Bang Na area", btsDistance: "Good transport links" },
        { name: "Origin Play Sri Udom", location: "Bang Chak", btsDistance: "Near BTS Bang Chak" }
      ],
      rentRange: "฿20,000 - ฿60,000",
      suitability: "Budget-conscious expats, young professionals, first-time Bangkok residents"
    },
    {
      name: "Riverside",
      description: "Scenic living along the Chao Phraya River. Luxury condos with spectacular river views and tranquil atmosphere.",
      bts: ["Saphan Taksin"],
      transport: ["River taxi", "BTS connection"],
      highlights: ["River views", "Luxury living", "Peaceful environment", "Boat transport"],
      primeCondos: [
        { name: "The River", location: "Charoenkrung Road", btsDistance: "River taxi access" },
        { name: "Menam Residences", location: "Riverside location", btsDistance: "Boat & BTS access" },
        { name: "Chatrium Residence", location: "Sathorn riverside", btsDistance: "Near Saphan Taksin BTS" }
      ],
      rentRange: "฿80,000 - ฿300,000+",
      suitability: "Families, luxury seekers, those preferring tranquil riverside living"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Bangkok Areas & Prime Condos | Sukhumvit, Sathorn, Thonglor | Pin Hemmawan"
        description="Discover the best Bangkok neighborhoods for expats. Detailed guides to Sukhumvit, Sathorn, Thonglor, Ari, On Nut & Riverside with prime condo recommendations and BTS connectivity."
        keywords="Bangkok areas, Sukhumvit condos, Sathorn apartments, Thonglor rental, Bangkok neighborhoods, BTS connected, expat areas Bangkok, prime condos Bangkok"
        canonicalUrl="https://pinpropertypro.com/areas"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bangkok Areas & Prime Condos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best neighborhoods for expats in Bangkok. Each area offers unique characteristics, 
            excellent BTS connectivity, and carefully selected prime condominiums.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="space-y-12">
          {areas.map((area, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl lg:text-3xl text-gray-900 mb-2">
                      {area.name}
                    </CardTitle>
                    <p className="text-gray-600 text-lg">{area.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Rent Range</div>
                    <div className="text-xl font-bold text-green-600">{area.rentRange}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Area Info */}
                  <div className="lg:col-span-1 space-y-6">
                    {/* BTS/MRT Access */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Train className="w-5 h-5 text-blue-600" />
                        BTS/MRT Access
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.bts?.map((station, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                            BTS {station}
                          </Badge>
                        ))}
                        {area.mrt?.map((station, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-800">
                            MRT {station}
                          </Badge>
                        ))}
                        {area.transport?.map((transport, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-green-100 text-green-800">
                            {transport}
                          </Badge>
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

                    {/* Suitability */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        Best For
                      </h4>
                      <p className="text-gray-600">{area.suitability}</p>
                    </div>
                  </div>

                  {/* Prime Condos */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-orange-600" />
                      Prime Condominiums
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {area.primeCondos.map((condo, idx) => (
                        <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h5 className="font-semibold text-gray-900 mb-2">{condo.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{condo.location}</p>
                          <div className="flex items-center gap-2 text-sm text-blue-600">
                            <Train className="w-4 h-4" />
                            {condo.btsDistance}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Bangkok Home?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let me help you navigate these areas and find the ideal condo that matches your lifestyle and budget.
          </p>
          <Button size="lg" asChild className="bg-white text-red-800 hover:bg-red-50 font-semibold shadow-lg">
            <Link to="/contact">Schedule Your Area Tour</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Areas

