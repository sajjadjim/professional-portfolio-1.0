import React from "react";
import {
  FaReact,
  FaGithub,
  FaPython,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiFirebase,
  SiCplusplus,
  SiC,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiVite,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

// Icon list with brand colors
const icons = [
  { icon: <FaReact color="#61DAFB" />, name: "React" },
  { icon: <FaGithub color="#fff" />, name: "GitHub" },
  { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
  { icon: <SiC color="#A8B9CC" />, name: "C" },
  { icon: <SiCplusplus color="#00599C" />, name: "C++" },
  { icon: <FaPython color="#3776AB" />, name: "Python" },
  { icon: <SiGit color="#F1502F" />, name: "Git" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiExpress color="#fff" />, name: "Express.js" },
  { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
  { icon: <SiVite color="#646CFF" />, name: "Vite" },
  { icon: <FaJava color="#007396" />, name: "Java" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
];

export default function DevIconsMarquee() {
  return (
    <div className="md:w-10/12 w-full md:mx-auto  py-15 bg-black overflow-hidden relative">
      <h1 className="md:text-4xl text-xl font-bold mb-5">Dev tools. </h1>
      <motion.div
        className="flex gap-12 absolute whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        style={{ minWidth: "200%" }}
      >
        {/* Repeated icon sets for seamless scroll */}
        {[...icons, ...icons].map((item, index) => (
          <div
            key={index}
            className="text-5xl hover:scale-110 transition-transform duration-300"
            title={item.name}
          >
            {item.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
