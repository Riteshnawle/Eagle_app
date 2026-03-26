import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
      title: 'Professional Workforce',
      subtitle: 'Skilled, dedicated professionals',
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop',
      title: 'Industrial Excellence',
      subtitle: 'State-of-the-art solutions',
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop',
      title: 'Trusted Partner',
      subtitle: 'Committed to your success',
    },
  ]

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="pt-32 pb-20 text-white relative overflow-hidden h-screen max-h-screen flex items-center">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Trusted Manpower &{' '}
              <span className="text-primary">Industrial Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Providing skilled, semi-skilled and unskilled workforce across India.
              With over a decade of experience, we connect businesses with the best talent
              and industrial solutions tailored to your needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </motion.div>
          </motion.div>


        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-700"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <p className="text-gray-400">Active Workforce</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-400">Partner Companies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-2 mt-16"
        >
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-primary w-3 h-3' : 'bg-white/40 hover:bg-white/60 w-2 h-2'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
