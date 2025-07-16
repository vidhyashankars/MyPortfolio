import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Star, Zap } from 'lucide-react';

const EasterEggs = () => {
  const [showSnakeGame, setShowSnakeGame] = useState(false);
  const [showMemoryGame, setShowMemoryGame] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);

  // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);

      if (newSequence.join(',') === konamiCode.join(',')) {
        setShowSnakeGame(true);
        setKonamiSequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence]);

  // Triple click on logo to show memory game
  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    setTimeout(() => setClickCount(0), 1000);
    
    if (clickCount === 2) {
      setShowMemoryGame(true);
      setClickCount(0);
    }
  };

  return (
    <>
      {/* Hidden trigger for logo clicks */}
      <div 
        onClick={handleLogoClick}
        className="fixed top-4 left-4 w-32 h-16 z-50 cursor-pointer opacity-0"
        title="Triple click for a surprise!"
      />

      {/* Snake Game Modal */}
      <AnimatePresence>
        {showSnakeGame && (
          createPortal(
            <SnakeGameModal onClose={() => setShowSnakeGame(false)} />,
            document.body
          )
        )}
      </AnimatePresence>

      {/* Memory Game Modal */}
      <AnimatePresence>
        {showMemoryGame && (
          createPortal(
            <MemoryGameModal onClose={() => setShowMemoryGame(false)} />,
            document.body
          )
        )}
      </AnimatePresence>
    </>
  );
};

// Snake Game Component
const SnakeGameModal = ({ onClose }: { onClose: () => void }) => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp': setDirection([-1, 0]); break;
        case 'ArrowDown': setDirection([1, 0]); break;
        case 'ArrowLeft': setDirection([0, -1]); break;
        case 'ArrowRight': setDirection([0, 1]); break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake(currentSnake => {
        const newSnake = [...currentSnake];
        const head = [newSnake[0][0] + direction[0], newSnake[0][1] + direction[1]];

        // Check boundaries
        if (head[0] < 0 || head[0] >= 20 || head[1] < 0 || head[1] >= 20) {
          setGameOver(true);
          return currentSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
          setGameOver(true);
          return currentSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head[0] === food[0] && head[1] === food[1]) {
          setScore(prev => prev + 10);
          setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoop);
  }, [direction, food, gameOver]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative z-[10000]"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">🐍 QA Snake Game</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="text-center mb-4">
          <p className="text-gray-600 dark:text-gray-300">Score: {score}</p>
          {gameOver && <p className="text-red-500 font-bold">Game Over! Press any key to restart</p>}
        </div>

        <div className="grid grid-cols-20 gap-0 border-2 border-gray-300 dark:border-gray-600 mx-auto w-80 h-80">
          {Array.from({ length: 400 }, (_, i) => {
            const row = Math.floor(i / 20);
            const col = i % 20;
            const isSnake = snake.some(segment => segment[0] === row && segment[1] === col);
            const isFood = food[0] === row && food[1] === col;
            
            return (
              <div
                key={i}
                className={`w-4 h-4 ${
                  isSnake ? 'bg-green-500' : 
                  isFood ? 'bg-red-500' : 
                  'bg-gray-100 dark:bg-gray-700'
                }`}
              />
            );
          })}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
          Use arrow keys to move. Find the Konami code for this game!
        </p>
      </motion.div>
    </motion.div>
  );
};

// Memory Game Component
const MemoryGameModal = ({ onClose }: { onClose: () => void }) => {
  const [cards, setCards] = useState<{ id: number; value: string; flipped: boolean; matched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const cardValues = ['🧪', '🔍', '🐛', '✅', '⚡', '🎯', '🚀', '💎'];

  useEffect(() => {
    const shuffledCards = [...cardValues, ...cardValues]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false
      }));
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].flipped || cards[id].matched) return;

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);
    
    setCards(prev => prev.map(card => 
      card.id === id ? { ...card, flipped: true } : card
    ));

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      setTimeout(() => {
        const [first, second] = newFlippedCards;
        if (cards[first].value === cards[second].value) {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, matched: true }
              : card
          ));
        } else {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, flipped: false }
              : card
          ));
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative z-[10000]"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">🧠 QA Memory Test</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="text-center mb-4">
          <p className="text-gray-600 dark:text-gray-300">Moves: {moves}</p>
          {gameWon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-500 font-bold flex items-center justify-center gap-2"
            >
              <Trophy size={20} />
              Congratulations! You won in {moves} moves!
            </motion.div>
          )}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {cards.map((card) => (
            <motion.button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`aspect-square rounded-lg text-2xl font-bold transition-all duration-300 ${
                card.flipped || card.matched
                  ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {card.flipped || card.matched ? card.value : '?'}
            </motion.button>
          ))}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
          Triple-click the logo to access this game!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default EasterEggs;