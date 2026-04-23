import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';
import TiltCard from '../ui/TiltCard';

const skills = [
  {
    category: 'Cloud & DevOps',
    icon: <FiServer className="w-6 h-6 text-neon-cyan" />,
    items: ['AWS Lambda', 'Step Functions', 'S3', 'API Gateway', 'Bedrock', 'CloudWatch', 'CI/CD', 'Docker'],
  },
  {
    category: 'Backend',
    icon: <FiCode className="w-6 h-6 text-neon-purple" />,
    items: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Web3 & Blockchain',
    icon: <FiCpu className="w-6 h-6 text-neon-green" />,
    items: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Ethers.js'],
  },
  {
    category: 'Frontend',
    icon: <FiLayers className="w-6 h-6 text-neon-cyan" />,
    items: ['React', 'JavaScript', 'Flutter', 'TailwindCSS', 'HTML/CSS'],
  },
  {
    category: 'Databases',
    icon: <FiDatabase className="w-6 h-6 text-neon-purple" />,
    items: ['MongoDB', 'Firebase', 'DynamoDB', 'SQL'],
  },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green mx-auto mb-6"></div>
          <p className="text-text-muted max-w-3xl mx-auto">
            Technologies and tools I work with regularly to build production systems.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup) => (
            <TiltCard key={skillGroup.category} className="h-full">
              <motion.div
                variants={item}
                className="glass-panel p-6 rounded-xl border border-gray-800 hover:border-neon-purple/50 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-surface rounded-lg text-neon-purple">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-surface border border-gray-700 text-text-secondary hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
