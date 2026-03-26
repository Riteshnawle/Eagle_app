import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

// Load all images using Vite's import.meta.url for proper asset bundling
const item1 = new URL('../assets/item1.jpeg', import.meta.url).href
const item2 = new URL('../assets/item2.jpeg', import.meta.url).href
const item3 = new URL('../assets/item3.jpeg', import.meta.url).href
const item4 = new URL('../assets/item4.jpeg', import.meta.url).href
const item5 = new URL('../assets/item5.jpeg', import.meta.url).href
const item6 = new URL('../assets/item6.jpeg', import.meta.url).href
const item7 = new URL('../assets/item7.jpeg', import.meta.url).href
const item8 = new URL('../assets/item8.jpeg', import.meta.url).href
const item9 = new URL('../assets/item9.jpeg', import.meta.url).href
const item10 = new URL('../assets/item10.jpeg', import.meta.url).href
const item11 = new URL('../assets/item11.jpeg', import.meta.url).href
const item12 = new URL('../assets/item12.jpeg', import.meta.url).href
const item13 = new URL('../assets/item13.jpeg', import.meta.url).href
const item14 = new URL('../assets/item14.jpeg', import.meta.url).href
const item15 = new URL('../assets/item15.jpeg', import.meta.url).href
const item16 = new URL('../assets/item16.jpeg', import.meta.url).href

const Gallery = () => {
  // All team photos for carousel and grid
  const teamPhotos = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item15,
    item16,
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Gallery & <span className="text-blue-600">Workspace</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our vibrant team culture and state-of-the-art facilities. A visual journey through excellence.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <ImageCarousel
              images={teamPhotos}
              autoPlayInterval={4000}
              height="h-96 md:h-[500px]"
              showDots={true}
              showArrows={true}
              title="Gallery Showcase"
              description="Browse through our complete collection"
            />
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Gallery
