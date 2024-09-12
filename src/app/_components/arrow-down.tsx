"use client";

import { motion } from "framer-motion";

function ArrowDown() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div className="hidden h-full items-end px-[5vw] lg:flex">
      <motion.svg
        width="200"
        viewBox="0 0 70 85"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          variants={draw}
          stroke="white"
          strokeWidth="0.5"
          fill="none"
          id="path"
          d="M6.6 1.8C.2 37 2.8 55.8 37.4 47 72.4 39.4 53.8 5.4 33.2 22 11 41.6 17.4 69.8 29.4 83.4M29.4 83.4 32.6 74.2M29.4 83.4 19.8 79.8"
        ></motion.path>
      </motion.svg>
    </div>
  );
}

export default ArrowDown;
