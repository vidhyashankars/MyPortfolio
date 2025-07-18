import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import GameButton from './GameButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      // Set CSS custom property for viewport height
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            animate={{ 
              y: [0, -3, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="relative text-xl sm:text-2xl font-bold text-gray-900 dark:text-white"
          >
            <span className="relative inline-block">
              QAMATE!
              {/* Kangaroo emoji that bounces around the text */}
              <motion.span
                animate={{ 
                  x: [0, 15, -15, 0],
                  y: [0, -8, -4, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-1 -right-6 text-lg"
              >
                🦘
              </motion.span>
              
              {/* Sparkle effects */}
              <motion.span
                animate={{ 
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
                className="absolute -top-2 left-0 text-sm"
              >
                ✨
              </motion.span>
              
              <motion.span
                animate={{ 
                  scale: [0, 1, 0],
                  rotate: [0, -180, -360],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1.8
                }}
                className="absolute -bottom-1 right-2 text-sm"
              >
                ⭐
              </motion.span>
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.a>
            ))}
            </nav>
            <div className="flex items-center space-x-3">
              <GameButton />
              <ThemeToggle />
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <GameButton />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/98 dark:bg-black/98 backdrop-blur-md rounded-lg mt-2 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50 mx-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 rounded-md mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
