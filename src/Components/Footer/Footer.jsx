import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="md:w-10/12 mx-auto    text-white py-8">
            {/* Current Day and Date */}
            <div className="text-sm text-center my-5 text-gray-400">
                {new Date().toLocaleDateString(undefined, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </div>
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Logo / Name */}
                <div className="text-xl font-bold">Sajjad JIM.</div>

                {/* Nav Links */}
                <ul className="flex gap-6 text-sm font-medium">
                    <li className="hover:text-indigo-400 cursor-pointer transition">Home</li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">Projects</li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">About</li>
                    <li className="hover:text-indigo-400 cursor-pointer transition">Contact</li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <Github className="hover:text-indigo-400 transition" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="hover:text-indigo-400 transition" />
                    </a>
                    <a href="mailto:yourmail@example.com">
                        <Mail className="hover:text-indigo-400 transition" />
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
