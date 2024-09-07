import React from "react";
import { motion } from "framer-motion";

// Define animation variants
const socialIconVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  hover: { scale: 1.2 },
  tap: { scale: 0.9 },
};

const Social = () => {
  return (
    <div className="home__social">
      <motion.a
        href="https://www.linkedin.com/in/raisul-karim-saju/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        variants={socialIconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.5 }}
      >
        <i className="bx bxl-linkedin"></i>
      </motion.a>

      <motion.a
        href="https://github.com/RK289g"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        variants={socialIconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <i className="uil uil-github"></i>
      </motion.a>

      <motion.a
        href="https://www.instagram.com/raisul_saju?igsh=MWRyY2VieGlkdWI2Nw=="
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        variants={socialIconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <i className="uil uil-instagram"></i>
      </motion.a>

      <motion.a
        href="https://twitter.com/raisul_karim1"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        variants={socialIconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <i className="uil uil-twitter"></i>
      </motion.a>
    </div>
  );
};

export default Social;
