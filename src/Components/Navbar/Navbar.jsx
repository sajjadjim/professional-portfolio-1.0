import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="md:w-9/12 md:mx-auto w-full fixed top-0 left-0 right-0 z-50   shadow-md">
      <div className=" flex justify-between items-center  py-3 md:py-4">
        {/* Logo */}
        <div className="md:text-3xl text-2xl font-bold ">Sajjad JIM.</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8  font-medium">
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">About</li>
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">Projects</li>
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">Contact</li>
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">Blogs</li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 shadow-md  font-medium space-y-3 animate-slide-down">
          <li className="hover:text-indigo-400 transition">Home</li>
          <li className="hover:text-indigo-400 transition">Projects</li>
          <li className="hover:text-indigo-400 transition">About</li>
          <li className="hover:text-indigo-400 transition">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
