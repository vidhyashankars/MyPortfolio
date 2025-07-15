import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    // Check if welcome was shown today
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem('welcomeLastShown');
    
    if (lastShown !== today) {
      // Show welcome animation after a short delay
      const timer = setTimeout(() => {
        setShowWelcome(true);
        localStorage.setItem('welcomeLastShown', today);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Auto-dismiss after 8 seconds if user doesn't interact
    if (showWelcome) {
      // Countdown timer
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setShowWelcome(false);
            return 8; // Reset for next time
          }
          return prev - 1;
        });
      }, 1000);
      
      const autoDismissTimer = setTimeout(() => {
        setShowWelcome(false);
      }, 8000);
      
      return () => {
        clearTimeout(autoDismissTimer);
        clearInterval(countdownInterval);
      };
    }
  }, [showWelcome]);

  const handleClose = () => {
    setShowWelcome(false);
    setCountdown(8); // Reset countdown
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.6 
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-400/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

            {/* Close button */}
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 z-20"
            >
              <X size={20} />
            </motion.button>

            {/* Countdown Progress Ring */}
            <div className="absolute top-4 right-16 z-20">
              <div className="relative w-10 h-10">
                {/* Background circle */}
                <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-300 dark:text-gray-600"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Progress circle */}
                  <motion.path
                    className="text-primary-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: "100, 100" }}
                    animate={{ 
                      strokeDasharray: `${(countdown / 8) * 100}, 100`,
                    }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  />
                </svg>
                {/* Countdown number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    key={countdown}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-xs font-bold text-gray-600 dark:text-gray-300"
                  >
                    {countdown}
                  </motion.span>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="text-center relative z-10">
              {/* Kangaroo emoji with bounce animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="text-6xl mb-4"
              >
                <motion.span
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="inline-block"
                >
                  🦘
                </motion.span>
              </motion.div>

              {/* Welcome message */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
              >
                G'day ladies, gents, and all you top mates out there!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                Welcome to my little corner of the web! I'm Vid, your friendly QA mate who's passionate about delivering top-notch quality. Whether you're here for a quick squiz or a deep dive into my work, I'm stoked to have you aboard. Let's make something brilliant together!
              </motion.p>

              {/* Action button */}
              <motion.button
                onClick={handleClose}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Too right, let's dive in! 🚀
              </motion.button>

              {/* Auto-dismiss info */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="text-xs text-gray-400 dark:text-gray-500 mt-4"
              >
                This message will auto-close in {countdown} seconds
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;