import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function RootRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to English by default (can be enhanced with browser language detection)
    router.replace('/en')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
      <div className="text-center">
        <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-2xl">P</span>
        </div>
        <p className="text-gray-600">Redirecting to Pin Property Pro...</p>
      </div>
    </div>
  )
}