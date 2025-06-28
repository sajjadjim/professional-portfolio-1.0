import React from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  return (
    <motion.section className=" md:w-10/12 md:mx-auto py-12 px-6 md:px-16"
      initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
    >
      <div className=" text-center">
        <div className='flex  w-10/12 mx-auto gap-5 md:gap-4 mb-6 '>
            <button className='md:py-6 px-5 font-bold  w-full  rounded-xl md:text-3xl bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-t from-sky-500 to-indigo-500 '>Coding Experience <br /> 2.5+ Years</button>
            <button className='md:py-6 px-5 font-bold  w-full  rounded-xl md:text-3xl bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-t from-sky-500 to-indigo-500'>Projects <br /> 10+ completed</button>
        </div>

        <p className="text-lg md:text-xl mb-6">
          I'm a passionate Computer Science and Engineering student at 
          <span className="text-indigo-400 font-semibold"> Daffodil International University</span>.
          Through my academic journey and personal projects, I've developed strong programming and 
          problem-solving skills that help me tackle real-world challenges effectively.
        </p>

        <p className="text-base md:text-lg mb-4">
          I have experience in building web applications, solving complex algorithmic problems, and 
          continuously learning new technologies. My enthusiasm for development and logic building drives me 
          to constantly improve and take on new challenges with confidence.
        </p>

        <p className="text-base md:text-lg">
          Whether it's front-end development, coding competitions, or collaborative software projects—I'm always 
          eager to contribute and grow as a developer.
        </p>
      </div>
    </motion.section>
  );
};

export default Section2;
