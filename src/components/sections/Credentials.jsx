import { GraduationCap, Award, Trophy } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";
import Badge from "../ui/Badge";
import { education } from "../../data/education";
import { certifications } from "../../data/certifications";
import { achievements } from "../../data/achievements";

const Credentials = () => (
  <Section id="credentials">
    <SectionHeading eyebrow="07 — Credentials" title="Education, Certifications & Achievements" />

    <div className="grid gap-6 md:grid-cols-3">
      <Reveal>
        <GlassCard className="h-full p-6">
          <div className="mb-3 flex items-center gap-2 text-ink-muted">
            <GraduationCap size={16} />
            <h3 className="font-mono text-xs uppercase tracking-wide">Education</h3>
          </div>
          <p className="text-sm font-semibold text-ink">{education.school}</p>
          <p className="mt-1 text-sm text-ink-secondary">{education.degree}</p>
          <p className="mt-3 font-mono text-xs text-ink-muted">{education.duration}</p>
          <p className="mt-1 font-mono text-xs text-ink-muted">CGPA: {education.cgpa}</p>
        </GlassCard>
      </Reveal>

      <Reveal delay={0.05}>
        <GlassCard className="h-full p-6">
          <div className="mb-3 flex items-center gap-2 text-ink-muted">
            <Award size={16} />
            <h3 className="font-mono text-xs uppercase tracking-wide">Certifications</h3>
          </div>
          <ul className="space-y-2.5">
            {certifications.map((c) => (
              <li key={c.name} className="text-sm text-ink-secondary">
                <span className="text-ink">{c.name}</span>
                <span className="text-ink-muted"> — {c.issuer}</span>
                {c.inProgress && (
                  <Badge className="ml-2 px-1.5 py-0.5 text-[10px]">Ongoing</Badge>
                )}
              </li>
            ))}
          </ul>
        </GlassCard>
      </Reveal>

      <Reveal delay={0.1}>
        <GlassCard className="h-full p-6">
          <div className="mb-3 flex items-center gap-2 text-ink-muted">
            <Trophy size={16} />
            <h3 className="font-mono text-xs uppercase tracking-wide">Achievements</h3>
          </div>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a.title}>
                <p className="text-sm font-medium text-ink">{a.title}</p>
                <p className="mt-0.5 text-sm text-ink-secondary">{a.detail}</p>
              </li>
            ))}
          </ul>
        </GlassCard>
      </Reveal>
    </div>
  </Section>
);

export default Credentials;
