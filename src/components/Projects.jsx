const experiences = [
  {
    company: "Code Space Techlabs",
    role:"Trainee Software Developer",
    duration: "Aug 2025 - Nov 2025",
    description:
    "Contributing to the development of real-time translation and related web applications, focusing on functionality, performance, and user experience."
  },
  {
    company: "Freelanscape",
    role: "Technical Lead",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Led the development of a no-code platform using Bubble.io and Backendless. Integrated dynamic workflows and improved team productivity.",
  },
  {
    company: "FameUX",
    role: "Frontend Developer Intern",
    duration: "May 2024 - July 2024",
    description:
      "Worked on a real-world dashboard using React and Tailwind CSS. Improved performance with lazy loading and optimized component rendering.",
  },
  
];

const Projects = () => (
  <section
    id="experience"
    className="py-20 text-gray-900 dark:text-white"
  >
    <h2 className="text-4xl font-bold mb-6 text-pink-600 dark:text-pink-400 text-center">
      💼 Work Experience
    </h2>

    <div className="max-w-4xl mx-auto px-6 space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-neutral-100 dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
        >
          <h3 className="text-2xl font-semibold">{exp.role}</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            {exp.company} &bull; {exp.duration}
          </div>
          <p className="text-gray-800 dark:text-gray-300">{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
