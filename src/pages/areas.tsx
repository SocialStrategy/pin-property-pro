import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getStaticPropsWithLocale } from '@/lib/i18n'

interface AreasProps {
  locale: string
  t: any
}

export default function Areas({ locale, t }: AreasProps) {
  const areas = [
    {
      id: 'sukhumvit',
      name: locale === 'en' ? 'Sukhumvit' : 'สุขุมวิท',
      description: locale === 'en' 
        ? 'The heart of expat life in Bangkok. Central location with excellent BTS connectivity, diverse dining, and vibrant nightlife.'
        : 'หัวใจของชีวิตชาวต่างชาติในกรุงเทพฯ ทำเลกลางที่มีการเชื่อมต่อ BTS ที่ยอดเยี่ยม ร้านอาหารหลากหลาย และชีวิตยามค่ำคืนที่มีชีวิตชีวา',
      image: '/images/sukhumvit.jpg',
      highlights: locale === 'en' 
        ? ['Shopping malls', 'International restaurants', 'Nightlife', 'Large expat community']
        : ['ห้างสรรพสินค้า', 'ร้านอาหารนานาชาติ', 'ชีวิตยามค่ำคืน', 'ชุมชนชาวต่างชาติขนาดใหญ่']
    },
    {
      id: 'sathorn',
      name: locale === 'en' ? 'Sathorn' : 'สาทร',
      description: locale === 'en'
        ? 'Bangkok\'s Wall Street. Premium business district with luxury apartments, close to Lumpini Park and major offices.'
        : 'วอลล์สตรีทของกรุงเทพฯ ย่านธุรกิจพรีเมียมที่มีอพาร์ทเมนท์หรูหรา ใกล้สวนลุมพินีและสำนักงานใหญ่',
      image: '/images/sathorn.jpg',
      highlights: locale === 'en'
        ? ['Business district', 'Luxury condos', 'Lumpini Park', 'Fine dining']
        : ['ย่านธุรกิจ', 'คอนโดหรูหรา', 'สวนลุมพินี', 'ร้านอาหารชั้นเลิศ']
    },
    {
      id: 'thonglor',
      name: locale === 'en' ? 'Thonglor' : 'ทองหล่อ',
      description: locale === 'en'
        ? 'Upscale and sophisticated area, particularly popular with Japanese expats. Premium dining and boutique shopping.'
        : 'พื้นที่ชั้นสูงและซับซ้อน ได้รับความนิยมเป็นพิเศษจากชาวญี่ปุ่น ร้านอาหารพรีเมียมและการช้อปปิ้งบูติก',
      image: '/images/thonglor.jpg',
      highlights: locale === 'en'
        ? ['High-end restaurants', 'Boutique shopping', 'Japanese community', 'Luxury condos']
        : ['ร้านอาหารชั้นสูง', 'ช้อปปิ้งบูติก', 'ชุมชนญี่ปุ่น', 'คอนโดหรูหรา']
    }
  ]

  return (
    <>
      <Head>
        <title>{t.meta.areas.title}</title>
        <meta name="description" content={t.meta.areas.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/areas/" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/areas/" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-[#F9F9DC] to-[#F5F5D0]">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'en' ? 'Bangkok Areas Guide' : 'คู่มือพื้นที่กรุงเทพฯ'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Discover the perfect neighborhood for your lifestyle. Each area offers unique advantages for different types of residents.'
                : 'ค้นพบย่านที่สมบูรณ์แบบสำหรับไลฟ์สไตล์ของคุณ แต่ละพื้นที่มีข้อดีเฉพาะสำหรับผู้อยู่อาศัยประเภทต่างๆ'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div key={area.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image: {area.name}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-[#800020]">{area.name}</h2>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">
                      {locale === 'en' ? 'Highlights:' : 'จุดเด่น:'}
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {area.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 p-8 rounded-2xl bg-[#800020] text-white">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'en' ? 'Ready to Explore These Areas?' : 'พร้อมที่จะสำรวจพื้นที่เหล่านี้หรือยัง?'}
            </h2>
            <p className="mb-6 text-lg text-[#F9F9DC]">
              {locale === 'en' 
                ? 'Let me show you the best properties in your preferred neighborhoods.'
                : 'ให้ฉันแสดงอสังหาริมทรัพย์ที่ดีที่สุดในย่านที่คุณต้องการ'
              }
            </p>
            <button className="font-bold px-8 py-3 rounded-lg transition-colors bg-[#F9F9DC] text-[#800020] hover:opacity-90">
              {locale === 'en' ? 'Schedule Area Tour' : 'นัดหมายทัวร์พื้นที่'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getStaticPropsWithLocale(context)
}
