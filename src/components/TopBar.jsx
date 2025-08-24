import LanguageToggle from './LanguageToggle'

const TopBar = () => {
  return (
    <div className="w-full py-2 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#F9F9DC'}}>
      <div className="max-w-7xl mx-auto flex justify-end">
        <LanguageToggle />
      </div>
    </div>
  )
}

export default TopBar
