import React, { useRef } from 'react';
import { Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import { testimonials } from '../../data/testimonials';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-slate-50/70 border-t border-slate-200 relative overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHead
            eyebrow="Client Testimonials"
            title="Trusted by Founders and Engineering Leaders."
            description="Direct feedback from the product heads, startup founders, and CTOs who build and ship with our studio."
            align="left"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:border-slate-300 hover:shadow-card-hover transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-slate-100 group-hover:text-slate-200 transition-colors pointer-events-none">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200/80">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    &bull; {item.project}
                  </span>
                </div>

                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-100 relative z-10">
                <div className="font-extrabold text-sm text-slate-900">
                  {item.author}
                </div>
                <div className="text-xs font-mono text-slate-500">
                  {item.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
