import Image from "next/image";
import Section from "./section";
import styles from "./book.module.css";

export function Book() {
  return (
    <Section>
      <div className={styles.balanceLayout}>
        <figure className={styles.image}>
          <Image src="/images/book.png" width={500} height={725} />
        </figure>
        <div className={styles.text}>
          <p>
            Like all up and coming politicians, Mayor Ziggy has written (well, dictated through many
            hours of barking), his first book. Buy it on Amazon, Bookshop.org, or those sad little
            airport stands that are always showcasing these things.
          </p>
          <p>
            Thomas Jefferson wrote that the tree of liberty would be sustained by blood. Ziggy says
            we should just pee on it instead.
          </p>
        </div>
      </div>
    </Section>
  );
}
