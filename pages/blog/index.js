import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Blog() {
  const { locale } = useRouter()
  
  const t = {
    en: {
      title: "Bangkok Real Estate Insights | Pin Property Pro",
      description: "Expert advice and insider tips from Pin Hemmawan to help you navigate Bangkok's rental market with confidence.",
      heading: "Bangkok Real Estate Insights",
      subtitle: "Expert advice and insider tips from Pin Hemmawan to help you navigate Bangkok's rental market with confidence."
    },
    th: {
      title: "ข้อมูลเชิงลึกอสังหาริมทรัพย์กรุงเทพฯ | Pin Property Pro",
      description: "คำแนะนำจากผู้เชี่ยวชาญและเคล็ดลับจากปิน เหมวรรณ เพื่อช่วยให้คุณนำทางตลาดเช่าในกรุงเทพฯ ด้วยความมั่นใจ",
      heading: "ข้อมูลเชิงลึกอสังหาริมทรัพย์กรุงเทพฯ",
      subtitle: "คำแนะนำจากผู้เชี่ยวชาญและเคล็ดลับจากปิน เหมวรรณ เพื่อช่วยให้คุณนำทางตลาดเช่าในกรุงเทพฯ ด้วยความมั่นใจ"
    }
  }
  
  const content = t[locale] || t.en

  const blogPosts = [
    {
      slug: 'furnished-vs-unfurnished-bangkok',
      title: {
        en: 'Furnished vs. Unfurnished Condo in Bangkok: A Complete Cost Breakdown',
        th: 'คอนโดครบเครื่อง vs ไม่ครบเครื่องในกรุงเทพฯ: วิเคราะห์ต้นทุนแบบครบถ้วน'
      }
    },
    {
      slug: 'thai-rental-contract-guide',
      title: {
        en: 'Thai Rental Contract Guide (Key Clauses Explained)',
        th: 'คู่มือสัญญาเช่าไทย (อธิบายข้อสำคัญ)'
      }
    },
    {
      slug: 'house-vs-condo-bangkok',
      title: {
        en: 'Renting a House vs. a Condo in Bangkok: Which is Better for You?',
        th: 'เช่าบ้าน vs คอนโดในกรุงเทพฯ: อะไรดีกว่าสำหรับคุณ?'
      }
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/blog" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://pin-property-pro.vercel.app/blog" />
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
                <Link href={`/${locale || 'en'}/blog`} className="text-red-600 font-semibold">
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
                  <Link href="/en/blog" className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/blog" className={`px-3 py-1 rounded ${locale === 'th' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇹🇭 TH
                  </Link>
                </div>
              </div>
            </div>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  {post.title[locale] || post.title.en}
                </h2>
                <Link 
                  href={`/${locale || 'en'}/blog/${post.slug}`} 
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  {locale === 'th' ? 'อ่านเพิ่มเติม' : 'Read More'} →
                </Link>
              </div>
            ))}
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
