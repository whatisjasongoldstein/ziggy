import Image from "next/image";
import LazyLoadedImage from "./lazyloaded-image";
import styles from "./photoset.module.css";

function PhotosetItem({ src, alt, caption, width, height }) {
  return (
    <figure className={styles.figure} key={src}>
      <Image src={src} alt={alt} width={width} height={height} layout="responsive" />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

export default function Photoset({ items }) {
  return <div className={styles.row}>{items.map(PhotosetItem)}</div>;
}
