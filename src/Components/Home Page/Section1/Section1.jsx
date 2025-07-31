import React from "react";
import {
    FaFacebook,
    FaLinkedin,
    FaXTwitter,
    FaGithub,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { GoFile } from "react-icons/go";
import { MdPhone } from "react-icons/md";

// Floating keywords array
const keywords = [
    "React", "Node.js", "Express.js", "Next.js", "C", "C++", "JavaScript", "Python",
    "TypeScript", "React Testing Library", "HTML", "CSS", "Firebase",
    "JWT", "Git", "GitHub", "C#", "MongoDB", "MySQL", "RESTful APIs",
    "Tailwind CSS", "Bootstrap", "Material UI", "Framer Motion", "Redux", "Socket.IO",
];

export default function Section1() {
    return (
        <section className="relative 2xl:w-10/12 lg:w-11/12 mx-auto 2xl:py-30 lg:py-20 pt-15 flex items-center justify-center px-4 md:px-16 bg-black text-white overflow-hidden">
            {/* Floating keywords */}
            {keywords.map((text, index) => (
                <span
                    key={index}
                    className="absolute text-gray-700 md:block none text-sm animate-float pointer-events-none"
                    style={{
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 90}%`,
                        animationDuration: `${8 + Math.random() * 8}s`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                >
                    {text}
                </span>
            ))}

            <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6 w-full max-w-7xl z-10">
                {/* Left content */}
                <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                    {/* Social Icons */}
                    <div className="flex gap-4 md:gap-4 md:flex-col text-xl self-center md:self-start">
                        <a href="https://www.linkedin.com/in/sajjadjim/"><FaLinkedin className="hover:scale-110 hover:text-teal-600 transition-transform" /></a>
                        <a href="https://github.com/sajjadjim"><FaGithub className="hover:scale-110 hover:text-teal-600 transition-transform" /></a>
                        <a href="https://leetcode.com/sajjadjim/"><SiLeetcode className="hover:scale-110 hover:text-teal-600 transition-transform" /></a>
                        <a href="https://x.com/sajjad_jim15"><FaXTwitter className="hover:scale-110 hover:text-teal-600 transition-transform" /></a>
                        <a href="https://www.facebook.com/sajjad.hossain.jim/"><FaFacebook className="hover:scale-110 hover:text-teal-600 transition-transform" /></a>
                    </div>
                    <div className="flex-1 space-y-4">
                        <h3 className="text-2xl 2xl:text-3xl font-semibold flex items-center gap-2">
                            Sajjad Hossain JIM
                            <span>
                                <img
                                    src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif"
                                    width="32"
                                    alt="Languages Icon"
                                />
                            </span>
                        </h3>
                        <div className="flex items-center gap-3">
                            <p className="text-3xl 2xl:text-5xl">I am</p>
                            <span className="text-lg 2xl:text-2xl  text-teal-500 font-medium border border-teal-400 rounded-full px-3 py-1 bg-black/40  hover:bg-teal-500 hover:text-white transition duration-300">
                                Web Developer
                            </span>
                        </div>
                        <h1 className="text-3xl 2xl:text-5xl font-bold text-teal-500">
                            <Typewriter
                                words={['Programmer', 'Web Developer', 'Problem Solver']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={50}
                                deleteSpeed={70}
                                delaySpeed={2000}
                            />
                        </h1>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <a
                                href="https://drive.google.com/file/d/1uAL88yRxC6jsrhCGFBZNsDaHGZ8B59Wr/view?usp=drive_link" target="_blank"
                                className="flex items-center gap-2 bg-linear-to-r from-cyan-500 to-blue-500 hover:bg-linear-to-t from-sky-500 to-indigo-500 text-white font-semibold py-2 px-4 rounded-full hover:scale-105 transition"
                            >
                                Resume <GoFile />
                            </a>
                            <a
                                href="https://wa.me/8801600101810"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-white text-white font-semibold py-2 px-4 rounded-full hover:bg-white hover:scale-110 hover:text-black  transition duration-400"
                            >
                                Contact <MdPhone />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Profile Picture */}
                <div className="relative group w-72 h-96 md:w-80 2xl:h-[320px] lg:h-[280px] overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src="https://github.com/sajjadjim/sajjadjim/blob/main/images/My_Picture1.JPG?raw=true"
                        alt="Profile"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                        src="https://github.com/sajjadjim/sajjadjim/blob/main/images/My_Picture2.jpg?raw=true"
                        alt="Profile Hover"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </div>
            </div>
        </section>
    );
}
