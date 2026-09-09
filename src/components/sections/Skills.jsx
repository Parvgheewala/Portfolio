import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { skillCategories } from "../../data/skills";
import { cn } from "../../lib/utils";

const Skills = () => {
  const categories = Object.keys(skillCategories);
  const [active, setActive] = useState(categories[0]);

  return (
    <Section id="skills">
      <SectionHeading eyebrow="06 — Stack" title="Technical Toolkit" />

      <Reveal>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200",
                active === cat
                  ? "border-border-strong bg-surface text-ink"
                  : "border-border text-ink-secondary hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {skillCategories[active].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="rounded-lg border border-border bg-surface px-4 py-2 font-mono text-sm text-ink-secondary transition-colors duration-200 hover:border-border-strong hover:text-ink"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default Skills;
