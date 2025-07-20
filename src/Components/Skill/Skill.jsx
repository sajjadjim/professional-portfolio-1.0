import { motion } from 'framer-motion';
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiPhp,
} from "react-icons/si";

const frontendSkills = [
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
  { icon: <FaReact />, name: "ReactJS", color: "#61DBFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFFFF" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
];

const backendSkills = [
  { icon: <FaNodeJs />, name: "NodeJS", color: "#339933" },
  { icon: <SiExpress />, name: "ExpressJS", color: "#FFFFFF" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiPhp />, name: "PHP", color: "#777BB4" },
];

const programmingSkills = [
  { icon: <FaPython />, name: "Python", color: "#3776AB" },
  { icon: <SiC />, name: "C", color: "#A8B9CC" },
  { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
  { icon: <FaJava />, name: "Java", color: "#007396" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SkillGroup = ({ title, skills }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-teal-400 mb-4">{title}</h3>

    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          className="group flex flex-col items-center justify-center bg-white dark:bg-black border hover:border-teal-500 hover:shadow-md hover:shadow-teal-500 border-gray-200 dark:border-gray-700 rounded-2xl p-4 transition transform hover:scale-105 cursor-pointer"
          title={skill.name}
          whileHover={{ scale: 1.08 }}
        >
          <span
            className="text-2xl md:text-3xl mb-2 drop-shadow"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </span>
          <span className="text-sm md:text-base font-semibold tracking-wide text-center">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-4 md:px-8 pt-6 2xl:pt-10 dark:text-white"
    >
      <div className="2xl:max-w-9/12 lg:w-11/12 mx-auto">
        <h2 className="text-2xl 2xl:text-4xl font-bold my-8 text-left">
          Development Tools.
        </h2>
        <SkillGroup title="Frontend" skills={frontendSkills} />
        <SkillGroup title="Backend " skills={backendSkills} />
        <SkillGroup title="Problem solving " skills={programmingSkills} />
      </div>
    </section>
  );
};

export default Skills;
