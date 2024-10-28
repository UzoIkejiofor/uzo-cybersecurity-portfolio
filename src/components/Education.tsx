import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      title: "Google Cybersecurity Professional Certificate",
      institution: "Merit America, Virtual",
      date: "Expected 02/2025",
      details: [
        "Cultivated holistic understanding of cybersecurity's critical role in organizational security, privacy, and success",
        "Gained practical experience with Linux, SQL, Python and utilized SIEM tools, IDS, and network protocol analyzers",
        "Applied knowledge to real-world scenarios through dynamic hands-on projects"
      ]
    },
    {
      title: "CompTIA Security+",
      institution: "CompTIA, Downers Grove, IL",
      date: "Expected 12/2024"
    },
    {
      title: "Health Promotion clinical (Public health) - Bachelors",
      institution: "Liberty University, Lynchburg, Va",
      date: "08/2008 - 05/2013"
    }
  ];

  return (
    <section className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-mono font-bold mb-12 glow">Education</h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-border p-6 rounded-lg bg-deep-navy/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-mono font-bold mb-2 text-cyber-green">
                {item.title}
              </h3>
              <p className="text-electric-blue mb-2">
                {item.institution} • {item.date}
              </p>
              {item.details && (
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;