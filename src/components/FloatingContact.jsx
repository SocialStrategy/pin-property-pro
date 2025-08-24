import { MessageCircle } from 'lucide-react'

const FloatingContact = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/66959124769"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}

export default FloatingContact
