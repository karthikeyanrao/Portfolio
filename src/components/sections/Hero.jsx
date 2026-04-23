import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';

const Hero = () => {
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

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/karthikeyanrao', icon: FiGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/karthikeyanrao-suresh', icon: FiLinkedin },
    { name: 'Email', href: 'mailto:rippleskarthi@gmail.com', icon: FiMail },
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 px-4 sm:px-6" id="home">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.08),transparent_50%)] animate-pulse-slow" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-neon-cyan rounded-full opacity-20"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0.2, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="section-container relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div variants={item} className="mb-6">
            <span className="text-neon-cyan font-mono text-base sm:text-lg md:text-xl tracking-wider neon-glow">
              Hello! I'm
            </span>
          </motion.div>

          {/* Name - Static, no typewriter */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-text-primary tracking-tight leading-tight"
          >
            <span className="block neon-glow">Karthikeyan</span>
          </motion.h1>

          {/* Static punchy subtitle — no typewriter cutoff */}
          <motion.div variants={item} className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neon-cyan">
              Cloud-Native & Backend Developer | AWS | Blockchain
            </h2>
          </motion.div>

          {/* Rewritten description — specific, not generic */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-text-muted mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            I build{' '}
            <span className="text-neon-cyan font-semibold">
              secure, scalable cloud-native systems
            </span>{' '}
            and{' '}
            <span className="text-neon-purple font-semibold">
              decentralized applications
            </span>
            . Hackathon winner with 3 internships shipped.
          </motion.p>

          {/* Stats bar — publications front and center */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-10 sm:mb-12"
          >
            <div className="flex items-center gap-2 bg-surface/50 border border-gray-800 rounded-full px-5 py-2.5">
              <span className="text-2xl font-bold text-neon-cyan">3</span>
              <span className="text-text-muted text-sm">Internships Shipped</span>
            </div>
            <div className="flex items-center gap-2 bg-surface/50 border border-gray-800 rounded-full px-5 py-2.5">
              <span className="text-2xl font-bold text-neon-purple">2×</span>
              <span className="text-text-muted text-sm">Hackathon Winner</span>
            </div>
            <div className="flex items-center gap-2 bg-surface/50 border border-gray-800 rounded-full px-5 py-2.5">
              <span className="text-2xl font-bold text-neon-green">3</span>
              <span className="text-text-muted text-sm">Research Papers</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 sm:mb-16 w-full max-w-2xl mx-auto"
          >
            <a
              href="#contact"
              className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FiFileText size={20} />
              View Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-neon-cyan transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, 10, 20],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-muted hidden sm:flex"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-0.5 h-8 bg-neon-cyan/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
