import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import eagle from "../assets/logo_1.png";
import ApplyModal from "./ApplyModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Compliance", href: "#compliance" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isSticky
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <nav className="section-container py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center group min-w-0"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-10 h-10 shrink-0 rounded-full bg-primary overflow-hidden"
              style={{
                backgroundImage: `url(${eagle})`,
                backgroundSize: "200%",
                backgroundPosition: "50% 34%",
              }}
              role="img"
              aria-label="Company Logo"
            />
            <div className="min-w-0">
              <div className="font-bold text-dark text-sm sm:text-lg truncate">
                Eagle Hitech
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 truncate">
                Industrial Corporate Pvt. Ltd
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={idx}
                href={item.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative pb-1 transition-colors duration-300 text-sm ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-dark font-medium hover:text-primary"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          <motion.button
            type="button"
            onClick={() => setIsApplyOpen(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="btn-secondary text-sm"
          >
            Apply Now
          </motion.button>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="btn-primary text-sm"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex h-11 w-11 items-center justify-center"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6 text-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="section-container py-4 flex flex-col gap-4">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={idx}
                  href={item.href}
                  className={`transition-colors py-2 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-dark font-medium hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                setIsApplyOpen(true);
              }}
              className="btn-secondary text-center"
            >
              Apply Now
            </button>
            <a href="#contact" className="btn-primary inline-block text-center">
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}

      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </header>
  );
};

export default Header;
