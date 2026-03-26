import { motion } from 'framer-motion'

const Compliance = () => {
  const compliances = [
    {
      icon: '🏦',
      title: 'Provident Fund (PF)',
      description: 'Full compliance with EPF regulations ensuring worker financial security',
    },
    {
      icon: '🛡️',
      title: 'ESIC Coverage',
      description: 'Comprehensive Employee State Insurance coverage for all employees',
    },
    {
      icon: '⚖️',
      title: 'Legal Labour Compliance',
      description: 'Adherence to all labor laws and workplace safety regulations',
    },
    {
      icon: '📋',
      title: 'Documentation',
      description: 'Proper documentation and record-keeping as per government standards',
    },
    {
      icon: '📊',
      title: 'Payroll Management',
      description: 'Transparent and accurate payroll processing with timely disbursements',
    },
    {
      icon: '✅',
      title: 'Safety Standards',
      description: 'Commitment to workplace safety and health standards compliance',
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="compliance" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            <span className="text-primary">Compliance</span> & Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of compliance and regulatory adherence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-dark mb-6">Why Choose ETIC?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-dark">100% Compliant Operations</p>
                  <p className="text-gray-600 text-sm">Full adherence to all labor and tax regulations</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-dark">Worker Protection</p>
                  <p className="text-gray-600 text-sm">Comprehensive insurance and benefit coverage</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-dark">Transparent Practices</p>
                  <p className="text-gray-600 text-sm">Clear communication and documentation</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-dark">Verified Workforce</p>
                  <p className="text-gray-600 text-sm">Background checks and skill verification</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right Side - Compliance Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {compliances.map((comp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary"
              >
                <div className="text-4xl mb-3">{comp.icon}</div>
                <h4 className="font-bold text-dark mb-2 text-sm">{comp.title}</h4>
                <p className="text-xs text-gray-600">{comp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Compliance
