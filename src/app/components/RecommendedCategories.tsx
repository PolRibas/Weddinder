import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  'Aventura',
  'Cultura',
  'Gastronomía',
  'Deportes',
  'Naturaleza',
  'Tecnología',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const RecommendedCategories: React.FC = () => {
  return (
    <motion.div
      className="p-4 rounded-md container mx-auto my-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="text-lg font-semibold mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Categorías recomendadas
      </motion.h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <motion.li
            key={index}
            className="bg-blue-600 text-white py-2 px-3 rounded-md"
            variants={itemVariants}
          >
            {category}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

