import { useState, useRef } from "react";
import styles from "./Game.module.css";

const Game = ({
  verifyLetter,
  score,
  letters,
  guesses,
  pickedword,
  wrongLetters,
  pickedCategory,
  guessedLetters,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: </span>
        {score}
      </p>
      <h1 className={styles.game}>Adivinhe a Palavra:</h1>
      <h3 className={styles.tip}>
        Dica sobre a palavra:
        <span> {pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, contador) =>
          guessedLetters.includes(letter) ? (
            <span className={styles.letter} key={contador}>
              {letter}
            </span>
          ) : (
            <span key={contador} className={styles.blankSquare}></span>
          )
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            onChange={(event) => setLetter(event.target.value)}
            required
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, cont) => (
          <span key={cont}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
