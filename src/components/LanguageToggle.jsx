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
          <div className="w-6 h-4 relative overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-red-600"></div>
            <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-white"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-600"></div>
          </div>
          <span className="text-sm font-medium" style={{color: '#800020'}}>ไทย</span>
        </div>
      ) : (
        // UK flag
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 relative overflow-hidden rounded-sm bg-blue-800">
            <div className="absolute inset-0 bg-blue-800"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white transform -skew-x-12 origin-top-left"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white transform skew-x-12 origin-bottom-left"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600 transform -skew-x-12 origin-top-left scale-75"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-600 transform skew-x-12 origin-bottom-left scale-75"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-red-600"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></div>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-red-600"></div>
              <div className="absolute top-0 right-0 w-0.5 h-full bg-red-600"></div>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-600 transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-red-600 transform -translate-x-1/2"></div>
            </div>
          </div>
          <span className="text-sm font-medium" style={{color: '#800020'}}>EN</span>
        </div>
      )}
    </button>
  )
}

export default LanguageToggle
