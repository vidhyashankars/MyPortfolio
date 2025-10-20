import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, Star, Zap, Brain } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: '🧠 Curious Conversations with AI: How Is ChatGPT Tested?',
      excerpt: 'Today I asked ChatGPT how it\'s tested before going live. You\'d think an AI would be tested by other AIs, right? Well... yes and no.',
      content: `Today I asked ChatGPT how it's tested before going live. You'd think an AI would be tested by other AIs, right? Well... yes and no.

It turns out the development behind the scenes is far more intricate than I imagined. Large AI applications like ChatGPT go through a hybrid approach: automated testing powered by AI tools, combined with manual reviews by human testers who focus on edge cases, ethics, and real-world user experience.

The automated tools simulate millions of interactions across different use cases, checking for bugs, security issues, and language comprehension. It's like a digital stress test to ensure the model doesn't just work—it works well.

But even the smartest AI needs a human lens. That's where researchers and testers come in, challenging ChatGPT with ambiguous prompts, sensitive topics, and context-rich scenarios. Their insights help fine-tune responses that feel natural and safe.

What fascinated me most was the ongoing feedback loop—user interactions (like the one I had!) inform continual improvements. It's not a one-time QA process; it's a living evolution.

👉 Curious minds drive innovation. If you're into product development, AI ethics, or testing methodologies, exploring how models like ChatGPT are polished behind the scenes is incredibly inspiring.

Let's keep asking smarter questions. That's how smarter tools get built.`,
      date: 'December 2024',
      category: 'AI & Testing',
      tags: ['AI Testing', 'ChatGPT', 'QA Methodology', 'Innovation'],
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

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
        </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Post Header */}
                  <div className={`bg-gradient-to-r ${post.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          <post.icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          {post.category}
                        </span>
                        <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{post.title}</h3>
                      <p className="text-white/90 text-sm sm:text-base">{post.excerpt}</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      {post.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {post.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: tagIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs font-medium border border-primary-200/50 dark:border-primary-400/30 hover:border-primary-300 dark:hover:border-primary-400 transition-all duration-300 cursor-default"
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

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
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">More Content Coming Soon!</h3>
          <p className="text-sm sm:text-base md:text-xl text-primary-100 mb-4 sm:mb-6 max-w-2xl mx-auto">
            I'm working on more fantastic content to share my QA knowledge and experiences. 
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
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">{topic.description}</p>
                  
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
          <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
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