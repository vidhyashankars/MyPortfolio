import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Application Analyst',
      company: 'Sherpa',
      location: 'Sydney - NSW',
      period: '2025 - Present',
      description: 'Leading a team of 8 QA engineers, implementing automated testing frameworks, and establishing quality standards across multiple product lines. Reduced bug escape rate by 40% and improved release cycle efficiency by 35%.',
      technologies: ['Selenium', 'Cypress', 'Jest', 'Jenkins', 'Kubernetes'],
    },
    {
      title: 'QA Manager',
      company: 'InnovateSoft Inc.',
      location: 'Austin, TX',
      period: '2019 - 2021',
      description: 'Managed QA operations for enterprise software products, designed comprehensive test strategies, and mentored junior QA professionals. Successfully delivered 15+ major releases with zero critical issues.',
      technologies: ['TestRail', 'Postman', 'JMeter', 'Docker', 'GitLab CI'],
    },
    {
      title: 'Senior QA Engineer',
      company: 'DataFlow Systems',
      location: 'Seattle, WA',
      period: '2017 - 2019',
      description: 'Developed automated testing suites for microservices architecture, performed API and database testing, and collaborated with development teams in agile environments.',
      technologies: ['REST Assured', 'MySQL', 'MongoDB', 'JIRA', 'Confluence'],
    },
    {
      title: 'QA Engineer',
      company: 'CloudTech Solutions',
      location: 'Denver, CO',
      period: '2015 - 2017',
      description: 'Executed manual and automated testing for web and mobile applications, created detailed test documentation, and participated in requirement analysis and design reviews.',
      technologies: ['Appium', 'TestNG', 'Maven', 'Git', 'Bugzilla'],
    },
    {
      title: 'Junior QA Analyst',
      company: 'StartupVenture',
      location: 'Portland, OR',
      period: '2013 - 2015',
      description: 'Started career in QA by performing functional testing, regression testing, and user acceptance testing. Learned fundamental testing principles and methodologies.',
      technologies: ['Manual Testing', 'Excel', 'Test Cases', 'Bug Reporting'],
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

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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