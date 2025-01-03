export const POINTS_TO_WIN = 5;
export const MIN_POINT_DIFFERENCE = 2;

export function determineGameStatus(player1Score, player2Score) {
  const maxScore = Math.max(player1Score, player2Score);
  const scoreDifference = Math.abs(player1Score - player2Score);
  
  const isGamePoint = (player1Score >= POINTS_TO_WIN - 1 || player2Score >= POINTS_TO_WIN - 1) &&
                     player1Score !== player2Score;

  const isGameWon = maxScore >= POINTS_TO_WIN && scoreDifference >= MIN_POINT_DIFFERENCE;
  
  let winner = null;
  if (isGameWon) {
    winner = player1Score > player2Score ? 1 : 2;
  }

  return {
    isGamePoint,
    isGameWon,
    winner,
    isDeuce: player1Score >= POINTS_TO_WIN - 1 && player1Score === player2Score
  };
}