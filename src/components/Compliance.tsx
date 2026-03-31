import { motion } from "framer-motion";

const Compliance = () => {
  const certifications = [
    {
      icon: "💼",
      title: "PF Registered",
      description:
        "Employees Provident Fund registered for employee financial security and retirement benefits",
    },
    {
      icon: "🏥",
      title: "ESIC Registered",
      description:
        "Employee State Insurance Corporation coverage for comprehensive health protection",
    },
    {
      icon: "🏆",
      title: "ISO 9001:2018 Certified",
      description:
        "International quality management system certification ensuring operational excellence",
    },
    {
      icon: "🏢",
      title: "Private Limited Company",
      description:
        "CIN Registered | Legally established and governed commercial entity",
    },
    {
      icon: "✅",
      title: "PAN Verified Business",
      description:
        "Permanent Account Number verified with full tax compliance and transparency",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section
      id="compliance"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Government Registered &{" "}
            <span className="text-red-400">Certified Company</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ensuring trust and compliance with all national and international
            standards
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-red-600/30 hover:border-red-600 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-red-600/20"
            >
              {/* Premium badge accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-600/20 to-transparent rounded-tr-xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {cert.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full border border-red-600/50 bg-red-600/10 backdrop-blur-xl">
            <p className="text-gray-300 flex items-center gap-2 justify-center">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              100% Verified & Compliant with Statutory Requirements
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compliance;
