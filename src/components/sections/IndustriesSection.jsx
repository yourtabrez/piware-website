import React, { useRef } from 'react';
import { 
  Rocket, 
  ShieldAlert, 
  Activity, 
  Cpu, 
  Smartphone, 
  Radio, 
  Wheat, 
  GraduationCap, 
  Bot, 
  Zap 
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import { industries } from '../../data/industries';

const industryIcons = {
  Rocket,
  ShieldAlert,
  Activity,
  Cpu,
  Smartphone,
  Radio,
  Wheat,
  GraduationCap,
  Bot,
  Zap
};

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="industries" 
      className="py-24 bg-slate-50/70 border-t border-slate-200 relative overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHead
            eyebrow="Target Sectors"
            title="Hardware Engineered for Demanding Industries."
            description="From aerospace-grade environmental resilience to cost-optimized consumer IoT, we engineer systems that operate without compromise."
            align="left"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4"
        >
          {industries.map((ind) => {
            const IconComponent = industryIcons[ind.icon] || Cpu;

            return (
              <motion.div
                key={ind.name}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:border-slate-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/80 font-semibold">
                      {ind.focus}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    {ind.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-600 font-bold mb-2">
                    {ind.headline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {ind.description}
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
