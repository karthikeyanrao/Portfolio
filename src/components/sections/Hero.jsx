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

  const typingEffect = {
    hidden: { width: 0 },
    show: {
      width: "100%",
      transition: {
        duration: 3.5,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 1.5
      }
    }
  };

  return (
    <section className="min-h-[100dvh] flex items-center relative overflow-hidden pt-20 px-4 sm:px-6" id="home">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,191,255,0.1),transparent_50%)] animate-pulse-slow" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-neon-blue rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
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

      <div className="section-container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={item} className="mb-4">
            <span className="text-neon-blue font-mono text-lg md:text-xl tracking-wider neon-glow">
              Hi, I'm
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-text-primary tracking-tight leading-tight"
          >
            <span className="block neon-glow break-words">Karthikeyan</span>
          </motion.h1>

          <motion.div variants={item} className="mb-8 sm:mb-10 overflow-hidden inline-block max-w-full">
            <motion.h2
              className="text-xs sm:text-xl md:text-3xl font-bold text-text-muted whitespace-nowrap border-r-4 border-neon-purple pr-1 sm:pr-2 overflow-hidden"
              variants={typingEffect}
            >
              Cloud-Native & Backend Developer | AWS | Blockchain
            </motion.h2>
          </motion.div>

          <motion.p
            variants={item}
            className="text-sm sm:text-lg md:text-2xl text-text-muted mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            I build <span className="text-neon-blue font-semibold">secure, scalable cloud-native systems</span> and <span className="text-neon-purple font-semibold">decentralized applications</span>.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16 px-4 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <a
              href="#contact"
              className="btn btn-primary text-lg px-8 py-4 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(0,191,255,0.5)]"
            >
              Hire Me / Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              <FiFileText size={20} />
              View Resume
            </a>
            <a
              href="https://github.com/karthikeyanrao"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(181,108,255,0.3)]"
            >
              <FiGithub size={20} />
              GitHub Profile
            </a>
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-muted"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-0.5 h-8 bg-neon-blue/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
