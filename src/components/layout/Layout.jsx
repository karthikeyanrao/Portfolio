import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { FiMenu, FiX } from 'react-icons/fi';
import Loader from '../ui/Loader';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/karthikeyanrao', icon: FiGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/karthikeyanrao-suresh', icon: FiLinkedin },
  { name: 'Email', href: 'mailto:rippleskarthi@gmail.com', icon: FiMail },
  { name: 'Resume', href: '/resume.pdf', icon: FiFileText },
];

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Renamed from mobileMenuOpen

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Changed scroll threshold to 50
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.title = "Karthikeyan | Portfolio";
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60]" // Kept original className for loader overlay
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen flex flex-col bg-background">
          {/* Header */}
          <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md py-2 shadow-lg' : 'py-4'
              }`}
          >
            <div className="section-container flex justify-between items-center">
              {/* Logo */}
              <a
                href="#"
                className={`font-bold gradient-text font-heading transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'
                  }`}
              >
                Karthikeyan
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-text-muted hover:text-neon-blue transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary ml-4"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="btn btn-primary ml-4"
                >
                  Hire Me
                </a>
              </nav>

              {/* Mobile menu button */}
              <button
                className="md:hidden text-text-primary p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="px-4 py-2 space-y-4 bg-secondary">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block py-2 text-text-primary hover:text-neon-blue"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary w-full text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      View Resume
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-primary w-full text-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Hire Me
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* Main Content */}
          <main className="flex-grow pt-20">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-secondary py-12 border-t border-gray-800">
            <div className="section-container">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold gradient-text font-heading mb-2">Karthikeyan</h3>
                  <p className="text-text-muted">Building the future, one line of code at a time</p>
                </div>

                <div className="flex space-x-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-neon-blue transition-colors duration-300"
                        aria-label={social.name}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-text-muted text-sm">
                <p>© {new Date().getFullYear()} Karthikeyan. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
