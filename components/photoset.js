let _lazyloadbound = false;
function bindLazyLoad() {
  if (_lazyloadbound) {
    return;
  }
  _lazyloadbound = true;

  console.log("this should only run once");
}

function PhotosetItem({ src, alt, caption }) {
  bindLazyLoad();
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
