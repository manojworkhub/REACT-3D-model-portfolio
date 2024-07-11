import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn} from "../utils/motion";



const Hero = () => {


  return (
    <section className="relative w-full h-screen mx-auto  ">
      <div className="flex absolute top-[100px] left-10 md:top-[110px] md:left-[70px] flex-col justify-center items-center ">
        <div className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xlg:w-8 xlg:h-8 bg-[#915EFF] rounded-full" />
        <div className="w-1 h-40 md:w-1 md:h-75  lg:h-80 xlg:h-[500px] xlg:w-[6px] violet-gradient" />
      </div>
      <div className={`${styles.heroPageTitle}`}>
        <h1 className={`${styles.heroHeadText} text-white  [text-shadow:1px_1px_6px_var(--tw-shadow-color)] shadow-black `}>
          Hi,I'm <span className="text-[#915EFF] [text-shadow:1px_1px_6px_var(--tw-shadow-color)] shadow-black"> Mano Ragupathy</span>
        </h1>
        <p className={`${styles.heroSubText}  text-white-100 [text-shadow:1px_1px_6px_var(--tw-shadow-color)] shadow-black`}>
        MERN stack developer  <br className="sm:block hidden " />
          Passionate in Front-End Development  <br className=" " /> and Web Development
        </p>
      </div>
     
 {/* <div className="absolute left-[180px] top-[300px] xxxs:left-[60px] xxs:left-[100px] xxs:top-[330px] md:left-[405px] md:top-[260px] lg:left-[600px] xl:left-[750px] xl:top-[200px] "> 

      <Tilt className="xs:w-[150px] w-full ">
      <div className="w-[200px] h-[200px] xxxs:w-[200px] xxxs:h-[200px] xxs:w-[200px] xxs:h-[200px]  md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full green-pink-gradient shadow-card  "> 
             <img src="https://i.ibb.co/TqPXv7h/profile.png" alt="lindedin-pic"  className="w-[200px] h-[200px] xxs:w-[200px] xxs:h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full p-1 object-cover  object-center" />
      </div>
      </Tilt>
 </div> */}

<div className="absolute xxxs:top-[55dvh] left-[30dvw] xs:top-[60dvh] xsx:top-[45dvh] xsx:left-[20dvw] s:top-[80dvw] s:left-[10dvw] md:top-[50dvw] md:left-[30dvw] xmd:left-[60dvw] xmd:top-[60dvh] xxxmd:left-[60dvw] xxxmd:top-[60dvh] lg:left-[50dvw] lg:top-[35dvh]"> 

<Tilt className="xs:w-[150px] w-full ">
<div className="w-[100dvw]  xxxs:w-[60dvw] xs:w-[50dvw] xsx:w-[70dvw] s:w-[80dvw] md:w-[50dvw] xmd:w-[30dvw] xxxmd:w-[30dvw] lg:w-[60dvh] rounded-full green-pink-gradient shadow-card  "> 
       <img src="https://i.ibb.co/TqPXv7h/profile.png" alt="lindedin-pic"  className="w-[100dvh]  xxxs:w-[100dvw] xs:w-[50dvw] xsx:w-[70dvw] s:w-[80dvw] md:w-[50dvw] xmd:w-[30dvw] xxxmd:w-[30dvw] lg:w-[60dvh] rounded-full p-1 object-cover  object-center" />
</div>
</Tilt>
</div>
      <div > 
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
