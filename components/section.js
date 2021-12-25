import styles from "./section.module.css";
import { containerStyle } from "./helpers.module.css";

const shades = {
  DEFAULT: "shadeDefault",
  BLUE: "shadeBlue",
  RED: "shadeRed",
};

export default function Section({ head, children, shade = shades.DEFAULT, className = "" }) {
  let shadeStyle = styles[shades[shade]] || "";

  return (
    <section className={shadeStyle + " " + className}>
      <div className={containerStyle}>
        {head && <h2 className={styles.sectionHead}>{head}</h2>}
        {children}
      </div>
    </section>
  );
}
