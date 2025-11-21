import { motion } from 'framer-motion';
import { FiAward, FiCode, FiServer, FiShield } from 'react-icons/fi';
import { useState } from 'react';

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
      icon: <FiCode className="w-8 h-8 text-neon-blue" />,
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
      icon: <FiShield className="w-8 h-8 text-neon-blue" />,
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
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mb-6"></div>
          <p className="text-text-muted max-w-3xl mx-auto text-lg">
            Third-year Computer Science Engineering student specializing in <span className="text-neon-blue">cloud-native development</span>, <span className="text-neon-purple">backend engineering</span>, and <span className="text-neon-green">blockchain applications</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden border border-gray-800 hover:border-neon-blue/50 transition-all duration-300 group">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/0B0D10/F2F5F7?text=Your+Photo';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-neon-blue font-mono">Building the future...</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-neon-blue/30 rounded-xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-neon-purple/30 rounded-tl-xl -z-10"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                I started my journey with a curiosity for how systems work at scale.
                Today, I build resilient cloud architectures and decentralized solutions
                that solve complex problems. I thrive in hackathons and research, constantly
                pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="card hover:shadow-[0_0_15px_rgba(0,191,255,0.1)] hover:border-neon-blue/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-background rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-text-primary group-hover:text-neon-blue transition-colors">{feature.title}</h4>
                      <p className="text-sm text-text-muted">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <motion.div variants={item} className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center text-neon-blue hover:text-neon-blue/80 transition-colors"
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

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            <span className="gradient-text">What People Say</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/50 p-6 rounded-xl border border-gray-800 relative">
              <div className="text-neon-blue text-4xl absolute top-4 left-4 opacity-30">"</div>
              <p className="text-text-muted mb-4 relative z-10 italic">
                "One of the most dedicated interns we've had. His ability to grasp complex backend architectures and implement them efficiently was impressive."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-neon-purple font-bold mr-3">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-sm">John Doe</h4>
                  <p className="text-xs text-text-muted">Tech Lead, Codenatives</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 p-6 rounded-xl border border-gray-800 relative">
              <div className="text-neon-blue text-4xl absolute top-4 left-4 opacity-30">"</div>
              <p className="text-text-muted mb-4 relative z-10 italic">
                "Exceptional problem-solving skills. He automated our entire inventory process, saving us hours of manual work every week."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-neon-green font-bold mr-3">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-sm">Anita Singh</h4>
                  <p className="text-xs text-text-muted">Project Manager, ShadowFox</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
