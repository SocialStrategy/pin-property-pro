import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ThaiAreas() {
  const router = useRouter()
  const locale = 'th' // Force Thai locale
  
  const t = {
    th: {
      title: "คู่มือพื้นที่กรุงเทพฯ | Pin Property Pro", 
      description: "ค้นพบย่านที่สมบูรณ์แบบสำหรับไลฟ์สไตล์ของคุณ แต่ละพื้นที่มีข้อดีเฉพาะสำหรับผู้อยู่อาศัยประเภทต่างๆ",
      heading: "คู่มือพื้นที่กรุงเทพฯ",
      subtitle: "ค้นพบย่านที่สมบูรณ์แบบสำหรับไลฟ์สไตล์ของคุณ แต่ละพื้นที่มีข้อดีเฉพาะสำหรับผู้อยู่อาศัยประเภทต่างๆ"
    }
  }
  
  const content = t[locale]

  const areas = [
    {
      name: 'สุขุมวิท',
      description: 'ใจกลางการใช้ชีวิตของชาวต่างชาติในกรุงเทพฯ',
      image: '/images/sukhumvit.jpg'
    },
    {
      name: 'สาทร',
      description: 'เขตธุรกิจหลักของกรุงเทพฯ',
      image: '/images/sathorn.jpg'
    },
    {
      name: 'ทองหล่อ',
      description: 'ย่านมีสไตล์พร้อมร้านอาหารและไนต์ไลฟ์ระดับโลก',
      image: '/images/thonglor.jpg'
    },
    {
      name: 'อารี',
      description: 'ย่านฮิปสเตอร์พร้อมบรรยากาศท้องถิ่นแท้',
      image: '/images/ari.jpg'
    },
    {
      name: 'ริเวอร์ไซด์',
      description: 'ชีวิตริมแม่น้ำเจ้าพระยาที่เงียบสงบ',
      image: '/images/riverside.jpg'
    },
    {
      name: 'อ่อนนุช',
      description: 'ตัวเลือกที่คุ้มค่าสำหรับครอบครัว',
      image: '/images/onnut.jpg'
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/areas" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/areas" />
      </Head>
      
      <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
        {/* Simple Navbar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/th" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Pin Property Pro</span>
              </Link>
              
              <div className="flex items-center space-x-6">
                <Link href="/th/blog" className="text-gray-700 hover:text-red-600">
                  บล็อก
                </Link>
                <Link href="/th/areas" className="text-gray-700 hover:text-red-600 font-semibold">
                  พื้นที่
                </Link>
                <Link href="/th/contact" className="text-gray-700 hover:text-red-600">
                  ติดต่อ
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/areas" className="px-3 py-1 rounded text-gray-700">
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/areas" className="px-3 py-1 rounded bg-red-600 text-white">
                    🇹🇭 TH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {content.heading}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              {content.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{area.name}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        
        {/* Simple Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2025 Pin Property Pro. สงวนลิขสิทธิ์</p>
          </div>
        </footer>
      </div>
    </>
  )
}
