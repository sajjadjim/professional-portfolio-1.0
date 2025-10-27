import React from 'react';
import { Home, Code, User, Mail, Sparkles, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', to: '/', Icon: Home },
    { label: 'Projects', to: '/project', Icon: Code },
    { label: 'About', to: '/about', Icon: User },
    { label: 'Contact', to: '/contact', Icon: Mail },
    { label: 'Blog', to: '/blog', Icon: BookOpen },
    { label: 'Fun Fact', to: '/fun-fact', Icon: Sparkles },
  ];

  const desktopNavVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.5 },
    }),
  };

  return (
    <nav className="fixed top-5  left-0 right-0 z-50 flex justify-center">
      <div className="bg-[#0b1120]/70 backdrop-blur-md border-3 border-[#33A1E0] rounded-full shadow-lg px-6 py-2 flex items-center gap-6 md:gap-8">
        <ul className="flex items-center gap-6 md:gap-8">
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
                  className={`group flex items-center justify-center gap-2 transition font-medium px-3 py-1.5 rounded-full
                    ${isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white'
                      : 'text-gray-200 hover:text-white hover:bg-gradient-to-r from-cyan-600/50 to-blue-700/50'
                    }`}
                >
                  <Icon size={20} />
                  {/* Text hidden on small screens */}
                  <span className="hidden md:inline">{label}</span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;