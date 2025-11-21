import { motion } from 'framer-motion';
import { FiBookOpen, FiExternalLink } from 'react-icons/fi';

const publications = [
  {
    id: 1,
    title: 'Enhancing Liver Cirrhosis Prognosis: A Machine Learning and Explainable AI Approach',
    conference: 'AICECS 2024',
    authors: 'Karthikeyan, Co-Authors',
    description: 'Proposed a novel deep learning framework for early detection of liver cirrhosis, integrating Explainable AI (XAI) to provide transparent model predictions.',
    doi: '10.1109/AICECS63354.2024.10956250',
    link: 'https://ieeexplore.ieee.org/abstract/document/10956250',
    date: '2024',
    tags: ['Explainable AI', 'Deep Learning', 'Healthcare']
  },
  {
    id: 2,
    title: 'Enhancing Medical Image Segmentation Using Semantic Aligned Matching and YOLOv8',
    conference: 'ICICC 2024',
    authors: 'Karthikeyan, Co-Authors',
    description: 'Developed a hybrid model combining Segment Anything Model (SAM) and YOLOv8 for high-precision real-time object segmentation in complex environments.',
    doi: 'https://doi.org/10.1007/978-981-96-1264-2_40',
    link: 'https://link.springer.com/chapter/10.1007/978-981-96-1264-2_40',
    date: '2024',
    tags: ['Computer Vision', 'YOLOv8', 'SAM']
  },
  {
    id: 3,
    title: 'Enhanced Image Analysis for Detecting Malaria Infection in Blood Samples',
    conference: 'IEEE PuneCon 2024',
    authors: 'Karthikeyan, Co-Authors',
    description: 'Comparative study of CNN architectures for malaria parasite detection in blood smear images, achieving 98% accuracy with optimized models.',
    doi: '10.1109/PuneCon63413.2024.10895808',
    link: 'https://ieeexplore.ieee.org/abstract/document/10895808',
    date: '2024',
    tags: ['Medical Imaging', 'CNN', 'Deep Learning']
  }
];

const PublicationCard = ({ publication }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card hover:shadow-neon-blue/10 hover:border-neon-blue/30"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center text-neon-blue">
            <FiBookOpen className="mr-2" />
            <span className="text-sm font-medium">{publication.conference}</span>
          </div>
          <span className="text-xs text-text-muted bg-background px-2 py-1 rounded-full border border-gray-800">
            {publication.date}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-text-primary">{publication.title}</h3>

        <p className="text-text-muted mb-4 flex-grow">{publication.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {publication.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-background text-text-muted border border-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 mt-auto border-t border-gray-800">
          <div className="text-sm text-text-muted mb-2 sm:mb-0">
            <span className="font-medium">DOI:</span> {publication.doi}
          </div>
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-neon-blue hover:text-neon-blue/80 transition-colors text-sm"
          >
            <span>Read Paper</span>
            <FiExternalLink className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Research Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green mx-auto mb-6"></div>
          <p className="text-text-muted max-w-3xl mx-auto">
            My contributions to academic research and publications in top-tier conferences and journals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://scholar.google.com/citations?user=YOUR_PROFILE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-neon-blue hover:text-neon-blue/80 transition-colors"
          >
            <span>View all publications on Google Scholar</span>
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
    </section>
  );
};

export default Publications;
