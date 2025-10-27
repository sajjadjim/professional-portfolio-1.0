import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './Router/Router.jsx';
import { RouterProvider } from 'react-router';
import { motion } from 'framer-motion';

// SplashScreen component
const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // total animation duration
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      {/* Apple logo */}
      <h1 className="splash-text">Welcome to Sajjad Jim's Portfolio</h1>
      <img
        src="../src/assets/applel-logo.jpg" // replace with your logo path
        alt="Apple Logo"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="splash-logo"
      />
      {/* Loading bar */}
      <div className="loading-bar-container">
        <motion.div
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

// Root app
const RootApp = () => {
  const [showSplash, setShowSplash] = useState(false);

  // Detect desktop screen
  useEffect(() => {
    if (window.innerWidth >= 1024) { // desktop
      setShowSplash(true);
    }
  }, []);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <RouterProvider router={router} />
  );
};

// Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);