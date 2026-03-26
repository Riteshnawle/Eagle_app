import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Clients', href: '#clients' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <nav className="section-container py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center group"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg"><img src="data:image/jpeg;base64,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" alt="" /></span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-dark text-lg">Eagle Hitech </div>
              <div className="text-xs text-gray-600">Industrial Corporate Pvt. Ltd</div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-dark font-medium hover:text-primary transition-colors duration-300 text-sm"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="btn-primary text-sm"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          <svg
            className="w-6 h-6 text-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="section-container py-4 flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-dark font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary inline-block text-center">
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
