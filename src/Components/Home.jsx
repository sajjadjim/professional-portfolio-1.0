import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';

const Home = () => {
    useEffect(()=>{
        document.title = "Sajjad | JIM";
    })
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className='bg-black'><Navbar /></div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <div className='bg-black'><Footer /></div>
        </div>
    );
};

export default Home;