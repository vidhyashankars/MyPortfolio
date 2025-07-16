import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Clock, Github, Linkedin as LinkedIn } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect!</h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg max-w-2xl w-full text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Whether you're a recruiter or just curious about my work, I appreciate you exploring my portfolio. 
                Ready to bring that Aussie spirit to your next quality challenge!
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                Looking for NEW QA OPPORTUNITIES, testing strategy consultation, or want to discuss 
                quality assurance best practices? Let's have a yarn!
              </p>
              <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 mb-6">
                <Clock size={20} />
                <span className="font-semibold">I'll reach out within 3 hours max!</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://www.linkedin.com/in/vidhyashankarn"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <LinkedIn size={20} />
                Connect on LinkedIn
              </motion.a>
              
              <motion.a
                href="https://github.com/im-vidhyashankar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github size={20} />
                View GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bug Report Section - Now positioned after the main contact popup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">🐛</span>
              Found an Issue?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Help me improve this website! If you spot any bugs, usability issues, or have suggestions, 
              I'd love to hear from you. As a QA professional, I appreciate thorough feedback!
            </p>
            <motion.button
              onClick={() => {
                const subject = encodeURIComponent('Bug Report - Portfolio Website');
                const body = encodeURIComponent(`Hi Vid,\n\nI found an issue on your portfolio website:\n\nDevice: ${navigator.userAgent}\nBrowser: ${navigator.appName}\nScreen Size: ${window.innerWidth}x${window.innerHeight}\n\nIssue Description:\n[Please describe the bug you found]\n\nSteps to Reproduce:\n1. \n2. \n3. \n\nExpected Result:\n[What should happen]\n\nActual Result:\n[What actually happened]\n\nAdditional Notes:\n[Any other relevant information]\n\nThanks for helping improve the site!`);
                window.open(`https://www.linkedin.com/messaging/compose/?recipient=vidhyashankarn&subject=${subject}&body=${body}`, '_blank');
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-xl">🐛</span>
              Report a Bug
            </motion.button>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Your feedback helps me deliver better quality experiences!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;