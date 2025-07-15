import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Settings, Users, Zap, CheckSquare, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Open Source Testing Frameworks',
      skills: [
        { name: 'Playwright', level: 85 },
        { name: 'Selenium WebDriver', level: 90 },
        { name: 'TestNG', level: 92 },
        { name: 'Cucumber', level: 88 },
      ],
    },
     {
      icon: Zap,
      title: 'Licenced Test Automation',
      skills: [
         { name: 'TestSigma', level: 80 },
         { name: 'TestIM', level: 90 },
         { name: 'Tosca', level: 75 },
         { name: 'LambdaTest/BrowserStack', level: 88 },
      ],
     },
    {
      icon: CheckSquare,
      title: 'Agile & Test Management Tools',
      skills: [
        { name: 'Scrum/Kanban/Spotify', level: 95 },
        { name: 'Jira/Confluence', level: 92 },
        { name: 'Zephyr', level: 88 },
        { name: 'TestRail', level: 90 },
        { name: 'X-ray', level: 85 },
       ],
    },
    {
      icon: Database,
      title: 'API & Database Testing',
      skills: [
        { name: 'Postman', level: 90 },
        { name: 'REST Assured', level: 65 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      skills: [
        { name: 'Jenkins', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'GitLab CI', level: 85 },
        { name: 'AWS', level: 80 },
      ],
    },
    {
      icon: Users,
      title: 'Management & Leadership',
      skills: [
        { name: 'Team Leadership', level: 95 },
        { name: 'Test Strategy', level: 90 },
        { name: 'Mentoring', level: 95 },
        { name: 'Stakeholder Management', level: 85 },
      ],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across testing frameworks, tools, and methodologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Testing Methodologies / Testing Types</h4>
              <p className="text-primary-100 text-sm">Black Box, Exploratory Testing, Risk-Based Testing, Regression Testing, UAT Testing</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Industry Domains</h4>
              <p className="text-primary-100 text-sm">Government, E-commerce, Logistics, FinTech, SaaS, Mobile Apps, Enterprise Software</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Quality Standards</h4>
              <p className="text-primary-100 text-sm">ISTQB Guidelines, IEEE Standards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;