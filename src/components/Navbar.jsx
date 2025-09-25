import { useState, useEffect } from "react";
// import avatarPic from './assets/images/avatarPic.png'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/60 dark:bg-white/80 px-6 py-2 rounded-full flex items-center gap-6 z-50 shadow-md">
      <img src="/assets/images/avatarPic.png" alt="avatar" className="h-8 w-8 rounded-full" />
      {["About", "Skills", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(/ /g, "-")}`}
          className="text-white dark:text-black hover:text-blue-400 dark:hover:text-blue-600"
        >
          {item}
        </a>
      ))}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 text-sm bg-gray-700 dark:bg-gray-300 dark:text-black px-3 py-1 rounded-full"
      >
        {darkMode ? "🌞 Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
