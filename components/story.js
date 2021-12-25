import Image from "next/image";
import styles from "./story.module.css";
import Section from "./section";

import storyText from "../markdown/story.md";
import Markdown from "./markdown";

export default function Story() {
  return (
    <Section shade="BLUE" className={styles.root}>
      <figure className={styles.image}>
        <Image
          layout="responsive"
          src="/images/crouching-beagle.jpg"
          width="600"
          height="450"
        ></Image>
      </figure>
      <Markdown>{storyText}</Markdown>
    </Section>
  );
}
