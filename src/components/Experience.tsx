import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
      {
      title: 'Application Analyst',
      company: 'NSW Police Force',
      location: 'Sydney, Australia',
      period:  'Oct 2024 - Present',
    },
    {
      title: 'Test lead / Senior Test Analyst',
      company: 'Sherpa',
      location: 'Sydney, Australia',
      period:  'Dec 2019 - Jul 2024',
    },
    {
      title: 'Senior Test Analyst',
      company: 'News Corp Australia',
      location: 'Sydney, Australia',
      period: 'May 2019 - Jul 2019',
    },
    {
      title: 'Senior Test Engineer',
      company: 'Infinite Computer Solutions',
      location: 'Bengaluru, India',
      period: 'Feb 2016 - Feb 2019',
    },
    {
      title: 'Senior Test Engineer',
      company: 'Cognizant',
      location: 'Mysore, India',
      period: 'Nov 2014 - Nov 2015',
    },
    {
      title: 'Software Test Engineer',
      company: 'Helios & Matheson',
      location: 'Bengaluru, India',
      period: 'Jan 2014 - Jul 2014',
    },
    {
      title: 'Software Test Engineer',
      company: 'Visionet Systems',
      location: 'Bengaluru, India',
      period: 'Jan 2011 - Jan 2014',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A decade of delivering quality software through comprehensive testing strategies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:justify-between`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 rounded-full border-4 border-white dark:border-black shadow-lg z-10"></div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } ml-12 md:ml-0`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">{exp.company}</h4>
                      </div>
                      <Briefcase className="text-primary-600 dark:text-primary-400 w-6 h-6" />
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;