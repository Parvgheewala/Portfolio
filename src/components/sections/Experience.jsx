import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";
import Metric from "../ui/Metric";
import { experiences } from "../../data/experience";

const Experience = () => (
  <Section id="experience">
    <SectionHeading
      eyebrow="02 — Experience"
      title="Where I've Worked"
      description="Four software engineering internships spanning multilingual AI infrastructure, high-concurrency backends, and performance engineering."
    />

    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border sm:block" />

      <ul className="space-y-6">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company + exp.duration} delay={i * 0.06}>
            <li className="relative sm:pl-10">
              <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 -translate-x-1/2 translate-x-[7px] rounded-full border-2 border-accent bg-bg sm:block" />
              <GlassCard className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink">{exp.role}</h3>
                  <span className="font-mono text-xs text-ink-muted">{exp.duration}</span>
                </div>
                <div className="mt-1 text-sm text-accent">{exp.company}</div>

                {exp.metrics?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-6 rounded-lg border border-border bg-bg-elevated/60 px-4 py-3">
                    {exp.metrics.map((m) => (
                      <Metric key={m.label} value={m.value} label={m.label} />
                    ))}
                  </div>
                )}

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>

                {exp.technologies?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                )}
              </GlassCard>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  </Section>
);

export default Experience;
