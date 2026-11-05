import React, { useRef } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Clock, 
  Layers3, 
  Handshake, 
  CheckCircle2 
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import { whyPiwarePoints } from '../../data/testimonials';

const whyIcons = {
  ShieldCheck,
  Layers,
  Clock,
  Layers3,
  Handshake,
  CheckCircle2
};

export default function WhyPiwareSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 26, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="why" 
      className="py-24 bg-white border-t border-slate-200 relative overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHead
            eyebrow="Why Piware"
            title="Engineering Credibility Built on Production Outcomes."
            description="We are not a bloated agency that outsources firmware or leaves you with unmanufacturable CAD files. We take ownership from the first schematic to the final assembly line."
            align="left"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyPiwarePoints.map((item) => {
            const IconComponent = whyIcons[item.icon] || CheckCircle2;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="tech-card p-5 sm:p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200 shadow-sm">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
