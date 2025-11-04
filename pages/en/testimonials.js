import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, DollarSign, Star, MessageCircle, Instagram, Menu, X } from 'lucide-react'

export default function Testimonials() {
  const router = useRouter()
  const locale = router.asPath.startsWith('/th') ? 'th' : 'en'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false)
    }
    
    router.events.on('routeChangeStart', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])
  
  const t = {
    en: {
      title: "Client Success Stories | Pin Property Pro",
      description: "Read real testimonials from international clients who found their perfect Bangkok homes through Pin Hemmawan's personalized real estate services.",
      heading: "Client Success Stories",
      subtitle: "Real testimonials from international clients who found their perfect Bangkok homes through personalized service and local expertise.",
      readMore: "Read Full Story",
      budget: "Budget",
      from: "From",
      area: "Area"
    },
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
  
  const content = t[locale] || t.en

  const testimonials = [
    {
      id: 'sarah-melbourne-sukhumvit',
      name: 'Sarah Johnson',
      title: {
        en: 'From Melbourne to Sukhumvit: Sarah\'s Luxury Condo Success Story',
        th: 'จากเมลเบิร์นสู่สุขุมวิท: เรื่องราวความสำเร็จคอนโดหรูของซาร่าห์'
      },
      excerpt: {
        en: 'How I helped Sarah, a marketing executive from Melbourne, find her perfect 2-bedroom luxury condo in the heart of Sukhumvit within just 3 days.',
        th: 'ฉันช่วยซาร่าห์ ผู้บริหารฝ่ายการตลาดจากเมลเบิร์น ค้นหาคอนโดหรู 2 ห้องนอนที่สมบูรณ์แบบในใจกลางสุขุมวิทภายในเพียง 3 วัน'
      },
      date: '2025-01-16',
      nationality: 'Australia',
      area: 'Sukhumvit',
      budget: '฿80,000/month',
      image: '/images/sukhumvit.jpg',
      testimonial: {
        en: 'Pin made my Bangkok move completely stress-free. The condo exceeded my expectations, and the entire process was smooth and professional. I couldn\'t have asked for better service!',
        th: 'ปินทำให้การย้ายมากรุงเทพฯ ของฉันปราศจากความเครียดอย่างสมบูรณ์ คอนโดเกินความคาดหวังของฉัน และกระบวนการทั้งหมดราบรื่นและเป็นมืออาชีพ ฉันไม่สามารถขอบริการที่ดีไปกว่านี้ได้!'
      }
    },
    {
      id: 'james-london-sathorn',
      name: 'James Wilson',
      title: {
        en: 'Investment Banking Executive Finds His Bangkok Base in Sathorn',
        th: 'ผู้บริหารธนาคารลงทุนพบฐานกรุงเทพฯ ของเขาในสาทร'
      },
      excerpt: {
        en: 'James from London needed a premium location close to the financial district. Here\'s how we secured him a stunning high-rise condo in Sathorn.',
        th: 'เจมส์จากลอนดอนต้องการทำเลพรีเมียมใกล้กับย่านการเงิน นี่คือวิธีที่เราช่วยเขาได้คอนโดตึกสูงที่น่าทึ่งในสาทร'
      },
      date: '2025-01-09',
      nationality: 'UK',
      area: 'Sathorn',
      budget: '฿120,000/month',
      image: '/images/sathorn.jpg',
      testimonial: {
        en: 'Exceptional service! Pin handled everything from viewing to contract signing. Made my Bangkok relocation stress-free.',
        th: 'บริการที่ยอดเยี่ยม! ปินจัดการทุกอย่างตั้งแต่การดูจนถึงการลงนามในสัญญา ทำให้การย้ายมากรุงเทพฯ ของฉันปราศจากความเครียด'
      }
    },
    {
      id: 'michael-nyc-thonglor',
      name: 'Michael Chen',
      title: {
        en: 'Tech Entrepreneur\'s Dream Home: A Modern Thonglor Penthouse',
        th: 'บ้านในฝันของผู้ประกอบการเทคโนโลยี: เพนท์เฮาส์ทันสมัยในทองหล่อ'
      },
      excerpt: {
        en: 'Michael relocated from New York for his startup. We found him the perfect modern penthouse in trendy Thonglor with all the amenities he needed.',
        th: 'ไมเคิลย้ายจากนิวยอร์กสำหรับสตาร์ทอัพของเขา เราพบเพนท์เฮาส์ทันสมัยที่สมบูรณ์แบบในทองหล่อที่ทันสมัยพร้อมสิ่งอำนวยความสะดวกทั้งหมดที่เขาต้องการ'
      },
      date: '2025-01-02',
      nationality: 'USA',
      area: 'Thonglor',
      budget: '฿150,000/month',
      image: '/images/thonglor.jpg',
      testimonial: {
        en: 'Pin\'s local knowledge is incredible. Found me a penthouse in Thonglor that I never would have discovered on my own.',
        th: 'ความรู้ท้องถิ่นของปินน่าทึ่งมาก พบเพนท์เฮาส์ในทองหล่อให้ฉันที่ฉันไม่มีทางค้นพบได้ด้วยตัวเอง'
      }
    },
    {
      id: 'emma-manchester-ari',
      name: 'Emma Thompson',
      title: {
        en: 'Young Professional Discovers Hidden Gem in Ari District',
        th: 'วัยทำงานหนุ่มสาวค้นพบอัญมณีที่ซ่อนอยู่ในย่านอารี'
      },
      excerpt: {
        en: 'Emma from Manchester wanted something unique and artistic. We found her a charming boutique condo in the creative Ari neighborhood.',
        th: 'เอ็มม่าจากแมนเชสเตอร์ต้องการสิ่งที่เป็นเอกลักษณ์และศิลปะ เราพบคอนโดบูทีคที่มีเสน่ห์ในย่านอารีที่เต็มไปด้วยความคิดสร้างสรรค์ให้เธอ'
      },
      date: '2024-12-28',
      nationality: 'UK',
      area: 'Ari',
      budget: '฿45,000/month',
      image: '/images/ari.jpg',
      testimonial: {
        en: 'Pin understood exactly what I was looking for. The Ari district is perfect for my lifestyle - creative, authentic, and full of character.',
        th: 'ปินเข้าใจสิ่งที่ฉันกำลังมองหาได้อย่างแม่นยำ ย่านอารีเหมาะสมกับไลฟ์สไตล์ของฉันอย่างสมบูรณ์แบบ - สร้างสรรค์ แท้จริง และเต็มไปด้วยเอกลักษณ์'
      }
    },
    {
      id: 'david-singapore-riverside',
      name: 'David Lim',
      title: {
        en: 'Singapore Executive\'s Serene Riverside Retreat',
        th: 'ที่พักพักผ่อนริมแม่น้ำอันเงียบสงบของผู้บริหารสิงคโปร์'
      },
      excerpt: {
        en: 'David wanted to escape the city hustle while staying connected. We found him a peaceful riverside condo with stunning river views.',
        th: 'เดวิดต้องการหลีกหนีจากความวุ่นวายของเมืองในขณะที่ยังคงเชื่อมต่อ เราพบคอนโดริมแม่น้ำที่เงียบสงบพร้อมวิวแม่น้ำที่น่าทึ่งให้เขา'
      },
      date: '2024-12-20',
      nationality: 'Singapore',
      area: 'Riverside',
      budget: '฿65,000/month',
      image: '/images/riverside.jpg',
      testimonial: {
        en: 'The riverside location Pin found gives me the perfect work-life balance. Peaceful yet well-connected to the city center.',
        th: 'ทำเลริมแม่น้ำที่ปินพบให้ฉันได้สมดุลระหว่างงานและชีวิตที่สมบูรณ์แบบ เงียบสงบแต่เชื่อมต่อกับใจกลางเมืองได้ดี'
      }
    },
    {
      id: 'lisa-toronto-onnut',
      name: 'Lisa Rodriguez',
      title: {
        en: 'Family-Friendly Haven: Lisa\'s Smart Choice in On Nut',
        th: 'ที่พักเป็นมิตรกับครอบครัว: การเลือกที่ชาญฉลาดของลิซ่าในอ่อนนุช'
      },
      excerpt: {
        en: 'Lisa moved to Bangkok with her family and needed space, schools, and value. On Nut provided all three in a family-friendly community.',
        th: 'ลิซ่าย้ายมากรุงเทพฯ กับครอบครัวและต้องการพื้นที่ โรงเรียน และคุ้มค่า อ่อนนุชมอบทั้งสามอย่างในชุมชนที่เป็นมิตรกับครอบครัว'
      },
      date: '2024-12-15',
      nationality: 'Canada',
      area: 'On Nut',
      budget: '฿55,000/month',
      image: '/images/onnut.jpg',
      testimonial: {
        en: 'Pin helped us find a spacious home in a great community. My kids love the area and we\'re saving money compared to central Bangkok.',
        th: 'ปินช่วยเราหาบ้านที่กว้างขวางในชุมชนที่ดี ลูกๆ ของฉันรักพื้นที่นี้และเราประหยัดเงินได้เมื่อเทียบกับกรุงเทพฯ ใจกลาง'
      }
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pinpropertypro.com/testimonials" />
        <link rel="alternate" hrefLang="th" href="https://pinpropertypro.com/th/testimonials" />
      </Head>
      
      <div className="min-h-screen" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
        {/* Navbar */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href={locale === 'th' ? '/th' : '/'} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-900">Pin Property Pro</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link href={locale === 'th' ? '/th/blog' : '/blog'} className="text-gray-700 hover:text-red-600">
                  {locale === 'th' ? 'บล็อก' : 'Blog'}
                </Link>
                <Link href={locale === 'th' ? '/th/areas' : '/areas'} className="text-gray-700 hover:text-red-600">
                  {locale === 'th' ? 'พื้นที่' : 'Areas'}
                </Link>
                <Link href={locale === 'th' ? '/th/testimonials' : '/testimonials'} className="text-gray-700 hover:text-red-600 font-semibold">
                  {locale === 'th' ? 'คำรับรอง' : 'Testimonials'}
                </Link>
                <Link href={locale === 'th' ? '/th/contact' : '/contact'} className="text-gray-700 hover:text-red-600">
                  {locale === 'th' ? 'ติดต่อ' : 'Contact'}
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/testimonials" className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/testimonials" className={`px-3 py-1 rounded ${locale === 'th' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
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
                    href={locale === 'th' ? '/th/blog' : '/blog'} 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {locale === 'th' ? 'บล็อก' : 'Blog'}
                  </Link>
                  <Link 
                    href={locale === 'th' ? '/th/areas' : '/areas'} 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {locale === 'th' ? 'พื้นที่' : 'Areas'}
                  </Link>
                  <Link 
                    href={locale === 'th' ? '/th/testimonials' : '/testimonials'} 
                    className="block px-3 py-2 text-red-600 bg-red-50 rounded-md font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {locale === 'th' ? 'คำรับรอง' : 'Testimonials'}
                  </Link>
                  <Link 
                    href={locale === 'th' ? '/th/contact' : '/contact'} 
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {locale === 'th' ? 'ติดต่อ' : 'Contact'}
                  </Link>
                  
                  {/* Mobile Language Toggle */}
                  <div className="flex items-center gap-2 px-3 py-2">
                    <Link href="/testimonials" className={`px-3 py-1 rounded text-sm ${locale === 'en' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                      🇬🇧 EN
                    </Link>
                    <Link href="/th/testimonials" className={`px-3 py-1 rounded text-sm ${locale === 'th' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                      🇹🇭 TH
                    </Link>
                  </div>
                </div>
              </div>
            )}
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

                  <h3 className="text-xl font-bold mb-3 text-gray-900">{testimonial.title[locale] || testimonial.title.en}</h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {testimonial.excerpt[locale] || testimonial.excerpt.en}
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
                      "{testimonial.testimonial[locale] || testimonial.testimonial.en}"
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
                {locale === 'th' ? 'พร้อมที่จะเป็นเรื่องราวความสำเร็จถัดไปแล้วหรือยัง?' : 'Ready to Be Our Next Success Story?'}
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {locale === 'th' ? 'เข้าร่วมกับลูกค้าที่พอใจหลายร้อยคนที่พบบ้านที่สมบูรณ์แบบในกรุงเทพฯ ผ่านบริการส่วนบุคคลและความเชี่ยวชาญท้องถิ่น' : 'Join hundreds of satisfied clients who found their perfect Bangkok home through personalized service and local expertise.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={locale === 'th' ? '/th/contact' : '/contact'} className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:md:scale-105 transition-all duration-300 text-center">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  {locale === 'th' ? 'เริ่มต้นการเดินทางของคุณ' : 'Start Your Journey'}
                </Link>
                <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:md:scale-105 transition-all duration-300 text-center border-2" style={{borderColor: '#800020', color: '#800020'}}>
                  <Instagram className="w-5 h-5 inline mr-2" />
                  {locale === 'th' ? 'ดูเรื่องราวเพิ่มเติม' : 'See More Stories'}
                </a>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">© 2025 Pin Property Pro. {locale === 'th' ? 'สงวนลิขสิทธิ์' : 'All rights reserved.'}</p>
          </div>
        </footer>
      </div>
    </>
  )
}
