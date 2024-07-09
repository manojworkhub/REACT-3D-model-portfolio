import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computers";


const Hero = () => {


  return (
    <section className="relative w-full h-screen mx-auto  ">
      <div className="flex absolute top-[100px] left-10 md:top-[100px] md:left-[150px] flex-col justify-center items-center ">
        <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-[#915EFF] rounded-full" />
        <div className="w-1 h-40 md:w-1 md:h-75 lg:h-80 violet-gradient" />
      </div>
      <div className={`${styles.heroPageTitle}`}>
        <h1 className={`${styles.heroHeadText} text-white  `}>
          Hi,I'm <span className="text-[#915EFF]"> Mano Ragupathy</span>
        </h1>
        <p className={`${styles.heroSubText}  text-white-100`}>
        MERN stack developer  <br className="sm:block hidden " />
          Passionate in front end development and web development
        </p>
      </div>
      <ComputersCanvas />
      <div
        className="absolute xs:bottom-2 bottom-2 w-full flex justify-center items-center"
        
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
        
          </div>
        </a>
      
      </div>
    </section>
  );
};

export default Hero;
