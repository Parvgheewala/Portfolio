import BackgroundGrid from "./components/ui/BackgroundGrid";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import OpenSource from "./components/sections/OpenSource";
import Patent from "./components/sections/Patent";
import Skills from "./components/sections/Skills";
import Credentials from "./components/sections/Credentials";
import Contact from "./components/sections/Contact";

const App = () => (
  <div className="relative min-h-screen text-ink">
    <BackgroundGrid />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Patent />
      <Skills />
      <Credentials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
