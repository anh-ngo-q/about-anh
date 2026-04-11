import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import content from "../data/content";
import { EnvelopeDuck, WobbleDuck } from "../assets/duck";

const links = [
  {
    icon: FiMail,
    href: `mailto:${content.contact.email}`,
    label: content.contact.email,
    color: "hover:text-accent-peach",
  },
  {
    icon: FiLinkedin,
    href: content.contact.linkedin,
    label: "LinkedIn",
    color: "hover:text-accent-mint",
  },
  {
    icon: FiGithub,
    href: content.contact.github,
    label: "GitHub",
    color: "hover:text-accent-yellow",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-6 text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="text-text-secondary mb-10 text-base"
        style={{ whiteSpace: 'pre-line' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      >
        {content.contact.inviteLine}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      >
        {links.map(({ icon: Icon, href, label, color }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-3 bg-bg-card rounded-2xl px-6 py-3 text-text-secondary transition-colors ${color}`}
          >
            <Icon size={20} />
            <span className="text-sm font-semibold">{label}</span>
          </motion.a>
        ))}
      </motion.div>

      <WobbleDuck>
        <EnvelopeDuck size={80} />
      </WobbleDuck>

      <p className="mt-12 text-text-muted text-xs">
        Built with React, Tailwind, and a rubber duck 🦆
      </p>
    </section>
  );
}
