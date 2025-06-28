import { div } from 'framer-motion/client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sajjadjim/sajjadjim/main/project.json')
            .then((res) => res.json())
            .then((data) => setProjectData(data));
    }, []);

    return (
        <div className='bg-black'>
            <div className=" md:w-9/12 mx-auto text-white min-h-screen md:py-20 py-15 md:p-8"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-600">Projects.</h1>

                {projectData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    const { name, description, technologies, screenshots, clientCode, serverCode, liveLink } = project;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [screenshots.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    };

    return (
        <motion.div className="md:flex border-teal-600 border rounded-xl md:p-3 p-2 mb-6 bg-black text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Image Slider */}
            <div className="relative w-full md:w-1/3 aspect-video rounded-xl overflow-hidden">
                {screenshots.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}

                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-1 opacity-80 hover:opacity-100"
                >
                    ←
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white rounded-full p-1 opacity-80 hover:opacity-100"
                >
                    →
                </button>
            </div>

            {/* Project Info */}
            <div className="md:ml-6 mt-4 md:mt-0 w-full md:w-2/3 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                    <p className="text-sm mb-4">{description}</p>

                    <h3 className="font-bold mb-2 text-teal-600">Technology</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, i) => (
                            <span key={i} className="bg-teal-600 px-3 py-1 text-xs rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 text-sm md:text-base font-semibold">
                    {clientCode && (
                        <a href={clientCode} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                            Client Code 🔗
                        </a>
                    )}
                    {serverCode && (
                        <a href={serverCode} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                            Server Code 🔗
                        </a>
                    )}
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600">
                            Live Site 🌐
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default App;
