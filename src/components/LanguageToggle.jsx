import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:opacity-80"
      style={{
        backgroundColor: language === 'en' ? '#800020' : '#F9F9DC',
        color: language === 'en' ? 'white' : '#800020'
      }}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'ไทย' : 'EN'}
      </span>
    </button>
  )
}

export default LanguageToggle
