import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';
import { FreeMode, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaServer, FaEye } from 'react-icons/fa';

export default function Section3() {
    const swiperRef = useRef(null);
    const [projectData, setProjectData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);  // Track active slide index

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sajjadjim/sajjadjim/main/project.json')
            .then((response) => response.json())
            .then((data) => {
                setProjectData(data);
            });
    }, []);

    // Update activeIndex when swiper changes slide
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    const renderProjectCard = (project, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card  shadow-md shadow-blue-950 border-1 border-blue-900/70  w-96 mx-auto hover:shadow-lg transition"
        >
            {/* ... your existing render code for project card ... */}
            <figure className="hover:opacity-80 transition duration-200 cursor-pointer">
                <div className="p-2 relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={project.image || "https://images.jdmagicbox.com/rep/b2b/new-year-greeting-card/new-year-greeting-card-10.jpg"}
                        alt={project.name}
                    />
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 grid justify-items-center group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">{project.name}</p>
                            <button
                                className="underline text-sm cursor-pointer flex items-center gap-1"
                                onClick={() => setSelectedProject(project)}
                            >
                                <FaEye /> See More
                            </button>
                        </div>
                    </div>
                </div>
            </figure>
            <div className="card-body bg-gradient-to-br from-gray-900  to-gray-900/30 cursor-pointer 
            hover:bg-gradient-to-br hover:from-gray-800/40 hover:to-blue-900/30 
            transition duration-300">
                <h2 className="card-title">
                    {project.name}
                    <div className="badge bg-linear-to-r from-cyan-500 to-blue-500">{project.category}</div>
                </h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end flex-wrap">
                    {project.technologies?.map((tech, techIndex) => (
                        <div key={techIndex} className="badge 2xl:block lg:hidden block badge-outline">
                            {tech}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-2 gap-2">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm bg-blue-900 rounded-lg hover:bg-transparent hover:border-[1px] hover:border-blue-950 hover:text-white transition duration-400"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaExternalLinkAlt className="inline mr-1" /> Live View
                        </a>
                    )}
                    {project.clientCode && (
                        <a
                            href={project.clientCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm rounded-lg border-blue-900  bg-transparent  hover:text-white hover:bg-blue-900 transition duration-400"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaCode className="inline mr-1" /> Client Side
                        </a>
                    )}
                    {project.serverCode && (
                        <a
                            href={project.serverCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm rounded-lg border-blue-900  bg-transparent  hover:text-white hover:bg-blue-900 transition duration-400"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaServer className="inline mr-1" /> Server Side
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );

    // Total slides count for first 3 projects (0 to 2)
    const maxIndex = Math.max(0, projectData.length > 3 ? 3 - 1 : projectData.length - 1);
    // Actually, since slidesPerView is 3, max index for slideTo should be (projectData.length - slidesPerView)
    // But since we only show first 3 projects in swiper, maxIndex = 0 (only 3 slides)

    // But you want to show 3 slides at a time and navigate through all projects?
    // So let's assume you want to show ALL projects in swiper? 
    // If so, change slice(0,3) to slice(0, projectData.length)

    // Then maxIndex = projectData.length - slidesPerView (3)

    const slidesToShow = 3; // same as slidesPerView

    // Adjust max index for sliding
    const maxSlideIndex = projectData.length > slidesToShow ? projectData.length - slidesToShow : 0;

    return (
        <motion.div className="py-12 md:w-11/12 2xl:w-10/12 md:mx-auto px-4 text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl 2xl:text-3xl font-bold mb-5 text-left md:mb-10">
                Projects.
            </h2>

            {/* Swiper for ALL projects */}
            <Swiper
                onSwiper={(swiper) => { swiperRef.current = swiper }}
                onSlideChange={handleSlideChange}
                slidesPerView={slidesToShow}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                    1536: { slidesPerView: 3 },
                }}
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        {renderProjectCard(project, index)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            {!showMore && (
                <div className="flex justify-center gap-6 mt-8">
                    <button
                        onClick={() => {
                            if (!swiperRef.current) return;
                            let newIndex = activeIndex - slidesToShow;
                            if (newIndex < 0) newIndex = 0;
                            swiperRef.current.slideTo(newIndex);
                        }}
                        disabled={activeIndex === 0}
                        className={` bg-blue-900 cursor-pointer hover:border-blue-950/50 hover:border-[1px]  px-6 2xl:py-2 py-1 rounded-full shadow-md flex items-center gap-2 transition duration-400 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ArrowLeft size={18} /> Prev
                    </button>
                    <button
                        onClick={() => {
                            if (!swiperRef.current) return;
                            let newIndex = activeIndex + slidesToShow;
                            if (newIndex > maxSlideIndex) newIndex = maxSlideIndex;
                            swiperRef.current.slideTo(newIndex);
                        }}
                        disabled={activeIndex >= maxSlideIndex}
                        className={`bg-blue-900 cursor-pointer hover:border-blue-950/50 hover:border-[1px]  px-6 2xl:py-2 py-1 rounded-full shadow-md flex items-center gap-2 transition duration-400 ${activeIndex >= maxSlideIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Next <ArrowRight size={18} />
                    </button>
                </div>
            )}

            {/* Animated grid for next 6 projects */}
            <AnimatePresence>
                {showMore && (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 60 }}
                        transition={{ duration: 0.6 }}
                    >
                        {projectData.slice(3, 9).map((project, index) =>
                            renderProjectCard(project, index + 3)
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Show More / Less Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={() => setShowMore((prev) => !prev)}
                    className="relative inline-block px-5 py-2 font-semibold rounded-full bg-blue-900 cursor-pointer shadow-lg hover:scale-102 hover:shadow-2xl transition-all duration-300 group overflow-hidden "
                >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full"></span>
                    <span className="relative z-10 tracking-wide flex items-center gap-2">
                        {showMore ? 'Show Less' : 'Show More'}
                        {/* <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg> */}
                    </span>
                </button>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed  inset-0 z-50 flex items-center text-black justify-center backdrop-blur-sm">
                    <div className="bg-white/80 max-w-md w-full rounded-xl p-6 relative shadow-xl border border-gray-300">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
                        >
                            <X size={20} />
                        </button>
                        <h3 className="text-xl font-bold mb-2">{selectedProject.name}</h3>
                        <p className="mb-4">{selectedProject.short_description}</p>
                        <div>
                            <p className='text-left mb-5 font-bold'>Projects Images.</p>
                            <div className="grid grid-cols-3 gap-2">
                                {selectedProject.screenshots?.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Screenshot ${index + 1}`}
                                        className="w-100 h-40 object-cover rounded"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4 mt-4">
                            {selectedProject.technologies?.map((tech, i) => (
                                <span key={i} className="badge badge-outline">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
