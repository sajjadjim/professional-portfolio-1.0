import React from 'react';
import NDA from '../../assets/Achivement/NDA_Certificate.png';
import selfEstimate from '../../assets/Achivement/self_Estimate.png';
import Spoken from '../../assets/Achivement/spoken_English.png';
import Ai_Power from '../../assets/Achivement/Ai_Using.png';
import { Slide } from 'react-awesome-reveal';
import { GiLaurelsTrophy } from "react-icons/gi";


const Achievement = () => {
  return (
    <div className=' bg-black'>
      <div className='2xl:max-w-9/12 lg:w-11/12 mx-auto'>
        <h2 className="text-2xl 2xl:text-4xl md:my-10 my-5 md:mx-0 flex gap-2 text-white font-bold text-left pb-3">
          <GiLaurelsTrophy></GiLaurelsTrophy>  Achievement.
        </h2>

        <Slide direction="up" duration={2000} triggerOnce>
          {/* Container with horizontal scroll on small devices */}
          <div className='w-full overflow-x-auto lg:overflow-visible'>
            {/* Flex container for cards; horizontal scroll on small, wrap on large */}
            <div className='flex gap-6 min-w-[600px] sm:min-w-full lg:flex-wrap lg:min-w-0 lg:justify-center'>

              {/* Card 1 */}
              <div className="min-w-[250px] max-w-xs flex-shrink-0 relative group rounded-md shadow-md overflow-hidden">
                <img
                  src={selfEstimate}
                  alt="Self-esteem & Be you"
                  className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center px-3">
                    <p className="text-lg font-semibold mb-2">Self-esteem & Be you</p>
                    <a
                      href="https://drive.google.com/file/d/1lzNGhr-QLLEnPyfmkvrMP2MmmkT7djN9/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-sm cursor-pointer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="min-w-[250px] max-w-xs flex-shrink-0 relative group rounded-md shadow-md overflow-hidden">
                <img
                  src={NDA}
                  alt="National Skill Certificate 2025"
                  className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center px-3">
                    <p className="text-lg font-semibold mb-2">National Skill Certificate 2025</p>
                    <a
                      href="https://drive.google.com/file/d/1zj_b2HBTc5K_-bhXJiPj0M2lI3pDZgvq/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-sm cursor-pointer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="min-w-[250px] max-w-xs flex-shrink-0 relative group rounded-md shadow-md overflow-hidden">
                <img
                  src={Spoken}
                  alt="Spoken English certificate"
                  className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center px-3">
                    <p className="text-lg font-semibold mb-2">Spoken English certificate</p>
                    <a
                      href="https://drive.google.com/file/d/1fSDTcMTy4SXX3K_xdMshVJnq0PGtKGRt/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-sm cursor-pointer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="min-w-[250px] max-w-xs flex-shrink-0 relative group rounded-md shadow-md overflow-hidden">
                <img
                  src={Ai_Power}
                  alt="AI Power"
                  className="object-cover object-center w-full h-72 rounded-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out text-center px-3">
                    <p className="text-lg font-semibold mb-2">AI Power</p>
                    <a
                      href="https://drive.google.com/file/d/1OgEx9ng2On-_8wqE5dTkwheYWFminkOC/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-sm cursor-pointer"
                    >
                      View
                    </a>
                  </div>
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
