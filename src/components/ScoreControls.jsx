import React from 'react';
import { Plus, RotateCcw } from 'lucide-react';

export function ScoreControls({ onScore, onUndo }) {
  return (
  <>
    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
      <button
        onClick={() => onScore(1)}
        className="
          group relative px-8 py-4 rounded-xl
          bg-gradient-to-r from-blue-500 to-blue-600
          hover:from-blue-600 hover:to-blue-700
          transform transition-all duration-200
          active:scale-95 shadow-lg
          flex items-center justify-center gap-3
        "
      >
        <Plus size={24} />
        <span className="font-semibold">Point to Player 1</span>
      </button>
      <button
        onClick={() => onScore(2)}
        className="
          group relative px-8 py-4 rounded-xl
          bg-gradient-to-r from-purple-500 to-purple-600
          hover:from-purple-600 hover:to-purple-700
          transform transition-all duration-200
          active:scale-95 shadow-lg
          flex items-center justify-center gap-3
        "
      >
        <Plus size={24} />
        <span className="font-semibold">Point to Player 2</span>
      </button>
    </div>

    <div className="flex justify-center mb-8">
        <button
          onClick={onUndo}
          // disabled={!canUndo}
          className={`
            group relative px-8 py-4 rounded-xl 
            bg-gradient-to-r from-gray-500 to-gray-600 opacity-50 cursor-not-allowed'}
            transform transition-all duration-200
            active:scale-95 shadow-lg 
            flex items-center justify-center gap-3
          `}
        >
          <RotateCcw size={24} />
          <span className="font-semibold">Undo Last Point</span>
        </button>
      </div>
  </>
  );
}