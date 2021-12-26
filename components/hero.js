import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h2 className={styles.h2}>
          <i>
            ”You want a friend in Washington?
            <br />
            Get a dog!”
          </i>
          <footer className={styles.attr}>- Harry S. Truman</footer>
        </h2>
        <h1 className={styles.h1}>Re-elect Mayor Ziggy!</h1>
      </div>
    </div>
  );
}
