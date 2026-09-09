import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="03 — Selected Work"
        title="Engineering Case Studies"
        description="A distributed scheduler, a FinTech analytics platform, and a RAG-based AI system — each built to hold up under real load."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
