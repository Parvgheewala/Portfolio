import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { heroContent } from "../../data/hero";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Metric from "../ui/Metric";
import SocialLinks from "../layout/SocialLinks";
import { useReducedMotion } from "../../lib/useReducedMotion";

// Lightweight, dependency-free rotating identity text (replaces typewriter-effect).
const RotatingRoles = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length, reduced]);

  return (
    <span className="relative inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <motion.span
        key={index}
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -16, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-accent"
      >
        {roles[index]}
      </motion.span>
    </span>
  );
};

const Hero = () => (
  <section id="hero" className="relative flex min-h-screen items-center pt-24">
    <Container className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-ink-muted"
        >
          {heroContent.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-display font-semibold text-ink"
        >
          {heroContent.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 font-mono text-lg text-ink-secondary md:text-xl"
        >
          <RotatingRoles roles={heroContent.identity} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-6 max-w-prose text-base leading-relaxed text-ink-secondary"
        >
          {heroContent.statement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Button as="a" href="#projects" variant="primary">
            View Work <ArrowRight size={16} strokeWidth={2} />
          </Button>
          <Button as="a" href={heroContent.resumeHref} variant="secondary" target="_blank" rel="noreferrer">
            <FileText size={16} strokeWidth={1.75} /> Resume
          </Button>
        </motion.div>

        {heroContent.metrics?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6"
          >
            {heroContent.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-8"
        >
          <SocialLinks />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden justify-self-end md:block"
      >
        <div className="relative h-72 w-56 overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
          <img
            src="/assets/images/profilePic2.png"
            alt="Portrait of Parv Gheewala"
            className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      </motion.div>
    </Container>
  </section>
);

export default Hero;
