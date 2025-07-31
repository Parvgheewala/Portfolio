import Typewriter from "typewriter-effect";

const Hero = () => (
  <section id="hero" className="h-screen flex items-center justify-between">
    <div className="max-w-xl space-y-4">
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Parv Gheewala</span>
      </h1>
      <h2 className="text-2xl text-teal-300 dark:text-gray-800">
        <Typewriter
          options={{
            strings: ["AI Integration", "Full-Stack Developer", "Fast and Scalable Web Apps"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <p>Crafting modern, fast, and AI-powered web apps.</p>
      <a href="src\images\resume_Parv_Gheewala.pdf" className="bg-white text-black px-4 py-2 rounded-md mt-4 inline-block">View Resume</a>
    </div>
    <img
  src="src/images/profilePic.png"
  alt="Avatar"
  className="w-60 h-80 object-cover rounded-full shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300 hidden md:block"
/>


  </section>
);
export default Hero;
