/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { motion } from "framer-motion";

export const SceneOne: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-full flex-col space-y-4 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex-1"
        >
          <p className="text-center text-4xl mb-4">Nil y Maria son muy guapos</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex-1"
        >
          <img src="/nil-maria.jpeg" alt="Descripción de la imagen" className="mx-auto max-w-[90vw] w-[500px] rounded-xl shadow-content" />
        </motion.div>
      </div>
    </div>
  );
};
