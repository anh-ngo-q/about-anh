import { motion } from "framer-motion";

export default function WobbleDuck({ children, onClick, className = "" }) {
  return (
    <motion.div
      className={`inline-block cursor-pointer ${className}`}
      whileHover={{
        rotate: [0, -12, 10, -6, 4, 0],
        transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.6 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
