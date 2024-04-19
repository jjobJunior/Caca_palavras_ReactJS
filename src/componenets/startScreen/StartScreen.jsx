import styles from "./StartScreen.module.css"
const StartScreen = () => {
  return (
    <div>
      <h1 className={styles.starth1}>Caça Palavras</h1>
      <p className={styles.startp}>Clique no botão abaixo para começar a jogar</p>
      <button>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
