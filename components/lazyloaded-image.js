import dynamic from "next/dynamic";

export default function LazyLoadedImage({ src, alt }) {
  return <img loading="lazy" className="lazyload" src={src} alt={alt} />;
}
