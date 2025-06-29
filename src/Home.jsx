import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';

const Home = () => {
    useEffect(()=>{
        document.title = "Sajjad Hossain JIM";
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