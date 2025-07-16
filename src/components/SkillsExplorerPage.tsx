import { createPortal } from 'react-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowLeft, Trophy, Star, Zap } from 'lucide-react';

interface SkillsExplorerPageProps {
  onClose: () => void;
}

const SkillsExplorerPage: React.FC<SkillsExplorerPageProps> = ({ onClose }) => {
  const [clickedSkills, setClickedSkills] = useState<Set<string>>(new Set());
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillFacts = {
    'Playwright': {
      fact: 'Did you know? Playwright can test across Chrome, Firefox, and Safari with the same code!',
      icon: '🎭',
      category: 'Automation',
      difficulty: 'Advanced'
    },
    'Selenium WebDriver': {
      fact: 'Fun fact: Selenium was named after a chemical element that cures mercury poisoning!',
      icon: '🕷️',
      category: 'Automation',
      difficulty: 'Intermediate'
    },
    'TestNG': {
      fact: 'TestNG supports parallel test execution and flexible test configuration!',
      icon: '⚡',
      category: 'Framework',
      difficulty: 'Intermediate'
    },
    'Cucumber': {
      fact: 'Cucumber uses Gherkin language - Given, When, Then - making tests readable by everyone!',
      icon: '🥒',
      category: 'BDD',
      difficulty: 'Beginner'
    },
    'Manual Testing': {
      fact: 'Manual testing finds 85% of usability issues that automated tests miss! Human intuition beats algorithms for UX bugs.',
      icon: '🔍',
      category: 'Testing',
      difficulty: 'Beginner'
    },
    'Mobile App Testing': {
      fact: 'There are over 24,000 different Android devices! Mobile testing requires checking across countless screen sizes and OS versions.',
      icon: '📱',
      category: 'Mobile',
      difficulty: 'Intermediate'
    },
    'AWS': {
      fact: 'AWS has over 200 services and powers 32% of the cloud market! It started as Amazon\'s internal infrastructure in 2006.',
      icon: '☁️',
      category: 'Cloud',
      difficulty: 'Advanced'
    },
    'Git': {
      fact: 'Git was created by Linus Torvalds in just 10 days! The name "Git" is British slang for "unpleasant person" - Linus\' humor!',
      icon: '🌿',
      category: 'Version Control',
      difficulty: 'Intermediate'
    },
    'Jenkins': {
      fact: 'Jenkins has over 1,800 plugins and is used by 70% of DevOps teams worldwide!',
      icon: '🏗️',
      category: 'CI/CD',
      difficulty: 'Advanced'
    },
    'Docker': {
      fact: 'Docker containers start in milliseconds and use less memory than VMs!',
      icon: '🐳',
      category: 'DevOps',
      difficulty: 'Advanced'
    },
    'Postman': {
      fact: 'Postman has over 20 million developers using it for API testing!',
      icon: '📮',
      category: 'API Testing',
      difficulty: 'Beginner'
    },
    'Jira': {
      fact: 'JIRA stands for "Gojira" - the Japanese name for Godzilla!',
      icon: '🦖',
      category: 'Management',
      difficulty: 'Beginner'
    }
  };

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(skillName);
    const newClickedSkills = new Set(clickedSkills);
    if (newClickedSkills.has(skillName)) {
      newClickedSkills.delete(skillName);
      if (selectedSkill === skillName) {
        setSelectedSkill(null);
      }
    } else {
      newClickedSkills.add(skillName);
    }
    setClickedSkills(newClickedSkills);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
      case 'Advanced': return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Automation': 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30',
      'Framework': 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30',
      'BDD': 'text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30',
      'CI/CD': 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/30',
      'DevOps': 'text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-900/30',
      'API Testing': 'text-pink-600 bg-pink-100 dark:text-pink-400 dark:bg-pink-900/30',
      'Management': 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/30',
      'Testing': 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30',
      'Mobile': 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30',
      'Cloud': 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30',
      'Version Control': 'text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/30'
    };
    return colors[category as keyof typeof colors] || colors.Management;
  };

  return (
    <div
      className="fixed inset-0 z-[99999]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-white dark:bg-gray-900 overflow-y-auto"
      >
      {/* Header */}
      <div className="sticky top-0 bg-white/98 dark:bg-gray-900/98 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <ArrowLeft size={20} className="text-gray-600 dark:text-gray-300" />
              </motion.button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">🎯 Skills Explorer</h1>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Discover interesting facts about my technical skills</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">Progress</div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {clickedSkills.size}/{Object.keys(skillFacts).length}
                </div>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-300 dark:text-gray-600"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <motion.path
                    className="text-primary-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    initial={{ strokeDasharray: "0, 100" }}
                    animate={{ 
                      strokeDasharray: `${(clickedSkills.size / Object.keys(skillFacts).length) * 100}, 100`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  {clickedSkills.size === Object.keys(skillFacts).length ? (
                    <Trophy size={20} className="text-yellow-500" />
                  ) : (
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                      {Math.round((clickedSkills.size / Object.keys(skillFacts).length) * 100)}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary-500 rounded-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How to Play</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Click on any skill card below to discover interesting facts and insights! 
                Each skill has a unique story and fun trivia.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                  💡 Click to reveal facts
                </span>
                <span className="text-xs px-2 py-1 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300">
                  🏆 Explore all skills for completion
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(skillFacts).map(([skillName, skillData], index) => (
            <motion.div
              key={skillName}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSkillClick(skillName)}
              className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                clickedSkills.has(skillName)
                  ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Skill Icon */}
              <div className="text-4xl mb-4">{skillData.icon}</div>
              
              {/* Skill Name */}
              <h3 className={`text-lg font-bold mb-3 ${
                clickedSkills.has(skillName) ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                {skillName}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  clickedSkills.has(skillName) 
                    ? 'bg-white/20 text-white' 
                    : getCategoryColor(skillData.category)
                }`}>
                  {skillData.category}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  clickedSkills.has(skillName) 
                    ? 'bg-white/20 text-white' 
                    : getDifficultyColor(skillData.difficulty)
                }`}>
                  {skillData.difficulty}
                </span>
              </div>

              {/* Fact (shown when clicked) */}
              {clickedSkills.has(skillName) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-white/20 pt-4"
                >
                  <p className="text-white/90 text-sm leading-relaxed">
                    {skillData.fact}
                  </p>
                </motion.div>
              )}

              {/* Click indicator */}
              {!clickedSkills.has(skillName) && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
                </div>
              )}

              {/* Completion checkmark */}
              {clickedSkills.has(skillName) && (
                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Completion Message */}
        {clickedSkills.size === Object.keys(skillFacts).length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-xl"
          >
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
              Congratulations!
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-lg mb-4">
              You've explored all my technical skills! Perfect attention to detail - a true QA trait! 🕵️‍♂️
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="text-yellow-800 dark:text-yellow-200 font-semibold">
                  Skills Mastered: {clickedSkills.size}/{Object.keys(skillFacts).length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      </motion.div>
    </div>
  );
};

export default SkillsExplorerPage;