import { Link } from 'react-router-dom'
import { MapPin, Train, Building, Users } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Areas = () => {
  const { t } = useLanguage()
  
  const areas = [
    {
      name: "Sukhumvit",
      description: t('areas.sukhumvit.description'),
      bts: ["Nana", "Asok", "Phrom Phong", "Thong Lo", "Ekkamai"],
      highlights: t('areas.sukhumvit.highlights'),
      rentRange: "฿30,000 - ฿150,000+",
      suitability: t('areas.sukhumvit.suitability')
    },
    {
      name: "Sathorn / Silom",
      description: t('areas.sathorn.description'),
      bts: ["Chong Nonsi", "Surasak", "Saphan Taksin"],
      highlights: t('areas.sathorn.highlights'),
      rentRange: "฿50,000 - ฿300,000+",
      suitability: t('areas.sathorn.suitability')
    },
    {
      name: "Thonglor / Phrom Phong",
      description: t('areas.thonglor.description'),
      bts: ["Thong Lo", "Phrom Phong"],
      highlights: t('areas.thonglor.highlights'),
      rentRange: "฿60,000 - ฿200,000+",
      suitability: t('areas.thonglor.suitability')
    },
    {
      name: "Ari",
      description: t('areas.ari.description'),
      bts: ["Ari", "Sanam Pao"],
      highlights: t('areas.ari.highlights'),
      rentRange: "฿25,000 - ฿80,000",
      suitability: t('areas.ari.suitability')
    },
    {
      name: "On Nut",
      description: t('areas.onnut.description'),
      bts: ["On Nut", "Bang Chak"],
      highlights: t('areas.onnut.highlights'),
      rentRange: "฿20,000 - ฿60,000",
      suitability: t('areas.onnut.suitability')
    },
    {
      name: "Riverside",
      description: t('areas.riverside.description'),
      bts: ["Saphan Taksin"],
      highlights: t('areas.riverside.highlights'),
      rentRange: "฿80,000 - ฿300,000+",
      suitability: t('areas.riverside.suitability')
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('areas.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('areas.subtitle')}
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

