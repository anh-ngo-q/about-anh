import { motion } from "framer-motion";
import content from "../data/content";
import { ScarfDuck, HardHatDuck, ToastDuck, WobbleDuck } from "../assets/duck";

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: i * 0.15,
    },
  }),
};

function TagBadge({ tag }) {
  if (!tag) return null;
  const styles = {
    incoming: "bg-accent-mint/15 text-accent-mint border-accent-mint/30",
    rehire: "bg-accent-peach/15 text-accent-peach border-accent-peach/30",
  };
  const labels = { incoming: "incoming", rehire: "rehired ✨" };
  return (
    <span
      className={`text-xs font-bold px-3 py-1 rounded-full border ${styles[tag] || ""}`}
    >
      {labels[tag] || tag}
    </span>
  );
}

function DuckForEntry({ company, tag }) {
  if (tag === "incoming") {
    return (
      <WobbleDuck className="absolute -right-2 -top-2 opacity-80 hidden md:block">
        <ScarfDuck size={50} />
      </WobbleDuck>
    );
  }
  if (company === "Toast") {
    return (
      <WobbleDuck className="absolute -right-2 -top-2 opacity-80 hidden md:block">
        <ToastDuck size={50} />
      </WobbleDuck>
    );
  }
  if (company === "TAPTAP") {
    return (
      <WobbleDuck className="absolute -right-2 -top-2 opacity-80 hidden md:block">
        <HardHatDuck size={50} />
      </WobbleDuck>
    );
  }
  return null;
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-accent-yellow/20 rounded-full" />

        <div className="space-y-8">
          {content.experience.entries.map((entry, i) => {
            const isToastPair =
              entry.company === "Toast" &&
              i < content.experience.entries.length - 1 &&
              content.experience.entries[i + 1]?.company === "Toast";

            return (
              <motion.div
                key={`${entry.company}-${entry.date}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full bg-accent-yellow border-2 border-bg z-10" />

                {/* Rehire connector */}
                {isToastPair && (
                  <div className="absolute left-4 md:left-6 top-full w-0.5 h-8 border-l-2 border-dashed border-accent-peach/40" />
                )}

                {/* Card */}
                <div className="relative bg-bg-card rounded-3xl p-6 hover:bg-bg-card-hover transition-colors">
                  <DuckForEntry company={entry.company} tag={entry.tag} />

                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-text-primary">
                      {entry.company}
                    </h3>
                    <TagBadge tag={entry.tag} />
                  </div>

                  <p className="text-accent-yellow text-sm font-semibold mb-1">
                    {entry.role}
                  </p>
                  <p className="text-text-muted text-xs mb-3">{entry.date}</p>

                  <ul className="space-y-2">
                    {entry.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-text-secondary text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-accent-yellow mt-1 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
