import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import './styles.css';

const Section2 = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://raw.githubusercontent.com/sajjadjim/sajjadjim/refs/heads/main/project.json");
        const data = await res.json();
        setProjectCount(data?.length);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  // console.log("Length of project data:", projectCount);


  useEffect(() => {
    if (projectCount > 0) {
      const delay = setTimeout(() => {
        setStartCount(true);
      }, 200);

      return () => clearTimeout(delay);
    }
  }, [projectCount]);

  useEffect(() => {
    if (startCount) {
      let i = 0;
      const step = Math.ceil(projectCount / 20);
      const interval = setInterval(() => {
        i += step;
        setCount(i >= projectCount ? projectCount : i);
        if (i >= projectCount) clearInterval(interval);
      }, 80);
    }
  }, [startCount, projectCount]);

  // Motion variants for buttons container
  const buttonsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Motion variants for each button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Motion variants for text container
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.8, duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section className=" md:w-10/12 md:mx-auto py-12 px-6 md:px-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center">
        {/* Wrap buttons in motion div with stagger */}
        <motion.div
          className='flex md:w-10/12 md:mx-auto gap-5 md:gap-4 mb-6'
          variants={buttonsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Button 1: Experience  */}
          <motion.button
            variants={buttonVariants}
            className="relative group overflow-hidden 2xl:py-6 lg:py-3 lg:px-2 py-2 2xl:px-5 font-bold w-full rounded-xl md:text-xl 2xl:text-3xl
      text-white border-2 border-[#33A1E0]
      bg-transparent transition-all duration-500 ease-in-out z-10"
          >
            <span className="relative z-10">
              Coding Experience <br />
              {(() => {
                const [exp, setExp] = React.useState(0);
                React.useEffect(() => {
                  const start = new Date('2022-07-01');
                  const now = new Date();
                  const diff = now - start;
                  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
                  let i = 0;
                  const step = years / 20;
                  const timer = setTimeout(() => {
                    const interval = setInterval(() => {
                      i += step;
                      setExp(i >= years ? years : i);
                      if (i >= years) clearInterval(interval);
                    }, 80);
                  }, 200);
                  return () => clearTimeout(timer);
                }, []);
                return exp ? exp.toFixed(1) + '+ Years' : '0.0+ Years';
              })()}
            </span>

            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 
              scale-x-0 group-hover:scale-x-100 origin-left 
              transition-transform duration-500 ease-in-out z-0"
            ></span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 
    scale-x-0 group-hover:scale-x-100 origin-left 
    transition-transform duration-500 ease-in-out z-0"
            ></span>
          </motion.button>

          {/* Button 2: Projects */}
          <motion.button
            variants={buttonVariants}
            className="relative group overflow-hidden 2xl:py-6 py-2 2xl:px-5 font-bold w-full rounded-xl md:text-xl 2xl:text-3xl
      text-white border-2 border-[#33A1E0]
      bg-transparent transition-all duration-500 ease-in-out z-10"
          >
            <span className="relative z-10 text-center block">
              Projects <br /> {count}+ Completed
            </span>

            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 
        scale-x-0 group-hover:scale-x-100 origin-left 
        transition-transform duration-500 ease-in-out z-0"
            ></span>
          </motion.button>
        </motion.div>

        {/* Text block with fade + slide up */}
        <motion.div
          className='2xl:text-xl dancing-script   lg:text-md '
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <p className=" mb-6">
            I'm a passionate Computer Science and Engineering student at
            <span className="text-[#33A1E0] font-semibold"> Daffodil International University</span>.
            Through my academic journey and personal projects, I've developed strong programming and
            problem-solving skills that help me tackle real-world challenges effectively.
          </p>

          <p className=" mb-4">
            I have experience in building web applications, solving complex algorithmic problems, and
            continuously learning new technologies. My enthusiasm for development and logic building drives me
            to constantly improve and take on new challenges with confidence.
          </p>

          <p className="">
            Whether it's front-end development, coding competitions, or collaborative software projects—I'm always
            eager to contribute and grow as a developer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section2;
