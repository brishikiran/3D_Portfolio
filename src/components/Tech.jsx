import React from "react";
import { useTexture } from "@react-three/drei";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = (props) => {
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {technologies.map((technology) => (
        <div className='w-24 h-24' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className='text-center mt-2 text-sm text-gray-700'>
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
  
};


export default SectionWrapper(Tech, "");
