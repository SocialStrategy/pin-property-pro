import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const BlogPost = () => {
  const { id } = useParams()

  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(to bottom, #F9F9DC, #F5F5D0)'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog"
          className="inline-flex items-center font-medium mb-8 hover:opacity-80"
          style={{color: '#800020'}}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div className="rounded-2xl shadow-lg overflow-hidden p-8" style={{backgroundColor: '#F9F9DC'}}>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Blog Post: {id}
          </h1>
          <p className="text-gray-700 leading-relaxed">
            This blog post content will be available soon. Please check back later or contact Pin Hemmawan for more information.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
