import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center p-8">
      <div className="absolute top-8 right-8 cyber-border rounded-lg overflow-hidden w-48 h-48">
        <img
          src="/profile2.jpg"
          alt="Professional headshot"
          className="w-full h-full object-cover"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 glow">
          Cybersecurity
          <br />
          Professional
        </h1>
        <p className="text-xl md:text-2xl text-electric-blue mb-8">
          Protecting Digital Assets • Securing the Future
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cyber-border bg-deep-navy px-8 py-3 rounded-lg text-cyber-green font-mono"
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;