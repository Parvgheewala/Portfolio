import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Badge from "../ui/Badge";
import { aboutContent } from "../../data/about";

const About = () => (
  <Section id="about">
    <SectionHeading eyebrow="01 — Profile" title={aboutContent.heading} />
    <Reveal delay={0.05} className="max-w-prose">
      <p className="text-lg leading-relaxed text-ink-secondary">{aboutContent.paragraph}</p>
    </Reveal>
    {aboutContent.focusAreas?.length > 0 && (
      <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-2.5">
        {aboutContent.focusAreas.map((area) => (
          <Badge key={area} className="px-3 py-1.5 text-xs normal-case tracking-normal text-ink-secondary">
            {area}
          </Badge>
        ))}
      </Reveal>
    )}
  </Section>
);

export default About;
