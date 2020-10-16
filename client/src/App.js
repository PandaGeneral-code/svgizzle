import { motion } from "framer-motion";
import React from "react";

import Wrapper, { SVGContainer } from "./styled";

const icon = {
  hidden: {
    fill: "rgba(255, 255, 255, 0)",
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    fill: "rgba(255, 255, 255, 1)",
    opacity: 1,
    pathLength: 1,
  },
};

const App = () => {
  return (
    <Wrapper>
      <SVGContainer>
        <motion.svg height="210" width="300">
          <motion.path
            animate="visible"
            d="M150 0 L75 200 L225 200 Z"
            initial="hidden"
            transition={{
              default: { duration: 1.25, ease: "easeInOut" },
              fill: { duration: 1, ease: [1, 0, 0.8, 1] },
            }}
            variants={icon}
          />
        </motion.svg>
      </SVGContainer>
      <SVGContainer>
        <motion.svg height="210" width="300">
          <motion.path
            animate="visible"
            d="M150 0 L75 200 L225 200 Z"
            initial="hidden"
            transition={{
              default: { duration: 1.25, ease: "easeInOut" },
              fill: { duration: 1, ease: [1, 0, 0.8, 1] },
            }}
            variants={icon}
          />
        </motion.svg>
      </SVGContainer>
    </Wrapper>
  );
};

export default App;
