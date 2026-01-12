import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-noto-semibold text-gray-900 hover:opacity-80 transition-opacity">
              Ryan Diaz
            </Link>
            {/* Navigation buttons with smooth scrolling */}
            <Link to="/about" className="font-noto-light text-gray-700 hover:text-gray-900">About Me</Link>
            <button
              onClick={() => scrollToSection('experience')}
              className="font-noto-light text-gray-700 hover:text-gray-900"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="font-noto-light text-gray-700 hover:text-gray-900"
            >
              Projects
            </button>
          </div>
          <div className="flex-grow"></div>
          {/* Contact button */}
          <Link
            to="/contact"
            className="px-4 py-2 border border-gray-800 rounded font-noto-light text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Contact me!
          </Link>
        </div>
      </div>
    </nav>
  )
}
