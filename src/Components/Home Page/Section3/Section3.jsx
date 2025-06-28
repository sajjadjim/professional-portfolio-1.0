import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './style.css';
import { FreeMode, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export default function Section3() {
    const swiperRef = useRef(null);
    const [projectData, setProjectData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null); // for modal

    useEffect(() => {
        fetch('public/Project Data/project.json')
            .then((response) => response.json())
            .then((data) => {
                setProjectData(data);
            });
    }, []);

    return (
        <div className="py-12 md:w-10/12 md:mx-auto px-4 text-center relative">
            <h2 className="text-2xl md:text-6xl font-bold mb-5 text-left md:mb-10">
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
                        <div className="card bg-base-100 w-96 mx-auto shadow-sm hover:shadow-lg transition">
                            <figure
                                onClick={() => setSelectedProject(project)}
                                className="hover:opacity-80 transition duration-200 cursor-pointer"
                            >
                                <img
                                    src={project.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                                    alt={project.name}
                                />
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
                                            className="btn btn-sm bg-teal-700 hover:bg-teal-400"
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
                                            className="btn btn-sm btn-outline"
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
                                            className="btn btn-sm btn-outline"
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
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow-md flex items-center gap-2 transition"
                >
                    <ArrowLeft size={18} /> Prev
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow-md flex items-center gap-2 transition"
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

        </div>
    );
}
