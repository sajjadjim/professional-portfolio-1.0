import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './Router/Router.jsx';
import { RouterProvider } from 'react-router';
import { motion } from 'framer-motion';

// ✅ Splash Screen Component
const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const playMacbookSound = () => {
      const audio = new Audio('image_and_sound/macbook-startup-sound.mp3');
      audio.volume = 1.0;
      audio.play()
        .then(() => console.log('✅ MacBook sound playing...'))
        .catch((err) => console.warn('⚠️ Autoplay blocked by browser:', err));

      setTimeout(onFinish, 2000);
    };

    // Slight delay before sound
    const timer = setTimeout(playMacbookSound, 200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <h1 className="splash-text">Welcome to Sajjad Jim&apos;s Portfolio</h1>

      {/* Apple Logo Animation */}
      <img
        src="image_and_sound/applel-logo.jpg"
        alt="Apple Logo"
        className="splash-logo"
        as={motion.img}
      />

      {/* Loading Bar */}
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

// ✅ Root App
const RootApp = () => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setShowSplash(true);
    }
  }, []);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <RouterProvider router={router} />
  );
};

// ✅ Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
);