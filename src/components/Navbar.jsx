import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Home } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Pin Property Pro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/areas" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {t('nav.areas')}
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {t('nav.testimonials')}
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {t('nav.blog')}
            </Link>
            <Link to="/contact" className="btn-primary">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/areas"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.areas')}
              </Link>
              <Link
                to="/testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.testimonials')}
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.blog')}
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

