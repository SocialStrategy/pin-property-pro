import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'th' : 'en')
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.areas': 'Areas', 
    'nav.testimonials': 'Testimonials',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.badge': 'Bangkok\'s Premier Real Estate Expert',
    'home.hero.title': 'Find Your Dream Home in Bangkok',
    'home.hero.subtitle': 'Professional real estate services with personalized attention. From luxury condos to perfect apartments - I\'ll help you discover your ideal Bangkok home.',
    'home.hero.consultation': 'Schedule Free Consultation',
    'home.hero.explore': 'Explore Areas',
    'home.stats.rating': 'Average Rating', 
    'home.stats.support': 'Response Time',
    'home.profile.name': 'Pin Hemmawan',
    'home.profile.title': 'Bangkok Real Estate Specialist',
    'home.profile.rating': 'Rating',
    'home.profile.quote': 'Your dream home awaits in Bangkok. Let me guide you to the perfect property with personalized service and expert local knowledge.',
    'home.profile.whatsapp': 'WhatsApp',
    'home.profile.follow': 'Follow',
    'home.services.title': 'Why Choose Pin Hemmawan?',
    'home.services.subtitle': 'Experience the difference of working with Bangkok\'s most trusted real estate professional.',
    'home.services.local.title': 'Local Expertise',
    'home.services.local.desc': 'Deep knowledge of Bangkok neighborhoods, market trends, and hidden gems. I know the best buildings, amenities, and investment opportunities.',
    'home.services.verified.title': 'Verified Properties',
    'home.services.verified.desc': 'No more ghost listings or fake photos. Every property I show is personally verified, available, and accurately represented.',
    'home.services.support.title': 'Full Support',
    'home.services.support.desc': 'From initial consultation to move-in day and beyond. I handle negotiations, paperwork, utilities setup, and ongoing support.',
    'home.cta.title': 'Ready to Find Your Perfect Home?',
    'home.cta.subtitle': 'Don\'t waste time with unreliable agents or fake listings. Get professional service and verified properties from Bangkok\'s trusted real estate expert.',
    'home.cta.consultation': 'Schedule Free Consultation',
    'home.cta.whatsapp': 'WhatsApp Now',
    'home.cta.features.fees': 'No Hidden Fees',
    'home.cta.features.verified': 'Verified Properties',
    'home.cta.features.support': '24/7 Support',
    
    // Blog Page
    'blog.title': 'Bangkok Real Estate Insights',
    'blog.subtitle': 'Expert advice and insider tips from Pin Hemmawan to help you navigate Bangkok\'s rental market with confidence.',
    'blog.read.full': 'Read Full Guide →',
    'blog.cta.title': 'Need Personal Guidance?',
    'blog.cta.subtitle': 'Get expert advice tailored to your specific needs and budget.',
    'blog.cta.contact': 'Contact Pin Today',
    
    // Testimonials Page
    'testimonials.title': 'What My Clients Say',
    'testimonials.subtitle': 'Real success stories from expats who found their perfect Bangkok homes. See why clients from around the world trust Pin Hemmawan.',
    'testimonials.badge': 'Success Story',
    'testimonials.cta.title': 'Ready to Join My Happy Clients?',
    'testimonials.cta.subtitle': 'Experience the same exceptional service that my clients rave about.',
    'testimonials.cta.button': 'Get Started Today',
    
    // Blog Post
    'blogpost.back': 'Back to Blog',
    'blogpost.notfound.title': 'Post Not Found',
    'blogpost.notfound.subtitle': 'The blog post you\'re looking for doesn\'t exist.',
    'blogpost.cta.title': 'Ready to Find Your Perfect Bangkok Home?',
    'blogpost.cta.subtitle': 'Get personalized guidance from Pin Hemmawan to find the ideal property for your needs.',
    'blogpost.cta.contact': 'Contact Pin Today',
    
    // Blog Posts
    'blog.neighborhood.title': 'The Ultimate Bangkok Neighborhood Guide for Expats (2025)',
    'blog.neighborhood.excerpt': 'Relocating to Bangkok? Expert realtor Pin Hemmawan shares her ultimate 2025 guide to finding the perfect expat neighborhood for your lifestyle, from family-friendly Bang Na to trendy Thong Lo.',
    'blog.scams.title': '7 Bangkok Rental Scams & Mistakes to Avoid',
    'blog.scams.excerpt': 'New to renting in Bangkok? Don\'t learn the hard way. Real estate expert Pin Hemmawan reveals 7 common mistakes and potential scams that new expats face, and how to protect yourself.',
    'blog.furnished.title': 'Furnished vs. Unfurnished Condo in Bangkok: A Complete Cost Breakdown',
    'blog.furnished.excerpt': 'Should you rent a furnished or unfurnished condo in Bangkok? Real estate expert Pin Hemmawan provides a complete cost and convenience breakdown to help you make the best financial decision.',
    'blog.contract.title': 'How to Read a Thai Rental Contract (Key Clauses Explained)',
    'blog.contract.excerpt': 'Feeling intimidated by your Thai rental agreement? You\'re not alone. Expert Pin Hemmawan demystifies the legal jargon and explains 5 key clauses every expat renter must understand.',
    'blog.costs.title': 'The Real Cost of Living in a Bangkok Condo (Beyond the Rent)',
    'blog.costs.excerpt': 'Your monthly rent is just the beginning. Expert Pin Hemmawan uncovers the hidden costs of Bangkok condo living, from electricity bills to internet, so you can budget accurately.',
    'blog.house.title': 'Renting a House vs. a Condo in Bangkok: Which is Better for You?',
    'blog.house.excerpt': 'Dreaming of a garden, or craving the convenience of a high-rise? Bangkok real estate expert Pin Hemmawan gives a realistic guide to the pros and cons of renting a house versus a condo.'
  },
  th: {
    // Navigation
    'nav.home': 'หน้าแรก',
    'nav.areas': 'พื้นที่',
    'nav.testimonials': 'คำรับรอง',
    'nav.blog': 'บล็อก',
    'nav.contact': 'ติดต่อ',
    
    // Home Page
    'home.badge': 'ผู้เชี่ยวชาญอสังหาริมทรัพย์อันดับ 1 ของกรุงเทพฯ',
    'home.hero.title': 'ค้นหาบ้านในฝันของคุณในกรุงเทพฯ',
    'home.hero.subtitle': 'บริการอสังหาริมทรัพย์มืออาชีพด้วยความใส่ใจเป็นรายบุคคล จากคอนโดหรูหราไปจนถึงอพาร์ทเมนท์ที่สมบูรณ์แบบ - ฉันจะช่วยคุณค้นพบบ้านในฝันในกรุงเทพฯ',
    'home.hero.consultation': 'นัดหมายปรึกษาฟรี',
    'home.hero.explore': 'สำรวจพื้นที่',

    'home.stats.rating': 'คะแนนเฉลี่ย',
    'home.stats.support': 'เวลาตอบกลับ',
    'home.profile.name': 'ปิน เหมวรรณ',
    'home.profile.title': 'ผู้เชี่ยวชาญอสังหาริมทรัพย์กรุงเทพฯ',
    'home.profile.rating': 'คะแนน',
    'home.profile.quote': 'บ้านในฝันของคุณรอคุณอยู่ในกรุงเทพฯ ให้ฉันเป็นผู้นำทางคุณสู่อสังหาริมทรัพย์ที่สมบูรณ์แบบด้วยบริการส่วนบุคคลและความรู้ท้องถิ่นเชี่ยวชาญ',
    'home.profile.whatsapp': 'WhatsApp',
    'home.profile.follow': 'ติดตาม',
    'home.services.title': 'ทำไมต้องเลือกปิน เหมวรรณ?',
    'home.services.subtitle': 'สัมผัสความแตกต่างจากการทำงานกับผู้เชี่ยวชาญอสังหาริมทรัพย์ที่น่าเชื่อถือที่สุดในกรุงเทพฯ',
    'home.services.local.title': 'ความเชี่ยวชาญท้องถิ่น',
    'home.services.local.desc': 'ความรู้เชิงลึกเกี่ยวกับย่านต่างๆ ในกรุงเทพฯ แนวโน้มตลาด และอัญมณีที่ซ่อนอยู่ ฉันรู้จักอาคารที่ดีที่สุด สิ่งอำนวยความสะดวก และโอกาสการลงทุน',
    'home.services.verified.title': 'อสังหาริมทรัพย์ที่ได้รับการตรวจสอบ',
    'home.services.verified.desc': 'ไม่มีรายการปลอมหรือภาพหลอกลวงอีกต่อไป ทุกอสังหาริมทรัพย์ที่ฉันแสดงได้รับการตรวจสอบด้วยตัวเอง มีอยู่จริง และแสดงอย่างถูกต้อง',
    'home.services.support.title': 'การสนับสนุนเต็มรูปแบบ',
    'home.services.support.desc': 'ตั้งแต่การปรึกษาครั้งแรกจนถึงวันย้ายเข้าและต่อไป ฉันจัดการการเจรจา เอกสาร การตั้งค่าสาธารณูปโภค และการสนับสนุนอย่างต่อเนื่อง',
    'home.cta.title': 'พร้อมที่จะหาบ้านที่สมบูรณ์แบบของคุณหรือยัง?',
    'home.cta.subtitle': 'อย่าเสียเวลากับตัวแทนที่ไม่น่าเชื่อถือหรือรายการปลอม รับบริการมืออาชีพและอสังหาริมทรัพย์ที่ได้รับการตรวจสอบจากผู้เชี่ยวชาญอสังหาริมทรัพย์ที่น่าเชื่อถือของกรุงเทพฯ',
    'home.cta.consultation': 'นัดหมายปรึกษาฟรี',
    'home.cta.whatsapp': 'WhatsApp เลย',
    'home.cta.features.fees': 'ไม่มีค่าธรรมเนียมซ่อนเร้น',
    'home.cta.features.verified': 'อสังหาริมทรัพย์ที่ตรวจสอบแล้ว',
    'home.cta.features.support': 'การสนับสนุน 24/7',
    
    // Blog Page
    'blog.title': 'ข้อมูลเชิงลึกอสังหาริมทรัพย์กรุงเทพฯ',
    'blog.subtitle': 'คำแนะนำจากผู้เชี่ยวชาญและเคล็ดลับจากปิน เหมวรรณ เพื่อช่วยให้คุณนำทางตลาดเช่าในกรุงเทพฯ ด้วยความมั่นใจ',
    'blog.read.full': 'อ่านคู่มือฉบับเต็ม →',
    'blog.cta.title': 'ต้องการคำแนะนำเป็นการส่วนตัว?',
    'blog.cta.subtitle': 'รับคำแนะนำจากผู้เชี่ยวชาญที่ปรับแต่งตามความต้องการและงบประมาณเฉพาะของคุณ',
    'blog.cta.contact': 'ติดต่อปินวันนี้',
    
    // Testimonials Page
    'testimonials.title': 'ลูกค้าของฉันพูดถึงอะไร',
    'testimonials.subtitle': 'เรื่องราวความสำเร็จจริงจากชาวต่างชาติที่พบบ้านในฝันในกรุงเทพฯ ดูว่าทำไมลูกค้าจากทั่วโลกจึงไว้วางใจปิน เหมวรรณ',
    'testimonials.badge': 'เรื่องราวความสำเร็จ',
    'testimonials.cta.title': 'พร้อมที่จะเข้าร่วมกับลูกค้าที่มีความสุขของฉันหรือยัง?',
    'testimonials.cta.subtitle': 'สัมผัสบริการที่ยอดเยี่ยมเหมือนกับที่ลูกค้าของฉันชื่นชม',
    'testimonials.cta.button': 'เริ่มต้นวันนี้',
    
    // Blog Post
    'blogpost.back': 'กลับไปที่บล็อก',
    'blogpost.notfound.title': 'ไม่พบโพสต์',
    'blogpost.notfound.subtitle': 'โพสต์บล็อกที่คุณกำลังมองหาไม่มีอยู่',
    'blogpost.cta.title': 'พร้อมที่จะหาบ้านที่สมบูรณ์แบบในกรุงเทพฯ หรือยัง?',
    'blogpost.cta.subtitle': 'รับคำแนะนำเป็นการส่วนตัวจากปิน เหมวรรณ เพื่อหาอสังหาริมทรัพย์ที่เหมาะสมกับความต้องการของคุณ',
    'blogpost.cta.contact': 'ติดต่อปินวันนี้',
    
    // Blog Posts
    'blog.neighborhood.title': 'The Ultimate Bangkok Neighborhood Guide for Expats (2025)',
    'blog.neighborhood.excerpt': 'Relocating to Bangkok? Expert realtor Pin Hemmawan shares her ultimate 2025 guide to finding the perfect expat neighborhood for your lifestyle, from family-friendly Bang Na to trendy Thong Lo.',
    'blog.scams.title': '7 Bangkok Rental Scams & Mistakes to Avoid',
    'blog.scams.excerpt': 'New to renting in Bangkok? Don\'t learn the hard way. Real estate expert Pin Hemmawan reveals 7 common mistakes and potential scams that new expats face, and how to protect yourself.',
    'blog.furnished.title': 'Furnished vs. Unfurnished Condo in Bangkok: A Complete Cost Breakdown',
    'blog.furnished.excerpt': 'Should you rent a furnished or unfurnished condo in Bangkok? Real estate expert Pin Hemmawan provides a complete cost and convenience breakdown to help you make the best financial decision.',
    'blog.contract.title': 'How to Read a Thai Rental Contract (Key Clauses Explained)',
    'blog.contract.excerpt': 'Feeling intimidated by your Thai rental agreement? You\'re not alone. Expert Pin Hemmawan demystifies the legal jargon and explains 5 key clauses every expat renter must understand.',
    'blog.costs.title': 'The Real Cost of Living in a Bangkok Condo (Beyond the Rent)',
    'blog.costs.excerpt': 'Your monthly rent is just the beginning. Expert Pin Hemmawan uncovers the hidden costs of Bangkok condo living, from electricity bills to internet, so you can budget accurately.',
    'blog.house.title': 'Renting a House vs. a Condo in Bangkok: Which is Better for You?',
    'blog.house.excerpt': 'Dreaming of a garden, or craving the convenience of a high-rise? Bangkok real estate expert Pin Hemmawan gives a realistic guide to the pros and cons of renting a house versus a condo.'
  }
}

export default LanguageProvider
