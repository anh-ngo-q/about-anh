import { motion } from "framer-motion";
import content from "../data/content";
import { ProfessorDuck, WobbleDuck } from "../assets/duck";

const colorMap = {
  yellow: {
    bg: "bg-accent-yellow/10",
    text: "text-accent-yellow",
    border: "border-accent-yellow/20",
    label: "text-accent-yellow",
  },
  mint: {
    bg: "bg-accent-mint/10",
    text: "text-accent-mint",
    border: "border-accent-mint/20",
    label: "text-accent-mint",
  },
  peach: {
    bg: "bg-accent-peach/10",
    text: "text-accent-peach",
    border: "border-accent-peach/20",
    label: "text-accent-peach",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        className="flex items-center justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Skills
        </h2>
        <WobbleDuck>
          <ProfessorDuck size={50} />
        </WobbleDuck>
      </motion.div>

      <div className="space-y-8">
        {content.skills.categories.map((cat, i) => {
          const colors = colorMap[cat.color] || colorMap.yellow;
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: i * 0.1,
              }}
            >
              <h3 className={`text-sm font-bold mb-3 ${colors.label}`}>
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`text-sm font-semibold px-4 py-1.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border} cursor-default`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
