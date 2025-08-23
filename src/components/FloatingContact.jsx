import { useState } from 'react'
import { MessageCircle, Phone, X, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/pin.propertypro/',
      color: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
      label: 'Follow on Instagram'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/66891234567',
      color: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      label: 'WhatsApp Chat'
    },
    {
      name: 'Call',
      icon: Phone,
      href: 'tel:+66891234567',
      color: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
      label: 'Call Pin Now'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-4 space-y-3">
          {contactOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <div
                key={option.name}
                className="flex items-center justify-end animate-in slide-in-from-bottom-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="mr-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-xl text-sm font-semibold text-gray-800 whitespace-nowrap border border-gray-100">
                  {option.label}
                </span>
                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${option.color} text-white p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
                  aria-label={option.label}
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              </div>
            )
          })}
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl ${
          isOpen 
            ? 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800' 
            : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800'
        }`}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </Button>
    </div>
  )
}

export default FloatingContact
