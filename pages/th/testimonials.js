import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, DollarSign, Star, MessageCircle, Instagram Menu, X } from 'lucide-react'

export default function ThaiTestimonials() {
  const router = useRouter()
  const locale = 'th' // Force Thai locale
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const t = {
    th: {
      title: "เรื่องราวความสำเร็จของลูกค้า | Pin Property Pro",
      description: "อ่านคำรับรองจริงจากลูกค้าต่างชาติที่พบบ้านในฝันในกรุงเทพฯ ผ่านบริการอสังหาริมทรัพย์ส่วนบุคคลของปิน เหมวรรณ",
      heading: "เรื่องราวความสำเร็จของลูกค้า",
      subtitle: "คำรับรองจริงจากลูกค้าต่างชาติที่พบบ้านที่สมบูรณ์แบบในกรุงเทพฯ ผ่านบริการส่วนบุคคลและความเชี่ยวชาญท้องถิ่น",
      readMore: "อ่านเรื่องราวเต็ม",
      budget: "งบประมาณ",
      from: "จาก",
      area: "พื้นที่"
    }
  }
  
  const content = t[locale]

  const testimonials = [
    {
      id: 'sarah-melbourne-sukhumvit',
      name: 'Sarah Johnson',
      title: 'จากเมลเบิร์นสู่สุขุมวิท: เรื่องราวความสำเร็จคอนโดหรูของซาร่าห์',
      excerpt: 'ฉันช่วยซาร่าห์ ผู้บริหารฝ่ายการตลาดจากเมลเบิร์น ค้นหาคอนโดหรู 2 ห้องนอนที่สมบูรณ์แบบในใจกลางสุขุมวิทภายในเพียง 3 วัน',
      date: '2025-01-16',
      nationality: 'ออสเตรเลีย',
      area: 'สุขุมวิท',
      budget: '฿80,000/เดือน',
      image: '/images/sukhumvit.jpg',
      testimonial: 'ปินทำให้การย้ายมากรุงเทพฯ ของฉันปราศจากความเครียดอย่างสมบูรณ์ คอนโดเกินความคาดหวังของฉัน และกระบวนการทั้งหมดราบรื่นและเป็นมืออาชีพ ฉันไม่สามารถขอบริการที่ดีไปกว่านี้ได้!'
    },
    {
      id: 'james-london-sathorn',
      name: 'James Wilson',
      title: 'ผู้บริหารธนาคารลงทุนพบฐานกรุงเทพฯ ของเขาในสาทร',
      excerpt: 'เจมส์จากลอนดอนต้องการทำเลพรีเมียมใกล้กับย่านการเงิน นี่คือวิธีที่เราช่วยเขาได้คอนโดตึกสูงที่น่าทึ่งในสาทร',
      date: '2025-01-09',
      nationality: 'อังกฤษ',
      area: 'สาทร',
      budget: '฿120,000/เดือน',
      image: '/images/sathorn.jpg',
      testimonial: 'บริการที่ยอดเยี่ยม! ปินจัดการทุกอย่างตั้งแต่การดูจนถึงการลงนามในสัญญา ทำให้การย้ายมากรุงเทพฯ ของฉันปราศจากความเครียด'
    },
    {
      id: 'michael-nyc-thonglor',
      name: 'Michael Chen',
      title: 'บ้านในฝันของผู้ประกอบการเทคโนโลยี: เพนท์เฮาส์ทันสมัยในทองหล่อ',
      excerpt: 'ไมเคิลย้ายจากนิวยอร์กสำหรับสตาร์ทอัพของเขา เราพบเพนท์เฮาส์ทันสมัยที่สมบูรณ์แบบในทองหล่อที่ทันสมัยพร้อมสิ่งอำนวยความสะดวกทั้งหมดที่เขาต้องการ',
      date: '2025-01-02',
      nationality: 'สหรัฐอเมริกา',
      area: 'ทองหล่อ',
      budget: '฿150,000/เดือน',
      image: '/images/thonglor.jpg',
      testimonial: 'ความรู้ท้องถิ่นของปินน่าทึ่งมาก พบเพนท์เฮาส์ในทองหล่อให้ฉันที่ฉันไม่มีทางค้นพบได้ด้วยตัวเอง'
    },
    {
      id: 'emma-manchester-ari',
      name: 'Emma Thompson',
      title: 'วัยทำงานหนุ่มสาวค้นพบอัญมณีที่ซ่อนอยู่ในย่านอารี',
      excerpt: 'เอ็มม่าจากแมนเชสเตอร์ต้องการสิ่งที่เป็นเอกลักษณ์และศิลปะ เราพบคอนโดบูทีคที่มีเสน่ห์ในย่านอารีที่เต็มไปด้วยความคิดสร้างสรรค์ให้เธอ',
      date: '2024-12-28',
      nationality: 'อังกฤษ',
      area: 'อารี',
      budget: '฿45,000/เดือน',
      image: '/images/ari.jpg',
      testimonial: 'ปินเข้าใจสิ่งที่ฉันกำลังมองหาได้อย่างแม่นยำ ย่านอารีเหมาะสมกับไลฟ์สไตล์ของฉันอย่างสมบูรณ์แบบ - สร้างสรรค์ แท้จริง และเต็มไปด้วยเอกลักษณ์'
    },
    {
      id: 'david-singapore-riverside',
      name: 'David Lim',
      title: 'ที่พักพักผ่อนริมแม่น้ำอันเงียบสงบของผู้บริหารสิงคโปร์',
      excerpt: 'เดวิดต้องการหลีกหนีจากความวุ่นวายของเมืองในขณะที่ยังคงเชื่อมต่อ เราพบคอนโดริมแม่น้ำที่เงียบสงบพร้อมวิวแม่น้ำที่น่าทึ่งให้เขา',
      date: '2024-12-20',
      nationality: 'สิงคโปร์',
      area: 'ริเวอร์ไซด์',
      budget: '฿65,000/เดือน',
      image: '/images/riverside.jpg',
      testimonial: 'ทำเลริมแม่น้ำที่ปินพบให้ฉันได้สมดุลระหว่างงานและชีวิตที่สมบูรณ์แบบ เงียบสงบแต่เชื่อมต่อกับใจกลางเมืองได้ดี'
    },
    {
      id: 'lisa-toronto-onnut',
      name: 'Lisa Rodriguez',
      title: 'ที่พักเป็นมิตรกับครอบครัว: การเลือกที่ชาญฉลาดของลิซ่าในอ่อนนุช',
      excerpt: 'ลิซ่าย้ายมากรุงเทพฯ กับครอบครัวและต้องการพื้นที่ โรงเรียน และคุ้มค่า อ่อนนุชมอบทั้งสามอย่างในชุมชนที่เป็นมิตรกับครอบครัว',
      date: '2024-12-15',
      nationality: 'แคนาดา',
      area: 'อ่อนนุช',
      budget: '฿55,000/เดือน',
      image: '/images/onnut.jpg',
      testimonial: 'ปินช่วยเราหาบ้านที่กว้างขวางในชุมชนที่ดี ลูกๆ ของฉันรักพื้นที่นี้และเราประหยัดเงินได้เมื่อเทียบกับกรุงเทพฯ ใจกลาง'
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/testimonials" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/testimonials" />
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
              
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/th/blog" className="text-gray-700 hover:text-red-600">
                  บล็อก
                </Link>
                <Link href="/th/areas" className="text-gray-700 hover:text-red-600">
                  พื้นที่
                </Link>
                <Link href="/th/testimonials" className="text-gray-700 hover:text-red-600 font-semibold">
                  คำรับรอง
                </Link>
                <Link href="/th/contact" className="text-gray-700 hover:text-red-600">
                  ติดต่อ
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/testimonials" className="px-3 py-1 rounded text-gray-700">
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/testimonials" className="px-3 py-1 rounded bg-red-600 text-white">
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

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:md:scale-105">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.area}
                    className="w-full h-full object-cover hover:md:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900">{testimonial.title}</h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {testimonial.excerpt}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">{content.from}</div>
                      <div className="font-medium text-gray-900">{testimonial.nationality}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">{content.area}</div>
                      <div className="font-medium text-gray-900">{testimonial.area}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500">{content.budget}</div>
                      <div className="font-medium text-gray-900">{testimonial.budget}</div>
                    </div>
                  </div>

                  <blockquote className="bg-gradient-to-r from-red-50 to-red-50 p-6 rounded-2xl border-l-4 border-red-600 mb-6">
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                    <cite className="text-red-600 font-medium mt-2 block">— {testimonial.name}</cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                พร้อมที่จะเป็นเรื่องราวความสำเร็จถัดไปแล้วหรือยัง?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                เข้าร่วมกับลูกค้าที่พอใจหลายร้อยคนที่พบบ้านที่สมบูรณ์แบบในกรุงเทพฯ ผ่านบริการส่วนบุคคลและความเชี่ยวชาญท้องถิ่น
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/th/contact" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:md:scale-105 transition-all duration-300 text-center">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  เริ่มต้นการเดินทางของคุณ
                </Link>
                <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:md:scale-105 transition-all duration-300 text-center border-2" style={{borderColor: '#800020', color: '#800020'}}>
                  <Instagram className="w-5 h-5 inline mr-2" />
                  ดูเรื่องราวเพิ่มเติม
                </a>
              </div>
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
