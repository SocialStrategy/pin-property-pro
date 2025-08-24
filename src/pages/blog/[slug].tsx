import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getStaticPropsWithLocale } from '@/lib/i18n'

interface BlogPostProps {
  locale: string
  t: any
  post: any
}

export default function BlogPost({ locale, t, post }: BlogPostProps) {
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F9F9DC] to-[#F5F5D0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === 'en' ? 'Post Not Found' : 'ไม่พบโพสต์'}
          </h1>
          <Link href={`/${locale}/blog`} className="text-[#800020] hover:opacity-80">
            ← {locale === 'en' ? 'Back to Blog' : 'กลับไปที่บล็อก'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} | Pin Hemmawan</title>
        <meta name="description" content={post.excerpt} />
        <link rel="alternate" hrefLang="en" href={`https://pin-property-pro.vercel.app/en/blog/${post.slugEn}`} />
        <link rel="alternate" hrefLang="th" href={`https://pin-property-pro.vercel.app/th/blog/${post.slugTh}`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-[#F9F9DC] to-[#F5F5D0]">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center font-medium mb-8 hover:opacity-80 text-[#800020]"
          >
            ← {locale === 'en' ? 'Back to Blog' : 'กลับไปที่บล็อก'}
          </Link>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Featured Image</span>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-[#800020] text-white rounded-full text-sm mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
                <div className="flex items-center text-sm text-gray-500">
                  📅 {post.date}
                </div>
              </div>

              <div className="prose max-w-none">
                {post.content.split('\n\n').map((paragraph: string, index: number) => {
                  if (paragraph.trim() === '') return null
                  
                  const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4" 
                       dangerouslySetInnerHTML={{ __html: formattedParagraph }}>
                    </p>
                  )
                })}
              </div>

              <div className="mt-12 p-6 rounded-xl bg-[#800020] text-white">
                <h3 className="text-xl font-bold mb-4">
                  {locale === 'en' ? 'Ready to Find Your Perfect Bangkok Home?' : 'พร้อมที่จะหาบ้านที่สมบูรณ์แบบในกรุงเทพฯ หรือยัง?'}
                </h3>
                <p className="mb-4 text-[#F9F9DC]">
                  {locale === 'en' 
                    ? 'Get personalized guidance from Pin Hemmawan to find the ideal property for your needs.'
                    : 'รับคำแนะนำเป็นการส่วนตัวจากปิน เหมวรรณ เพื่อหาอสังหาริมทรัพย์ที่เหมาะสมกับความต้องการของคุณ'
                  }
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center font-bold px-6 py-3 rounded-lg transition-colors hover:opacity-90 bg-[#F9F9DC] text-[#800020]"
                >
                  👤 {locale === 'en' ? 'Contact Pin Today' : 'ติดต่อปินวันนี้'}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Define all blog post slugs for both languages
  const posts = [
    { slugEn: 'bangkok-neighborhood-guide-2025', slugTh: 'คู่มือ-ย่าน-กรุงเทพ-2025' },
    { slugEn: 'furnished-vs-unfurnished-bangkok', slugTh: 'คอนโด-ครบเครื่อง-vs-ไม่ครบเครื่อง-กรุงเทพ' },
    { slugEn: 'thai-rental-contract-guide', slugTh: 'คู่มือ-สัญญาเช่า-ไทย' },
    { slugEn: 'house-vs-condo-bangkok', slugTh: 'บ้าน-vs-คอนโด-กรุงเทพ' }
  ]

  const paths = posts.flatMap(post => [
    { params: { slug: post.slugEn }, locale: 'en' },
    { params: { slug: post.slugTh }, locale: 'th' }
  ])

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale, params } = context
  const slug = params?.slug as string
  
  // Sample blog post data - in real app, this would come from CMS or markdown files
  const blogPosts: Record<string, any> = {
    'bangkok-neighborhood-guide-2025': {
      title: 'The Ultimate Bangkok Neighborhood Guide for Expats (2025)',
      excerpt: 'Expert guide to finding the perfect expat neighborhood in Bangkok.',
      content: `Welcome to Bangkok! If you're reading this, you are likely at the start of an exciting new chapter. I'm Pin, and for over a decade, I've helped expatriates find their perfect home in this incredible city.

One of the first questions my clients ask is, "Pin, where should I live?" It's a simple question with a personal answer. Bangkok is a mosaic of unique districts, each with its own personality.

**Understanding the "Sukhumvit Default"**

Areas like Phrom Phong, Thong Lo, and Ekkamai are popular for good reason. They are centrally located along the BTS Green Line, packed with world-class restaurants and vibrant social scenes.

**The Neighborhood Matchmaker**

Let me help you find your perfect match based on your lifestyle and priorities.`,
      date: '2025-01-16',
      category: 'Neighborhood Guide',
      slugEn: 'bangkok-neighborhood-guide-2025',
      slugTh: 'คู่มือ-ย่าน-กรุงเทพ-2025'
    },
    'คู่มือ-ย่าน-กรุงเทพ-2025': {
      title: 'คู่มือย่านกรุงเทพฯ สำหรับชาวต่างชาติ (2025)',
      excerpt: 'คู่มือจากผู้เชี่ยวชาญเพื่อหาย่านที่เหมาะสำหรับชาวต่างชาติในกรุงเทพฯ',
      content: `ยินดีต้อนรับสู่กรุงเทพฯ! หากคุณกำลังอ่านข้อความนี้ คุณอาจกำลังอยู่ในช่วงเริ่มต้นของบทใหม่ที่น่าตื่นเต้น ฉันชื่อปิน และมานานกว่าทศวรรษแล้ว ฉันได้ช่วยเหลือชาวต่างชาติหาบ้านที่สมบูรณ์แบบในเมืองที่น่าทึ่งนี้

หนึ่งในคำถามแรกที่ลูกค้าของฉันถามคือ "ปิน ฉันควรอยู่ที่ไหนดี?" เป็นคำถามง่ายๆ แต่มีคำตอบที่เป็นส่วนตัว กรุงเทพฯ เป็นโมเสกของย่านที่มีเอกลักษณ์ แต่ละแห่งมีบุคลิกของตัวเอง

**ทำความเข้าใจ "ค่าเริ่มต้นสุขุมวิท"**

พื้นที่อย่างพร้อมพงษ์ ทองหล่อ และเอกมัยได้รับความนิยมด้วยเหตุผลที่ดี ตั้งอยู่ในใจกลางตามแนวรถไฟฟ้า BTS สายสุขุมวิท เต็มไปด้วยร้านอาหารระดับโลกและฉากสังคมที่มีชีวิตชีวา

**ผู้จับคู่ย่าน**

ให้ฉันช่วยคุณหาคู่ที่สมบูรณ์แบบตามไลฟ์สไตล์และลำดับความสำคัญของคุณ`,
      date: '2025-01-16',
      category: 'คู่มือย่าน',
      slugEn: 'bangkok-neighborhood-guide-2025',
      slugTh: 'คู่มือ-ย่าน-กรุงเทพ-2025'
    }
  }
  
  const post = blogPosts[slug] || null
  const baseProps = getStaticPropsWithLocale(context)
  
  return {
    props: {
      ...baseProps.props,
      post
    }
  }
}
