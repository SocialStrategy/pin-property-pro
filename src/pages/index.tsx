import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getStaticPropsWithLocale } from '@/lib/i18n'

interface HomeProps {
  locale: string
  t: any
}

export default function Home({ locale, t }: HomeProps) {
  return (
    <>
      <Head>
        <title>{t.meta.home.title}</title>
        <meta name="description" content={t.meta.home.description} />
        <link rel="alternate" hrefLang="en" href="https://pin-property-pro.vercel.app/en/" />
        <link rel="alternate" hrefLang="th" href="https://pin-property-pro.vercel.app/th/" />
        <link rel="alternate" hrefLang="x-default" href="https://pin-property-pro.vercel.app/" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-[#F9F9DC] to-[#F5F5D0]">
        <nav className="flex justify-between items-center p-6">
          <div className="text-2xl font-bold text-[#800020]">Pin Property Pro</div>
          <div className="flex space-x-6">
            <a href={locale === 'en' ? '/en/' : '/th/'}>{t.nav.home}</a>
            <a href={locale === 'en' ? '/en/areas' : '/th/areas'}>{t.nav.areas}</a>
            <a href={locale === 'en' ? '/en/testimonials' : '/th/testimonials'}>{t.nav.testimonials}</a>
            <a href={locale === 'en' ? '/en/blog' : '/th/blog'}>{t.nav.blog}</a>
            <a href={locale === 'en' ? '/en/contact' : '/th/contact'}>{t.nav.contact}</a>
          </div>
          <div className="flex space-x-2">
            <a href="/en/" className="px-3 py-1 rounded bg-[#800020] text-white">🇬🇧 EN</a>
            <a href="/th/" className="px-3 py-1 rounded bg-[#800020] text-white">🇹🇭 ไทย</a>
          </div>
        </nav>
        
        <main className="container mx-auto px-6 py-20">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-[#800020] text-white rounded-full mb-6">
              {t.home.badge}
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t.home.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {t.home.hero.subtitle}
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-[#800020] text-white rounded-lg font-semibold hover:opacity-90">
                {t.home.hero.consultation}
              </button>
              <button className="px-8 py-3 border-2 border-[#800020] text-[#800020] rounded-lg font-semibold hover:bg-[#800020] hover:text-white">
                {t.home.hero.explore}
              </button>
            </div>
          </div>
          
          <div className="text-center mt-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <h2 className="text-2xl font-bold text-[#800020] mb-4">{t.home.profile.name}</h2>
              <p className="text-gray-600 mb-4">{t.home.profile.title}</p>
              <p className="text-gray-700 italic">{t.home.profile.quote}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return getStaticPropsWithLocale(context)
}
