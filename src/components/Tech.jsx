import React from "react";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const SkillCard = ({ index, name, icon }) => {
  return (
    // <Tilt className="xs:w-[250px] w-full">
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[100%] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="md:w-16 md:h-16  w-[100%] h-[100%] object-contain"
          />
          <h3 className="text-white text-[20px] xxxs:text-[1rem] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-center`} id="skills">
        Skills
      </h2>
      {/* <div className='flex flex-row flex-wrap justify-center gap-2 align-middle  py-6'> */}
      <div className="grid grid-cols-2 grid-rows-6  gap-4 md:grid-cols-4 md:grid-rows-3  md:gap-5 m-auto p-2">
        {technologies.map((technology) => (
          <div className="w-18 h-18 xxs:w-50 xxs:h-50" key={technology.name}>
            <SkillCard icon={technology.icon} name={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
