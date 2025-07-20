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

const SkillGroup = ({ title, skills }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-teal-400 mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group flex flex-col items-center justify-center bg-white dark:bg-black border hover:border-teal-500 hover:shadow-md hover:shadow-teal-500 border-gray-200 dark:border-gray-700 rounded-xl p-4 transition transform hover:scale-105 cursor-pointer"
          title={skill.name}
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
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-4 md:px-8 py-6 2xl:py-10 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl 2xl:text-4xl font-bold text-center mb-8 text-teal-500">
          My Development Tools
        </h2>

        <SkillGroup title="Frontend Development" skills={frontendSkills} />
        <SkillGroup title="Backend Development" skills={backendSkills} />
        <SkillGroup title="Programming Languages" skills={programmingSkills} />
      </div>
    </section>
  );
};

export default Skills;
