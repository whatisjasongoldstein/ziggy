export default function Platform({ title, items }) {
  return (
    <section class="c-section l-container--full u-separator">
      <h1>{title}</h1>

      <ol class="c-platform-items">
        {items.map(item => {
          return <li class="c-platform-item">{item}</li>;
        })}
      </ol>
    </section>
  );
}
