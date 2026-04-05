import { motion } from "framer-motion";

const director = new URL("../assets/director01.png", import.meta.url).href;

const Leadership = () => {
  const leader = {
    name: "Suresh Balaji Aute",
    designation: "Director",
    photo: director,
    description:
      "An accomplished industry leader known for driving innovation, strategic growth, and operational excellence. With a strong focus on quality, efficiency, and client satisfaction, he leads the organization toward sustainable success and long-term value creation.",
  };

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="section-container">
        {/* Heading */}
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

        {/* Centered Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group max-w-md w-full"
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
        </div>
      </div>
    </section>
  );
};

export default Leadership;
