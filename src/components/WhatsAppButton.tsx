import { motion } from "framer-motion";

// TODO: confirm which number should receive WhatsApp inquiries
const WHATSAPP_NUMBER = "918830087156";
const DEFAULT_MESSAGE =
  "Hello, I'd like to know more about Eagle Hitech's services.";

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE,
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
        <path d="M16.004 3C9.377 3 4 8.377 4 15.004c0 2.44.72 4.71 1.955 6.61L4 29l7.586-1.9a11.94 11.94 0 0 0 4.418.84h.005c6.627 0 12.004-5.377 12.004-12.004C28.013 8.377 22.636 3 16.004 3Zm0 21.6a9.55 9.55 0 0 1-4.87-1.34l-.35-.207-4.503 1.127 1.2-4.39-.228-.36a9.55 9.55 0 0 1-1.46-5.03c0-5.29 4.306-9.596 9.6-9.596 5.29 0 9.596 4.306 9.596 9.596 0 5.293-4.306 9.6-9.596 9.6h.61Zm5.257-7.19c-.288-.144-1.703-.84-1.966-.936-.264-.096-.457-.144-.65.144-.192.288-.744.936-.912 1.128-.168.192-.336.216-.624.072-.288-.144-1.216-.448-2.316-1.428-.856-.763-1.434-1.706-1.602-1.994-.168-.288-.018-.444.126-.588.13-.129.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.65-1.566-.89-2.147-.234-.564-.472-.487-.65-.496l-.554-.01c-.192 0-.504.072-.768.36-.264.288-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 2.032 3.102 4.925 4.35.688.297 1.225.474 1.644.606.69.22 1.318.19 1.815.115.554-.083 1.703-.696 1.943-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336Z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
