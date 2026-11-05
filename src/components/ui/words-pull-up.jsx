import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const WordsPullUp = ({ 
  text, 
  className = "", 
  showAsterisk = false, 
  style,
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.26em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="text-slate-400 font-mono text-[0.45em] ml-1 align-super font-normal">
                [01]
              </span>
            )}
          </motion.span>
        );
      })}
    </span>
  );
};

export const WordsPullUpMultiStyle = ({ segments, className = "", style, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 24, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.65,
            delay: delay + i * 0.07,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.26em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

