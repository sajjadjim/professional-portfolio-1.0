import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';
import { FaArrowUp } from 'react-icons/fa';

const Home = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className='bg-black'><Navbar /></div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <div className='bg-black'><Footer /></div>

            {showTopBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 cursor-pointer right-5 p-2 rounded-full bg-teal-600 text-white shadow-lg hover:text-teal-600 hover:border-teal-600 hover:border hover:bg-transparent transition duration-300 z-50"
                    aria-label="Scroll to Top"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default Home;
