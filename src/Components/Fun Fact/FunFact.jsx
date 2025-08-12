import React from 'react';
import Game from './Game';
import Github from './Github/Github';
import { Star } from 'lucide-react';

const FunFact = () => {
  const [activeComponent, setActiveComponent] = React.useState('');

  const buttons = [
    { key: 'game', label: '🎮 Game' },
    { key: 'github', label: '🏆 GitHub' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900/70 via-blue-950/40  to-violet-950/40 min-h-screen">
      <div className="2xl:w-10/12 lg:w-11/12 mx-auto p-4  pt-25">
        <h1 className="text-xl md:text-3xl font-bold text-center text-teal-500 mb-10 flex items-center justify-center gap-3">
          <Star className="text-yellow-500 w-7 h-7" />
          Give You Some Fun
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {buttons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveComponent(btn.key)}
              className={`px-4 py-2 cursor-pointer rounded shadow-sm  transition focus:outline-none focus:ring-2 
            ${activeComponent === btn.key
                  ? 'bg-blue-800 text-white  shadow-md'
                  : 'bg-white text-blue-600 border-blue-300 hover:bg-blue-500 hover:text-white shadow-2xl shadow-blue-200'
                }
          `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeComponent === 'game' && <Game />}
          {activeComponent === 'github' && <Github />}
          {activeComponent === '' && (
            <p className="text-center text-gray-200">
              Click a button above to get started!
            </p>
          )}
        </div>
      </div>
    </div>

  );
};

export default FunFact;
