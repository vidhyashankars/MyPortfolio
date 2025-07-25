import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Thanks for Taking a Look!
              </span>
              <span className="ml-2">🙏</span>
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-base sm:text-lg text-gray-300 dark:text-gray-300 font-medium">
                Always learning, always testing, always growing.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">
                © 2024 Vid. All rights reserved. Built with passion for quality.
                </p>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mr-20"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;