import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden bg-black">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;