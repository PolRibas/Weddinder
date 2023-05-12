import React, { useState } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';


interface MultiInputProps {
  onSubmit: (values: { priceRange: string; headcount: string; format: string }) => void;
}

export const MultiInput: React.FC<MultiInputProps> = ({ onSubmit }) => {
  const [priceRange, setPriceRange] = useState('');
  const [headcount, setHeadcount] = useState('');
  const [format, setFormat] = useState('');

  const priceRangeOptions = [
    { value: '0-500', label: '$0 - $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-2000', label: '$1,000 - $2,000' },
    { value: '2000+', label: '$2,000+' },
  ];

  const headcountOptions = Array.from({ length: 20 }, (_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString(),
  }));

  const formatOptions = [
    { value: 'online', label: 'Online' },
    { value: 'offline', label: 'Offline' },
  ];

  const handleSubmit = () => {
    onSubmit({ priceRange, headcount, format });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.1,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-white p-4 rounded-xl shadow-content md:flex items-center md:space-x-4 space-y-4 md:space-y-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="w-1/3 cursor-pointer w-full" variants={childVariants}>
        <Select
          instanceId="priceRange"
          className='outline-none border-none'
          options={priceRangeOptions}
          placeholder="Price Range"
          onChange={(selectedOption) => setPriceRange(selectedOption?.value || '')}
        />
      </motion.div>
      <motion.div className="w-1/3 cursor-pointer w-full" variants={childVariants}>
        <Select
          instanceId="headcount"
          className='outline-none border-none'
          options={headcountOptions}
          placeholder="Headcount"
          onChange={(selectedOption) => setHeadcount(selectedOption?.value || '')}
        />
      </motion.div>
      <motion.div className="w-1/3 cursor-pointer w-full" variants={childVariants}>
        <Select
          instanceId="format"
          className='outline-none border-none'
          options={formatOptions}
          placeholder="Format"
          onChange={(selectedOption) => setFormat(selectedOption?.value || '')}
        />
      </motion.div>
      <motion.button
        className="bg-secondary cursor-pointer text-white font-bold py-2 px-4 rounded-md hover:bg-secondary-800 transition-colors duration-300 w-full md:w-auto"
        onClick={handleSubmit}
        variants={childVariants}
      >
        Explorar
      </motion.button>
    </motion.div>
  );
};