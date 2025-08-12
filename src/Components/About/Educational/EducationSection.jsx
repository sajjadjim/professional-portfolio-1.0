import React from 'react';
import './style.css';
import { motion } from 'framer-motion';
import { RiDownloadLine } from 'react-icons/ri';
import { FaUniversity, FaCheckCircle ,FaGraduationCap } from "react-icons/fa";
import {  FaCalendarAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineCastForEducation } from "react-icons/md";


const educationData = [
  {
    level: 'University',
    institution: 'Daffodil International University',
    degree: 'B.Sc in Computer Science and Engineering',
    location: 'Ashulia Dhaka, Bangladesh',
    year: '2022 - 2025',
    cgpa: '3.58 (out of 4.00)',
    description:
      'Currently, I am pursuing my B.Sc in Computer Science and Engineering at Daffodil International University, focusing on software development, algorithms, and modern technologies.My coursework includes data structures, web development, artificial intelligence.',
  },
  {
    level: 'College',
    institution: 'National Ideal College',
    location: 'Khilgaon Dhaka, Bangladesh',
    degree: 'HSC (Science)',
    year: '2017 - 2019',
    cgpa: '5.00 (out of 5.00)',
    description:
      'During my time at National Ideal College, I developed a strong foundation in mathematics, physics, and chemistry. I was actively involved in science fairs and extracurricular activities, which helped me build analytical and communication skills.',
  },
  {
    level: 'School',
    institution: 'Sristy Academic School',
    location: 'Tangail, Bangladesh',
    degree: 'SSC (Science)',
    year: '2018 - 2020',
    cgpa: '5.00 (out of 5.00)',
    description:
      'At Sristy Academic School, I completed my secondary education with a focus on science. I consistently achieved high grades and participated in various academic and cultural events, laying the groundwork for my future studies.',
  },
];

const cardVariants = [
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
];

const EducationCard = ({ level, institution, degree, year, description, cgpa,location, motionStyle }) => (
   <motion.div
    className="bg-gradient-to-br from-gray-900  to-blue-950/30  border-2  shadow-lg rounded-3xl p-8 w-full md:w-1/2 lg:w-1/3 transition-transform hover:scale-101 hover:shadow-blue-900 duration-300 border-blue-950"
    initial={motionStyle.initial}
    whileInView={motionStyle.animate}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-2xl font-bold text-blue-300 tracking-wide flex items-center gap-2">
        <FaGraduationCap /> {level}
      </h3>
      <span className="bg-black  px-3 py-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full text-xs font-semibold shadow  flex items-center gap-1">
        <FaCalendarAlt /> {year}
      </span>
    </div>

    <p className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
      <FaUniversity /> {institution}
    </p>
    <p className='text-sm text-white mb-1 flex items-center gap-2'><SlLocationPin></SlLocationPin>{location}</p>
    <p className="text-md text-blue-300 font-medium mb-1 flex items-center gap-2">
      🎓 {degree}
    </p>
    <p className="text-md text-blue-300 font-medium mb-3 flex items-center gap-2">
     {cgpa}
    </p>

    <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-blue-400 rounded mb-4"></div>

    <p className="text-sm 2xl:text-md leading-relaxed text-gray-300 flex gap-2 items-start">
      <FaCheckCircle className="text-green-400 mt-1" />{description}
    </p>
  </motion.div>
);

const EducationSection = () => {
  return (
    <section className="md:w-11/12 2xl:9/12 mx-auto pt-20">
      <h1 className="md:text-3xl 2xl:text-6xl text-3xl font-bold text-center my-10 pacifico-regular">
        <span className="text-blue-500">&lt;</span> I'm Sajjad JIM <span className="text-blue-500">/&gt;</span>
      </h1>

      <div>
        <p className="text-center 2xl:text-2xl lg:text-lg text-sm text-gray-400">
          Hi I am Jim . I am a student of computer Science And Engineering at Daffodil International University . My biggest goal in my life is to be a kind person .I want to achieve success in every step of my life .I always want to hard work for myself , my family and my country .
        </p>
        <div className="grid justify-center justify-items-center">
          <a
            href="https://drive.google.com/file/d/1gmEiCATd3Ajv19ggxPmlC1B-R832x5IY/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 flex gap-2 items-center bg-blue-500 font-bold text-white hover:text-blue-500 hover:border-[1px] hover:bg-transparent hover:border-blue-500 px-10 rounded-full my-5 cursor-pointer transition-colors duration-300"
            download
          >
            CV <RiDownloadLine className="text-xl animate-bounce" />
          </a>
        </div>
      </div>

      <div className="2xl:max-w-9/12 lg:w-11/12 mx-auto text-center">
        <h2 className="lg:text-2xl 2xl:text-4xl font-bold mb-6 text-left flex gap-2 2xl:mt-10 lg:mt-5"> <MdOutlineCastForEducation></MdOutlineCastForEducation>Education.</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} motionStyle={cardVariants[index % cardVariants.length]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
