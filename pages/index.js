import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Import existing components
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import FloatingContact from '../src/components/FloatingContact'

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
        <Navbar />
        
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
              <Link href={`/${locale}/contact`} className="px-8 py-4 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg" style={{backgroundColor: '#800020'}}>
                {content.hero.consultation}
              </Link>
              <Link href={`/${locale}/areas`} className="px-8 py-4 font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg border-2" style={{borderColor: '#800020', color: '#800020', backgroundColor: '#F9F9DC'}}>
                {content.hero.explore}
              </Link>
            </div>
          </div>
        </main>
        
        <FloatingContact />
        <Footer />
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
