import { motion } from 'framer-motion';
import { FaLinux, FaWindows, FaPython, FaHtml5, FaCss3, FaSlack } from 'react-icons/fa';
import { SiWireshark, SiSplunk, SiJavascript, SiJira, SiGooglechat } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Tools/Languages",
      items: [
        { name: "Linux", icon: <FaLinux /> },
        { name: "Windows", icon: <FaWindows /> },
        { name: "SQL (BigQuery)", icon: null },
        { name: "Splunk", icon: <SiSplunk /> },
        { name: "WireShark", icon: <SiWireshark /> },
        { name: "Python", icon: <FaPython /> },
        { name: "ChatGPT", icon: <SiGooglechat /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "Javascript", icon: <SiJavascript /> },
      ]
    },
    {
      category: "Security Practices",
      items: [
        { name: "Information Security", icon: null },
        { name: "Network Security", icon: null },
        { name: "Vulnerability Assessment", icon: null },
        { name: "Threat Analysis", icon: null },
        { name: "Log Analysis", icon: null },
        { name: "Security Frameworks", icon: null },
      ]
    },
    {
      category: "Software Platforms",
      items: [
        { name: "Google Workspace", icon: null },
        { name: "Slack", icon: <FaSlack /> },
        { name: "Jira", icon: <SiJira /> },
      ]
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
        <h2 className="text-4xl font-mono font-bold mb-12 glow">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-border p-6 rounded-lg bg-deep-navy/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-mono font-bold mb-4 text-electric-blue">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 text-sm"
                  >
                    {skill.icon && (
                      <span className="text-cyber-green text-lg">
                        {skill.icon}
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;