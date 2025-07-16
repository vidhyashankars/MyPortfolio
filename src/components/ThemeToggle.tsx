import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 transition-colors duration-300 min-w-[40px] min-h-[40px] flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300"
      >
        {isDark ? <Moon size={16} className="sm:w-5 sm:h-5" /> : <Sun size={16} className="sm:w-5 sm:h-5" />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;