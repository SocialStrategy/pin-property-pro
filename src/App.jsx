import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Areas from './pages/Areas'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import FloatingContact from './components/FloatingContact'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/areas" element={<Areas />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </div>
            <Footer />
            <FloatingContact />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App

