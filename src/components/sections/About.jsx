import { motion } from 'framer-motion';
import { FiAward, FiCode, FiServer, FiShield } from 'react-icons/fi';
import TiltCard from '../ui/TiltCard';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const features = [
    {
      icon: <FiCode className="w-8 h-8 text-neon-cyan" />,
      title: 'Professional Value',
      description: 'Experienced in AWS Lambda, Serverless Architectures, Smart Contracts, React, Java, and Firebase.',
    },
    {
      icon: <FiAward className="w-8 h-8 text-neon-purple" />,
      title: 'Achievements',
      description: 'Winner Kurukshetra 2025, MorphX 2.0, 3 Research Publications (IEEE + Springer).',
    },
    {
      icon: <FiServer className="w-8 h-8 text-neon-green" />,
      title: 'What I Aim For',
      description: 'Seeking roles in cloud engineering, backend development, AWS DevOps, or Web3 engineering.',
    },
    {
      icon: <FiShield className="w-8 h-8 text-neon-cyan" />,
      title: 'Fun Facts',
      description: 'Enjoys cybersecurity challenges, UI/UX enthusiast, and loves creating clean backend architectures.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-green mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <p className="text-text-muted max-w-3xl mx-auto text-lg">
            Third-year Computer Science Engineering student specializing in <span className="text-neon-cyan">cloud-native development</span>, <span className="text-neon-purple">backend engineering</span>, and <span className="text-neon-green">blockchain applications</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side — Photo + key stats instead of empty floating circle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden border border-gray-800 hover:border-neon-cyan/50 transition-all duration-300 group">
              <img
                src="/Photo.jpg"
                alt="Karthikeyan Suresh"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/0B0D10/F2F5F7?text=Your+Photo';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-neon-cyan font-mono">Building the future...</p>
              </div>
            </div>

            {/* Key stat blocks below the photo */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-surface/50 border border-gray-800 rounded-lg p-3 text-center hover:border-neon-cyan/50 transition-all duration-300">
                <div className="text-2xl font-bold text-neon-cyan">3</div>
                <div className="text-xs text-text-muted">Publications</div>
              </div>
              <div className="bg-surface/50 border border-gray-800 rounded-lg p-3 text-center hover:border-neon-purple/50 transition-all duration-300">
                <div className="text-2xl font-bold text-neon-purple">2</div>
                <div className="text-xs text-text-muted">Hackathon Wins</div>
              </div>
              <div className="bg-surface/50 border border-gray-800 rounded-lg p-3 text-center hover:border-neon-green/50 transition-all duration-300">
                <div className="text-2xl font-bold text-neon-green">3</div>
                <div className="text-xs text-text-muted">Internships</div>
              </div>
            </div>
          </motion.div>

          {/* Right side — About text + feature cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-text-muted mb-4 leading-relaxed">
                I'm Karthikeyan Suresh, a Computer Science student at Amrita Vishwa Vidyapeetham (graduating 2027). I specialize in building cloud-native applications, backend services, and blockchain-based systems.
              </p>
              <p className="text-text-muted mb-4 leading-relaxed">
                I've shipped production systems across <span className="text-text-primary font-semibold">AWS, Java, React, and Solidity</span> — winning two national hackathons and completing 3 internships. I also have 3 peer-reviewed publications in IEEE and Springer, though my primary focus is engineering, not research.
              </p>
              <p className="text-text-muted leading-relaxed">
                I'm actively looking for <span className="text-text-primary font-semibold">software developer / engineer roles</span> in cloud engineering, backend development, or Web3 — where I can build systems that matter at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <TiltCard key={index} className="h-full">
                  <motion.div
                    variants={item}
                    className="card hover:shadow-[0_0_15px_rgba(0,217,255,0.1)] hover:border-neon-cyan/50 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-background rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-text-primary group-hover:text-neon-cyan transition-colors">{feature.title}</h4>
                        <p className="text-sm text-text-muted">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
              <motion.div variants={item} className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-neon-cyan hover:text-neon-cyan/80 transition-colors"
                >
                  <span>Learn more about my journey</span>
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
