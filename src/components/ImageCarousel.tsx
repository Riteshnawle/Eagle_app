import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CarouselProps {
  images: string[]
  autoPlayInterval?: number
  height?: string
  showDots?: boolean
  showArrows?: boolean
  title?: string
  description?: string
}

const ImageCarousel = ({
  images,
  autoPlayInterval = 4000,
  height = 'h-96',
  showDots = true,
  showArrows = true,
  title,
  description,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState(1)

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlay, autoPlayInterval, images.length])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex(prev => (prev + 1) % images.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 3000)
  }

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative w-full">
      {/* Header */}
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {title && <h3 className="text-3xl font-bold text-dark mb-2">{title}</h3>}
          {description && <p className="text-gray-600">{description}</p>}
        </motion.div>
      )}

      {/* Carousel Container */}
      <div
        className={`relative ${height} bg-gray-900 rounded-lg overflow-hidden shadow-2xl`}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {showArrows && images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 z-30 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Auto-play Indicator */}
        <div className="absolute bottom-4 left-4 z-30">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-xs transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
          >
            <span>{isAutoPlay ? '⏸' : '▶'}</span>
            {isAutoPlay ? 'Playing' : 'Paused'}
          </button>
        </div>
      </div>

      {/* Dots Navigation */}
      {showDots && images.length > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-2 mt-6"
        >
          {images.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-primary w-3 h-3'
                  : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default ImageCarousel
