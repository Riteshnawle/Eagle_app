import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

const ServiceGallery = () => {
  // Work/Project photos by service type
  const skilledWorkPhotos = [
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
  ]

  const industrialWorkPhotos = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop',
  ]

  const projectPhotos = [
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
  ]

  return (
    <section id="service-gallery" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our Services in <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See our skilled workforce and industrial solutions in real-world applications
          </p>
        </motion.div>

        {/* Service Galleries Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Skilled Workforce */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageCarousel
              images={skilledWorkPhotos}
              autoPlayInterval={5000}
              height="h-72"
              showDots={true}
              showArrows={true}
              title="Skilled Workforce"
              description="Expert technicians at work"
            />
          </motion.div>

          {/* Industrial Operations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ImageCarousel
              images={industrialWorkPhotos}
              autoPlayInterval={5000}
              height="h-72"
              showDots={true}
              showArrows={true}
              title="Industrial Operations"
              description="Large-scale project execution"
            />
          </motion.div>

          {/* Project Completion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ImageCarousel
              images={projectPhotos}
              autoPlayInterval={5000}
              height="h-72"
              showDots={true}
              showArrows={true}
              title="Project Completion"
              description="Quality deliverables"
            />
          </motion.div>
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-lg shadow-lg p-12 border-l-4 border-primary"
        >
          <h3 className="text-2xl font-bold text-dark mb-4">Our Track Record</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Successful Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15k+</div>
              <p className="text-gray-600">Workforce Deployed Annually</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceGallery
