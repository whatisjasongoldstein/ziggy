import { useInView } from "react-intersection-observer";

export default function LazyLoadedImage({ src, alt }) {
  const [ref, inView, entry] = useInView({
    rootMargin: "500px"
  });

  return (
    <img
      ref={ref}
      key={src}
      className="lazyload"
      src={inView ? src : ""}
      alt={alt}
    />
  );
}
