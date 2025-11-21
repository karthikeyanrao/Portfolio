import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';
import TiltCard from '../ui/TiltCard';

const skills = [
  {
    category: 'Cloud & DevOps',
    icon: <FiServer className="w-6 h-6 text-neon-blue" />,
    items: [
      { name: 'AWS Lambda', level: 95 },
      { name: 'AWS Step Functions', level: 90 },
      { name: 'S3, CloudWatch', level: 85 },
      { name: 'API Gateway', level: 90 },
      { name: 'AWS Amplify', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD Basics', level: 75 },
    ],
  },
  {
    category: 'Backend Development',
    icon: <FiCode className="w-6 h-6 text-neon-purple" />,
    items: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'API Design (REST)', level: 90 },
    ],
  },
  {
    category: 'Blockchain Tools',
    icon: <FiCpu className="w-6 h-6 text-neon-green" />,
    items: [
      { name: 'Ethereum', level: 85 },
      { name: 'Solidity', level: 80 },
      { name: 'Smart Contracts', level: 85 },
      { name: 'Web3.js / Ethers.js', level: 75 },
    ],
  },
  {
    category: 'Frontend Essentials',
    icon: <FiLayers className="w-6 h-6 text-neon-blue" />,
    items: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 95 },
      { name: 'React', level: 90 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Flutter', level: 70 },
    ],
  },
  {
    category: 'Databases',
    icon: <FiDatabase className="w-6 h-6 text-neon-purple" />,
    items: [
      { name: 'Firebase', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'DynamoDB', level: 75 },
      { name: 'SQL Basics', level: 80 },
    ],
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mb-6"></div>
          <p className="text-text-muted max-w-3xl mx-auto">
            Here are the technologies and tools I work with on a regular basis.
            I'm always learning and expanding my skill set to stay up-to-date with the latest industry trends.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
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

                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-text-secondary font-medium">{skill.name}</span>
                        <span className="text-text-muted text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-surface rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
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
