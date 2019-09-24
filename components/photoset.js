import LazyLoadedImage from "./lazyloaded-image";

function PhotosetItem({ src, alt, caption }) {
  return (
    <figure key={src}>
      {/* @TODO: lazyload */}
      <LazyLoadedImage src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Photoset({ items, modifier = "" }) {
  return (
    <div className={`c-photoset ${modifier}`}>{items.map(PhotosetItem)}</div>
  );
}
