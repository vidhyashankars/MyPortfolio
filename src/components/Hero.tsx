import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12 sm:pt-16 pb-4 px-3 sm:px-4 md:px-6 lg:px-8" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-black dark:to-gray-800"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 md:mb-10"
            >
              <span className="bg-gradient-to-r from-black via-primary-600 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent">
                Quality Assurance
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Professional</span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Vid</span> - A passionate QA professional with over 
            <span className="font-semibold text-primary-600 dark:text-primary-400"> 10 years of experience</span> in ensuring software excellence 
            and delivering quality products.
          </motion.p>

          {/* Key Highlights for Recruiters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 sm:mb-10 max-w-4xl mx-auto px-2 sm:px-4"
          >
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-600/50"
              >
                <div className="text-2xl mb-2">🇦🇺</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Sydney Based</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Local Australian QA professional</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-600/50"
              >
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Quick Response</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">I'll reach out within 3 hours max!</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-600/50"
              >
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Quality Focus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Passionate about delivering excellence</p>
              </motion.div>
            </div>
          </motion.div>


          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 sm:mb-10 max-w-5xl mx-auto px-1 sm:px-2"
          >
            <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
              {[
                'Quality Engineering',  
                'Manual Testing',
                'Test Automation', 
                'Playwright',
                'Selenium',
                'CI/CD',
                'Agile',
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.0 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 
                           backdrop-blur-sm border border-primary-200/30 dark:border-primary-400/30 rounded-full text-sm md:text-base 
                           font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300
                           shadow-sm hover:shadow-md cursor-default"
                >
                  <span className="relative z-10">{skill}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-500/20 
                             rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4 mb-8 sm:mb-10"
          >
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>

            <div className="flex items-center gap-2 sm:gap-3">
              <motion.a
                href="https://www.linkedin.com/in/vidhyashankarn"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-3 md:p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center min-w-[48px] min-h-[48px] sm:min-w-[52px] sm:min-h-[52px]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="https://github.com/im-vidhyashankar"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-3 md:p-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center min-w-[48px] min-h-[48px] sm:min-w-[52px] sm:min-h-[52px]"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
              </motion.a>
            </div>
          </motion.div>

          {/* Games promotion text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="flex justify-center px-2 sm:px-4 mb-16 sm:mb-20 md:mb-12"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full py-1 sm:py-1.5 md:py-2 shadow-lg border border-gray-200/50 dark:border-gray-600/50 max-w-4xl overflow-hidden">
              <div className="marquee-container">
                <div className="marquee-content">
                  <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium whitespace-nowrap px-2 sm:px-3 md:px-6">
                    P.S. Don't forget to try the fun games via the games menu in the header! 🎮 Test your QA knowledge and explore my skills in an interactive way! 😊
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium whitespace-nowrap px-2 sm:px-3 md:px-6">
                    P.S. Don't forget to try the fun games via the games menu in the header! 🎮 Test your QA knowledge and explore my skills in an interactive way! 😊
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500"
            >
              <ArrowDown size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Minimal spacing to ensure arrow doesn't overlap */}
        <div className="h-6 sm:h-8 md:h-10"></div>
      </div>
    </section>
  );
};

export default Hero;