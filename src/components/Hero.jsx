import React, { memo } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Apply responsive styling to ComputersCanvas for tablets (iPad) */}
      <div className='hidden md:block absolute top-0 left-0 w-full h-full'>
        <ComputersCanvas />
      </div>

      <div
        className={`inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-4 h-4 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='sm:pl-5'>
          <h1 className={`${styles.heroHeadText} text-white text-center sm:text-left`}>
            Hello, I'm <span className='text-[#915EFF]'>Rishi Kiran</span>
          </h1>
  
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-lg text-smaller text-center sm:text-left`}>
          Welcome to my portfolio! I'm a passionate Full Stack Web Developer, skilled in crafting both front-end and back-end solutions to deliver visually appealing and responsive user interfaces.
          </p>
        </div>
      </div>

      {/* Apply responsive styling to ComputersCanvas for mobile */}
      <div className='md:hidden absolute top-0 left-0 w-full h-full'>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default memo(SectionWrapper(Hero, "hero"));
