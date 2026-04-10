import { motion } from "framer-motion";
import content from "../data/content";
import { HardHatDuck, WobbleDuck } from "../assets/duck";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        className="flex items-center justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
          Projects
        </h2>
        <WobbleDuck>
          <HardHatDuck size={50} />
        </WobbleDuck>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.projects.entries.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: i * 0.1,
            }}
            className={`rounded-3xl p-6 transition-colors ${
              project.placeholder
                ? "border-2 border-dashed border-white/10 bg-transparent"
                : "bg-bg-card hover:bg-bg-card-hover"
            }`}
          >
            <h3
              className={`text-lg font-bold mb-2 ${
                project.placeholder ? "text-text-muted" : "text-text-primary"
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`text-sm leading-relaxed mb-4 ${
                project.placeholder ? "text-text-muted" : "text-text-secondary"
              }`}
            >
              {project.description}
            </p>

            {project.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {project.metrics && (
              <p className="text-xs font-semibold text-accent-mint">
                ⚡ {project.metrics}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
