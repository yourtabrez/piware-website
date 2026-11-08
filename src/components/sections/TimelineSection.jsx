import React, { useState, useRef } from 'react';
import { CheckCircle2, Clock, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import { timelineStages } from '../../data/timeline';

export default function TimelineSection() {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const currentStage = timelineStages[selectedStageIndex];
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70px" });

  return (
    <section 
      ref={sectionRef}
      id="lifecycle" 
      className="py-24 bg-slate-50/70 border-t border-slate-200 relative overflow-hidden"
    >
      <Container>
        {/* Section Head with In-Transition */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHead
            eyebrow="Hardware Lifecycle"
            title="From Concept to Mass Production. De-risked at Every Stage."
            description="Hardware development is unforgiving. Our disciplined stage-gate methodology ensures zero costly fabrication respins and predictable production timelines."
            align="left"
          />
        </motion.div>

        {/* Mobile Stage Selector Tabs (lg:hidden) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-x-auto no-scrollbar mb-5"
        >
          {timelineStages.map((stage, idx) => {
            const isActive = selectedStageIndex === idx;
            return (
              <button
                key={stage.stage}
                onClick={() => setSelectedStageIndex(idx)}
                className={`flex-1 min-w-[60px] py-2 px-1.5 rounded-xl text-center font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="block text-xs font-bold leading-tight">{stage.stage}</span>
                <span className={`block text-[9px] mt-0.5 leading-none ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                  {stage.timeline.split(' ')[0]}w
                </span>
              </button>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Stage Selector Column */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 flex-col gap-3"
          >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold mb-1">
              Select Stage to Inspect:
            </span>

            {timelineStages.map((stage, idx) => {
              const isActive = selectedStageIndex === idx;

              return (
                <button
                  key={stage.stage}
                  onClick={() => setSelectedStageIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive 
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md' 
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 text-slate-800 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                      isActive 
                        ? 'bg-white text-slate-900' 
                        : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                    }`}>
                      {stage.stage}
                    </div>
                    <div>
                      <div className={`font-extrabold text-base ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {stage.name}
                      </div>
                      <div className={`text-xs font-mono font-medium mt-0.5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {stage.timeline} &bull; {stage.batch}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-white translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                  }`} />
                </button>
              );
            })}

            {/* Total Timeline Banner */}
            <div className="mt-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <div className="text-sm text-slate-700 leading-snug">
                <strong className="text-slate-900 font-bold">Typical End-to-End Delivery:</strong> 8 to 20 Weeks depending on custom silicon, enclosure tooling, and regulatory certifications.
              </div>
            </div>
          </motion.div>

          {/* Active Stage Detail & Enclosure Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            
            {/* Stage Detail Card with Smooth Stage-Switch Transition */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-card relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.stage}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Stage Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-5">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Stage {selectedStageIndex + 1} of 5 &bull; {currentStage.stage}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                        {currentStage.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
                      <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-semibold">
                        ⏱ {currentStage.timeline}
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                        📦 {currentStage.batch}
                      </span>
                    </div>
                  </div>

                  {/* Stage Headline & Objective */}
                  <div className="mb-6">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                      {currentStage.headline}
                    </h4>
                    <p className="text-base text-slate-700 leading-relaxed font-normal">
                      {currentStage.objective}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-600 tracking-wider font-bold mb-3.5 block">
                      Milestone Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStage.deliverables.map((deliv) => (
                        <div 
                          key={deliv}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 font-medium leading-snug"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Hardware Enclosure Visual */}
            <div className="relative rounded-2xl p-2.5 bg-white border border-slate-200 shadow-card group">
              <div className="rounded-xl overflow-hidden bg-slate-950">
                <picture>
                  <source srcSet="/assets/images/proto.webp" type="image/webp" />
                  <img
                    src="/assets/images/proto.png"
                    alt="Piware Engineering prototype enclosure with custom internal PCBA"
                    width={1402}
                    height={1122}
                    className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="mt-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-800 font-semibold">
                  Mechanical CAD &bull; Custom CNC Housing
                </span>
                <span className="text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-sm font-bold">
                  DVT Validated
                </span>
              </div>
            </div>

            {/* Mobile Delivery Estimation Banner */}
            <div className="lg:hidden p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <div className="text-sm text-slate-700 leading-snug">
                <strong className="text-slate-900 font-bold">Typical End-to-End Delivery:</strong> 8 to 20 Weeks depending on custom silicon, enclosure tooling, and regulatory certifications.
              </div>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}
