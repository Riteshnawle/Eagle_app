import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: "👷",
      title: "Industrial Manpower Supply",
      description:
        "Skilled, semi-skilled, and unskilled workforce tailored to your industrial needs across India.",
    },
    {
      icon: "🏢",
      title: "Facility Management",
      description:
        "Comprehensive facility management services ensuring smooth operations and maintenance.",
    },
    {
      icon: "🔧",
      title: "Fabrication & Assembly",
      description:
        "Expert fabrication and assembly services with precision and quality assurance.",
    },
    {
      icon: "🛡️",
      title: "Security Services",
      description:
        "Professional security personnel and services for industrial site protection.",
    },
    {
      icon: "🧹",
      title: "Housekeeping Services",
      description:
        "Efficient housekeeping and cleaning services maintaining hygiene standards.",
    },
    {
      icon: "📋",
      title: "Manpower Consultancy",
      description:
        "Strategic manpower planning and consultancy for workforce optimization.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
            Comprehensive workforce and industrial solutions designed to meet
            your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="card-surface border-t-4 border-primary cursor-pointer"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
