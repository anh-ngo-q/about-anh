import { motion } from "framer-motion";
import content from "../data/content";
import { BeretDuck, WobbleDuck } from "../assets/duck";

export default function Awards() {
  return (
    <section id="awards" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        className="flex items-center justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Awards
        </h2>
        <WobbleDuck>
          <BeretDuck size={50} />
        </WobbleDuck>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.awards.entries.map((award, i) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: i * 0.1,
            }}
            className="bg-bg-card hover:bg-bg-card-hover rounded-3xl p-6 transition-colors"
          >
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-text-primary">{award.title}</h3>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent-yellow/15 text-accent-yellow border border-accent-yellow/30">
                {award.amount}
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">{award.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
