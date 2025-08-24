import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getStaticPropsWithLocale } from '@/lib/i18n'

interface BlogProps {
  locale: string
  t: any
}

export default function Blog({ locale, t }: BlogProps) {
  const blogPosts = [
    {
      id: 'bangkok-neighborhood-guide-2025',
      title: locale === 'en' ? 'The Ultimate Bangkok Neighborhood Guide for Expats (2025)' : 'คู่มือย่านกรุงเทพฯ สำหรับชาวต่างชาติ (2025)',
      excerpt: locale === 'en' ? 'Expert guide to finding the perfect expat neighborhood in Bangkok.' : 'คู่มือจากผู้เชี่ยวชาญเพื่อหาย่านที่เหมาะสำหรับชาวต่างชาติในกรุงเทพฯ',
      date: '2025-01-16',
      slug: locale === 'en' ? 'bangkok-neighborhood-guide-2025' : 'คู่มือ-ย่าน-กรุงเทพ-2025'
    },
    {
      id: 'furnished-vs-unfurnished-bangkok',
      title: locale === 'en' ? 'Furnished vs. Unfurnished Condo in Bangkok: Complete Cost Breakdown' : 'คอนโดครบเครื่อง vs ไม่ครบเครื่องในกรุงเทพฯ: วิเคราะห์ต้นทุนครบถ้วน',
      excerpt: locale === 'en' ? 'Complete cost analysis of furnished vs unfurnished rentals in Bangkok.' : 'การวิเคราะห์ต้นทุนครบถ้วนของการเช่าครบเครื่องและไม่ครบเครื่องในกรุงเทพฯ',
      date: '2025-01-02',
      slug: locale === 'en' ? 'furnished-vs-unfurnished-bangkok' : 'คอนโด-ครบเครื่อง-vs-ไม่ครบเครื่อง-กรุงเทพ'
    },
    {
      id: 'thai-rental-contract-guide',
      title: locale === 'en' ? 'How to Read a Thai Rental Contract (Key Points Explained)' : 'วิธีอ่านสัญญาเช่าไทย (อธิบายข้อสำคัญ)',
      excerpt: locale === 'en' ? 'Essential guide to understanding Thai rental contracts for expats.' : 'คู่มือสำคัญเพื่อทำความเข้าใจสัญญาเช่าไทยสำหรับชาวต่างชาติ',
      date: '2024-12-26',
      slug: locale === 'en' ? 'thai-rental-contract-guide' : 'คู่มือ-สัญญาเช่า-ไทย'
    }
  ]

  return (
    <>
      <Head>
        <title>{t.meta.blog.title}</title>
        <meta name="description" content={t.meta.blog.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/blog/" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/blog/" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-[#F9F9DC] to-[#F5F5D0]">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'en' ? 'Bangkok Real Estate Insights' : 'ข้อมูลเชิงลึกอสังหาริมทรัพย์กรุงเทพฯ'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'en' 
                ? 'Expert advice and insider tips from Pin Hemmawan to help you navigate Bangkok\'s rental market with confidence.'
                : 'คำแนะนำจากผู้เชี่ยวชาญและเคล็ดลับจากปิน เหมวรรณ เพื่อช่วยให้คุณนำทางตลาดเช่าในกรุงเทพฯ ด้วยความมั่นใจ'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">
                    <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-[#800020]">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/${locale}/blog/${post.slug}`}
                      className="text-[#800020] font-semibold hover:opacity-80"
                    >
                      {locale === 'en' ? 'Read More →' : 'อ่านต่อ →'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getStaticPropsWithLocale(context)
}
