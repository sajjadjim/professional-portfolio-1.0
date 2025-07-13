import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';
import { FreeMode, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaEye } from 'react-icons/fa';

export default function Section3() {
    const swiperRef = useRef(null);
    const [projectData, setProjectData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null); // for modal

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sajjadjim/sajjadjim/refs/heads/main/project.json')
            .then((response) => response.json())
            .then((data) => {
                setProjectData(data);
            });
    }, []);

    return (
        <motion.div className="py-12 md:w-10/12  md:mx-auto px-4 text-center relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-left md:mb-10">
                Projects.
            </h2>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="card border-t-6 shadow-md  shadow-teal-600  border-teal-600 bg-[#111] w-96 mx-auto  hover:shadow-lg transition">
                            <figure
                                className="hover:opacity-80 transition duration-200 cursor-pointer"
                            >
                                <div className="p-2 relative group rounded-md shadow-md overflow-hidden">
                                    <img
                                        src={project.image || "https://images.jdmagicbox.com/rep/b2b/new-year-greeting-card/new-year-greeting-card-10.jpg"}
                                        alt={project.name}
                                    />

                                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="transform translate-y-10 grid  justify-items-center group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                                            <p className="text-lg font-semibold mb-2">{project.name}</p>
                                            <button
                                                className="underline text-sm cursor-pointer  flex items-center gap-1"
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                <FaEye /> See More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {project.name}
                                    <div className="badge  bg-linear-to-r from-cyan-500 to-blue-500">{project.category}</div>
                                </h2>
                                <p>{project.description}</p>
                                <div className="card-actions justify-end flex-wrap">
                                    {project.technologies?.map((tech, techIndex) => (
                                        <div key={techIndex} className="badge badge-outline">
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
                                            className="btn btn-sm bg-teal-600 rounded-lg hover:bg-[#111] hover:border-[1px] hover:border-teal-500 hover:text-teal-600 "
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Live View
                                        </a>
                                    )}
                                    {project.clientCode && (
                                        <a
                                            href={project.clientCode}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm rounded-lg border-teal-600 text-teal-600  hover:text-white hover:bg-teal-600"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Client Side
                                        </a>
                                    )}
                                    {project.serverCode && (
                                        <a
                                            href={project.serverCode}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm rounded-lg bg-[#111] btn-outline border-teal-600 text-teal-600  hover:text-white hover:bg-teal-600"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Server Side
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-6 mt-8">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-teal-600 hover:bg-black cursor-pointer hover:border-teal-500 hover:border-[1px] hover:text-teal-500 text-white px-6 py-2 rounded-full shadow-md flex items-center  gap-2 transition"
                >
                    <ArrowLeft size={18} /> Prev
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="bg-teal-600 hover:bg-black cursor-pointer hover:border-teal-500 hover:border-[1px] hover:text-teal-500 text-white px-6 py-2 rounded-full shadow-md flex items-center  gap-2 transition"
                >
                    Next <ArrowRight size={18} />
                </button>
            </div>

            {/* Modal with blurred background */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center text-black justify-center backdrop-blur-sm">
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
                                        className="w-100 h-40 object-cover rounded "
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

            {/* Beautiful Show All Button */}
            <div className="flex justify-center mt-10">
                <Link
                    to='/project'
                    className="relative inline-block px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-cyan-500  to-teal-500 text-white shadow-lg hover:scale-90 hover:shadow-2xl transition-all duration-300 group overflow-hidden  hover:text-white"
                >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full"></span>
                    <span className="relative z-10 tracking-wide flex items-center gap-2">
                        Show All
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </Link>
            </div>
        </motion.div>
    );
}
