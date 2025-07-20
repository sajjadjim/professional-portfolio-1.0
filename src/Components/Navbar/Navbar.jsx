import React, { useState } from 'react';
import { Menu, X, Home, Code, User, Mail, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current path
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Home', to: '/', Icon: Home },
    { label: 'Projects', to: '/project', Icon: Code },
    { label: 'About', to: '/about', Icon: User },
    { label: 'Contact', to: '/contact', Icon: Mail },
    { label: 'Fun Fact', to: '/fun-fact', Icon: Sparkles },
  ];

  // Close mobile menu on link click
  const handleLinkClick = () => {
    if (window.innerWidth < 768) setIsOpen(false);
  };

  const navbar = navItems.map(({ label, to, Icon }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        key={label}
        to={to}
        className={`group flex items-center gap-1 transition relative font-medium 
          ${isActive ? 'text-teal-500' : 'hover:text-teal-500'}`}
      >
        {label}
        <Icon
          size={16}
          className={`transition absolute right-[-20px] 
            ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
          aria-hidden="true"
        />
      </Link>
    );
  });

  return (
    <nav className="lg:w-11/12 2xl:w-10/12 mx-auto w-full fixed top-0 left-0 right-0 z-50 shadow-md bg-black/30 backdrop-blur-md">
      <div className="flex justify-between items-center py-3 md:py-4">
        {/* Logo */}
        <div className="2xl:text-3xl text-2xl font-bold cursor-pointer">
          Sajjad <span className='text-teal-600'>JIM.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">{navbar}</ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-1000
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{ willChange: 'max-height, opacity' }}
      >
        <ul className="px-4 pb-4 shadow-md backdrop-blur-md grid font-medium space-y-3">
          {navItems.map(({ label, to, Icon }) => {
            const isActive = location.pathname === to;

            return (
              <Link
                key={label}
                to={to}
                onClick={handleLinkClick}
                className={`group flex items-center gap-1 transition relative font-medium 
                  ${isActive ? 'text-teal-500' : 'hover:text-teal-500'}`}
              >
                {label}
                <Icon
                  size={16}
                  className={`transition absolute right-[-20px] 
                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
