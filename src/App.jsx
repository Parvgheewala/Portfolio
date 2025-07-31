import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center text-white dark:text-black"
      style={{ backgroundImage: "url('/src/images/bg.gif')" }}

    >
      <div className="bg-black/80 dark:bg-white/80 transition-colors duration-300">
        <Navbar />
        <Sidebar />
        <main className="px-6 lg:px-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
