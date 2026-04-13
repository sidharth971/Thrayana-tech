import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/919703164064?text=Hi%20Thrayana%20Technologies,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-green-500" />
    </motion.a>
  );
};