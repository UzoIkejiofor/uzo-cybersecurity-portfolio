import MatrixRain from "../components/MatrixRain";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475")', 
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(10, 25, 47, 0.9)'
      }}>
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