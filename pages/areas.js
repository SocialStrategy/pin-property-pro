import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Areas() {
  const router = useRouter()
  const { locale } = router
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const t = {
    en: {
      title: "Bangkok Areas Guide | Pin Property Pro",
      description: "Discover the perfect neighborhood for your lifestyle. Each area offers unique advantages for different types of residents.",
      heading: "Bangkok Areas Guide",
      subtitle: "Discover the perfect neighborhood for your lifestyle. Each area offers unique advantages for different types of residents."
    },
    th: {
      title: "คู่มือพื้นที่กรุงเทพฯ | Pin Property Pro", 
      description: "ค้นพบย่านที่สมบูรณ์แบบสำหรับไลฟ์สไตล์ของคุณ แต่ละพื้นที่มีข้อดีเฉพาะสำหรับผู้อยู่อาศัยประเภทต่างๆ",
      heading: "คู่มือพื้นที่กรุงเทพฯ",
      subtitle: "ค้นพบย่านที่สมบูรณ์แบบสำหรับไลฟ์สไตล์ของคุณ แต่ละพื้นที่มีข้อดีเฉพาะสำหรับผู้อยู่อาศัยประเภทต่างๆ"
    }
  }
  
  const content = t[locale] || t.en

  const areas = [
    {
      name: { en: 'Sukhumvit', th: 'สุขุมวิท' },
      description: { 
        en: 'The heart of expat life with excellent connectivity and dining',
        th: 'ใจกลางชีวิตชาวต่างชาติพร้อมการเชื่อมต่อและการรับประทานอาหารที่ยอดเยี่ยม'
      }
    },
    {
      name: { en: 'Silom/Sathorn', th: 'สีลม/สาทร' },
      description: { 
        en: 'Business district with luxury condos and fine dining',
        th: 'ย่านธุรกิจพร้อมคอนโดหรูและร้านอาหารชั้นเยี่ยม'
      }
    },
    {
      name: { en: 'Thonglor', th: 'ทองหล่อ' },
      description: { 
        en: 'Trendy area popular with young professionals and families',
        th: 'พื้นที่ที่ทันสมัยยอดนิยมในหมู่วัยรุ่นมืออาชีพและครอบครัว'
      }
    },
    {
      name: { en: 'Ari', th: 'อารีย์' },
      description: { 
        en: 'Hip neighborhood with great cafes and local culture',
        th: 'ย่านฮิปพร้อมคาเฟ่ที่ยอดเยี่ยมและวัฒนธรรมท้องถิ่น'
      }
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/areas" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/areas" />
        <link rel="alternate" hrefLang="x-default" href="https://pin-property-pro.vercel.app/areas" />
      </Head>
      
      <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
        {/* Simple Navbar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">Pin Property Pro</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link href={`/${locale || 'en'}/blog`} className="text-gray-700 hover:text-red-600">
                  Blog
                </Link>
                <Link href={`/${locale || 'en'}/areas`} className="text-red-600 font-semibold">
                  Areas
                </Link>
                <Link href={`/${locale || 'en'}/contact`} className="text-gray-700 hover:text-red-600">
                  Contact
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/en/areas" className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/areas" className={`px-3 py-1 rounded ${locale === 'th' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
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
                    href={`/${locale || 'en'}/blog`} 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    href={`/${locale || 'en'}/areas`} 
                    className="block px-3 py-2 text-red-600 bg-red-50 rounded-md font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Areas
                  </Link>
                  <Link 
                    href={`/${locale || 'en'}/contact`} 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  {/* Mobile Language Toggle */}
                  <div className="flex items-center gap-2 px-3 py-2">
                    <Link href="/areas" className={`px-3 py-1 rounded text-sm ${locale === 'en' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                      🇬🇧 EN
                    </Link>
                    <Link href="/th/areas" className={`px-3 py-1 rounded text-sm ${locale === 'th' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                      🇹🇭 TH
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {content.heading}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {area.name[locale] || area.name.en}
                </h3>
                <p className="text-gray-600">
                  {area.description[locale] || area.description.en}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href={`/${locale || 'en'}/contact`}
              className="inline-block px-8 py-4 text-white font-bold rounded-lg transition-all duration-200 hover:md:scale-105 shadow-lg"
              style={{backgroundColor: '#800020'}}
            >
              {locale === 'th' ? 'ติดต่อเพื่อคำแนะนำส่วนบุคคล' : 'Contact for Personalized Advice'}
            </Link>
          </div>
        </main>
        
        {/* Simple Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2025 Pin Property Pro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

// Static page - no getStaticProps needed
