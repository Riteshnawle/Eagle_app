import { motion } from "framer-motion";

// Load all images using Vite's import.meta.url for proper asset bundling
const item1 = new URL("../assets/item1.jpeg", import.meta.url).href;
const item2 = new URL("../assets/item2.jpeg", import.meta.url).href;
const item3 = new URL("../assets/item3.jpeg", import.meta.url).href;
const item4 = new URL("../assets/item4.jpeg", import.meta.url).href;
const item5 = new URL("../assets/item5.jpeg", import.meta.url).href;
const item6 = new URL("../assets/item6.jpeg", import.meta.url).href;
const item7 = new URL("../assets/item7.jpeg", import.meta.url).href;
const item8 = new URL("../assets/item8.jpeg", import.meta.url).href;
const item9 = new URL("../assets/item9.jpeg", import.meta.url).href;
const item10 = new URL("../assets/item10.jpeg", import.meta.url).href;
const item11 = new URL("../assets/item11.jpeg", import.meta.url).href;
const item12 = new URL("../assets/item12.jpeg", import.meta.url).href;
const item13 = new URL("../assets/item13.jpeg", import.meta.url).href;
const item14 = new URL("../assets/item14.jpeg", import.meta.url).href;
const item15 = new URL("../assets/item15.jpeg", import.meta.url).href;
const item16 = new URL("../assets/item16.jpeg", import.meta.url).href;

const Gallery = () => {
  // All team/work photos shown in the gallery grid
  const teamPhotos = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item15,
    item16,
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="section-container">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Our Work & <span className="text-primary">Team</span>
          </h2>
          <p className="section-subtitle">
            Explore our industrial operations, dedicated team, and modern
            workspace facilities.
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {teamPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200 bg-gray-100"
            >
              <img
                src={photo}
                alt={`Eagle Hitech team and industrial operations, photo ${idx + 1} of ${teamPhotos.length}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
