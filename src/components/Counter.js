import React, { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const startCounting = () => {
      let start = 0;
      setCount(0); // reset count before animating
      const incrementTime = (duration * 1000) / end;

      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(counter);
      }, incrementTime);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default Counter;
