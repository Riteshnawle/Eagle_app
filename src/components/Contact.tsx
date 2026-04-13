import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark mb-8">
              Send us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200"
                >
                  ✓ Thank you! We'll be in touch soon.
                </motion.div>
              )}

              <div>
                <label className="block text-dark font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+91 (XXX) XXXX-XXXX"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-dark font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Tell us about your requirements..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side - Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="text-3xl text-primary">📍</div>
                <div>
                  <p className="font-semibold text-dark">Address</p>
                  <p className="text-gray-600">
                    Flat No:Gut no 60, Floor No:Plot no 2, Building Name:J
                    JTower, Block Sector:Chh Sambhajinagar, Road:Near Bajaj
                    Hospital, Chh Sambhajinagar, pin:-431001
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl text-primary">📞</div>
                <div>
                  <p className="font-semibold text-dark">Phone</p>
                  <p className="text-gray-600">
                    +91 8830087156
                    <br />
                    +91 9623200898
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl text-primary">✉️</div>
                <div>
                  <p className="font-semibold text-dark">Email</p>
                  <p className="text-gray-600">
                    hr@eaglehitec.com
                    <br />
                    info@eaglehitec.com
                    <br />
                    suresh@eaglehitec.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl text-primary">🕒</div>
                <div>
                  <p className="font-semibold text-dark">Business Hours</p>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-dark mb-4">Our Location</h4>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-80 md:h-96">
                <iframe
                  height="100%"
                  style={{ border: 0, width: "100%" }}
                  src="https://www.google.com/maps?q=19.853138983984387,75.31610755463795&z=15&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=JJ+Tower+Beed+Bypass+Opp+Kamalnayan+Bajaj+Hospital+MIDC+Chhatrapati+Sambhajinagar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                🗺️ Get Directions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
