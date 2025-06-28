import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'
import { GoFile } from "react-icons/go";
import { MdPhone } from "react-icons/md";
// Floating keywords array
const keywords = [
    "React", "Node.js", "Express.js", "Next.js", 'C', 'C++', "JavaScript", "Python",
    "TypeScript", "React Testing Library", "HTML", "CSS", "Firebase",
    "JWT", "Git", "GitHub", "C#", "MongoDB", "MySQL", "RESTful APIs",
    "Tailwind CSS"
];

export default function Section1() {



    return (
        <section className="relative md:w-10/12 md:mt-[-120px] mx-auto overflow-hidden  flex flex-col md:flex-row  items-center justify-center min-h-screen bg-black text-white px-6 md:px-20 gap-10">
            {/* Floating Keywords Background */}
            {keywords.map((text, index) => (
                <span
                    key={index}
                    className="absolute text-gray-400 text-sm animate-float pointer-events-none"
                    style={{
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 90}%`,
                        animationDuration: `${8 + Math.random() * 8}s`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                >
                    {text}
                </span>
            ))}

            {/* Left Side */}
            <div className="z-10  md:flex  gap-5 items-start space-y-4">
                <div className="flex gap-5 md:gap-1 md:flex-col space-y-4 text-xl">
                    <FaFacebook className="hover:scale-110  transition-transform" />
                    <FaLinkedin className="hover:scale-110  transition-transform" />
                    {/* <FaInstagram className="hover:scale-110 transition-transform" /> */}
                    <FaXTwitter className="hover:scale-110 transition-transform" />
                    <a href="http://github.com/sajjadjim" ><FaGithub className="hover:scale-110 transition-transform" /></a>
                </div>

                <div className="md:w-250">
                    <h3 className="md:text-2xl">Sajjad Hossain JIM<span className="ml-1">&lt;/&gt;</span></h3>
                    <p className="md:text-6xl my-5 ">I am</p>
                    <h1 className="md:text-5xl font-bold "><span className="" style={{ fontWeight: 'bold', marginTop: '50px', textAlign: 'center' }}>
                        <span>
                            {' '}
                            <span style={{ color: "white", backgroundColor: "transparent" }}>
                                <Typewriter
                                    words={['Programer', 'Web Developer', 'Problem Solver']}
                                    loop={0} // 0 = infinite loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={70}
                                    delaySpeed={2000}
                                />
                            </span>
                        </span>
                    </span></h1>
                    <div className="flex space-x-4 md:mt-15">
                        <a className="btn  font-bold hover:bg-linear-to-r from-cyan-500 to-blue-500 text-white">Resume <GoFile className=" text-white"></GoFile></a>
                        <a src="http://wa.me/+8801600101810" variant="outline" className="btn  font-bold">Contact <MdPhone className="text-white"></MdPhone></a>
                    </div>
                </div>


            </div>

            {/* Right Side - Hover Image */}
            <div className="z-10 relative group w-72 h-96 md:w-80 md:h-[420px] overflow-hidden rounded-2xl shadow-lg">
                <img
                    src="../../../../public/images/IMG_1493~2.JPG"
                    alt="Profile"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                    src="../../../../public/images/My Picture.jpg"
                    alt="Profile Hover"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
            </div>



        </section>
    );
}
