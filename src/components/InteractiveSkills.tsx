import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Trophy, Target } from 'lucide-react';

const InteractiveSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [clickedSkills, setClickedSkills] = useState<Set<string>>(new Set());

  const skillFacts = {
    'Playwright': 'Did you know? Playwright can test across Chrome, Firefox, and Safari with the same code!',
    'Selenium WebDriver': 'Fun fact: Selenium was named after a chemical element that cures mercury poisoning!',
    'TestNG': 'TestNG supports parallel test execution and flexible test configuration!',
    'Cucumber': 'Cucumber uses Gherkin language - Given, When, Then - making tests readable by everyone!',
    'Jenkins': 'Jenkins has over 1,800 plugins and is used by 70% of DevOps teams worldwide!',
    'Docker': 'Docker containers start in milliseconds and use less memory than VMs!',
    'Postman': 'Postman has over 20 million developers using it for API testing!',
    'Jira': 'JIRA stands for "Gojira" - the Japanese name for Godzilla!'
  };

  const handleSkillClick = (skillName: string) => {
    const newClickedSkills = new Set(clickedSkills);
    if (newClickedSkills.has(skillName)) {
      newClickedSkills.delete(skillName);
    } else {
      newClickedSkills.add(skillName);
    }
    setClickedSkills(newClickedSkills);
  };

  return (
    <div className="mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Zap className="text-primary-600 dark:text-primary-400" size={20} />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Interactive Skills Explorer
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Click on skills to discover fun facts! 🎯
        </p>
      </motion.div>

      {/* Fun Facts Display */}
      {hoveredSkill && skillFacts[hoveredSkill as keyof typeof skillFacts] && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg border border-primary-200 dark:border-primary-700"
        >
          <div className="flex items-start gap-2">
            <Target className="text-primary-600 dark:text-primary-400 mt-1" size={16} />
            <p className="text-sm text-primary-800 dark:text-primary-200">
              <strong>{hoveredSkill}:</strong> {skillFacts[hoveredSkill as keyof typeof skillFacts]}
            </p>
          </div>
        </motion.div>
      )}

      {/* Achievement Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-4"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 px-4 py-2 rounded-full">
          <Trophy className="text-yellow-600 dark:text-yellow-400" size={16} />
          <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
            Skills Explored: {clickedSkills.size}/8
          </span>
        </div>
      </motion.div>

      {/* Interactive Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.keys(skillFacts).map((skill, index) => (
          <motion.button
            key={skill}
            onClick={() => handleSkillClick(skill)}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              clickedSkills.has(skill)
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
            }`}
          >
            <div className="flex items-center justify-center gap-1">
              {clickedSkills.has(skill) && <Trophy size={14} />}
              {skill}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Completion Message */}
      {clickedSkills.size === Object.keys(skillFacts).length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 text-center p-4 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg"
        >
          <div className="text-2xl mb-2">🎉</div>
          <p className="text-green-800 dark:text-green-200 font-medium">
            Awesome! You've explored all the skills! You're clearly someone who pays attention to detail - 
            a perfect QA trait! 🕵️‍♂️
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveSkills;