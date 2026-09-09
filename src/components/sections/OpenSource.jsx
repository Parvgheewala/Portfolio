import { Github } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import Metric from "../ui/Metric";
import { openSourceContent as os } from "../../data/openSource";

const OpenSource = () => (
  <Section id="open-source">
    <SectionHeading eyebrow="04 — Open Source" title="Bharat2Braille" description={os.subtitle} />

    <Reveal>
      <GlassCard className="p-6 sm:p-8" hover={false}>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="font-mono text-xs text-ink-muted">{os.duration}</span>
          <a
            href={os.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-ink"
          >
            <Github size={14} /> View on GitHub
          </a>
        </div>

        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-secondary">{os.description}</p>

        {os.metrics?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-8 rounded-lg border border-border bg-bg-elevated/60 px-5 py-4">
            {os.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        )}

        <ul className="mt-6 space-y-2">
          {os.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        {os.languages?.length > 0 && (
          <div className="mt-6 border-t border-border pt-5">
            <h4 className="mb-3 font-mono text-xs uppercase tracking-wide text-ink-muted">Languages supported</h4>
            <div className="flex flex-wrap gap-2">
              {os.languages.map((lang) => (
                <Badge key={lang}>{lang}</Badge>
              ))}
            </div>
          </div>
        )}
      </GlassCard>
    </Reveal>
  </Section>
);

export default OpenSource;
