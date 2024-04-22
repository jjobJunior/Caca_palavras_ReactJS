import styles from "./GameOver.module.css";

const GameOver = ({retry}) => {
  return (
    <div className={styles.container}>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar o jogo</button>
    </div>
  );
};

export default GameOver;
