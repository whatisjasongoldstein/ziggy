import { useRef, useEffect, useState } from "react";

/**
 * Found https://billyjacoby.dev/intersection-observer-react-hooks
 * I have no idea why this works...
 */
export const useIntersectionObserver = (
  ref,
  { threshold, root, rootMargin }
) => {
  // configure the state
  const [state, setState] = useState({
    inView: false,
    triggered: false,
    entry: undefined
  });

  let observer;

  // Obviously this only works in the browser
  if (process.browser) {
    observer =
      observer ||
      new IntersectionObserver(
        (entries, observerInstance) => {
          // checks to see if the element is intersecting
          if (entries[0].intersectionRatio > 0) {
            // if it is update the state, we set triggered as to not re-observe the element
            setState({
              inView: true,
              triggered: true,
              entry: observerInstance
            });
            // unobserve the element
            observerInstance.unobserve(ref.current);
          }
          return;
        },
        {
          rootMargin: "500px"
        }
      );
  }

  useEffect(() => {
    // check that the element exists, and has not already been triggered
    if (observer && ref.current && !state.triggered) {
      observer.observe(ref.current);
    }
  });

  return [state.inView, state.entry];
};

export default function LazyLoadedImage({ src, alt }) {
  const elementRef = useRef(null);
  const [inView, entry] = useIntersectionObserver(elementRef, {
    threshold: 0
  });

  useEffect(() => {}, [inView]);

  return (
    <img
      ref={elementRef}
      key={src}
      className="lazyload"
      src={inView ? src : ""}
      alt={alt}
    />
  );
}
