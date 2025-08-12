import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaServer, FaGlobe, FaThList, FaThLarge, FaEye } from 'react-icons/fa';

const Project = () => {
    const [projectData, setProjectData] = useState([]);
    const [viewMode, setViewMode] = useState('slider');
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const projectsPerPage = 4;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://raw.githubusercontent.com/sajjadjim/sajjadjim/main/project.json');
                const data = await res.json();
                setProjectData(data);
                setTimeout(() => setLoading(false), 700); // Wait 1.2s before removing spinner
            } catch (err) {
                console.error("Error loading project data:", err);
                setError(true);
            }
        };

        fetchData();
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

    // Loading or Error state screen
    if (loading || error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900  to-gray-900/30 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                    <p className="text-white text-lg font-semibold">
                        {error ? "Failed to load projects. Retrying..." : "Loading projects..."}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-gradient-to-br from-gray-900  to-violet-900/30 min-h-screen'>
            <div className="2xl:w-9/12 lg:w-11/12 mx-auto text-white md:pt-25 pt-15 px-4">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl 2xl:text-3xl font-bold">Projects.</h1>
                    <div className="flex gap-4 2xl:text-xl">
                        <button
                            onClick={() => setViewMode('slider')}
                            className={`p-2 rounded-full cursor-pointer ${viewMode === 'slider' ? 'bg-blue-800' : 'bg-gray-700'} hover:bg-blue-500`}
                        >
                            <FaThList />
                        </button>
                        <button
                            onClick={() => setViewMode('card')}
                            className={`p-2 rounded-full cursor-pointer ${viewMode === 'card' ? 'bg-blue-800' : 'bg-gray-700'} hover:bg-blue-500`}
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
                            <CardView key={index} index={index} project={project} onSeeMore={() => setSelectedProject(project)} />
                        ))}
                    </div>
                )}

{/* button prev next and number pazination code here  */}
                <div className="flex justify-center mt-10 gap-4 pb-15 items-center">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="2xl:px-4 2xl:py-2 lg:px-2 lg:py-1 px-3 py-2 cursor-pointer bg-gray-800 text-white rounded hover:bg-blue-800 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                            <button
                                key={num}
                                onClick={() => setCurrentPage(num)}
                                className={`px-[10px] py-[4px] cursor-pointer rounded-full text-sm font-semibold ${currentPage === num ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'} hover:bg-blue-500`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="2xl:px-4 2xl:py-2 lg:px-2 lg:py-1 px-3 py-2 cursor-pointer bg-gray-800 text-white rounded hover:bg-blue-800 disabled:opacity-50"
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


    // list view items 
    return (
        <motion.div
            className="md:flex border-blue-900/60 border-1 rounded-2xl md:p-4 p-3 mb-8  shadow-lg hover:shadow-blue-900  group bg-gradient-to-br from-gray-900  to-blue-950/30  
            hover:bg-gradient-to-br hover:from-gray-900/40 hover:to-blue-950/30 
            transition duration-300"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="relative w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-inner"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {screenshots.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className={`absolute w-full h-full object-cover transition-opacity duration-700 rounded-xl ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ zIndex: idx === currentIndex ? 1 : 0 }}
                    />
                ))}
                <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-1 opacity-80 hover:opacity-100">←</button>
                <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-950 text-white rounded-full p-1 opacity-80 hover:opacity-100">→</button>
            </motion.div>

            <motion.div
                className="md:ml-6 mt-4 md:mt-0 w-full md:w-2/3 flex flex-col justify-between"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <div>
                    <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-white transition-all">{name}</h2>
                    <p className="text-sm mb-4 text-gray-300">{description}</p>
                    <h3 className="font-bold mb-2 ">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, i) => (
                            <span key={i} className="bg-blue-900 cursor-pointer px-3 py-1 text-xs rounded-full text-white shadow-md">{tech}</span>
                        ))}
                    </div>
                </div>
                <ProjectLinks clientCode={clientCode} serverCode={serverCode} liveLink={liveLink} onSeeMore={onSeeMore} />
            </motion.div>
        </motion.div>
    );
};

const CardView = ({ project, onSeeMore, index }) => {
    const { name, description, technologies, screenshots, clientCode, serverCode, liveLink } = project;
    const fromX = index % 2 === 0 ? -50 : 50;

    return (
        <motion.div
            className=" rounded-xl overflow-hidden p-4 border-1  border-blue-900
            bg-gradient-to-br from-gray-900  to-blue-900/30
            hover:bg-gradient-to-br hover:from-gray-800/40 hover:to-blue-950/10
            cursor-pointer  hover:shadow-md hover:shadow-blue-900 transition duration-300"
            initial={{ opacity: 0, x: fromX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <img src={screenshots[0]} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
            <p className="text-sm mb-3 text-gray-300">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-900 px-2 py-1 text-xs rounded-full">{tech}</span>
                ))}
            </div>
            <ProjectLinks clientCode={clientCode} serverCode={serverCode} liveLink={liveLink} onSeeMore={onSeeMore} />
        </motion.div>
    );
};

const ProjectLinks = ({ clientCode, serverCode, liveLink, onSeeMore }) => (
    <div className="flex justify-between items-center w-full">
        <div className="flex flex-wrap gap-4 text-sm font-semibold mt-2">
            {clientCode && <a href={clientCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400"><FaGithub className="text-pink-400 text-lg" /> Client</a>}
            {serverCode && <a href={serverCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400"><FaServer className="text-gray-400 text-lg" /> Server</a>}
            {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400"><FaGlobe className="text-blue-400 text-lg" /> Live</a>}
        </div>
        {onSeeMore && <button onClick={onSeeMore} className="flex cursor-pointer items-center gap-2 text-sm text-blue-400 underline hover:text-white"><FaEye className="text-lg" /> See More</button>}
    </div>
);

const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-70 p-4">
        <div className="bg-gradient-to-br from-gray-900 via-black/60  to-violet-950/40 text-white rounded-xl shadow-lg max-w-3xl w-full p-6 overflow-y-auto max-h-[90vh] relative">
            <button onClick={onClose} className="absolute top-2 right-3 cursor-pointer text-white text-2xl font-bold hover:text-teal-400">&times;</button>
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="text-sm mb-4">Description: {project.short_description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {project.screenshots.map((img, i) => (
                    <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="rounded-lg w-full h-48 object-cover" />
                ))}
            </div>
            <div className="mb-4">
                <h3 className=" font-semibold mb-2">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-900 px-3 py-1 text-xs rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <ProjectLinks clientCode={project.clientCode} serverCode={project.serverCode} liveLink={project.liveLink} />
            </div>
        </div>
    </div>
);

export default Project;
