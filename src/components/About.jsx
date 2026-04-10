import { motion } from "framer-motion";
import content from "../data/content";
import { BeretDuck, WobbleDuck } from "../assets/duck";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex-1">
          <div className="bg-bg-card rounded-3xl p-8">
            <p className="text-text-secondary leading-relaxed text-base">
              {content.about.bio}
            </p>
          </div>
        </div>

        <WobbleDuck className="shrink-0">
          <BeretDuck size={120} />
        </WobbleDuck>
      </motion.div>
    </section>
  );
}
