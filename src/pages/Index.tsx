import MatrixRain from "../components/MatrixRain";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <MatrixRain />
      <div className="relative z-10">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
      </div>
    </div>
  );
};

export default Index;