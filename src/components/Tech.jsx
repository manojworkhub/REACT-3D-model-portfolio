import React from "react";
import { styles } from "../styles";
// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const SkillCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
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
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[10p0%] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  return ( <>
    <h2 className={`${styles.sectionHeadText} text-center`} id="skills">
    Skills
    </h2>
    <div className='flex flex-row flex-wrap justify-center gap-10  py-6'>
     
      {technologies.map((technology) => (
        <div className='w-18 h-18' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <SkillCard icon={technology.icon} name ={technology.name}/>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");