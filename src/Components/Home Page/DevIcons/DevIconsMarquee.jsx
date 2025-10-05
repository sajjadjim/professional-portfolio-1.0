import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaGithub, FaPython, FaJava, FaNodeJs,
} from "react-icons/fa";
import {
  SiFirebase, SiCplusplus, SiC, SiMongodb, SiExpress,
  SiJavascript, SiVite, SiGit, SiDocker, SiRedux, SiNextdotjs, SiTypescript,SiElectron,
} from "react-icons/si";
import { PiFileSqlLight } from "react-icons/pi";


const ICONS = [
  { Icon: FaReact, color: "#61DAFB", name: "React" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: PiFileSqlLight, color: "#003B57", name: "MySQL" },
  { Icon: FaGithub, color: "#FFFFFF", name: "GitHub" },
  { Icon: SiExpress, color: "#EAEAEA", name: "Express.js" },
  { Icon: FaNodeJs, color: "#68A063", name: "Node.js" },
  { Icon: SiC, color: "#A8B9CC", name: "C" },
  { Icon: SiVite, color: "#646CFF", name: "Vite" },
  { Icon: SiCplusplus, color: "#00599C", name: "C++" },
  { Icon: FaPython, color: "#3776AB", name: "Python" },
  { Icon: FaJava, color: "#007396", name: "Java" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { Icon: SiGit, color: "#F1502F", name: "Git" },
  { Icon: SiDocker, color: "#2496ED", name: "Docker" },
  { Icon: SiRedux, color: "#764ABC", name: "Redux" },
  { Icon: SiNextdotjs, color: "#EAEAEA", name: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  { Icon: SiElectron, color: "#47848F", name: "Electron.js" },
  
];

const bob = { y: [0, -6, 0], rotate: [0, 1.2, 0] };

const tooltipVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.95, pointerEvents: "none" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 26 }
  },
};

function IconPill({ Icon, color, name, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      role="img"
      aria-label={name}
      title=""
      className="relative inline-flex items-center justify-center rounded-2xl p-3
                 2xl:text-5xl lg:text-4xl text-3xl cursor-pointer select-none
                 transition-transform duration-300"
      style={{ transition: "box-shadow 0.35s ease" }}
      animate={bob}
      transition={{
        repeat: Infinity, duration: 5.5, ease: "easeInOut",
        delay: (index % 8) * 0.12,
      }}
      onMouseEnter={(e) => {
        setHovered(true);
        e.currentTarget.style.boxShadow = `0 10px 34px ${color}75, 0 2px 8px ${color}40`;
      }}
      onMouseLeave={(e) => {
        setHovered(false);
        e.currentTarget.style.boxShadow = "none";
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Tooltip */}
      <motion.div
        initial="hidden"
        animate={hovered ? "show" : "hidden"}
        variants={tooltipVariants}
        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1
                   rounded-md text-xs font-medium whitespace-nowrap
                   backdrop-blur"
        style={{
          background: "rgba(15, 23, 42, 0.65)", // slate-900/65-ish, looks good on light/dark
          border: `1px solid ${color}66`,
          boxShadow: `0 6px 20px ${color}40`,
          color: "#E5E7EB", // neutral text
        }}
      >
        {name}
        {/* small pointer triangle */}
        <span
          aria-hidden
          className="absolute left-1/2 -bottom-1.5 -translate-x-1/2"
          style={{
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: `6px solid ${color}66`,
            filter: "blur(0.2px)",
          }}
        />
      </motion.div>

      <Icon color={color} />
    </motion.div>
  );
}

export default function DevIconsMarquee() {
  const track = [...ICONS];

  return (
    <div className=" bg-transparent py-12 md:w-11/12 2xl:w-10/12 md:mx-auto">
      <div className="w-full mx-auto relative overflow-hidden p-0 bg-transparent">
        <div className="flex items-center gap-3 ">
          <h1 className="2xl:text-3xl text-2xl font-extrabold tracking-tight">
            Dev tools
          </h1>
          <span className="text-sm opacity-70">• frameworks • libs • runtimes</span>
        </div>

        <div className="relative h-24 sm:h-28 md:h-35 overflow-hidden">

          <motion.div
            className="absolute left-0 top-0 py-12 whitespace-nowrap  flex items-center gap-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear", delay: 0.1 }}
            style={{ minWidth: "200%" }}
          >
            {[...track, ...track].map((item, i) => (
              <IconPill
                key={`B-${i}-${item.name}`}
                Icon={item.Icon}
                color={item.color}
                name={item.name}
                index={i + 3}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
