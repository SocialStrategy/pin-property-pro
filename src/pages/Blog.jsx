import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Calendar, MapPin, User } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Blog = () => {
  const { t } = useLanguage()
  
  const blogPosts = [
    {
      id: 'bangkok-neighborhood-guide-2025',
      title: t('blog.neighborhood.title'),
      excerpt: t('blog.neighborhood.excerpt'),
      date: '2025-01-16',
      category: 'Guide',
      image: '/images/sukhumvit.jpg'
    },
    {
      id: 'bangkok-rental-scams-mistakes',
      title: t('blog.scams.title'),
      excerpt: t('blog.scams.excerpt'),
      date: '2025-01-09',
      category: 'Safety Guide',
      image: '/images/sathorn.jpg'
    },
    {
      id: 'furnished-vs-unfurnished-bangkok',
      title: t('blog.furnished.title'),
      excerpt: t('blog.furnished.excerpt'),
      date: '2025-01-02',
      category: 'Financial Guide',
      image: '/images/thonglor.jpg'
    },
    {
      id: 'thai-rental-contract-guide',
      title: t('blog.contract.title'),
      excerpt: t('blog.contract.excerpt'),
      date: '2024-12-26',
      category: 'Legal Guide',
      image: '/images/ari.jpg'
    },
    {
      id: 'bangkok-condo-living-costs',
      title: t('blog.costs.title'),
      excerpt: t('blog.costs.excerpt'),
      date: '2024-12-19',
      category: 'Budget Guide',
      image: '/images/onnut.jpg'
    },
    {
      id: 'house-vs-condo-bangkok',
      title: t('blog.house.title'),
      excerpt: t('blog.house.excerpt'),
      date: '2024-12-12',
      category: 'Property Types',
      image: '/images/riverside.jpg'
    }
  ]

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={`${post.title} - Bangkok real estate guide`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge style={{backgroundColor: '#800020', color: 'white'}}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl leading-tight hover:opacity-80 transition-opacity">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium mt-4 hover:opacity-80 transition-opacity"
                  style={{color: '#800020'}}
                >
                  Read Full Guide →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 p-8 rounded-2xl" style={{backgroundColor: '#800020', color: 'white'}}>
          <h2 className="text-3xl font-bold mb-4">{t('blog.cta.title')}</h2>
          <p className="mb-6 text-lg" style={{color: '#F9F9DC'}}>
            {t('blog.cta.subtitle')}
          </p>
          <Link 
            to="/contact" 
            className="font-bold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2 hover:opacity-90"
            style={{backgroundColor: '#F9F9DC', color: '#800020'}}
          >
            <User className="w-5 h-5" />
            {t('blog.cta.contact')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog