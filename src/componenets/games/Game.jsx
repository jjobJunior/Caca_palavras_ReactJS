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
  return (
    <div className={styles.game}>
      <p className={styles.points}>
        <span>Pontuação: {score}</span>
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
            <span className={styles.letter}> {letter}</span>
          ) : (
            <span key={contador} className={styles.blankSquare}></span>
          )
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, contador) => (
          <span key={contador}>{letter}, </span>
        ))}
        <span>b,</span>
      </div>
    </div>
  );
};

export default Game;
