import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-md"
      style={{
        backgroundColor: '#F9F9DC',
        border: '2px solid #800020'
      }}
      aria-label="Toggle language"
      title={language === 'en' ? 'Switch to Thai' : 'Switch to English'}
    >
      {language === 'en' ? (
        // Thai flag
        <div className="flex items-center gap-2">
          <span className="text-xl">🇹🇭</span>
          <span className="text-sm font-medium" style={{color: '#800020'}}>ไทย</span>
        </div>
      ) : (
        // UK flag
        <div className="flex items-center gap-2">
          <span className="text-xl">🇬🇧</span>
          <span className="text-sm font-medium" style={{color: '#800020'}}>EN</span>
        </div>
      )}
    </button>
  )
}

export default LanguageToggle
