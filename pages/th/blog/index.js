import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function ThaiBlog() {
  const router = useRouter()
  const locale = 'th'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const content = {
    title: "บล็อก Pin Property Pro | คู่มือการเช่าคอนโดกรุงเทพฯ",
    description: "คู่มือครบครันสำหรับการเช่าคอนโดในกรุงเทพฯ เคล็ดลับจากผู้เชี่ยวชาญ และข้อมูลอัปเดตล่าสุดเกี่ยวกับตลาดอสังหาริมทรัพย์",
    heading: "บล็อก Pin Property Pro",
    subtitle: "คู่มือครบครันสำหรับการเช่าคอนโดในกรุงเทพฯ เคล็ดลับจากผู้เชี่ยวชาญ และข้อมูลอัปเดตล่าสุดเกี่ยวกับตลาดอสังหาริมทรัพย์"
  }

  const blogPosts = [
    {
      slug: 'bangkok-neighborhood-guide-2025',
      title: 'คู่มือย่านกรุงเทพฯ สำหรับชาวต่างชาติ (2025)',
      excerpt: 'ค้นพบย่านที่สมบูรณ์แบบสำหรับไลฟ์สไตล์ของคุณ พร้อมคำแนะนำจากผู้เชี่ยวชาญที่มีประสบการณ์กว่าทศวรรษ',
      date: '2025-01-16',
      readTime: '8 นาที',
      category: 'คู่มือพื้นที่'
    },
    {
      slug: 'bangkok-rental-scams-mistakes',
      title: 'กลโกงการเช่าในกรุงเทพฯ และข้อผิดพลาดที่ควรหลีกเลี่ยง',
      excerpt: 'ป้องกันตัวเองจากกลโกงทั่วไปและข้อผิดพลาดที่มีราคาแพง พร้อมเคล็ดลับการเจรจาที่มีประสิทธิภาพ',
      date: '2025-01-15',
      readTime: '6 นาที',
      category: 'เคล็ดลับความปลอดภัย'
    },
    {
      slug: 'furnished-vs-unfurnished-bangkok',
      title: 'คอนโดครบเครื่อง vs ไม่ครบเครื่องในกรุงเทพฯ: วิเคราะห์ต้นทุนแบบครบถ้วน',
      excerpt: 'วิเคราะห์เปรียบเทียบต้นทุนที่แท้จริง ข้อดี ข้อเสีย และสถานการณ์ที่เหมาะสมสำหรับแต่ละตัวเลือก',
      date: '2025-01-14',
      readTime: '7 นาที',
      category: 'วิเคราะห์ต้นทุน'
    },
    {
      slug: 'thai-rental-contract-guide',
      title: 'คู่มือสัญญาเช่าไทย (อธิบายข้อสำคัญ)',
      excerpt: 'เข้าใจสัญญาเช่าภาษาไทยด้วยคำอธิบายข้อสำคัญ เงื่อนไขที่ต้องระวัง และสิทธิ์ของผู้เช่า',
      date: '2025-01-13',
      readTime: '9 นาที',
      category: 'กฎหมายและสัญญา'
    },
    {
      slug: 'bangkok-condo-living-costs',
      title: 'ค่าใช้จ่ายในการอยู่คอนโดกรุงเทพฯ: คู่มืองบประมาณรายเดือนครบถ้วน',
      excerpt: 'คำนวณค่าใช้จ่ายที่แท้จริงในการอยู่คอนโดกรุงเทพฯ รวมค่าใช้จ่ายที่ซ่อนอยู่และเคล็ดลับประหยัด',
      date: '2025-01-12',
      readTime: '10 นาที',
      category: 'วางแผนงบประมาณ'
    },
    {
      slug: 'house-vs-condo-bangkok',
      title: 'เช่าบ้าน vs คอนโดในกรุงเทพฯ: อะไรดีกว่าสำหรับคุณ?',
      excerpt: 'เปรียบเทียบข้อดีข้อเสียของการเช่าบ้านและคอนโด พร้อมคำแนะนำการเลือกที่เหมาะกับไลฟ์สไตล์ของคุณ',
      date: '2025-01-11',
      readTime: '8 นาที',
      category: 'การเปรียบเทียบ'
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/blog" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/blog" />
      </Head>
      
      <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
        {/* Navbar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/th" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">Pin Property Pro</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/th/blog" className="text-red-600 font-semibold">
                  บล็อก
                </Link>
                <Link href="/th/areas" className="text-gray-700 hover:text-red-600">
                  พื้นที่
                </Link>
                <Link href="/th/testimonials" className="text-gray-700 hover:text-red-600">
                  คำรับรอง
                </Link>
                <Link href="/th/contact" className="text-gray-700 hover:text-red-600">
                  ติดต่อ
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/en/blog" className="px-3 py-1 rounded text-gray-700">
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/blog" className="px-3 py-1 rounded bg-red-600 text-white">
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
                    href="/th/blog" 
                    className="block px-3 py-2 text-red-600 bg-red-50 rounded-md font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    บล็อก
                  </Link>
                  <Link 
                    href="/th/areas" 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    พื้นที่
                  </Link>
                  <Link 
                    href="/th/testimonials" 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    คำรับรอง
                  </Link>
                  <Link 
                    href="/th/contact" 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ติดต่อ
                  </Link>
                  
                  {/* Mobile Language Toggle */}
                  <div className="flex items-center gap-2 px-3 py-2">
                    <Link href="/en/blog" className="px-3 py-1 rounded text-gray-700 text-sm">
                      🇬🇧 EN
                    </Link>
                    <Link href="/th/blog" className="px-3 py-1 rounded bg-red-600 text-white text-sm">
                      🇹🇭 TH
                    </Link>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </nav>
        
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {content.heading}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/th/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:md:scale-105">
                    <div className="p-6">
                      {/* Category & Date */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Read Time */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <span className="text-red-600 font-medium group-hover:underline">
                          อ่านต่อ →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center rounded-2xl p-12 text-white shadow-2xl" style={{background: 'linear-gradient(135deg, #800020 0%, #660019 50%, #4d0013 100%)'}}>
              <h2 className="text-3xl font-bold mb-4">
                ต้องการคำแนะนำส่วนตัว?
              </h2>
              <p className="text-xl mb-8" style={{color: '#F9F9DC'}}>
                ติดต่อฉันเพื่อรับคำปรึกษาฟรีและหาคอนโดที่เหมาะกับคุณ
              </p>
              <Link href="/th/contact" className="inline-block font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:md:scale-105 transition-all duration-300" style={{backgroundColor: '#F9F9DC', color: '#800020'}}>
                ติดต่อเลย
              </Link>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2025 Pin Property Pro. สงวนลิขสิทธิ์</p>
          </div>
        </footer>
      </div>
    </>
  )
}
