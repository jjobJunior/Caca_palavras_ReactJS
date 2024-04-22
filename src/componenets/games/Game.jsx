import styles from "./Game.module.css";

const Game = ({verifyLetter}) => {
  return (
    <div className={styles.container}>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar o jogo</button>
    </div>
  );
};

export default Game;
