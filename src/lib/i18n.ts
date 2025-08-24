import { GetStaticPropsContext } from 'next'
import en from '../../locales/en/common.json'
import th from '../../locales/th/common.json'

const translations = {
  en,
  th
}

export function getTranslation(locale: string = 'en') {
  return translations[locale as keyof typeof translations] || translations.en
}

export function getStaticPropsWithLocale(context: GetStaticPropsContext) {
  const locale = context.locale || 'en'
  const t = getTranslation(locale)
  
  return {
    props: {
      locale,
      t
    }
  }
}

// Helper function to get nested translation values
export function getNestedTranslation(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}
