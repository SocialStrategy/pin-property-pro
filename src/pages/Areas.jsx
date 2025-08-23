import { Link } from 'react-router-dom'
import { MapPin, Train, Building, Users } from 'lucide-react'

const Areas = () => {
  const areas = [
    {
      name: "Sukhumvit",
      description: "The heart of expat life in Bangkok. Central location with excellent BTS connectivity, diverse dining, and vibrant nightlife.",
      bts: ["Nana", "Asok", "Phrom Phong", "Thong Lo", "Ekkamai"],
      highlights: ["Shopping malls", "International restaurants", "Nightlife", "Large expat community"],
      rentRange: "฿30,000 - ฿150,000+",
      suitability: "Singles, couples, professionals seeking convenience and nightlife"
    },
    {
      name: "Sathorn / Silom",
      description: "Bangkok's Wall Street. Premium business district with luxury apartments, close to Lumpini Park and major offices.",
      bts: ["Chong Nonsi", "Surasak", "Saphan Taksin"],
      highlights: ["Business district", "Luxury condos", "Lumpini Park", "Fine dining"],
      rentRange: "฿50,000 - ฿300,000+",
      suitability: "High-income professionals, families, luxury seekers"
    },
    {
      name: "Thonglor / Phrom Phong",
      description: "Upscale and sophisticated area, particularly popular with Japanese expats. Premium dining and boutique shopping.",
      bts: ["Thong Lo", "Phrom Phong"],
      highlights: ["High-end restaurants", "Boutique shopping", "Japanese community", "Luxury condos"],
      rentRange: "฿60,000 - ฿200,000+",
      suitability: "Affluent professionals, Japanese expats, luxury lifestyle seekers"
    },
    {
      name: "Ari",
      description: "Trendy, bohemian neighborhood with a relaxed local vibe. Known for independent cafes, art galleries, and creative community.",
      bts: ["Ari", "Sanam Pao"],
      highlights: ["Hipster cafes", "Art scene", "Local markets", "Relaxed atmosphere"],
      rentRange: "฿25,000 - ฿80,000",
      suitability: "Young professionals, creatives, those seeking local culture"
    },
    {
      name: "On Nut",
      description: "Affordable yet well-connected area on the BTS Sukhumvit line. Growing amenities with good value for money.",
      bts: ["On Nut", "Bang Chak"],
      highlights: ["Affordable living", "Good BTS access", "Local markets", "Growing amenities"],
      rentRange: "฿20,000 - ฿60,000",
      suitability: "Budget-conscious expats, young professionals, first-time Bangkok residents"
    },
    {
      name: "Riverside",
      description: "Scenic living along the Chao Phraya River. Luxury condos with spectacular river views and tranquil atmosphere.",
      bts: ["Saphan Taksin"],
      highlights: ["River views", "Luxury living", "Peaceful environment", "Boat transport"],
      rentRange: "฿80,000 - ฿300,000+",
      suitability: "Families, luxury seekers, those preferring tranquil riverside living"
    }
  ]

  return (
    <div className="min-h-screen py-20">
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
            <div key={index} className="card hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6 rounded-t-xl -m-6 mb-6">
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
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Area Info */}
                <div className="space-y-6">
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
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 shadow-xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Bangkok Home?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let me help you navigate these areas and find the ideal condo that matches your lifestyle and budget.
          </p>
          <Link to="/contact" className="bg-white text-red-800 hover:bg-red-50 font-semibold text-lg px-8 py-4 rounded-lg shadow-lg transition-colors">
            Schedule Your Area Tour
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Areas

