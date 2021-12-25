import Image from "next/image";
import styles from "../styles/components/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1 className={styles.h1}>Re-elect Mayor Ziggy!</h1>
        <h2 className={styles.h2}>
          You want a friend in Washington?
          <br />
          Get a dog!
        </h2>
      </div>
    </div>
  );
}
