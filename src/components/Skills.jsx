import { useState } from "react";

const categories = {
  Frontend: [
    "React",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "CSS",
    "HTML"
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Next.js API Routes",
    "Django",
    "FastAPI",
    "Backendless",
    "Bubble.io"
  ],
  ProgrammingLanguages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    "Java",
    "SQL",
    "HTML",
    "CSS"
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section id="skills" className="py-20 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-pink-600 dark:text-pink-400">
        Professional Skills
      </h2>

      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2 flex gap-2 flex-wrap">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-semibold px-4 py-2 rounded-lg shadow transition 
                ${
                  activeCategory === cat
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 dark:bg-gray-900 dark:text-white text-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {categories[activeCategory].map((skill, index) => (
          <div
            key={skill + index}
            className="flex items-center justify-center gap-3 
              bg-gray-100 dark:bg-gray-900 
              text-gray-900 dark:text-white 
              px-4 py-3 rounded-xl 
              shadow-md hover:shadow-lg 
              hover:scale-105 
              transition-transform duration-300"
          >
            <span className="text-lg font-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
