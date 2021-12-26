import Image from "./image";
import Section from "./section";
import styles from "./book.module.css";

export default function Book() {
  return (
    <Section>
      <div className={styles.balanceLayout}>
        <figure className={styles.image}>
          <Image src="/images/book.png" width={500} height={725} />
        </figure>
        <div className={styles.text}>
          <p>
            Like all up and coming politicians, Mayor Ziggy has written (well, dictated through many
            hours of barking), a political memoir. Buy <i>Marking The Tree of Liberty</i> on Amazon,
            Bookshop.org, or those sad little airport stands that are always showcasing these
            things.
          </p>
          <p>
            Thomas Jefferson wrote that the tree of liberty would be sustained by blood. Ziggy says
            we should just pee on it instead.
          </p>
          <p>
            The <i>New York Times</i> calls the book ”so honest an insightful it could have only
            been written by a dog.”
          </p>
        </div>
      </div>
    </Section>
  );
}
