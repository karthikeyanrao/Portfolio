import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Publications from './components/sections/Publications';
import Contact from './components/sections/Contact';
import NotFound from './components/ui/NotFound';

// This component handles the page scroll behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleSmoothScroll = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        if (id === '#') return;

        const element = document.querySelector(id);
        if (element) {
          const yOffset = -80; // Adjust for fixed header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: 'smooth' });

          // Update URL without page reload
          window.history.pushState(null, '', id);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Publications />
                <Contact />
              </motion.div>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;
