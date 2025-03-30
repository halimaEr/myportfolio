import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    
      aboutSection.scrollIntoView({ behavior: "smooth" });
  
  };
  return (
    <section className='relative w-full h-screen mx-auto'>{/*ici on a cree le background*/}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> {/*ici on a cree le cercle*/}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />{/*ici on a cree la ligne qui est en bas de cercle*/}
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915EFF]'>Halima</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
          I am a Full-Stack  , React js<br className='sm:block hidden' /> and Spring boot devoloper
          </p>
        </div>
      </div>

      <ComputersCanvas />
      <div className='absolute bottom-[-20px] w-full flex justify-center items-center' onClick={scrollToAbout}>
        <a href="#about">
          <div className='w-[20px] h-[40px] rounded-xl border-2 border-secondary flex justify-center items-start p-1'>
            <motion.div
              animate={{
                y: [0, 15, 0], // Mouvement plus subtil
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero