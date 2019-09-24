let _lazyloadbound = false;
function bindLazyLoad() {
  if (_lazyloadbound) {
    return;
  }
  _lazyloadbound = true;

  console.log("this should only run once");
}

import LazyLoadedImage from "./lazyloaded-image";

function PhotosetItem({ src, alt, caption }) {
  bindLazyLoad();
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
