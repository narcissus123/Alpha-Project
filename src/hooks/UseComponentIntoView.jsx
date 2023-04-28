import { useLayoutEffect, useRef, useState } from "react";

export const UseComponentIntoView = (isLoading) => {
  const [show, doShow] = useState({ itemOne: false });

  /* Animating image based on scroll position */
  const picRef = useRef(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const topPos = (element) => element.getBoundingClientRect().top;
      //added to reduce redundancy
      const divPos = topPos(picRef.current);

      const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        if (divPos < scrollPos) {
          doShow((state) => ({ ...state, itemOne: true }));
        } else if (divPos > scrollPos) {
          doShow((state) => ({ ...state, itemOne: false }));
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [isLoading]);
  return { picRef, show };
};
