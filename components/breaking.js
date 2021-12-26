import styles from "./breaking.module.css";
import { containerStyle } from "./helpers.module.css";

export default function Breaking() {
  return (
    <section className={styles.root + " " + containerStyle}>
      <p>
        <strong className={styles.label}>Breaking News</strong>
        &nbsp;the first puppy mayor of <b>Washington, DC</b> is running for re-election! Mr. Ziggy's
        capable and floppy-eared leadership has helped DC navigated the challenges of the last few
        years, and he's just getting started!
      </p>
    </section>
  );
}
