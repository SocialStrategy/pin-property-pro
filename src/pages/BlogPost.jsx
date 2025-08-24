import { useParams, Link } from 'react-router-dom'
import { Calendar, ArrowLeft, User } from 'lucide-react'
import { Badge } from "../components/ui/badge"
import { useLanguage } from '../contexts/LanguageContext'

const BlogPost = () => {
  const { id } = useParams()
  const { t } = useLanguage()

  const blogPosts = {
    'bangkok-neighborhood-guide-2025': {
      title: t('blog.neighborhood.title'),
      date: '2025-01-16',
      category: 'Neighborhood Guide',
      image: '/images/sukhumvit.jpg',
      content: t('blog.neighborhood.content')
    },
    'bangkok-rental-scams-mistakes': {
      title: t('blog.scams.title'),
      date: '2025-01-09',
      category: 'Safety Guide',
      image: '/images/sathorn.jpg',
      content: t('blog.scams.content')
    },
    'furnished-vs-unfurnished-bangkok': {
      title: t('blog.furnished.title'),
      date: '2025-01-02',
      category: 'Financial Guide',
      image: '/images/thonglor.jpg',
      content: t('blog.furnished.content')
    },
    'thai-rental-contract-guide': {
      title: t('blog.contract.title'),
      date: '2024-12-26',
      category: 'Legal Guide',
      image: '/images/ari.jpg',
      content: t('blog.contract.content')
    },
    'bangkok-condo-living-costs': {
      title: t('blog.costs.title'),
      date: '2024-12-19',
      category: 'Budget Guide',
      image: '/images/onnut.jpg',
      content: t('blog.costs.content')
    },
    'house-vs-condo-bangkok': {
      title: t('blog.house.title'),
      date: '2024-12-12',
      category: 'Property Types',
      image: '/images/riverside.jpg',
      content: t('blog.house.content')
    }
  }

  const post = blogPosts[id]

  if (!post) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('blogpost.notfound.title')}</h1>
          <p className="text-gray-600 mb-6">{t('blogpost.notfound.subtitle')}</p>
          <Link to="/blog" className="font-medium hover:opacity-80" style={{color: '#800020'}}>
            ← {t('blogpost.back')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog"
          className="inline-flex items-center font-medium mb-8 hover:opacity-80"
          style={{color: '#800020'}}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('blogpost.back')}
        </Link>

        <article className="rounded-2xl shadow-lg overflow-hidden" style={{backgroundColor: '#F9F9DC', borderColor: '#8A7E72'}}>
          <div className="relative h-64 md:h-80">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 text-white">
                <Badge className="mb-4" style={{backgroundColor: '#800020', color: 'white'}}>
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-sm opacity-90">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return null
                
                // Handle inline bold formatting
                const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4" 
                     dangerouslySetInnerHTML={{ __html: formattedParagraph }}>
                  </p>
                )
              })}
            </div>

            <div className="mt-12 p-6 rounded-xl" style={{backgroundColor: '#800020', color: 'white'}}>
              <h3 className="text-xl font-bold mb-4">{t('blogpost.cta.title')}</h3>
              <p className="mb-4" style={{color: '#F9F9DC'}}>
                {t('blogpost.cta.subtitle')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center font-bold px-6 py-3 rounded-lg transition-colors hover:opacity-90"
                style={{backgroundColor: '#F9F9DC', color: '#800020'}}
              >
                <User className="w-5 h-5 mr-2" />
                {t('blogpost.cta.contact')}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost