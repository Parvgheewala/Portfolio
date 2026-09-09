import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, description, align = "left" }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
    )}
    <h2 className="text-h1 font-semibold text-ink">{title}</h2>
    {description && <p className="mt-4 text-base leading-relaxed text-ink-secondary">{description}</p>}
  </motion.div>
);

export default SectionHeading;
