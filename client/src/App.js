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
              default: { duration: 1, ease: "easeInOut" },
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

// import * as React from "react";
// import { motion } from "framer-motion";

// const icon = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//     fill: "rgba(255, 255, 255, 0)"
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     fill: "rgba(255, 255, 255, 1)"
//   }
// };

// export const Example = () => (
//   <div className="container">
//     <motion.svg
// xmlns="http://www.w3.org/2000/svg"
// viewBox="0 0 100 100"
// className="item"
//     >
//       <motion.path
//         d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
//         variants={icon}
//         initial="hidden"
//         animate="visible"
//         transition={{
//           default: { duration: 2, ease: "easeInOut" },
//           fill: { duration: 2, ease: [1, 0, 0.8, 1] }
//         }}
//       />
//     </motion.svg>
//   </div>
// );
