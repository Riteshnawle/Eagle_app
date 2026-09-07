import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Eagle Hitech consistently supplies reliable, well-trained professionals on schedule. Their compliance and documentation are always spot on.",
    name: "Operations Manager",
    company: "Dhoot Transmission",
  },
  {
    quote:
      "Fast turnaround on staffing requests and genuinely responsive support whenever we scale up production. A dependable workforce partner.",
    name: "Plant Head",
    company: "Trigon Technology",
  },
  {
    quote:
      "Their facility management and housekeeping teams have measurably improved our site upkeep. Professional from day one.",
    name: "Facility Manager",
    company: "Belrise Engineering",
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by manufacturing and industrial partners across India
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="card-surface flex h-full flex-col justify-between border-t-4 border-primary"
            >
              <div>
                <svg
                  className="h-8 w-8 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1.28 12.928 1.28 19.36c0 5.088 3.328 8.32 7.168 8.32 3.712 0 6.528-3.008 6.528-6.592 0-3.584-2.496-6.208-5.76-6.208-.64 0-1.536.128-1.728.256.448-3.072 3.328-6.72 6.208-8.576L9.352 4zm16.896 0c-4.864 3.456-8.064 8.928-8.064 15.36 0 5.088 3.328 8.32 7.168 8.32 3.648 0 6.528-3.008 6.528-6.592 0-3.584-2.56-6.208-5.824-6.208-.576 0-1.472.128-1.728.256.512-3.072 3.392-6.72 6.272-8.576L26.248 4z" />
                </svg>
                <p className="text-gray-600 leading-relaxed italic">
                  “{testimonial.quote}”
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-semibold text-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
