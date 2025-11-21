import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });


  const FORMSPREE_FORM_ID = 'xovbveyn';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_ID') {
      setSubmitStatus({
        success: false,
        message: '⚠️ Please configure your Formspree ID in the code to send messages.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thanks! Your message has been sent successfully. I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later or contact me via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 6380588382',
      href: 'tel:+916380588382',
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email Me',
      value: 'rippleskarthi@gmail.com',
      href: 'mailto:rippleskarthi@gmail.com',
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      title: 'GitHub',
      value: 'github.com/karthikeyanrai',
      href: 'https://github.com/karthikeyanrao',
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/karthikeyanrao-suresh',
      href: 'https://www.linkedin.com/in/karthikeyanrao-suresh',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Madurai, Tamil Nadu, India',
      href: 'https://maps.google.com/?q=Madurai+India',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-5 h-5" />,
      href: 'https://github.com/karthikeyanrao',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/karthikeyanrao-suresh',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/heyy._karthi',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mb-6"></div>
          <p className="text-text-muted max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-text-primary">Contact Information</h3>
            <p className="text-text-muted">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-lg text-neon-blue border border-neon-blue/20 shadow-[0_0_10px_rgba(0,191,255,0.1)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{item.title}</h4>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-neon-blue transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full md:w-auto flex items-center justify-center gap-2"
              >
                <FiSend className="transform rotate-45" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6">Send Me a Message</h3>

            {submitStatus.message && (
              <div
                className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'
                  }`}
              >
                <p className={submitStatus.success ? 'text-green-400' : 'text-red-400'}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue outline-none transition-all text-text-primary"
                    placeholder="Karthikeyan"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue outline-none transition-all text-text-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-muted mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue outline-none transition-all text-text-primary"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue outline-none transition-all text-text-primary resize-none"
                  placeholder="Hi there! I'd like to discuss a project..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
