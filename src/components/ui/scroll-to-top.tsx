"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ScrollToTopProps {
  className?: string;
  threshold?: number;
  strokeColor?: string;
  size?: number;
}

export function ScrollToTop({
  className,
  threshold = 280,
  strokeColor = "#2563EB", // Swiss engineering precision cobalt blue
  size = 48,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest > threshold);
    });
    return () => unsubscribe();
  }, [scrollY, threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const center = size / 2;
  const strokeWidth = 3.2;
  const radius = center - strokeWidth - 1;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Scroll to top"
          className={cn(
            "group fixed bottom-20 right-4 sm:bottom-7 sm:right-7 z-40 flex items-center justify-center focus:outline-none select-none drop-shadow-[0_8px_20px_rgba(15,23,42,0.14)]",
            className
          )}
          style={{ width: size, height: size }}
          type="button"
        >
          {/* Circular SVG Radial Progress Ring */}
          <svg
            className="w-full h-full -rotate-90 origin-center"
            viewBox={`0 0 ${size} ${size}`}
            aria-hidden="true"
          >
            {/* Background Track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              fill="none"
              className="stroke-slate-200/90"
            />
            {/* Dynamic Active Progress Stroke */}
            <motion.circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              fill="none"
              stroke={strokeColor}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>

          {/* Inner Floating White Core Button */}
          <div className="absolute inset-1.5 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-800 group-hover:text-blue-600 transition-colors">
            <ArrowUp 
              size={18} 
              strokeWidth={2.4} 
              className="transition-transform duration-200 group-hover:-translate-y-0.5" 
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;

