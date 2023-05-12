import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sentenceVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0%", transition: { duration: 1 } },
  exit: { opacity: 0, y: "-100%", transition: { duration: 1 } },
};

export const HomeHero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 5) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [index]);

  return (
    <div className="flex h-screen items-center justify-center text-center text-4xl font-bold p-20">
      <motion.div
        key={index}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute"
      >
        {index === 0 ? (
          <p>Nil y Maria son muy guapos</p>
        ) : index === 1 ? (
          <p>Demasiado guapos</p>
        ) : index === 2 ? (
          <p>Pero están cogidos</p>
        ) : index === 3 ? (
          <p>Por eso ha llegado a nuestras vidas el...</p>
        ) : index === 4 ? (
          <p>Weddinder!</p>
        ) : (
          <h2>componente weedinder</h2>
        )}
      </motion.div>
      <div className="h-screen"></div> {/* Espacio para el próximo componente */}
    </div>
  );
};
