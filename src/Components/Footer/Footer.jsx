import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from "react-simple-typewriter";

const Footer = () => {
    return (
        <footer className="md:w-10/12 mx-auto    text-white py-8">
            {/* Current Day and Date  */}
            <div className="text-sm text-center my-5 ">
                {new Date().toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
                <br />
                <span className="ml-2">
                    {new Date().toLocaleTimeString(undefined, {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true // This adds AM/PM
                    })}
                </span>
            </div>
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Logo / Name */}
                <div className="text-xl font-bold">Sajjad <span className='text-teal-700'>JIM.</span></div>

                {/* Nav Links */}
                <ul className="flex gap-6 text-sm font-medium">
                    <h1 className="text-xl  font-bold ">
                        <Typewriter
                            words={['Welcome to visit ❤️‍🔥', 'Thank You', 'For Visit My Portfolio']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={70}
                            delaySpeed={2000}
                        />
                    </h1>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="https://github.com/sajjadjim" target="_blank" rel="noopener noreferrer">
                        <Github className="hover:text-teal-500 transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/sajjadjim/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="hover:text-teal-500 transition" />
                    </a>
                    <a href="mailto:sajjadjim15@gmail.com">
                        <Mail className="hover:text-teal-500 transition" />
                    </a>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Jim. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
