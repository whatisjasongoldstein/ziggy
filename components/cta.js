import Section from "./section";
import styles from "./cta.module.css";

export default function CTA() {
  return (
    <Section shade="BLUE">
      <h1>Join the puppy revolution for a better DC and a better America!</h1>
      <p>
        <span className={styles.tag}>#VoteZiggy</span>
        <span className={styles.tag}>#FloppyEars</span>
      </p>

      <footer className={styles.copyright}>&copy; 2021 Ziggy For America</footer>
    </Section>
  );
}
