import React from 'react';
import { Trophy } from 'lucide-react';

export function ScoreDisplay({ playerNumber, score, isServing }) {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl p-6 
        ${isServing ? 'bg-gradient-to-br from-emerald-600 to-emerald-800' : 'bg-gradient-to-br from-slate-700 to-slate-900'}
        transition-all duration-300 ease-in-out
        transform hover:scale-102 shadow-xl
        ${isServing ? 'ring-2 ring-emerald-400 ring-opacity-60' : ''}
      `}
    >
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Player {playerNumber}
          </h2>
          {isServing && (
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
              Serving
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-center">
          <div className="text-7xl font-bold text-white tabular-nums">
            {score.toString().padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
}