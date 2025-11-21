import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { FaAws, FaEthereum, FaTools, FaVoteYea } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'InsuraAI+',
    description: 'A serverless AI-powered insurance claim validator using AWS Lambda, Step Functions, Bedrock, OCR, and fraud detection.',
    tags: ['AWS Lambda', 'Step Functions', 'Bedrock', 'React'],
    icon: FaAws,
    gradient: 'from-orange-500 to-yellow-500',
    github: 'https://github.com/karthikeyanrao/insuraai',
    demo: 'https://insuraai.demo.com',
    details: {
      problem: 'Manual insurance claim processing is slow, error-prone, and vulnerable to fraud.',
      solution: 'Built a serverless automated validation system that uses GenAI for document analysis and fraud patterns.',
      features: [
        'Automated OCR & Document Analysis',
        'Fraud Detection with Bedrock',
        'Serverless Event-Driven Architecture',
        'Real-time Claim Status Tracking'
      ],
      technologies: [
        'AWS Lambda', 'Step Functions', 'Amazon Bedrock',
        'Textract', 'DynamoDB', 'React', 'TailwindCSS'
      ],
      achievements: [
        'Reduced claim processing time by ~15%',
        'Improved fraud detection efficiency',
        'Scalable serverless architecture'
      ]
    }
  },
  {
    id: 2,
    title: 'MetaHive - Web3 Real Estate',
    description: 'Decentralized real estate marketplace on Ethereum with smart contracts for property listings and secure transactions.',
    tags: ['Ethereum', 'Solidity', 'Web3.js', 'Firebase'],
    icon: FaEthereum,
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/karthikeyanrao/metahive',
    demo: 'https://metahive.xyz',
    details: {
      problem: 'Real estate transactions suffer from high intermediary fees and lack of transparency.',
      solution: 'Developed a decentralized marketplace where ownership is transferred via smart contracts.',
      features: [
        'Smart Contract Escrow System',
        'Property Tokenization (NFTs)',
        'Decentralized Listing Storage',
        'Firebase Auth Integration'
      ],
      technologies: [
        'Ethereum', 'Solidity', 'Web3.js', 'Ethers.js',
        'React', 'Firebase', 'Hardhat'
      ],
      achievements: [
        'Winner - Kurukshetra Hackathon 2025',
        'Support for 100+ property listings',
        'Secure smart contract implementation'
      ]
    }
  },
  {
    id: 3,
    title: 'SiteManager',
    description: 'Multi-tenant construction management system for attendance, payroll, and project tracking.',
    tags: ['React', 'Firebase', 'Cloud Functions', 'MUI'],
    icon: FaTools,
    gradient: 'from-green-500 to-teal-500',
    github: 'https://github.com/karthikeyanrao/sitemanager',
    demo: 'https://sitemanager.app',
    details: {
      problem: 'Construction sites lack efficient digital tools for workforce and project management.',
      solution: 'Created a comprehensive dashboard for managing multiple sites, workers, and expenses.',
      features: [
        'Geo-fenced Attendance System',
        'Automated Payroll Generation',
        'Expense & Inventory Tracking',
        'Multi-tenant Architecture'
      ],
      technologies: [
        'React', 'Firebase Auth', 'Firestore',
        'Cloud Functions', 'Material-UI', 'Recharts'
      ],
      achievements: [
        '25% reduction in admin workload',
        'Streamlined payroll processing',
        'Used by 5+ construction firms'
      ]
    }
  },
  {
    id: 4,
    title: 'AMC FOSS',
    description: 'Secure and transparent voting system based on Blockchain technology ensuring tamper-proof elections.',
    tags: ['Blockchain', 'React', 'Node.js', 'MongoDB'],
    icon: FaVoteYea,
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/karthikeyanrao/smartvote',
    demo: 'https://smartvote.demo.com',
    details: {
      problem: 'Traditional voting systems are often questioned for their security and transparency.',
      solution: 'Implemented a blockchain-based voting platform where every vote is immutable and verifiable.',
      features: [
        'Tamper-proof Vote Recording',
        'Voter Anonymity & Verification',
        'Real-time Result Counting',
        'Admin Dashboard for Elections'
      ],
      technologies: [
        'Ethereum', 'Solidity', 'React', 'Node.js',
        'MongoDB', 'Express'
      ],
      achievements: [
        'Ensures 100% transparency',
        'Eliminates double voting',
        'Secure voter authentication'
      ]
    }
  }
];

const ProjectCard = ({ project, onClick }) => {
  const IconComponent = project.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(0,191,255,0.2)]"
      onClick={() => onClick(project)}
    >
      <div className={`aspect-video overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
        <IconComponent className="w-24 h-24 text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
          <div className="flex space-x-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-neon-blue transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-neon-blue transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-text-muted mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-background text-text-muted border border-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-secondary rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors z-10"
            aria-label="Close modal"
          >
            <FiX size={24} />
          </button>

          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/1200x450/0B0D10/1E293B?text=${encodeURIComponent(project.title)}`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-background text-text-muted border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 mb-4 md:mb-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <FiGithub size={18} /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <FiExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neon-blue">The Challenge</h3>
                  <p className="text-text-muted">{project.details.problem}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neon-blue">The Solution</h3>
                  <p className="text-text-muted mb-4">{project.details.solution}</p>
                  <ul className="space-y-2">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-neon-blue mr-2">•</span>
                        <span className="text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-neon-blue">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.details.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-background text-text-muted border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.details.achievements && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-neon-blue">Achievements</h3>
                    <ul className="space-y-2">
                      {project.details.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-neon-blue mr-2">•</span>
                          <span className="text-text-muted">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mb-6"></div>
          <p className="text-text-muted max-w-3xl mx-auto">
            Here are some of my recent projects. Click on any project to learn more about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/karthikeyanrao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-neon-blue hover:text-neon-blue/80 transition-colors"
          >
            <span>View more projects on GitHub</span>
            <svg
              className="w-5 h-5 ml-2"
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
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
