import { ShieldCheck } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";
import { patentContent as p } from "../../data/patent";

const Patent = () => (
  <Section id="patent">
    <SectionHeading eyebrow="05 — Patent" title="Published Patent" />

    <Reveal>
      <GlassCard className="p-6 sm:p-8" hover={false}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-1 max-w-prose text-sm leading-relaxed text-ink-secondary">{p.subtitle}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-success/30 bg-success/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-success">
            <ShieldCheck size={14} /> {p.status}
          </span>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5 sm:grid-cols-4">
          <div>
            <dt className="text-xs text-ink-muted">Office</dt>
            <dd className="mt-1 text-sm text-ink">{p.office}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink-muted">Year</dt>
            <dd className="mt-1 text-sm text-ink">{p.year}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink-muted">IPR ID</dt>
            <dd className="mt-1 font-mono text-sm text-ink">{p.iprId}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-xs text-ink-muted">Co-Inventor</dt>
            <dd className="mt-1 text-sm text-ink">{p.coInventor}</dd>
          </div>
        </dl>
      </GlassCard>
    </Reveal>
  </Section>
);

export default Patent;
