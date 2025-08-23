import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Areas from './pages/Areas'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Testimonials from './pages/Testimonials'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import ErrorBoundary from './components/ErrorBoundary'

// Updated App with Blog functionality - v2.0

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/areas" element={<Areas />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
          <Footer />
          <FloatingContact />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App

