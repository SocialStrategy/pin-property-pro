import { Link } from 'react-router-dom'
import { Instagram, Facebook, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Pin Hemmawan</h3>
            <p className="text-gray-400">Trusted Bangkok Real Estate Agent</p>
            <p className="text-gray-400 text-sm mt-4">&copy; {new Date().getFullYear()} Pin Hemmawan. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.instagram.com/pin.propertypro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/pin.propertypro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://line.me/ti/p/@pinhemmawan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            {/* Add more links here if needed, e.g., Terms of Service */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

