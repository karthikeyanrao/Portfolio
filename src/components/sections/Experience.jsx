import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { useState } from 'react';
const experiences = [
  {
    id: 1,
    role: 'Full Stack Intern',
    company: 'Codenatives',
    period: '2025',
    location: 'Remote',
    description: 'Built scalable web applications using Python and Django framework.',
    achievements: [
      'Built Python + Django CRUD system',
      'Improved efficiency by 20% through code optimization',
      'Implemented secure authentication and authorization'
    ],
    icon: <FiBriefcase className="w-5 h-5" />,
    type: 'work'
  },
  {
    id: 2,
    role: 'Java Developer Intern',
    company: 'ShadowFox',
    period: '2025',
    location: 'Remote',
    description: 'Developed enterprise-level Java applications and backend services.',
    achievements: [
      'Created Java-based inventory system',
      'Automated manual updates by 30%',
      'Optimized database queries for better performance'
    ],
    icon: <FiBriefcase className="w-5 h-5" />,
    type: 'work'
  },
  {
    id: 3,
    role: 'Software Developer Intern',
    company: 'CorpField',
    period: '2023',
    location: 'Remote',
    description: 'Focused on automated testing and quality assurance.',
    achievements: [
      'Automated testing using Java + Cucumber',
      'Improved test reliability significantly',
      'Reduced regression testing time by 40%'
    ],
    icon: <FiBriefcase className="w-5 h-5" />,
    type: 'work'
  },
  {
    id: 4,
    role: 'B.Tech in Computer Science',
    company: 'Amrita Vishwa Vidyapeetham',
    period: '2023 - 2027',
    location: 'India',
    description: 'Specializing in Computer Science',
    achievements: [
      'CGPA: 8.34/10 (Up to 5th semester)',
      'Winner, Kurukshetra 2025',
      'Winner, MorphX 2.0'
    ],
    icon: <FiAward className="w-5 h-5" />,
    type: 'education'
  }
];

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 border-l-2 border-neon-blue/30 last:border-l-0 last:pb-0 group"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-blue ring-4 ring-background z-10"></div>

      <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-blue/50 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-text-primary">{experience.role}</h3>
            <div className="flex items-center text-sm text-neon-blue mt-1">
              <span className="flex items-center mr-4">
                <FiBriefcase className="mr-1.5" />
                {experience.company}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="flex items-center bg-background px-3 py-1 rounded-full border border-gray-800 text-text-muted">
              <FiCalendar className="mr-1.5" />
              {experience.period}
            </span>
            <span className="flex items-center bg-background px-3 py-1 rounded-full border border-gray-800 text-text-muted">
              <FiMapPin className="mr-1.5" />
              {experience.location}
            </span>
          </div>
        </div>

        <p className="text-text-muted mb-4">{experience.description}</p>

        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-neon-blue mr-2 mt-1">•</span>
              <span className="text-text-muted">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredExperiences = activeTab === 'all'
    ? experiences
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mb-6"></div>
          <p className="text-text-muted max-w-3xl mx-auto">
            My professional journey and academic background that shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-800 p-1 bg-background">
            {[
              { id: 'all', label: 'All' },
              { id: 'work', label: 'Work' },
              { id: 'education', label: 'Education' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-background'
                    : 'text-text-muted hover:text-text-primary'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative
          before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:via-neon-purple before:to-neon-green">
          <div className="space-y-8">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}

            {filteredExperiences.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-muted">No {activeTab} experiences to show.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
