import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Home as HomeIcon, MessageCircle, Instagram } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Areas', path: '/areas' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">Pin Property Pro</h1>
                <p className="text-sm text-red-600 font-medium">Bangkok Real Estate Expert</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                    : 'text-gray-700 hover:text-red-700 hover:bg-red-50 hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  Follow
                </a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact Pin
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-red-800 bg-red-50'
                      : 'text-gray-700 hover:text-red-800 hover:bg-red-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button asChild variant="outline" className="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                    <Instagram className="w-4 h-4" />
                    Follow on Instagram
                  </a>
                </Button>
                <Button asChild className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Contact Pin
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

