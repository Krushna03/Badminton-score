import { useState } from 'react';
import { determineGameStatus } from '../utils/gameLogic';
import { useNavigate } from 'react-router-dom';
import { submittedScores } from '../utils/scoreData';

export function useGameState() {

  const navigate = useNavigate()
  const [scores, setScores] = useState({
    player1: 0,
    player2: 0
  });
  const [currentServer, setCurrentServer] = useState(1);

  const updateScore = (playerNumber) => {
    setScores(prev => ({
      ...prev,
      [`player${playerNumber}`]: prev[`player${playerNumber}`] + 1
    }));

    if (playerNumber !== currentServer) {
      setCurrentServer(playerNumber);
    }
  };

  const undoScore = () => {
    setScores(prev => {
      const player1 = prev.player1 > 0 ? prev.player1 - 1 : 0;
      const player2 = prev.player2 > 0 ? prev.player2 - 1 : 0;

      return { player1, player2 };
    });
  };

  // const resetGame = () => {
  //   setScores({ player1: 0, player2: 0 });
  //   setCurrentServer(1);
  // };

  
  const gameStatus = determineGameStatus(scores.player1, scores.player2);
  
  const handleSubmit = () => {
    console.log("Handled");
    const winner = scores.player1 > scores.player2 ? "Player1" : "Player2";
    const name1Score = scores.player1;
    const name2Score = scores.player2;
    
    submittedScores?.push({
      id: submittedScores.length + 1,
      name1: "Player1",
      name1Score: name1Score,
      name2: "Player2",
      name2Score: name2Score,
      won: winner,
      date: new Date().toLocaleDateString(),
    }); 
     navigate('/dashboard')
  }


  return {
    scores,
    currentServer,
    gameStatus,
    updateScore,
    // resetGame,
    undoScore,
    handleSubmit
  };
}