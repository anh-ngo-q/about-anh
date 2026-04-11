import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import content from "../data/content";
import useTypewriter from "../hooks/useTypewriter";
import { BaseDuck, WobbleDuck } from "../assets/duck";
import EasterEggTerminal from "./EasterEggTerminal";

export default function Hero() {
  const { displayText } = useTypewriter(content.hero.phrases);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % content.hero.statusBadges.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Duck */}
        <WobbleDuck onClick={() => setShowTerminal(true)} className="mb-6">
          <BaseDuck size={140} />
        </WobbleDuck>

        {/* Status badge */}
        <div className="h-8 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={badgeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs font-bold px-4 py-1.5 rounded-full border border-accent-yellow/30"
            >
              {content.hero.statusBadges[badgeIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-4 tracking-tight">
          {content.hero.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg mx-auto" style={{ whiteSpace: 'pre-line' }}>
          {content.hero.tagline}
        </p>

        {/* Typewriter */}
        <div className="text-accent-mint text-base md:text-lg font-semibold h-8">
          <span>currently building </span>
          <span className="text-accent-yellow">{displayText}</span>
          <span className="animate-pulse ml-0.5 text-accent-yellow">|</span>
        </div>
      </motion.div>

      <EasterEggTerminal
        show={showTerminal}
        onClose={() => setShowTerminal(false)}
      />
    </section>
  );
}
