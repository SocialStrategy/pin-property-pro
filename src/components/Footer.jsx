import { Instagram, MessageCircle, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pin Property Pro</h3>
            <p className="text-gray-300 mb-4">
              Bangkok's trusted real estate expert specializing in luxury condos and professional relocation services for expats.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/pin.propertypro/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/66891234567" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="tel:+66891234567" className="text-gray-300 hover:text-white">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+66 89 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@pinpropertypro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span>@pin.propertypro</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Condo Rentals</li>
              <li>Property Viewings</li>
              <li>Relocation Support</li>
              <li>Contract Assistance</li>
              <li>Area Consultation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Pin Property Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

