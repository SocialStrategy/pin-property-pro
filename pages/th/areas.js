import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Train, Building, Users, MessageCircle, Instagram, Menu, X } from 'lucide-react'

export default function ThaiAreas() {
  const router = useRouter()
  const locale = 'th'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const content = {
    title: "คู่มือพื้นที่กรุงเทพฯ | Pin Property Pro", 
    description: "ค้นพบย่านที่สมบูรณ์แบบสำหรับไลฟ์สไตล์ของคุณ แต่ละพื้นที่มีข้อดีเฉพาะสำหรับผู้อยู่อาศัยประเภทต่างๆ",
    heading: "คู่มือพื้นที่กรุงเทพฯ",
    subtitle: "ค้นพบย่านที่สมบูรณ์แบบสำหรับไลฟ์สไตล์ของคุณ แต่ละพื้นที่มีข้อดีเฉพาะสำหรับผู้อยู่อาศัยประเภทต่างๆ",
    cta: {
      title: "พร้อมที่จะหาบ้านที่สมบูรณ์แบบในกรุงเทพฯ แล้วหรือยัง?",
      subtitle: "ให้ฉันช่วยคุณสำรวจพื้นที่เหล่านี้และหาคอนโดที่เหมาะสมกับไลฟ์สไตล์และงบประมาณของคุณ",
      button: "นัดหมายทัวร์พื้นที่"
    }
  }

  const areas = [
    {
      name: "สุขุมวิท",
      description: "ใจกลางการใช้ชีวิตของชาวต่างชาติในกรุงเทพฯ เส้นทางที่มีชีวิตชีวานี้มีทุกอย่างตั้งแต่ช้อปปิ้งหรูหราไปจนถึงร้านอาหารระดับโลก พร้อมการเชื่อมต่อ BTS ที่ยอดเยี่ยม",
      bts: ["นานา", "อโศก", "พร้อมพงษ์", "ทองหล่อ", "เอกมัย"],
      highlights: [
        "ศูนย์การค้า Terminal 21 และ EmQuartier",
        "ร้านอาหารนานาชาติที่หลากหลาย",
        "ไนต์ไลฟ์และความบันเทิงที่คึกคัก",
        "สถานี BTS หลายแห่งเพื่อการเดินทางที่สะดวก",
        "โรงพยาบาลนานาชาติใกล้เคียง"
      ],
      rentRange: "฿30,000 - ฿150,000+",
      suitability: "เหมาะสำหรับวัยทำงานหนุ่มสาว ชาวต่างชาติที่เพิ่งมากรุงเทพฯ และผู้ที่ต้องการอยู่ในใจกลางความเป็นไปได้ ดีสำหรับการสร้างเครือข่ายและชีวิตสังคม",
      image: "/images/sukhumvit.jpg"
    },
    {
      name: "สาทร / สีลม",
      description: "ย่านธุรกิจกลางของกรุงเทพฯ (CBD) เป็นมืออาชีพ หรูหรา และมีประสิทธิภาพ สวนลุมพินีที่สวยงามเป็นพื้นที่สีเขียวที่หลบหนีจากความวุ่นวายของเมือง",
      bts: ["ช่องนนทรี", "สุรศักดิ์", "สะพานตากสิน"],
      highlights: [
        "ทำเลย่านธุรกิจกลาง",
        "สวนลุมพินีสำหรับวิ่งออกกำลังกายและพักผ่อน",
        "อาคารสำนักงานและโรงแรมระดับไฮเอนด์",
        "เข้าถึงแม่น้ำผ่านสะพานตากสิน",
        "ช้อปปิ้งพรีเมียมที่ศิลมคอมเพล็กซ์"
      ],
      rentRange: "฿50,000 - ฿300,000+",
      suitability: "เหมาะสำหรับผู้บริหารธุรกิจ ผู้เชี่ยวชาญด้านการเงิน และผู้ที่ให้ความสำคัญกับความหรูหราและความสะดวกสบาย สามารถเดินไปสำนักงานใหญ่ได้",
      image: "/images/sathorn.jpg"
    },
    {
      name: "ทองหล่อ / พร้อมพงษ์",
      description: "พื้นที่ที่ทันสมัยและหรูหราที่เป็นที่รู้จักจากร้านอาหารสไตลิช บาร์บนดาดฟ้า และช้อปปิ้งบูทีค เป็นที่นิยมในหมู่วัยทำงานหนุ่มสาวและคนสร้างสรรค์",
      bts: ["ทองหล่อ", "พร้อมพงษ์"],
      highlights: [
        "ร้านอาหารและคาเฟ่ที่ทันสมัย",
        "บาร์บนดาดฟ้าพร้อมวิวเมือง",
        "ช้อปปิ้งบูทีคและแกลเลอรี",
        "โรงเรียนนานาชาติใกล้เคียง",
        "ชุมชนชาวต่างชาติที่กระตือรือร้น"
      ],
      rentRange: "฿60,000 - ฿200,000+",
      suitability: "เหมาะสำหรับมืออาชีพด้านสร้างสรรค์ คู่รักหนุ่มสาว และผู้ที่ชื่นชอบไลฟ์สไตล์ที่ทันสมัยและประสบการณ์การรับประทานอาหารคุณภาพสูง",
      image: "/images/thonglor.jpg"
    },
    {
      name: "อารี",
      description: "ย่านฮิปที่มีเสน่ห์ท้องถิ่นแท้ เป็นที่รู้จักจากคาเฟ่อินดี้ ร้านวินเทจ และชุมชนศิลปิน ราคาไม่แพงในขณะที่ยังคงทันสมัย",
      bts: ["อารี", "สนามเป้า"],
      highlights: [
        "ตลาดท้องถิ่นแท้และอาหารริมทาง",
        "คาเฟ่ฮิปและร้านค้าอิสระ",
        "ชุมชนศิลปะและสร้างสรรค์",
        "ราคาไม่แพงกว่าพื้นที่กลาง",
        "ตลาดนัดจตุจักรใกล้เคียง"
      ],
      rentRange: "฿25,000 - ฿80,000",
      suitability: "ดีสำหรับคนประเภทสร้างสรรค์ มืออาชีพที่ใส่ใจงบประมาณ และผู้ที่ต้องการประสบการณ์กรุงเทพฯ แท้ๆ ในขณะที่ยังคงเชื่อมต่อ",
      image: "/images/ari.jpg"
    },
    {
      name: "อ่อนนุช",
      description: "พื้นที่เป็นมิตรกับครอบครัวที่ให้คุณค่าที่ยอดเยี่ยมสำหรับเงิน พื้นที่อยู่อาศัยที่ใหญ่กว่า โรงเรียนที่ดี และชุมชนครอบครัวชาวต่างชาติที่แข็งแกร่ง",
      bts: ["อ่อนนุช", "บางจาก"],
      highlights: [
        "คอนโดขนาดใหญ่กว่าในงบประมาณเดียวกัน",
        "สิ่งอำนวยความสะดวกและสวนสาธารณะที่เป็นมิตรกับครอบครัว",
        "โรงเรียนนานาชาติในพื้นที่",
        "ชุมชนครอบครัวชาวต่างชาติที่แข็งแกร่ง",
        "เข้าถึงช้อปปิ้ง Mega Bangna ได้ง่าย"
      ],
      rentRange: "฿20,000 - ฿60,000",
      suitability: "เหมาะสำหรับครอบครัวที่มีลูก มืออาชีพที่ใส่ใจงบประมาณ และผู้ที่ให้ความสำคัญกับพื้นที่และคุณค่ามากกว่าทำเลกลาง",
      image: "/images/onnut.jpg"
    },
    {
      name: "ริเวอร์ไซด์",
      description: "การใช้ชีวิตริมแม่น้ำที่เงียบสงบพร้อมวิวแม่น้ำเจ้าพระยาที่น่าทึ่ง คอนโดตึกสูงหรูหราพร้อมสิ่งอำนวยความสะดวกสไตล์โรงแรมและการขนส่งทางแม่น้ำ",
      bts: ["สะพานตากสิน"],
      highlights: [
        "วิวแม่น้ำและพระอาทิตย์ตกที่น่าทึ่ง",
        "คอนโดตึกสูงหรูหรา",
        "สิ่งอำนวยความสะดวกและบริการสไตล์โรงแรม",
        "การขนส่งด้วยเรือแม่น้ำ",
        "หลบหนีอย่างเงียบสงบจากเสียงเมือง"
      ],
      rentRange: "฿80,000 - ฿300,000+",
      suitability: "เหมาะสำหรับผู้บริหาร ผู้เกษียณอายุ และผู้ที่แสวงหาการใช้ชีวิตหรูหราพร้อมวิวแม่น้ำที่เงียบสงบในขณะที่ยังคงเชื่อมต่อกับเมือง",
      image: "/images/riverside.jpg"
    }
  ]

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pinpropertypro.com/en/areas" />
        <link rel="alternate" hrefLang="th" href="https://pinpropertypro.com/th/areas" />
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
                <Link href="/th/areas" className="text-gray-700 hover:text-red-600 font-semibold">
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
                  <Link href="/en/areas" className="px-3 py-1 rounded text-gray-700">
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/areas" className="px-3 py-1 rounded bg-red-600 text-white">
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
                    className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    บล็อก
                  </Link>
                  <Link 
                    href="/th/areas" 
                    className="block px-3 py-2 text-red-600 bg-red-50 rounded-md font-semibold"
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
                    <Link href="/en/areas" className="px-3 py-1 rounded text-gray-700 text-sm">
                      🇬🇧 EN
                    </Link>
                    <Link href="/th/areas" className="px-3 py-1 rounded bg-red-600 text-white text-sm">
                      🇹🇭 TH
                    </Link>
                  </div>
                </div>
              </div>
            )}
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

            {/* Areas Grid */}
            <div className="space-y-12">
              {areas.map((area, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h2 className="text-2xl lg:text-3xl text-gray-900 mb-2 font-bold">
                          {area.name}
                        </h2>
                        <p className="text-gray-600 text-lg">{area.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 mb-1">ช่วงค่าเช่า</div>
                        <div className="text-xl font-bold text-green-600">{area.rentRange}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Area Image */}
                      <div className="lg:col-span-1">
                        <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden">
                          <img 
                            src={area.image} 
                            alt={area.name}
                            className="w-full h-full object-cover hover:md:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Area Info */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* BTS Access */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <Train className="w-5 h-5 text-blue-600" />
                              การเข้าถึง BTS
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
                              จุดเด่นของพื้นที่
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
                            เหมาะสำหรับ
                          </h4>
                          <p className="text-gray-600">{area.suitability}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center rounded-3xl p-12 shadow-2xl text-white" style={{background: 'linear-gradient(135deg, #800020 0%, #660019 50%, #4d0013 100%)'}}>
              <h2 className="text-3xl font-bold mb-4">
                {content.cta.title}
              </h2>
              <p className="text-xl mb-8" style={{color: '#F9F9DC'}}>
                {content.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/th/contact" className="font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:md:scale-105 transition-all duration-300 text-center" style={{backgroundColor: '#F9F9DC', color: '#800020'}}>
                  <MessageCircle className="w-6 h-6 inline mr-3" />
                  {content.cta.button}
                </Link>
                <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-lg shadow-2xl hover:shadow-3xl transform hover:md:scale-105 transition-all duration-300 text-center border-2" style={{borderColor: '#F9F9DC', color: '#800020'}}>
                  <Instagram className="w-6 h-6 inline mr-3" />
                  ดูอสังหาริมทรัพย์
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