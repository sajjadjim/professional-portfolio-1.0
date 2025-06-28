import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className='bg-black'><Navbar></Navbar></div>
            <Outlet></Outlet>
            <div className='bg-black'><Footer></Footer></div>
        </div>
    );
};

export default Home;