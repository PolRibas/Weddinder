import { useState, useEffect, FC } from "react";
import { motion } from "framer-motion";
import { WeddinderComponent } from "./components/weddinder";

const sentenceVariants = {
  hidden: { opacity: 0, y: "100%", x: "0" },
  visible: { opacity: 1, y: "-20%", x: "0", transition: { duration: 1 } },
  exit: { opacity: 0, y: "-100%", x: "0", transition: { duration: 1 } },
};

export const HomePage: FC = () => {
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
    <div className="flex h-screen items-center justify-center text-center text-6xl font-bold">
      <motion.div
        key={index}
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute"
      >
        {index === 0 ? (
          <div>
            <p>Nil y Maria son muy guapos</p>
          </div>
        ) : index === 1 ? (
          <p>Demasiado guapos</p>
        ) : index === 2 ? (
          <p>Pero están pillados</p>
        ) : index === 3 ? (
          <p>tenemos la solución</p>
        ) : index === 4 ? (
          <p>Weddinder!</p>
        ) : (
          <WeddinderComponent />
        )}
      </motion.div>
      <div className="h-screen"></div> {/* Espacio para el próximo componente */}
    </div>
  );
};
