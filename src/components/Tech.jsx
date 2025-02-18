// import React from 'react'

// const Tech = () => {
//   return <div>Tech</div>;
// }

// export default Tech

import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {technology.name}
          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");