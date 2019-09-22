function PhotosetItem({ src, alt, caption }) {
  return (
    <figure>
      {/* @TODO: lazyload */}
      <img className="lazyload" src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Photoset({ items }) {
  items.forEach(item => {
    item.key = item.src;
  });

  return <div class="c-photoset">{items.map(PhotosetItem)}</div>;
}
