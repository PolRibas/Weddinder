import { FC, ReactNode } from "react";
import { Variants, motion } from "framer-motion";

interface ColoredBackgroundProps {
  children?: ReactNode | undefined;
  className?: string;
}

export const ColoredBackground: FC<ColoredBackgroundProps> = ({
  children,
  className,
}) => {
  const backgroundVariants: Variants = {
    initial: {
      background: "linear-gradient(to right, #7c6fb1 0%, #9d93c4 100%)",
    },
    animate: {
      background: "linear-gradient(to right, #9d93c4 0%, #7c6fb1 100%)",
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.section
      className={className || "py-20 px-4 pt-40"}
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
    >
      {children}
    </motion.section>
  );
};
