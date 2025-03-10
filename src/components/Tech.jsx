// import React from 'react'

// const Tech = () => {
//   return <div>Tech</div>;
// }

// export default Tech

import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "@/styles";

// import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {/* {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          
        </div>
      ))} */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What are my skill sets
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.div>
      <BallCanvas />
    </div>
  );
};

export default SectionWrapper(Tech, "");