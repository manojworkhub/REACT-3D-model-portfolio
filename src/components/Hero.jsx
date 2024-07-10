import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn} from "../utils/motion";
// import ComputersCanvas from "./canvas/Computers";


const Hero = () => {


  return (
    <section className="relative w-full h-screen mx-auto  ">
      <div className="flex absolute top-[100px] left-10 md:top-[100px] md:left-[150px] flex-col justify-center items-center ">
        <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-[#915EFF] rounded-full" />
        <div className="w-1 h-40 md:w-1 md:h-75 lg:h-80 violet-gradient" />
      </div>
      <div className={`${styles.heroPageTitle}`}>
        <h1 className={`${styles.heroHeadText} text-white  [text-shadow:1px_1px_6px_var(--tw-shadow-color)] shadow-black `}>
          Hi,I'm <span className="text-[#915EFF] [text-shadow:1px_1px_6px_var(--tw-shadow-color)] shadow-black"> Mano Ragupathy</span>
        </h1>
        <p className={`${styles.heroSubText}  text-white-100 [text-shadow:1px_1px_6px_var(--tw-shadow-color)] shadow-black`}>
        MERN stack developer  <br className="sm:block hidden " />
          Passionate in front end development and web development
        </p>
      </div>
      {/* <ComputersCanvas /> */}
 <div className="absolute left-[180px] top-[300px] xxxs:left-[60px] xxs:left-[100px] xxs:top-[330px] md:left-[405px] md:top-[260px] lg:left-[600px] xl:left-[750px] xl:top-[200px] "> 

      <Tilt className="xs:w-[150px] w-full ">
      <div className="w-[200px] h-[200px] xxxs:w-[200px] xxxs:h-[200px] xxs:w-[200px] xxs:h-[200px]  md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full green-pink-gradient shadow-card  "> 
             <img src="https://i.ibb.co/TqPXv7h/profile.png" alt="lindedin-pic"  className="w-[200px] h-[200px] xxs:w-[200px] xxs:h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full p-1 object-cover  object-center" />
      </div>
      </Tilt>
 </div>
      <div className="hidden md:block"> 
      <div
        className="absolute xs:bottom-2 bottom-2 w-full flex justify-center items-center "
        
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
      </div>
    </section>
  );
};

export default Hero;
