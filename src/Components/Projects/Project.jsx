import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaServer, FaGlobe, FaThList, FaThLarge, FaEye } from 'react-icons/fa';
import Skills from '../Skill/Skill';

const Project = () => {
    const [projectData, setProjectData] = useState([]);
    const [viewMode, setViewMode] = useState('slider');
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 5;

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sajjadjim/sajjadjim/main/project.json')
            .then((res) => res.json())
            .then((data) => setProjectData(data));
    }, []);

    const totalPages = Math.ceil(projectData.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const currentProjects = projectData.slice(startIndex, startIndex + projectsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className='bg-black min-h-screen'>
            <div className="2xl:w-9/12 lg:w-11/12 mx-auto text-white md:py-25 py-15 px-4">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl 2xl:text-3xl font-bold">Projects.</h1>
                    <div className="flex gap-4 2xl:text-xl">
                        <button
                            onClick={() => setViewMode('slider')}
                            className={`p-2 rounded-full cursor-pointer ${viewMode === 'slider' ? 'bg-teal-600' : 'bg-gray-700'} hover:bg-teal-500`}
                        >
                            <FaThList />
                        </button>
                        <button
                            onClick={() => setViewMode('card')}
                            className={`p-2 rounded-full cursor-pointer ${viewMode === 'card' ? 'bg-teal-600' : 'bg-gray-700'} hover:bg-teal-500`}
                        >
                            <FaThLarge />
                        </button>
                    </div>
                </div>

                {viewMode === 'slider' ? (
                    currentProjects.map((project, index) => (
                        <ProjectSliderCard key={index} project={project} onSeeMore={() => setSelectedProject(project)} />
                    ))
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentProjects.map((project, index) => (
                            <CardView key={index} project={project} onSeeMore={() => setSelectedProject(project)} />
                        ))}
                    </div>
                )}

                <div className="flex justify-center mt-8 gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-teal-600 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-teal-600 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </div>
    );
};

const ProjectSliderCard = ({ project, onSeeMore }) => {
    const { name, description, technologies, screenshots, clientCode, serverCode, liveLink } = project;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [screenshots.length]);

    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length);

    return (
        <motion.div className="md:flex border-teal-600 border-t-4 border-r-2 rounded-xl  md:p-3 p-2 mb-6 bg-[#111]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="relative w-full md:w-1/3 aspect-video rounded-xl overflow-hidden">
                {screenshots.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'} ${idx === currentIndex ? 'hover:scale-105' : ''}`}
                        style={{ zIndex: idx === currentIndex ? 1 : 0 }}
                    />
                ))}
                <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-1 opacity-80 hover:opacity-100">←</button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white rounded-full p-1 opacity-80 hover:opacity-100">→</button>
            </div>

            <div className="md:ml-6 mt-4 md:mt-0 w-full md:w-2/3 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                    <p className="text-sm mb-4">{description}</p>
                    <h3 className="font-bold mb-2 text-teal-600">Uses Framework :</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, i) => (
                            <span key={i} className="bg-teal-600 px-3 py-1 text-xs rounded-full hover:shadow-sm hover:shadow-teal-500 cursor-pointer transition duration-300">{tech}</span>
                        ))}
                    </div>
                </div>
                <ProjectLinks clientCode={clientCode} serverCode={serverCode} liveLink={liveLink} onSeeMore={onSeeMore} />
            </div>
        </motion.div>
    );
};

const CardView = ({ project, onSeeMore }) => {
    const { name, description, technologies, screenshots, clientCode, serverCode, liveLink } = project;

    return (
        <motion.div
            className="bg-[#111] rounded-xl overflow-hidden p-4  border-t-5 border-r-3 border-teal-600"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >
            <img src={screenshots[0]} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
            <p className="text-sm mb-3 text-gray-300">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, i) => (
                    <span key={i} className="bg-teal-600 px-2 py-1 text-xs rounded-full">{tech}</span>
                ))}
            </div>
            <ProjectLinks clientCode={clientCode} serverCode={serverCode} liveLink={liveLink} onSeeMore={onSeeMore} />
        </motion.div>
    );
};

const ProjectLinks = ({ clientCode, serverCode, liveLink, onSeeMore }) => (
    <div className="flex justify-between items-center w-full">
        <div className="flex flex-wrap gap-4 text-sm font-semibold mt-2">
            {clientCode && (
                <a href={clientCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-teal-400">
                    <FaGithub className="text-pink-400 text-lg" /> Client
                </a>
            )}
            {serverCode && (
                <a href={serverCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-teal-400">
                    <FaServer className="text-gray-400 text-lg" /> Server
                </a>
            )}
            {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-teal-400">
                    <FaGlobe className="text-blue-400 text-lg" /> Live
                </a>
            )}
        </div>
        {onSeeMore && (
            <button
                onClick={onSeeMore}
                className="flex cursor-pointer items-center gap-2 text-sm text-teal-500 underline hover:text-teal-300"
            >
                <FaEye className="text-lg" /> See More
            </button>
        )}
    </div>
);

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-70 p-4">
            <div className="bg-[#111] text-white rounded-xl shadow-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh] relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 cursor-pointer text-white text-2xl font-bold hover:text-teal-400"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <p className="text-sm mb-4">Description: {project.short_description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {project.screenshots.map((img, i) => (
                        <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="rounded-lg w-full h-48 object-cover" />
                    ))}
                </div>
                <div className="mb-4">
                    <h3 className="text-teal-400 font-semibold mb-2">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="bg-teal-600 px-3 py-1 text-xs rounded-full">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <ProjectLinks
                        clientCode={project.clientCode}
                        serverCode={project.serverCode}
                        liveLink={project.liveLink}
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
