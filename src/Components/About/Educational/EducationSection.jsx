import React from 'react';
import './style.css'
import { motion } from 'framer-motion';
import { RiDownloadLine } from "react-icons/ri";
const educationData = [
  {
    level: 'University',
    institution: 'Daffodil International University',
    degree: 'B.Sc in Computer Science and Engineering',
    year: '2022 - Present',
    cgpa: '3.58 (out of 4.00)',
    description: 'Currently, I am pursuing my B.Sc in Computer Science and Engineering at Daffodil International University, focusing on software development, algorithms, and modern technologies. My coursework includes data structures, web development, artificial intelligence, and database management. I have participated in several coding competitions and group projects, which have enhanced my teamwork and problem-solving skills.',
  },
  {
    level: 'College',
    institution: 'National Ideal College',
    degree: 'HSC (Science)',
    year: '2017 - 2019',
    cgpa: '5.00 (out of 5.00)',
    description: 'During my time at National Ideal College, I developed a strong foundation in mathematics, physics, and chemistry. I was actively involved in science fairs and extracurricular activities, which helped me build analytical and communication skills.',
  },
  {
    level: 'School',
    institution: 'Ideal School and College',
    degree: 'SSC (Science)',
    year: '2018 - 2020',
    cgpa: '5.00 (out of 5.00)',
    description: 'At Ideal School and College, I completed my secondary education with a focus on science. I consistently achieved high grades and participated in various academic and cultural events, laying the groundwork for my future studies.',
  },
];

const EducationCard = ({ level, institution, degree, year, description, cgpa }) => (
  <motion.div className="bg-gradient-to-br from-gray-900 via-black border-t-5 border-r-2 to-gray-800 shadow-xl rounded-3xl p-8 w-full md:w-1/2 lg:w-1/3 transition-transform hover:scale-102 hover:shadow-teal-800 duration-300  border-teal-500"
   initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-2xl font-bold text-teal-400 tracking-wide">{level}</h3>
      <span className="bg-black text-teal-300 px-3 py-1 rounded-full text-xs font-semibold shadow border border-teal-700">{year}</span>
    </div>
    <p className="text-lg font-semibold text-white mb-1">{institution}</p>
    <p className="text-md text-teal-300 font-medium mb-3">{degree}</p>
    <p className="text-md text-teal-300 font-medium mb-3">{cgpa}</p>
    <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded mb-4"></div>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const EducationSection = () => {
  return (
    <section className=" md:w-9/12 mx-auto pt-20">
      <h1 className="md:text-6xl text-3xl font-bold text-center my-10 pacifico-regular">
        <span className='text-teal-500 '>&lt;</span> I'm Sajjad JIM <span className='text-teal-500'>/&gt;</span>
      </h1>

      <div>
        <p className='text-center md:text-xl text-xl text-teal-500 '>Hi I am Jim . I am a student of computer Science And Engineering at Daffodil International University . My biggest goal in my life is to be a kind person .I want to achieve success in every step of my life .I always want to hard work for myself , my family and my country .
        </p>
        <div className='grid justify-center justify-items-center'>
          <a
            href="https://drive.google.com/file/d/1uAL88yRxC6jsrhCGFBZNsDaHGZ8B59Wr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className='py-2 flex gap-2 items-center  bg-teal-500 font-bold text-white hover:text-teal-500 hover:border-[1px] hover:bg-black hover:border-teal-700 px-10 rounded-full my-5  cursor-pointer transition-colors duration-300'
            download
          >
            CV <RiDownloadLine className='text-xl animate-bounce'></RiDownloadLine>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold  mb-6 text-left md:mt-10">Education.</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
