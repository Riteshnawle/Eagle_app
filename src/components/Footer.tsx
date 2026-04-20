import { motion } from "framer-motion";
import logo from "../assets/logo_1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#hero" },
        { label: "Gallery", href: "#gallery" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Skilled Workforce", href: "#services" },
        { label: "Industrial Support", href: "#services" },
        { label: "Workforce Management", href: "#services" },
        { label: "Staffing Solutions", href: "#services" },
      ],
    },
    {
      title: "Get in Touch",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Compliance", href: "#compliance" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg">Eagle Hitech</div>
                <div className="text-xs text-gray-400">
                  Industrial Corporate Pvt. Ltd
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Eaglehi-Tech Industrial Corporate Pvt. Ltd - Your trusted partner
              for workforce and industrial solutions across India.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-lg mb-4 text-primary">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <span className="text-gray-400 text-sm">Follow us:</span>
              <a
                href="#"
                className="text-primary hover:text-primary-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary-light transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary-light transition-colors"
              >
                Twitter
              </a>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-right text-gray-400 text-sm"
            >
              <p>
                &copy; {currentYear} Eaglehi-Tech Industrial Corporate Pvt. Ltd.
                All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        <p>Designed & Built with ❤️ for Excellence in Industrial Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
