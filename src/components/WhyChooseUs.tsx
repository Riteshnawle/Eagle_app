import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "📅",
      title: "10+ Years Experience",
      description:
        "Over a decade of proven expertise in industrial Talent Solutions and facility management solutions.",
    },
    {
      icon: "👥",
      title: "2000+ Professionals Supplied",
      description:
        "Successfully deployed thousands of skilled professionals across various industrial sectors.",
    },
    {
      icon: "⭐",
      title: "Skilled & Reliable Professionals",
      description:
        "Highly trained and dependable professionals ensuring quality and consistency in operations.",
    },
    {
      icon: "🛡️",
      title: "PF & ESIC Compliant",
      description:
        "Full compliance with Provident Fund and Employee State Insurance Corporation regulations.",
    },
    {
      icon: "⚡",
      title: "Fast Deployment",
      description:
        "Rapid mobilization of professionals to meet urgent project requirements and deadlines.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="why-choose-us" className="py-20 bg-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what sets Eagle HiTech apart in delivering exceptional
            industrial solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
