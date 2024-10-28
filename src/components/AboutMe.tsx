import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section className="relative py-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-mono font-bold mb-8 glow">About Me</h2>
        <div className="cyber-border p-8 rounded-lg bg-deep-navy/50 backdrop-blur-sm">
          <p className="text-lg leading-relaxed mb-6">
            As I pursue the Google Cybersecurity Certificate and study for the CompTIA Security+, 
            I'm driven by a deep passion for protecting digital assets and ensuring secure, resilient systems.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            My hands-on experience has equipped me with technical proficiency in secure web application 
            development, data risk assessment, and process optimization. I excel in identifying vulnerabilities, 
            enhancing system integrity, and integrating robust security measures into Agile workflows.
          </p>
          <p className="text-lg leading-relaxed">
            Whether it's streamlining data processes, improving incident response times, or adhering to 
            critical data protection regulations, I am dedicated to applying security-first thinking to 
            every project I undertake. I am eager to connect with like-minded professionals and organizations 
            where I can contribute my technical skills and passion for cybersecurity.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;