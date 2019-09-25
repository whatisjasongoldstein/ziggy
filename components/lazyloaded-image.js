import { useRef, useEffect, useState } from "react";

/**
 * Inspired by https://billyjacoby.dev/intersection-observer-react-hooks
 */
export const useIntersectionObserver = ref => {
  // configure the state
  const [state, setState] = useState({
    inView: false,
    triggered: false
  });

  // Use this to cache the observer across lifecycles
  const observerRef = useRef();

  // Obviously this only works in the browser
  if (process.browser && !observerRef.current) {
    console.log("Observer created");
    observerRef.current = new IntersectionObserver(
      (entries, observerInstance) => {
        // checks to see if the element is intersecting
        if (entries[0].intersectionRatio > 0) {
          // if it is update the state, we set triggered
          // as to not re-observe the element
          setState({
            inView: true,
            triggered: true
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
    if (observerRef.current && ref.current && !state.triggered) {
      observerRef.current.observe(ref.current);
    }

    return function() {
      observerRef.current.unobserve(ref.current);
    };
  });

  return [state.inView];
};

export default function LazyLoadedImage({ src, alt }) {
  const elementRef = useRef(null);
  const [inView] = useIntersectionObserver(elementRef);

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
