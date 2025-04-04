import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import cv from './files/cv.pdf';

const ServiceCard = ({ index, name, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={name} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <div className="max-w-xl text-left">
          <p className="text-lg mb-4">
            I am a Full-Stack Developer with over a decade of professional expertise in both frontend and backend development.
          </p>
          <p className="text-lg mb-4">
            I specialize in building dynamic, scalable, and efficient web applications.
          </p>
          <p className="text-lg mb-8">
            My passion for frontend development is reflected in my enthusiasm and dedication to each project.
          </p>
        </div>
      </motion.p>

      <div className='mt-6'>
        <a href={cv} download="cv.pdf">
          <button className="px-6 py-2 bg-black text-white font-bold rounded-full border-2 border-white mt-2 mb-8 hover:bg-white hover:text-black">
            Download My CV
          </button>
        </a>
      </div>

      <h2 className={styles.sectionHeadText}>Skills</h2>
      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((services, index) => (
          <ServiceCard key={services.name} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
