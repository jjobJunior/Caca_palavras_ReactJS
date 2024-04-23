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

  const [pickedword, setPickedword] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, , setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  };

  //starts the caça palavras game
  const startGame = () => {
    //pick word and pick category
    const { word, category } = pickWordAndCategory();

    //crate the array off letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letra) => letra.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    //fill states
    setLetters(wordLetters);
    setPickedword(word);
    setpickedCategory(category);

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
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            score={score}
            letters={letters}
            guesses={guesses}
            pickedword={pickedword}
            wrongLetters={wrongLetters}
            pickedCategory={pickedCategory}
            guessedLetters={guessedLetters}
          />
        )}
        {gameStage === "end" && <GameOver retry={retry} />}
      </div>
    </>
  );
}

export default App;
