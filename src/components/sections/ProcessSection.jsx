import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import GlassCard from '../ui/glass-card';
import { processSteps } from '../../data/process';
import { 
  Compass, 
  Cpu, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Factory, 
  RefreshCw 
} from 'lucide-react';

const STEP_ICONS = {
  "01": Compass,
  "02": Cpu,
  "03": Layers,
  "04": Terminal,
  "05": ShieldCheck,
  "06": Factory,
  "07": RefreshCw,
};

export default function ProcessSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.65, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  return (
    <section id="process" className="py-24 bg-white border-t border-slate-200/90 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHead
            eyebrow="Development Process"
            title="Structured. Transparent. Repeatable."
            description="A battle-tested 7-stage engineering methodology designed to catch design flaws early, preserve budget, and ensure predictable production ramp."
            align="left"
          />
        </motion.div>

        {/* 3D Glass Card Process Grid */}
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4"
        >
          {processSteps.map((step) => {
            const Icon = STEP_ICONS[step.step] || Compass;

            return (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="h-full"
              >
                <GlassCard
                  step={step.step}
                  title={step.title}
                  summary={step.summary}
                  description={step.description}
                  deliverables={step.deliverables}
                  icon={Icon}
                  theme="light"
                  badgeText="PIWARE SPEC"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
