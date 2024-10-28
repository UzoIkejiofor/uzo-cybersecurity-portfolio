import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "TryHackMe Journal",
      description: "Coming Soon",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "Incident Handler's Journal",
      description: "Coming Soon",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Vulnerable System Analysis",
      description: "Coming Soon",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "SQL Query",
      description: "Coming Soon",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
  ];

  return (
    <section className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-mono font-bold mb-12 glow">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="cyber-border rounded-lg overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep-navy/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-mono font-bold mb-2 text-cyber-green">
                      {project.title}
                    </h3>
                    <p className="text-electric-blue">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;