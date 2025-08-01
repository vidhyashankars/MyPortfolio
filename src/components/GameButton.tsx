import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Brain, Zap, X } from 'lucide-react';
import SkillsExplorerPage from './SkillsExplorerPage';

const GameButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickGame, setShowQuickGame] = useState(false);
  const [showSkillsExplorer, setShowSkillsExplorer] = useState(false);
  const [showBugHunt, setShowBugHunt] = useState(false);

  const games = [
    {
      icon: Brain,
      title: 'Skills Explorer',
      description: 'Full-page skill discovery',
      action: () => {
        setShowSkillsExplorer(true);
        setIsOpen(false);
      }
    },
    {
      icon: Brain,
      title: 'QA Quiz',
      description: 'Test your knowledge',
      action: () => {
        setShowQuickGame(true);
        setIsOpen(false);
      }
    },
    {
      icon: Zap,
      title: 'Bug Hunt',
      description: 'Find the bugs!',
      action: () => {
        setShowBugHunt(true);
        setIsOpen(false);
      }
    }
  ];

  return (
    <>
      {/* Games Button */}
      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 transition-colors duration-300 min-w-[40px] min-h-[40px] flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700"
          aria-label="Games menu"
         title="Games"
        >
          <Gamepad2 size={20} className="text-gray-700 dark:text-gray-300" />
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsOpen(false)}
              />
              
              {/* Dropdown */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
              >
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Gamepad2 size={16} />
                    Interactive Games
                  </h3>
                  
                  <div className="space-y-1">
                    {games.map((game, index) => (
                      <motion.button
                        key={index}
                        onClick={game.action}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                            <game.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                              {game.title}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                              {game.description}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Game Modals - Using createPortal to render at document.body */}
      {showQuickGame && createPortal(
        <QuickQuizModal onClose={() => setShowQuickGame(false)} />,
        document.body
      )}

      {showSkillsExplorer && createPortal(
        <SkillsExplorerPage onClose={() => setShowSkillsExplorer(false)} />,
        document.body
      )}

      {showBugHunt && createPortal(
        <BugHuntModal onClose={() => setShowBugHunt(false)} />,
        document.body
      )}
    </>
  );
};

// Quick Quiz Modal Component
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
                  <X size={20} className="text-gray-600 dark:text-gray-300" />
                </motion.button>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">🧠 QA Quiz</h1>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Test your QA knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Quick QA Quiz</h3>
        </div>

        {!showResult ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>Score: {score}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 h-2 rounded-full transition-all duration-300"
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
                  className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-900 dark:text-white"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
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
                className="flex-1 bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
        </div>
      </motion.div>
    </div>
  );
};

// Bug Hunt Game Modal Component
const BugHuntModal = ({ onClose }: { onClose: () => void }) => {
  const [foundBugs, setFoundBugs] = useState<Set<number>>(new Set());
  const [gameComplete, setGameComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);

  // Generate 40 bugs with random positions and types
  const bugs = React.useMemo(() => {
    const bugTypes = ['🐛', '🐞', '🦗', '🕷️', '🐜', '🦟', '🪲', '🪳'];
    const positions: Array<{
      id: number;
      position: { top: string; left: string };
      type: string;
    }> = [];
    
    // Helper function to check if two positions overlap
    const isOverlapping = (pos1: { top: number; left: number }, pos2: { top: number; left: number }) => {
      const minDistance = 8; // Minimum distance between bugs (in percentage)
      const distance = Math.sqrt(
        Math.pow(pos1.top - pos2.top, 2) + Math.pow(pos1.left - pos2.left, 2)
      );
      return distance < minDistance;
    };
    
    // Generate positions with collision detection
    for (let i = 1; i <= 40; i++) {
      let attempts = 0;
      let validPosition = false;
      let newPos = { top: 0, left: 0 };
      
      // Try to find a non-overlapping position (max 50 attempts)
      while (!validPosition && attempts < 50) {
        newPos = {
          top: Math.random() * 80 + 10, // 10% to 90% to avoid edges
          left: Math.random() * 80 + 10, // 10% to 90% to avoid edges
        };
        
        // Check if this position overlaps with existing bugs
        validPosition = !positions.some(existingBug => {
          const existingPos = {
            top: parseFloat(existingBug.position.top),
            left: parseFloat(existingBug.position.left)
          };
          return isOverlapping(newPos, existingPos);
        });
        
        attempts++;
      }
      
      // If we couldn't find a non-overlapping position after 50 attempts,
      // use the last generated position anyway (fallback)
      const position = {
        id: i,
        position: {
          top: `${newPos.top}%`,
          left: `${newPos.left}%`,
        },
        type: bugTypes[Math.floor(Math.random() * bugTypes.length)]
      };
      positions.push(position);
    }
    
    return positions;
  }, []);

  React.useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameComplete(true);
    }
  }, [gameStarted, timeLeft, gameComplete]);

  React.useEffect(() => {
    if (foundBugs.size === bugs.length) {
      setGameComplete(true);
    }
  }, [foundBugs, bugs.length]);

  const handleBugClick = (bugId: number) => {
    if (!gameStarted) setGameStarted(true);
    setFoundBugs(prev => new Set([...prev, bugId]));
  };

  const resetGame = () => {
    setFoundBugs(new Set());
    setGameComplete(false);
    setTimeLeft(30);
    setGameStarted(false);
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
                  <X size={20} className="text-gray-600 dark:text-gray-300" />
                </motion.button>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">🐛 Bug Hunt</h1>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Find all the bugs as fast as you can</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">Bug Hunt Game</h3>
        </div>

        <div className="text-center mb-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 dark:text-gray-300">
              Bugs Found: {foundBugs.size}/{bugs.length}
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              Time: {timeLeft}s
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(foundBugs.size / bugs.length) * 100}%` }}
            />
          </div>
        </div>

        {!gameStarted && !gameComplete && (
          <div className="text-center mb-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Find all {bugs.length} bugs by clicking on them! You have 30 seconds.
            </p>
            <button
              onClick={() => setGameStarted(true)}
              className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Hunt!
            </button>
          </div>
        )}

        {gameComplete && (
          <div className="text-center mb-4 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
            <motion.div 
              className="text-6xl mb-4"
            >
              {foundBugs.size === bugs.length ? '🏆' : '⏰'}
            </motion.div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {foundBugs.size === bugs.length ? 'Perfect Hunt!' : 'Time\'s Up!'}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You found {foundBugs.size} out of {bugs.length} bugs!
            </p>
            <div className="flex gap-3">
              <button
                onClick={resetGame}
               className="flex-1 bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Hunt Again
              </button>
              <button
                onClick={onClose}
               className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
            </motion.div>
          </div>
        )}

        {/* Bug Hunt Area */}
        <div className="relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl h-[500px] overflow-hidden shadow-md">
          {bugs.map((bug) => (
            <motion.button
              key={bug.id}
              onClick={() => handleBugClick(bug.id)}
              style={bug.position}
              className={`absolute text-base w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                foundBugs.has(bug.id) ? 'opacity-30 scale-75' : 'hover:scale-125'
              }`}
              whileHover={{ scale: foundBugs.has(bug.id) ? 0.75 : 1.3 }}
              whileTap={{ scale: 0.8 }}
              disabled={foundBugs.has(bug.id)}
            >
              {foundBugs.has(bug.id) ? '✅' : bug.type}
            </motion.button>
          ))}
          
          {!gameStarted && !gameComplete && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Click "Start Hunt!" to begin
              </p>
            </div>
          )}
        </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameButton;