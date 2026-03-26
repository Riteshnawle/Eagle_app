import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: '👷',
      title: 'Skilled Workforce',
      description: 'Technicians, engineers, and specialists with verified certifications and experience.',
    },
    {
      icon: '🔧',
      title: 'Semi-Skilled Workforce',
      description: 'Trained professionals ready for specialized industrial and technical roles.',
    },
    {
      icon: '📦',
      title: 'Unskilled Workforce',
      description: 'General labor available for various industrial and manufacturing operations.',
    },
    {
      icon: '⚙️',
      title: 'Industrial Support',
      description: 'Complete industrial solutions including equipment support and maintenance.',
    },
    {
      icon: '👥',
      title: 'Workforce Management',
      description: 'End-to-end workforce management including recruitment, training, and compliance.',
    },
    {
      icon: '📊',
      title: 'Staffing Solutions',
      description: 'Customized staffing solutions tailored to your specific business requirements.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce and industrial solutions designed to meet your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
