import Markdown from "./markdown";
import styles from "./quote.module.css";

const LAYOUTS = {
  CENTER: styles["center"],
  LEFT: styles.left,
  RIGHT: styles.right,
};

export default function Quote({ layout = LAYOUTS.CENTER, children, attribution }) {
  return (
    <blockquote className={styles.root + " " + layout}>
      <Markdown>{children}</Markdown>
      {attribution && <footer className={styles.attr}>&mdash; {attribution}</footer>}
    </blockquote>
  );
}
