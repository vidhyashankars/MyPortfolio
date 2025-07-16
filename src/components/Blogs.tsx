import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, Star, Zap } from 'lucide-react';

const Blogs = () => {
  const upcomingTopics = [
    {
      icon: Zap,
      title: 'Test Automation Best Practices',
      description: 'Deep dive into building robust and maintainable test automation frameworks',
      category: 'Automation',
      estimatedDate: 'Coming Soon'
    },
    {
      icon: Star,
      title: 'Quality Engineering in Agile',
      description: 'How to integrate quality practices seamlessly into agile development cycles',
      category: 'Methodology',
      estimatedDate: 'Coming Soon'
    },
    {
      icon: BookOpen,
      title: 'API Testing Strategies',
      description: 'Comprehensive guide to testing APIs effectively with real-world examples',
      category: 'Testing',
      estimatedDate: 'Coming Soon'
    },
    {
      icon: Calendar,
      title: 'My QA Journey Down Under',
      description: 'Personal experiences and lessons learned working in Australia\'s tech scene',
      category: 'Career',
      estimatedDate: 'Coming Soon'
    }
  ];

  return (
    <section id="blogs" className="py-16 sm:py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            QA <span className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge, experiences, and insights from the world of Quality Assurance
          </p>
        </motion.div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center mb-8 sm:mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-4xl sm:text-6xl mb-4"
          >
            🚀
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Blog Section Coming Soon!</h3>
          <p className="text-base sm:text-xl text-primary-100 mb-4 sm:mb-6 max-w-2xl mx-auto">
            I'm working on some fantastic content to share my QA knowledge and experiences. 
            Stay tuned for in-depth articles, tutorials, and insights!
          </p>
          <div className="flex justify-center">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-sm"
            >
              <span className="text-sm sm:text-base font-semibold">Expected Launch: Q3 2025</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Upcoming Topics Preview */}
        <div className="mb-8 sm:mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center"
          >
            What's Coming Up
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {upcomingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-primary-500/10 rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <topic.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                      {topic.category}
                    </span>
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">{topic.title}</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">{topic.description}</p>
                  
                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                    <Clock size={14} className="sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">{topic.estimatedDate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to be notified when I publish new content?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Connect with me on LinkedIn to stay updated on my latest QA insights, 
            tutorials, and industry observations. I'll share valuable content that can help 
            advance your testing career!
          </p>
          <motion.a
            href="https://www.linkedin.com/in/vidhyashankarn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <BookOpen size={16} className="sm:w-5 sm:h-5" />
            Follow for Updates
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;