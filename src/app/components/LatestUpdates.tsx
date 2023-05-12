/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { motion, useAnimation } from "framer-motion";

const updates = [
  {
    title: "Juntos",
    imageUrl: "https://via.placeholder.com/450x600",
  },
  {
    title: "New Team",
    imageUrl: "https://via.placeholder.com/450x600",
  },
  {
    title: "Gastronomico",
    imageUrl: "https://via.placeholder.com/450x600",
  },
];

const itemVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const LatestUpdates: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const { inViewport } = useInViewport(
    ref,
    {},
    { disconnectOnLeave: false },
    {}
  );

  React.useEffect(() => {
    if (inViewport) {
      controls.start("visible");
    }
  }, [controls, inViewport]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="container mx-auto rounded-md p-4 md:p-0"
      ref={ref}
    >
      <motion.h1
        className="my-10 max-w-[600px] text-6xl font-semibold"
        variants={childVariants}
        animate={controls}
      >
        One platform, any team experience.
      </motion.h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {updates.map((update, index) => (
          <SwiperSlide key={index}>
            <motion.li
              className="relative flex cursor-pointer flex-col rounded-md"
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                className="mb-2 rounded-3xl"
                src={update.imageUrl}
                alt={update.title}
              />
              <h4 className="absolute bottom-5 right-5 mb-2 text-4xl font-bold text-white">
                {update.title}
              </h4>
            </motion.li>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <ul className="grid hidden grid-cols-1 gap-6 md:block md:grid-cols-2 lg:grid-cols-3">
        {updates.map((update, index) => (
          <motion.li
            key={index}
            className="relative flex cursor-pointer flex-col rounded-md"
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              className="mb-2 rounded-3xl"
              src={update.imageUrl}
              alt={update.title}
            />
            <h4 className="absolute bottom-5 right-5 mb-2 text-5xl font-bold text-white">
              {update.title}
            </h4>
          </motion.li>
        ))}
      </ul> */}
    </motion.div>
  );
};
