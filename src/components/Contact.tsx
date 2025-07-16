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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect!</h2>
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
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Whether you're a recruiter or just curious about my work, I appreciate you exploring my portfolio. 
                Ready to bring that Aussie spirit to your next quality challenge!
              </p>
              <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 mb-4">
                <Clock size={20} />
                <span className="font-semibold">I'll reach out within 3 hours max!</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                Looking for QA leadership, testing strategy consultation, or want to discuss 
                quality assurance best practices? Let's have a yarn!
              </p>
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
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <LinkedIn size={20} />
                Connect on LinkedIn
              </motion.a>
              
              <motion.a
                href="https://github.com/im-vidhyashankar"
                target="_blank"
                rel="noopener noreferrer"
                <Github size={20} />
                View GitHub
              </motion.a>
            </motion.div>
            <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 mb-6">
              <Clock size={20} />
              <span className="font-semibold">I'll reach out within 3 hours max!</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;