import LazyLoadedImage from "./lazyloaded-image";

function If({ condition, children }) {
  if (condition) {
    return children;
  }
  return null;
}

export default function PhotoModule(props) {
  return (
    <div className={`c-photo-module ${props.modifier || ""}`}>
      <figure>
        <LazyLoadedImage src={props.src} alt={props.alt} />
        <figcaption
          dangerouslySetInnerHTML={{ __html: props.caption }}
        ></figcaption>
      </figure>
      <blockquote>
        <span>{props.quote}</span>
        <If condition={props.source}>
          <footer
            dangerouslySetInnerHTML={{ __html: `— ${props.source}` }}
          ></footer>
        </If>
      </blockquote>
    </div>
  );
}
