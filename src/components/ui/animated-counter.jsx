import React, { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

export function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 1.8, 
  delay = 0,
  className = "",
  formatter = (v) => v
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(from);
  const count = useMotionValue(from);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // Precision ease-out curve
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {formatter(displayValue)}
    </span>
  );
}

export default AnimatedCounter;

