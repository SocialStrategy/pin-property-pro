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
        // UK flag (Union Jack)
        <div className="flex items-center gap-2">
          <div className="w-6 h-4 relative overflow-hidden rounded-sm bg-blue-900">
            {/* Blue background */}
            <div className="absolute inset-0 bg-blue-900"></div>
            
            {/* White diagonal crosses */}
            <div className="absolute inset-0">
              {/* Top-left to bottom-right diagonal */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white transform rotate-12 origin-top-left scale-150"></div>
              </div>
              {/* Top-right to bottom-left diagonal */}
              <div className="absolute top-0 right-0 w-full h-full">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-white transform -rotate-12 origin-top-right scale-150"></div>
              </div>
            </div>
            
            {/* Red diagonal crosses (narrower) */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-red-600 transform rotate-12 origin-top-left scale-125"></div>
              </div>
              <div className="absolute top-0 right-0 w-full h-full">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-red-600 transform -rotate-12 origin-top-right scale-125"></div>
              </div>
            </div>
            
            {/* White cross (St. George's Cross background) */}
            <div className="absolute top-0 left-1/2 w-1 h-full bg-white transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2"></div>
            
            {/* Red cross (St. George's Cross) */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-red-600 transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-600 transform -translate-y-1/2"></div>
          </div>
          <span className="text-sm font-medium" style={{color: '#800020'}}>EN</span>
        </div>
      )}
    </button>
  )
}

export default LanguageToggle
