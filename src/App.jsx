//CSS
import "./App.css";

//REACT
import { useCallback, useEffect, useState } from "react";

//DATA
import { wordsList } from "./data/words";

//components
import StartScreen from "./componenets/startScreen/StartScreen";
import Game from "./componenets/games/Game";
import GameOver from "./componenets/gameOverrs/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //starts the caça palavras game
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // processa as entradas de letra
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      <div className="App">
        {gameStage === "start" && <StartScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "end" && <GameOver retry={retry} />}
      </div>
    </>
  );
}

export default App;
