import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar el correo electrónico a tu servicio de newsletter
    console.log('Email submitted:', email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="text-2xl font-semibold mb-2"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Suscríbete a nuestra newsletter
      </motion.h3>
      <motion.p
        className="mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Recibe las últimas noticias y actualizaciones en tu correo electrónico.
      </motion.p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="flex-1 rounded-l-md px-4 py-2 border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
          placeholder="Tu correo electrónico"
          required
        />
        <motion.button
          type="submit"
          className="rounded-r-md bg-white text-secondary px-4 py-2 font-semibold"
          variants={buttonVariants}
        >
          Suscribirse
        </motion.button>
      </form>
    </motion.div>
  );
};
