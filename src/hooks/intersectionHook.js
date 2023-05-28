import { useState, useEffect, useRef } from "react";
const useIntersectionObserver = (threshold = 0, rootMargin = "0px") => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe the target element when it's available
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer when the component unmounts or target element changes
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [threshold, rootMargin]);

  // Return the target ref and intersection status
  return [targetRef, isIntersecting];
};

export default useIntersectionObserver;
