import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

// We'll create simplified components for now to avoid context issues

export default function Home() {
  const { locale } = useRouter()
  
  const t = {
    en: {
      title: "Pin Hemmawan - Bangkok Real Estate Expert | Find Your Dream Home",
      description: "Professional Bangkok real estate services. Find luxury condos, apartments & homes with Pin Hemmawan, Bangkok's trusted property expert.",
      hero: {
        badge: "Bangkok's Premier Real Estate Expert",
        title: "Find Your Dream Home in Bangkok",
        subtitle: "Professional real estate services with personalized attention. From luxury condos to perfect apartments - I'll help you discover your ideal Bangkok home.",
        consultation: "Schedule Free Consultation",
        explore: "Explore Areas"
      }
    },
    th: {
      title: "ปิน เหมวรรณ - ผู้เชี่ยวชาญอสังหาริมทรัพย์กรุงเทพฯ | หาบ้านในฝัน",
      description: "บริการอสังหาริมทรัพย์มืออาชีพในกรุงเทพฯ หาคอนโดหรู อพาร์ทเมนท์ และบ้านกับปิน เหมวรรณ ผู้เชี่ยวชาญที่น่าเชื่อถือ",
      hero: {
        badge: "ผู้เชี่ยวชาญอสังหาริมทรัพย์อันดับ 1 ของกรุงเทพฯ",
        title: "ค้นหาบ้านในฝันของคุณในกรุงเทพฯ",
        subtitle: "บริการอสังหาริมทรัพย์มืออาชีพด้วยความใส่ใจเป็นรายบุคคล จากคอนโดหรูหราไปจนถึงอพาร์ทเมนท์ที่สมบูรณ์แบบ - ฉันจะช่วยคุณค้นพบบ้านในฝันในกรุงเทพฯ",
        consultation: "นัดหมายปรึกษาฟรี",
        explore: "สำรวจพื้นที่"
      }
    }
  }
  
  const content = t[locale] || t.en

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/" />
        <link rel="alternate" hrefLang="x-default" href="https://pin-property-pro.vercel.app/" />
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
                <span className="text-xl font-bold text-gray-900">Pin Property Pro</span>
              </Link>
              
              <div className="flex items-center space-x-6">
                <Link href={`/${locale || 'en'}/blog`} className="text-gray-700 hover:text-red-600">
                  Blog
                </Link>
                <Link href={`/${locale || 'en'}/areas`} className="text-gray-700 hover:text-red-600">
                  Areas
                </Link>
                <Link href={`/${locale || 'en'}/contact`} className="text-gray-700 hover:text-red-600">
                  Contact
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/en" className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇬🇧 EN
                  </Link>
                  <Link href="/th" className={`px-3 py-1 rounded ${locale === 'th' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇹🇭 TH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 rounded-full mb-8 text-white font-medium" style={{backgroundColor: '#800020'}}>
              {content.hero.badge}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={`/${locale || 'en'}/contact`} className="px-8 py-4 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg" style={{backgroundColor: '#800020'}}>
                {content.hero.consultation}
              </Link>
              <Link href={`/${locale || 'en'}/areas`} className="px-8 py-4 font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg border-2" style={{borderColor: '#800020', color: '#800020', backgroundColor: '#F9F9DC'}}>
                {content.hero.explore}
              </Link>
            </div>
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale
    }
  }
}
