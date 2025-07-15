import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Visvesvaraya Technological University',
      location: 'India',
      period: 'Passed out in 2010',
    },
  ];

  const certifications = [
    {
      name: 'Certified Tester Foundation Level (CTFL)',
      issuer: 'ISTQB',
      year: '2019',
      description: 'ISTQB® CTFL is a globally recognized certification that validates essential software testing knowledge across all delivery methodologies.',
    },
    {
      name: 'Professional Scrum Master PSM1',
      issuer: 'Scrum.org',
      year: '2019',
      description: 'PSM I certifies a foundational understanding of Scrum principles and effective application within Scrum Teams.',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2025',
      description: 'AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.',
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in quality assurance
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-2"
          >
            <GraduationCap className="text-primary-600 dark:text-primary-400" />
            Academic Background
          </motion.h3>

          <div className="relative">
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-center"
                >
                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="w-full md:w-6/12"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                      <h5 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">{edu.institution}</h5>
                      
                      <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-2"
          >
            <Award className="text-primary-600 dark:text-primary-400" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 py-1 rounded-md text-xs font-medium">
                    {cert.year}
                  </span>
                </div>
                <h5 className="text-primary-600 dark:text-primary-400 font-semibold mb-2">{cert.issuer}</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;