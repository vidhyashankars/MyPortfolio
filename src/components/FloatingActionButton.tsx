import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Brain, Zap, Coffee, X } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickGame, setShowQuickGame] = useState(false);

  const games = [
    {
      icon: Brain,
      title: 'Quick Quiz',
      description: 'Test your QA knowledge',
      action: () => setShowQuickGame(true)
    },
    {
      icon: Coffee,
      title: 'Coffee Break',
      description: 'Take a breather',
      action: () => alert('☕ Thanks for taking a break! Hope you\'re enjoying the portfolio!')
    },
    {
      icon: Zap,
      title: 'Easter Eggs',
      description: 'Hidden surprises',
      action: () => alert('🥚 Try the Konami code or triple-click the logo!')
    }
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-16 right-0 space-y-3"
            >
              {games.map((game, index) => (
                <motion.button
                  key={game.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={game.action}
                  className="flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <game.icon size={20} className="text-primary-600 dark:text-primary-400" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">{game.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{game.description}</div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Gamepad2 size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Quick Quiz Modal */}
      <AnimatePresence>
        {showQuickGame && (
          <QuickQuizModal onClose={() => setShowQuickGame(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

const QuickQuizModal = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What does QA stand for?",
      options: ["Quality Assurance", "Quick Analysis", "Query Assistant", "Quantum Algorithm"],
      correct: 0
    },
    {
      question: "Which testing approach tests the system without knowing internal structure?",
      options: ["White Box", "Black Box", "Gray Box", "Clear Box"],
      correct: 1
    },
    {
      question: "What is the main purpose of regression testing?",
      options: ["Find new bugs", "Test performance", "Ensure existing functionality works", "Test security"],
      correct: 2
    }
  ];

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">🧠 Quick QA Quiz</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {!showResult ? (
          <div>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {questions[currentQuestion].question}
            </h4>

            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-200"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-6xl mb-4"
            >
              {score === questions.length ? '🏆' : score >= questions.length / 2 ? '👏' : '📚'}
            </motion.div>
            
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Quiz Complete!
            </h4>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              You scored {score} out of {questions.length}
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {score === questions.length 
                ? "Perfect! You know your QA stuff! 🎉" 
                : score >= questions.length / 2 
                ? "Great job! Keep learning! 💪"
                : "Good try! QA is a journey of continuous learning! 📖"}
            </p>

            <div className="flex gap-3">
              <button
                onClick={resetQuiz}
                className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default FloatingActionButton;