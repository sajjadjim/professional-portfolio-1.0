import React, { useState } from 'react';
import { Menu, X, Home, Code, User, Mail, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
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

  // Animation variants for desktop nav links
  const desktopNavVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.5 },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md bg-gradient-to-br from-gray-900  to-gray-900/30 backdrop-blur-md">
      <div className="lg:w-11/12 2xl:w-10/12 mx-auto w-full flex justify-between items-center py-3 md:py-4 px-4">

        {/* Logo - animate on desktop */}
        <motion.div
          className="2xl:text-3xl text-2xl font-bold cursor-pointer text-white"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to='/'>Sajjad <span className="text-[#33A1E0]">JIM.</span></Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map(({ label, to, Icon }, i) => {
            const isActive = location.pathname === to;
            return (
              <motion.li
                key={label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={desktopNavVariants}
              >
                <Link
                  to={to}
                  className={`group flex items-center gap-1 transition relative font-medium 
                    ${isActive ? 'text-[#33A1E0]' : 'hover:text-[#33A1E0]'}`}
                >
                  {label}
                  <Icon
                    size={16}
                    className={`transition absolute right-[-20px] 
                      ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    aria-hidden="true"
                  />
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - AnimatePresence for smooth mount/unmount */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden items-center text-center justify-center grid "
          >
            <ul className="px-4 pb-4 shadow-md font-medium space-y-3">
              {navItems.map(({ label, to, Icon }) => {
                const isActive = location.pathname === to;
                return (
                  <Link
                    key={label}
                    to={to}
                    onClick={handleLinkClick}
                    className={`group flex items-center gap-1 transition relative font-medium text-white
                      ${isActive ? 'text-[#33A1E0]' : 'hover:text-[#33A1E0]'}`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
