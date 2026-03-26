import { motion } from 'framer-motion'

const Clients = () => {
  const clients = [
    { name: 'Dhoot Transmission Pvt Ltd', logo: 'DT' },
    { name: 'Dhoot Automotive Systems', logo: 'DA' },
    { name: 'Yashashree Press Components', logo: 'YP' },
    { name: 'Trigono Technology', logo: 'TT' },
    { name: 'Belrise Engineering', logo: 'BE' },
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="clients" className="py-20 bg-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across various industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-red-900 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-white font-bold text-lg">{client.logo}</span>
                </div>
                <p className="text-sm font-semibold text-dark text-center">{client.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-red-900 rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Join Our Growing Network</h3>
          <p className="text-lg opacity-90">
            We work with 50+ partner companies and continue to expand our reach
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
