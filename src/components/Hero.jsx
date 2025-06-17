import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import Lottie from 'lottie-react'
import pcAnimation from '../assets/pc.json' 

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    aboutSection.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* Background et structure principale */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Cercle et ligne violette */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Contenu principal */}
        <div className='flex flex-col'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Halima</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a Full-Stack, React js<br className='sm:block hidden' /> 
              and Spring boot developer
            </p>
          </div>

          {/* Conteneur pour l'animation Lottie avec effets de mouvement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 w-full max-w-[400px] h-[300px] mx-auto"
          >
            <Lottie
              animationData={pcAnimation}
              loop={true}
              autoplay={true}
              style={{ 
                transform: 'rotateY(15deg) rotateX(10deg)',
                filter: 'drop-shadow(0 0 20px rgba(145, 94, 255, 0.5))'
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Fleche de scroll animée */}
      <div className='absolute bottom-10 w-full flex justify-center'>
        <motion.div
          onClick={scrollToAbout}
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className='w-[20px] h-[40px] rounded-xl border-2 border-[#915EFF] flex justify-center items-start p-1'>
            <div className="w-2 h-2 rounded-full bg-[#915EFF]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero