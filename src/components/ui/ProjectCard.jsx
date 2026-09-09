import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import GlassCard from "./GlassCard";
import Badge from "./Badge";
import Modal from "./Modal";
import FlowDiagram from "./FlowDiagram";

// Reusable project card. Renders a compact summary; clicking "Explore"
// (or the card itself) opens a lightweight case-study modal with more detail.
const ProjectCard = (project) => {
  const {
    title,
    category,
    description,
    technologies = [],
    metrics = [],
    github,
    live,
    flow = [],
    problem,
    challenges = [],
    implementation = [],
    results = [],
  } = project;
  const [open, setOpen] = useState(false);

  const hasCaseStudy = problem || challenges.length > 0 || implementation.length > 0 || results.length > 0;

  return (
    <>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <GlassCard className="flex h-full flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              {category && <div className="mt-1 font-mono text-xs uppercase tracking-wide text-accent">{category}</div>}
            </div>
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-secondary">{description}</p>

          {technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          )}

          {metrics.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-6 border-t border-border pt-4">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-mono text-sm font-semibold text-ink">{m.value}</span>
                  <span className="text-xs text-ink-muted">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink"
              >
                <Github size={14} /> Code
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
            {hasCaseStudy && (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
              >
                Explore <ArrowUpRight size={14} />
              </button>
            )}
          </div>
        </GlassCard>
      </motion.div>

      {hasCaseStudy && (
        <Modal open={open} onClose={() => setOpen(false)} title={title}>
          <div className="space-y-6">
            {flow.length > 0 && (
              <div>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-muted">Architecture</h4>
                <FlowDiagram steps={flow} />
              </div>
            )}

            {problem && (
              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-muted">Problem</h4>
                <p className="text-sm leading-relaxed text-ink-secondary">{problem}</p>
              </div>
            )}

            {challenges.length > 0 && (
              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-muted">Engineering Challenges</h4>
                <ul className="space-y-1.5">
                  {challenges.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {implementation.length > 0 && (
              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-muted">Implementation</h4>
                <ul className="space-y-1.5">
                  {implementation.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.length > 0 && (
              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wide text-ink-muted">Results</h4>
                <div className="flex flex-wrap gap-2">
                  {results.map((r) => (
                    <Badge key={r} className="px-3 py-1.5 text-xs normal-case tracking-normal text-ink">
                      {r}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {(github || live) && (
              <div className="flex gap-4 border-t border-border pt-4">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProjectCard;
