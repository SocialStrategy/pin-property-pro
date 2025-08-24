import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getStaticPropsWithLocale } from '@/lib/i18n'

interface ContactProps {
  locale: string
  t: any
}

export default function Contact({ locale, t }: ContactProps) {
  return (
    <>
      <Head>
        <title>{locale === 'en' ? 'Contact Pin Hemmawan - Bangkok Real Estate Expert' : 'ติดต่อปิน เหมวรรณ - ผู้เชี่ยวชาญอสังหาริมทรัพย์กรุงเทพฯ'}</title>
        <meta name="description" content={locale === 'en' ? 'Contact Pin Hemmawan for expert Bangkok real estate services. Schedule your free consultation today.' : 'ติดต่อปิน เหมวรรณ สำหรับบริการอสังหาริมทรัพย์กรุงเทพฯ จากผู้เชี่ยวชาญ นัดหมายปรึกษาฟรีวันนี้'} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/contact/" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/contact/" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-[#F9F9DC] to-[#F5F5D0]">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'en' ? 'Let\'s Find Your Perfect Bangkok Home' : 'มาหาบ้านในฝันของคุณในกรุงเทพฯ กันเถอะ'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Ready to start your stress-free condo search? Choose your preferred way to connect, and I\'ll respond the same day with a personalized consultation plan.'
                : 'พร้อมที่จะเริ่มต้นการค้นหาคอนโดที่ปราศจากความเครียดแล้วหรือยัง? เลือกวิธีที่คุณต้องการติดต่อ และฉันจะตอบกลับภายในวันเดียวกันพร้อมแผนการปรึกษาที่เป็นส่วนตัว'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#800020]">
                {locale === 'en' ? 'Get In Touch' : 'ติดต่อ'}
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center text-white">
                    📱
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600">+66 XX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center text-white">
                    📧
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">pin@pinpropertypro.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {locale === 'en' ? 'Location' : 'ที่อยู่'}
                    </h3>
                    <p className="text-gray-600">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#800020]">
                {locale === 'en' ? 'Schedule Your Free Consultation' : 'นัดหมายปรึกษาฟรีของคุณ'}
              </h2>
              <p className="text-gray-600 mb-6">
                {locale === 'en'
                  ? 'Tell me about your needs and I\'ll prepare a personalized property selection for our first meeting.'
                  : 'บอกความต้องการของคุณ แล้วฉันจะเตรียมการเลือกอสังหาริมทรัพย์ที่เป็นส่วนตัวสำหรับการประชุมครั้งแรกของเรา'
                }
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'en' ? 'Full Name' : 'ชื่อเต็ม'}
                  </label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'en' ? 'Email' : 'อีเมล'}
                  </label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'en' ? 'Phone/WhatsApp' : 'โทรศัพท์/WhatsApp'}
                  </label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'en' ? 'Monthly Budget (THB)' : 'งบประมาณรายเดือน (บาท)'}
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent">
                    <option>{locale === 'en' ? 'Select budget range' : 'เลือกช่วงงบประมาณ'}</option>
                    <option>{locale === 'en' ? 'Under ฿30,000' : 'ต่ำกว่า ฿30,000'}</option>
                    <option>฿30,000 - ฿50,000</option>
                    <option>฿50,000 - ฿80,000</option>
                    <option>฿80,000 - ฿120,000</option>
                    <option>฿120,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'en' ? 'Special Requirements or Questions' : 'ข้อกำหนดพิเศษหรือคำถาม'}
                  </label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#800020] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  {locale === 'en' ? 'Schedule My Free Consultation' : 'นัดหมายปรึกษาฟรีของฉัน'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getStaticPropsWithLocale(context)
}
