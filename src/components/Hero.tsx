import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-black dark:to-gray-800"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
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
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Vid</span> - A passionate QA professional with over 
            <span className="font-semibold text-primary-600 dark:text-primary-400"> 10 years of experience</span> in ensuring software excellence 
            and delivering quality products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 max-w-5xl mx-auto"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
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
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="relative px-4 py-2 bg-gradient-to-r from-primary-500/10 to-primary-600/10 
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>

            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.linkedin.com/in/vidhyashankarn"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="https://github.com/im-vidhyashankar"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-8"
          >
            {/* Games promotion text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mb-6 text-center"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200/50 dark:border-gray-600/50">
                <motion.p 
                  className="text-gray-700 dark:text-gray-300 text-sm font-medium"
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  P.S. Don't forget to try the fun games via the floating button! 🎮 Test your QA knowledge and explore my skills in an interactive way! 😊
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Extra spacing to ensure arrow doesn't overlap */}
        <div className="h-20"></div>
        </div>
    </section>
  );
};

export default Hero;
