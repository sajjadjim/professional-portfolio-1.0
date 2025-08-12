import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';
import { BsFillRocketFill } from "react-icons/bs";

const Home = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [launching, setLaunching] = useState(false);

    useEffect(() => {
        document.title = "Sajjad Hossain JIM";

        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTopWithRocket = () => {
        setLaunching(true);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                setLaunching(false);
            }, 800); // Hide animation after scroll
        }, 1000); // Show rocket for 1s before scrolling
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className='bg-black'><Navbar /></div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <div className='bg-bg-gradient-to-br from-gray-900/70 via-blue-950/40  to-violet-950/40'><Footer /></div>

            {/* Rocket Launch Overlay */}
            {launching && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-opacity-10 backdrop-blur-md bg-opacity-80">
                    <div className="relative animate-bounce-up">
                        <BsFillRocketFill className="text-white text-6xl" />
                        <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-3 h-6 bg-gradient-to-b from-yellow-300 to-red-600 rounded-full animate-flame" />
                    </div>
                </div>
            )}

            {/* Scroll to Top Button */}
            {showTopBtn && !launching && (
                <button
                    onClick={scrollToTopWithRocket}
                    className="fixed bottom-5 cursor-pointer right-5 lg:p-2 2xl:p-4 p-3 rounded-full bg-blue-600 text-white shadow-lg  hover:border-blue-600 hover:border hover:bg-transparent transition duration-300 z-50"
                    aria-label="Scroll to Top"
                >
                    <BsFillRocketFill />
                </button>
            )}
        </div>
    );
};

export default Home;
