import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop",
      alt: "Industrial professionals at factory",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop",
      alt: "Industrial professionals",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=900&fit=crop",
      alt: "Manufacturing facility",
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
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
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Company Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase"
        >
          Eagle Hi-Tech Industrial Corporation Pvt. Ltd
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Trusted Industrial Manpower Solutions Across India
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed font-light"
        >
          10+ Years Experience | 2000+ professionals Supplied | ISO Certified
          Company
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#manpower"
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Get Manpower
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex justify-center gap-2"
      >
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "bg-primary w-3 h-3"
                : "bg-white/40 hover:bg-white/60 w-2 h-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
