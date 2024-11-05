import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => {
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
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[230px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section  id="about" className=" p-5 flex flex-col text-center items-center justify-center ">
    
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify" 
      >
        MERN stack developer with experience across front-end and back-end technologies, adept at creating user-centered applications. Skilled in building responsive and high-performance solutions suited for roles like Front-End Developer, MERN Stack Developer, Full-Stack Developer, or Software Engineer. Committed to delivering top-quality results and currently expanding expertise as a MERN Stack Developer Intern. Eager to drive impactful outcomes on innovative projects and bring strong technical and collaborative skills to any development team.
      </motion.p>
      {/* <div className="grid grid-cols-2 grid-rows-2  gap-4 md:grid-cols-4 md:grid-rows-2  md:gap-5 m-auto p-2"> */}
      <div className="mt-10 flex flex-wrap gap-10 justify-center items-center ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
