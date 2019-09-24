function PlatformItem(item) {
  return (
    <li key={item} className="c-platform-item">
      {item}
    </li>
  );
}

export default function Platform({ title, items }) {
  return (
    <section className="c-section l-container--full u-separator">
      <h1>{title}</h1>
      <ol className="c-platform-items">{items.map(PlatformItem)}</ol>
    </section>
  );
}
