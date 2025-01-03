import React from 'react';
import { RotateCcw } from 'lucide-react';
import { ScoreDisplay } from './components/ScoreDisplay';
import { ScoreControls } from './components/ScoreControls';
import { GameStatusDisplay } from './components/GameStatus';
import { useGameState } from './hooks/useGameState';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import GamingButtons from './components/GameButton';
import { determineGameStatus } from './utils/gameLogic';


export default function App() {
  
  const { scores, currentServer, gameStatus, updateScore, undoScore, handleSubmit } = useGameState();

  const currentGameStatus = determineGameStatus(scores.player1, scores.player2);
  const { winner } = currentGameStatus;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Badminton Scorer
          </h1>
          <GameStatusDisplay gameStatus={gameStatus} scores={scores} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <ScoreDisplay
            playerNumber={1}
            score={scores.player1}
            isServing={currentServer === 1}
          />
          <ScoreDisplay
            playerNumber={2}
            score={scores.player2}
            isServing={currentServer === 2}
          />
        </div>

        {!gameStatus.isGameWon && (
          <ScoreControls onScore={updateScore} onUndo={undoScore}/>
        )}

        <div className="text-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>            
              <Button variant="outline" className={`flex justify-center m-auto bg-green-500 border-none hover:bg-green-600 hover:text-white ${winner ? "block" : "hidden"}`}>
                Submit
              </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-black">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription className="text-white">
                    Are you sure you want to add this score to the scoreboard? Once added, it will become a permanent part of the match records and visible to all relevant users. Please double-check the details before proceeding.
                  </AlertDialogDescription>

                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    className="bg-green-600 hover:bg-green-600" 
                    onClick={handleSubmit}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </div>

      </div>
      
        <GamingButtons />
    </div>
  );
}




