function PhotosetItem({ src, alt, caption }) {
  return (
    <figure>
      {/* @TODO: lazyload */}
      <img className="lazyload" src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Photoset({ items, modifier = "" }) {
  items.forEach(item => {
    item.key = item.src;
  });

  return <div class={`c-photoset ${modifier}`}>{items.map(PhotosetItem)}</div>;
}
