import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../common/Container';
import { AnimatedCounter } from '../ui/animated-counter';
import { companyInfo } from '../../data/companyInfo';

export default function TrustStrip() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-14 border-y border-slate-200/90 bg-gradient-to-b from-slate-50/90 via-slate-50/60 to-white relative z-20 overflow-hidden"
    >
      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {companyInfo.stats.map((stat, idx) => (
            <motion.div 
              key={stat.label} 
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col items-center text-center px-3 sm:px-4 py-4 md:py-2 select-none ${
                // Precise 2x2 quadrant borders on mobile
                idx % 2 === 0 ? 'border-r border-slate-200/80' : ''
              } ${
                idx < 2 ? 'border-b md:border-b-0 border-slate-200/80' : ''
              } ${
                // Clean vertical divider lines on desktop (md+)
                idx > 0 ? 'md:border-l md:border-slate-200/80' : ''
              }`}
            >
              {/* Animated Counter Display */}
              <div className="flex items-baseline gap-0.5 text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-mono">
                <AnimatedCounter 
                  from={0}
                  to={stat.value}
                  duration={1.8}
                  delay={0.2 + idx * 0.1}
                />
                <motion.span 
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: 0.45 + idx * 0.1, 
                    duration: 0.45, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="text-slate-400 group-hover:text-blue-600 transition-colors text-3xl lg:text-4xl"
                >
                  {stat.suffix}
                </motion.span>
              </div>

              {/* Stat Metric Title */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                className="mt-2 text-sm sm:text-base font-bold text-slate-800 tracking-tight group-hover:text-slate-900 transition-colors"
              >
                {stat.label}
              </motion.div>

              {/* Technical Description Subtitle */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                className="text-xs text-slate-500 mt-1 font-mono tracking-tight"
              >
                {stat.description}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
