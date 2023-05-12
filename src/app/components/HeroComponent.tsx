/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { motion } from "framer-motion";

export const HeroComponent: FC<{
  title: string;
  description: string;
  buttonText?: string;
  imageUrl: string;
}> = ({ title, description, buttonText, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-auto w-full flex-col items-center justify-center p-4 pt-20 md:mb-16 md:h-[600px] md:flex-row md:pt-36"
    >
      <div className="md:w-2/8 p-4 text-left md:p-8">
        <h1 className="mb-4 text-6xl font-bold md:text-6xl">{title}</h1>
        <p className="mb-8 max-w-[800px] text-2xl md:pr-10 md:text-xl">
          <span>{description}</span>
        </p>
        <button className="rounded-3xl text-xl bg-secondary px-6 py-3 font-semibold text-white">
          {buttonText?.toUpperCase()}
        </button>
      </div>
      <div className="md:w-7/8 h-full rounded-3xl">
        <img
          className="mt-12 h-full w-full object-cover md:mt-0 md:rounded-3xl"
          src={imageUrl}
          alt="hero image"
        />
      </div>
    </motion.div>
  );
};
