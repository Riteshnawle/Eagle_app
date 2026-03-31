import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clients = [
    {
      name: "Dhoot Transmission",
      logo: "⚙️",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Trigon Technology",
      logo: "🔧",
      color: "from-purple-500 to-purple-700",
    },
    {
      name: "Belrise Engineering",
      logo: "🏗️",
      color: "from-orange-500 to-orange-700",
    },
    {
      name: "Yashashree Press",
      logo: "🏭",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Dhoot Automotive",
      logo: "🚗",
      color: "from-red-500 to-red-700",
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our <span className="text-primary">Trusted Clients</span>
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
          className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={logoVariants}
              whileHover={{ scale: 1.08 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center h-40 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/50">
                <div className="text-center w-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${client.color} rounded-lg flex items-center justify-center mb-4 mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 shadow-lg`}
                  >
                    <span className="text-4xl">{client.logo}</span>
                  </div>
                  <p className="text-sm font-semibold text-dark group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slider View */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              {clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: idx === currentSlide ? 1 : 0,
                    scale: idx === currentSlide ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  {idx === currentSlide && (
                    <div className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center h-48 w-72 border border-gray-100">
                      <div className="text-center">
                        <div
                          className={`w-24 h-24 bg-gradient-to-br ${client.color} rounded-lg flex items-center justify-center mb-4 mx-auto grayscale hover:grayscale-0 transition-all duration-300 shadow-lg`}
                        >
                          <span className="text-5xl">{client.logo}</span>
                        </div>
                        <p className="text-sm font-semibold text-dark">
                          {client.name}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {clients.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-primary w-3 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-red-900 rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">
            Growing Partnership Network
          </h3>
          <p className="text-lg opacity-90">
            Trusted by 50+ companies across industrial and manufacturing sectors
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
