import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

const Section2 = () => {

  const [projectCount, setProjectCount] = useState(0);
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);

  // Step 1: Fetch your project data from database/API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://raw.githubusercontent.com/sajjadjim/sajjadjim/refs/heads/main/Project%20Data/project.json");
        const data = await res.json();
        setProjectCount(data.length);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  // Step 2: Start the count-up after 3 seconds
  useEffect(() => {
    if (projectCount > 0) {
      const delay = setTimeout(() => {
        setStartCount(true);
      }, 200);

      return () => clearTimeout(delay);
    }
  }, [projectCount]);

  // Step 3: Animate the count-up
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


  return (
    <motion.section className=" md:w-10/12 md:mx-auto py-12 px-6 md:px-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className=" text-center">
        <div className='flex  md:w-10/12 md:mx-auto gap-5 md:gap-4 mb-6 '>
          {/* Button 1: Experience */}
          <button className="relative group overflow-hidden md:py-6 px-5 font-bold w-full rounded-xl md:text-3xl
  text-white border-2 border-cyan-500
  bg-transparent
  transition-all duration-500 ease-in-out
  z-10"
          >
            <span className="relative z-10">Coding Experience <br /> 2.5+ Years</span>

            {/* Animated gradient fill on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 
    scale-x-0 group-hover:scale-x-100 origin-left 
    transition-transform duration-500 ease-in-out z-0"
            ></span>
          </button>



          {/* Button 2: Projects */}
          <button className="relative group overflow-hidden md:py-6 px-5 font-bold w-full rounded-xl md:text-3xl
      text-white border-2 border-cyan-500 bg-transparent transition-all duration-500 ease-in-out z-10"
          >
            <span className="relative z-10 text-center block">
              Projects <br /> {count-1}+ Completed
            </span>

            {/* Gradient fill on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 
        scale-x-0 group-hover:scale-x-100 origin-left 
        transition-transform duration-500 ease-in-out z-0"
            ></span>
          </button>
        </div>

        <p className="text-lg md:text-xl mb-6">
          I'm a passionate Computer Science and Engineering student at
          <span className="text-teal-500 font-semibold"> Daffodil International University</span>.
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
