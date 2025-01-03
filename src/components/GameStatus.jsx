import React from 'react';
import { AlertCircle, Award } from 'lucide-react';

export function GameStatusDisplay({ gameStatus, scores }) {
  if (gameStatus.isGameWon) {
    return (
      <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-yellow-300 animate-bounce">
        <Award className="w-8 h-8" />
        <span>Player {gameStatus.winner} Wins!</span>
      </div>
    );
  }

  if (gameStatus.isDeuce) {
    return (
      <div className="flex items-center justify-center space-x-2 text-xl text-orange-300">
        <AlertCircle className="w-6 h-6" />
        <span>Deuce!</span>
      </div>
    );
  }

  if (gameStatus.isGamePoint) {
    return (
      <div className="flex items-center justify-center space-x-2 text-xl text-yellow-300">
        <AlertCircle className="w-6 h-6" />
        <span>Game Point - Player {scores.player1 > scores.player2 ? '1' : '2'}</span>
      </div>
    );
  }

  return null;
}