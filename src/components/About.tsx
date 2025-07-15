import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: '10+ Years',
      description: 'Quality Assurance Experience',
    },
    {
      icon: Users,
      title: '13+ Projects',
      description: 'Successfully Delivered',
    },
    {
      icon: Target,
      title: '99.5%',
      description: 'Bug Detection Rate',
    },
    {
      icon: Zap,
      title: 'Agile Expert',
      description: 'Scrum & DevOps Methodologies',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about delivering excellence through comprehensive testing strategies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a dedicated Quality Assurance professional with over a decade of experience, 
              My expertise spans from manual testing to automated solutions, and quality process optimization.
              I specialize in creating robust testing frameworks and ensuring software reliability 
              across diverse industries.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about implementing cutting-edge testing methodologies, mentoring 
              teams, and driving continuous improvement in software quality. My approach combines 
              technical expertise with strategic thinking to deliver exceptional results.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {['Manual Testing', 'Automation Testing', 'API Testing', 
                'Mobile Testing', 'DevOps Integration'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 rounded-2xl p-8 text-white">
              <img
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Vinu - QA Professional"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Vidhya Shankar (Vid)</h3>
             <p className="text-primary-100 mb-4">QA Professional</p>
              <p className="text-sm text-primary-100">
                "Quality is not an act, it is a habit. I believe in creating sustainable 
                testing practices that ensure long-term software excellence."
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{highlight.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
