import { motion } from "framer-motion";

const director = new URL("../assets/director01.png", import.meta.url).href;
const Leadership = () => {
  const leaders = [
    {
      name: "Suresh Balaji Aute",
      designation: "Director",
      photo: director,
      description:
        "Leading strategic initiatives and business development with extensive industry experience.",
    },
    {
      name: "Subhash Bhaginath Patil",
      designation: "Director",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description:
        "Driving operational excellence and overseeing project management across all sectors.",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders driving Eagle HiTech's success and
            innovation in industrial services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl">
                <img
                  src={leader.photo}
                  alt={leader.name}
                  className="w-full h-full object-cover object-[center_top] transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-2">
                  {leader.name}
                </h3>
                <p className="text-primary font-semibold text-lg mb-4">
                  {leader.designation}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
