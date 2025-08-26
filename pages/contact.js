import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Contact() {
  const router = useRouter()
  const { locale } = router
  
  const t = {
    en: {
      title: "Contact Pin Hemmawan | Bangkok Real Estate Expert",
      description: "Ready to start your stress-free condo search? Choose your preferred way to connect, and I'll respond the same day with a personalized consultation plan.",
      heading: "Let's Find Your Perfect Bangkok Home",
      subtitle: "Ready to start your stress-free condo search? Choose your preferred way to connect, and I'll respond the same day with a personalized consultation plan.",
      phone: "Phone/WhatsApp",
      line: "LINE Chat",
      email: "Email",
      schedule: "Schedule Consultation"
    },
    th: {
      title: "ติดต่อปิน เหมวรรณ | ผู้เชี่ยวชาญอสังหาริมทรัพย์กรุงเทพฯ",
      description: "พร้อมที่จะเริ่มต้นการค้นหาคอนโดที่ปราศจากความเครียดแล้วหรือยัง? เลือกวิธีที่คุณต้องการติดต่อ และฉันจะตอบกลับภายในวันเดียวกันพร้อมแผนการปรึกษาที่เป็นส่วนตัว",
      heading: "มาหาบ้านในฝันของคุณในกรุงเทพฯ กันเถอะ",
      subtitle: "พร้อมที่จะเริ่มต้นการค้นหาคอนโดที่ปราศจากความเครียดแล้วหรือยัง? เลือกวิธีที่คุณต้องการติดต่อ และฉันจะตอบกลับภายในวันเดียวกันพร้อมแผนการปรึกษาที่เป็นส่วนตัว",
      phone: "โทรศัพท์/WhatsApp",
      line: "แชท LINE",
      email: "อีเมล",
      schedule: "นัดหมายปรึกษา"
    }
  }
  
  const content = t[locale] || t.en

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/contact" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://pin-property-pro.vercel.app/contact" />
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
              
              <div className="flex items-center space-x-6">
                <Link href={`/${locale || 'en'}/blog`} className="text-gray-700 hover:text-red-600">
                  Blog
                </Link>
                <Link href={`/${locale || 'en'}/areas`} className="text-gray-700 hover:text-red-600">
                  Areas
                </Link>
                <Link href={`/${locale || 'en'}/contact`} className="text-red-600 font-semibold">
                  Contact
                </Link>
                
                {/* Language Toggle */}
                <div className="flex items-center gap-2">
                  <Link href="/en/contact" className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
                    🇬🇧 EN
                  </Link>
                  <Link href="/th/contact" className={`px-3 py-1 rounded ${locale === 'th' ? 'bg-red-600 text-white' : 'text-gray-700'}`}>
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
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{content.phone}</h3>
              <p className="text-gray-600 mb-4">+66 95 912 4769</p>
              <a 
                href="https://wa.me/66959124769" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{content.line}</h3>
              <p className="text-gray-600 mb-4">@pinhemmawan</p>
              <a 
                href="https://line.me/ti/p/@pinhemmawan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                LINE
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{content.email}</h3>
              <p className="text-gray-600 mb-4">pin@pinpropertypro.com</p>
              <a 
                href="mailto:pin@pinpropertypro.com" 
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {locale === 'th' ? 'ส่งข้อความหาฉัน' : 'Send Me a Message'}
              </h2>
              <p className="text-gray-600">
                {locale === 'th' 
                  ? 'กรอกฟอร์มด้านล่างและฉันจะติดต่อกลับภายใน 24 ชั่วโมง'
                  : 'Fill out the form below and I\'ll get back to you within 24 hours'
                }
              </p>
            </div>

            <form id="contactForm" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'th' ? 'ชื่อ *' : 'Name *'}
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder={locale === 'th' ? 'ชื่อของคุณ' : 'Your full name'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'th' ? 'อีเมล *' : 'Email *'}
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'th' ? 'เบอร์โทร/WhatsApp' : 'Phone/WhatsApp'}
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+66 XX XXX XXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'th' ? 'งบประมาณ' : 'Budget'}
                  </label>
                  <select 
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">{locale === 'th' ? 'เลือกงบประมาณ' : 'Select budget'}</option>
                    <option value="Under ฿30,000">{locale === 'th' ? 'ต่ำกว่า ฿30,000' : 'Under ฿30,000'}</option>
                    <option value="฿30,000 - ฿50,000">฿30,000 - ฿50,000</option>
                    <option value="฿50,000 - ฿80,000">฿50,000 - ฿80,000</option>
                    <option value="฿80,000 - ฿120,000">฿80,000 - ฿120,000</option>
                    <option value="Above ฿120,000">{locale === 'th' ? 'มากกว่า ฿120,000' : 'Above ฿120,000'}</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'th' ? 'พื้นที่ที่สนใจ' : 'Preferred Area'}
                  </label>
                  <select 
                    name="area"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">{locale === 'th' ? 'เลือกพื้นที่' : 'Select area'}</option>
                    <option value="Sukhumvit">{locale === 'th' ? 'สุขุมวิท' : 'Sukhumvit'}</option>
                    <option value="Silom/Sathorn">{locale === 'th' ? 'สีลม/สาทร' : 'Silom/Sathorn'}</option>
                    <option value="Thonglor">{locale === 'th' ? 'ทองหล่อ' : 'Thonglor'}</option>
                    <option value="Ari">{locale === 'th' ? 'อารี' : 'Ari'}</option>
                    <option value="Riverside">{locale === 'th' ? 'ริเวอร์ไซด์' : 'Riverside'}</option>
                    <option value="On Nut">{locale === 'th' ? 'อ่อนนุช' : 'On Nut'}</option>
                    <option value="Other">{locale === 'th' ? 'อื่นๆ' : 'Other'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'th' ? 'ประเภทที่พัก' : 'Property Type'}
                  </label>
                  <select 
                    name="propertyType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">{locale === 'th' ? 'เลือกประเภท' : 'Select type'}</option>
                    <option value="Studio">{locale === 'th' ? 'สตูดิโอ' : 'Studio'}</option>
                    <option value="1 Bedroom">{locale === 'th' ? '1 ห้องนอน' : '1 Bedroom'}</option>
                    <option value="2 Bedroom">{locale === 'th' ? '2 ห้องนอน' : '2 Bedroom'}</option>
                    <option value="3+ Bedroom">{locale === 'th' ? '3+ ห้องนอน' : '3+ Bedroom'}</option>
                    <option value="Penthouse">{locale === 'th' ? 'เพนท์เฮาส์' : 'Penthouse'}</option>
                    <option value="House">{locale === 'th' ? 'บ้าน' : 'House'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'th' ? 'วันที่ต้องการย้าย' : 'Preferred Move Date'}
                </label>
                <input 
                  type="date" 
                  name="moveDate"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'th' ? 'ข้อความ *' : 'Message *'}
                </label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  placeholder={locale === 'th' 
                    ? 'บอกฉันเกี่ยวกับสิ่งที่คุณกำลังมองหา...'
                    : 'Tell me about what you\'re looking for...'
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-4 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:md:scale-105 transition-all duration-300"
                  style={{background: 'linear-gradient(135deg, #800020 0%, #660019 50%, #4d0013 100%)'}}
                >
                  {locale === 'th' ? 'ส่งข้อความผ่าน WhatsApp' : 'Send Message via WhatsApp'}
                </button>
              </div>
            </form>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="/images/pin-profile.jpg" 
                  alt="Pin Hemmawan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Pin Hemmawan</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {locale === 'th' 
                    ? 'ผู้เชี่ยวชาญอสังหาริมทรัพย์กรุงเทพฯ ที่มีประสบการณ์กว่า 8 ปีในการช่วยชาวต่างชาติหาบ้านในฝัน'
                    : 'Bangkok real estate expert with over 8 years of experience helping expats find their dream homes.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a 
                    href="https://wa.me/66959124769" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 text-white font-bold rounded-lg transition-all duration-200 hover:md:scale-105 shadow-lg"
                    style={{backgroundColor: '#800020'}}
                  >
                    {content.schedule}
                  </a>
                </div>
              </div>
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

      {/* Contact Form Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contactForm');
            if (form) {
              form.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);
                
                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                  });
                  
                  const result = await response.json();
                  
                  if (result.success && result.whatsappUrl) {
                    // Open WhatsApp with the pre-filled message
                    window.open(result.whatsappUrl, '_blank');
                    
                    // Show success message
                    alert('${locale === 'th' 
                      ? 'กำลังเปิด WhatsApp พร้อมข้อความของคุณ!' 
                      : 'Opening WhatsApp with your message!'
                    }');
                    
                    // Reset form
                    form.reset();
                  } else {
                    throw new Error(result.message || 'Failed to process form');
                  }
                } catch (error) {
                  console.error('Form submission error:', error);
                  alert('${locale === 'th' 
                    ? 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง' 
                    : 'An error occurred. Please try again.'
                  }');
                }
              });
            }
          });
        `
      }} />
    </>
  )
}

// Static page - no getStaticProps needed
