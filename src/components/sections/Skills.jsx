import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';

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
      {name:'HTML',level:95},
      {name:'CSS',level:95},
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

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-text-muted">{level}%</span>
      </div>
      <div className="w-full bg-background rounded-full h-2">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

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
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card hover:shadow-[0_0_15px_rgba(0,191,255,0.1)] hover:border-neon-blue/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-background rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-neon-blue transition-colors">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item, idx) => (
                  <SkillBar key={idx} name={item.name} level={item.level} />
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={item}
            className="card hover:shadow-neon-blue/10 hover:border-neon-blue/30 flex flex-col justify-center items-center p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-neon-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">And More</h3>
            <p className="text-text-muted mb-6">
              Continuously learning and exploring new technologies to expand my skill set.
            </p>
            <a
              href="#contact"
              className="text-neon-blue hover:text-neon-blue/80 transition-colors inline-flex items-center"
            >
              <span>Let's discuss your project</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
