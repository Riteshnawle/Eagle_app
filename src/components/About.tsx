import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: "🔒",
      title: "Trust",
      description:
        "Building lasting relationships based on integrity and transparency",
    },
    {
      icon: "✓",
      title: "Honesty",
      description:
        "Committed to truthful practices and ethical business standards",
    },
    {
      icon: "💪",
      title: "Determination",
      description:
        "Dedicated to excellence and continuous improvement in all endeavors",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-primary">ETIC</span>
          </h2>
          <p className="section-subtitle">
            Eaglehi-Tech Industrial Corporate Pvt. Ltd is a leading manpower and
            industrial solutions provider dedicated to connecting businesses
            with skilled talent and comprehensive workforce management services.
          </p>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-surface mb-16 border-l-4 border-primary"
        >
          <h3 className="text-2xl font-bold text-dark mb-4">Company Details</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-dark">Company Name:</span>{" "}
                Eaglehi-Tech Industrial Corporate Pvt. Ltd
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-dark">Location:</span>{" "}
                Chhatrapati Sambhajinagar, Maharashtra
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-dark">Specialization:</span>{" "}
                Manpower Supply & Industrial Solutions
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-dark">Services:</span>{" "}
                Skilled, Semi-skilled, and Unskilled Workforce
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-dark">Compliance:</span> PF,
                ESIC, Legal Labour Compliance
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-dark">Workforce:</span>{" "}
                5000+ Active Professionals
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-dark text-center mb-12"
          >
            Our Core Values
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-surface text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-2xl font-bold text-dark mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
