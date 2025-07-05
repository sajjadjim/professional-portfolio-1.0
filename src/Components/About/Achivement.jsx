import React from 'react';
import { Link } from 'react-router';
import NDA from '../../assets/Achivement/NDA_Certificate.png';
import selfEstimate from '../../assets/Achivement/self_Estimate.png';
import Spoken from '../../assets/Achivement/spoken_English.png';
import Ai_Power from '../../assets/Achivement/Ai_Using.png';
import { Slide } from 'react-awesome-reveal';


const Achievement = () => {
    return (
        <div className='py-10 bg-black'>
            <div className='max-w-9/12 mx-auto '>
            <h2 className="text-3xl md:my-10 my-5 text-white font-bold text-left  pb-3  ">
                Achievement.
            </h2>
            <Slide direction="up" duration={2000} triggerOnce >
               <div className='flex flex-col justify-center items-center  lg:flex-row flex-wrap gap-6'>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={selfEstimate}
                        alt="Programming"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">Self-esteem & Be you</p>
                            <Link to={'https://drive.google.com/file/d/1lzNGhr-QLLEnPyfmkvrMP2MmmkT7djN9/view?usp=drive_link'} className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={NDA}
                        alt="NDA certificate"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">National Skill Certificate 2025</p>
                            <Link to={'https://drive.google.com/file/d/1zj_b2HBTc5K_-bhXJiPj0M2lI3pDZgvq/view?usp=drive_link'} className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={Spoken}
                        alt="Spoken"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">Spoken English certificate </p>
                            <Link to={'https://drive.google.com/file/d/1fSDTcMTy4SXX3K_xdMshVJnq0PGtKGRt/view?usp=drive_link'} className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-xs relative group rounded-md shadow-md overflow-hidden">
                    <img
                        src={Ai_Power}
                        alt="Hacker Rank css"
                        className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                    />

                    
                    <div className="absolute inset-0 bg-black/60  flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center">
                            <p className="text-lg font-semibold mb-2">AI Power</p>
                            <Link to={'https://drive.google.com/file/d/1OgEx9ng2On-_8wqE5dTkwheYWFminkOC/view?usp=drive_link'} className="underline text-sm cursor-pointer">View</Link>
                        </div>
                    </div>
                </div>
            </div>
            </Slide>
        </div>
        </div>
    );
};

export default Achievement;