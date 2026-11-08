import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Layers, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { WordsPullUp } from '../ui/words-pull-up';
import Interactive3DHardware from '../ui/interactive-3d-hardware';
import KineticGrid from '../ui/kinetic-grid';
import { companyInfo } from '../../data/companyInfo';

export default function HeroSection() {
  const capabilityTags = [
    "Hardware Architecture",
    "High-Speed Multilayer PCB",
    "Antenna & RF Engineering",
    "Deterministic Firmware",
    "Robotics & Intelligent Systems",
    "Agentic AI & Multi-Agent",
    "Enterprise RAG Systems",
    "Full-Stack AI SaaS",
    "Turnkey Production"
  ];

  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.65,
      },
    },
  };

  const tagItemVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-8 overflow-hidden bg-white">
      {/* Interactive Kinetic Blueprint Grid (Cursor-reactive & click ripples) */}
      <KineticGrid
        theme="light"
        cellSize={50}
        influenceRadius={280}
        maxWarp={22}
        dotSpacing={28}
        showDots={true}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <Container className="w-full flex-1 flex flex-col justify-center my-auto relative z-10">
        
        {/* Outer Architectural Hero Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/50 p-5 sm:p-7 md:p-8 lg:p-9 xl:p-11 shadow-[0_12px_40px_-15px_rgba(15,23,42,0.06)] overflow-hidden"
        >
          
          {/* Top Interface Grid Telemetry Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 sm:pb-5 mb-4 sm:mb-7 border-b border-slate-200/80 text-[10px] sm:text-[11px] font-mono text-slate-500"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="text-slate-800 font-semibold uppercase">STUDIO:</span>
              <span className="text-slate-600">23.0225° N, 72.5714° E (AHMEDABAD, INDIA)</span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-slate-500">
              <span>STANDARDS: IPC-A-610 CLASS 3 &bull; AGENTIC AI & EMBEDDED LABS</span>
              <span className="text-slate-300">|</span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                ACTIVE LAB CAPACITY
              </span>
            </div>
          </motion.div>

          {/* Main Hero Content & 3D Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            
            {/* Left Column: Kinetic Typography & Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Trust Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-white border border-slate-200 text-slate-800 mb-4 sm:mb-5 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                <span>Founder-Led Hardware & AI Engineering</span>
              </motion.div>

              {/* Kinetic Words Pull-Up Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-4 sm:mb-5">
                <WordsPullUp 
                  text="Engineering Ideas Into Reality." 
                  className="text-slate-900"
                  showAsterisk
                  delay={0.3}
                />
                <br />
                <WordsPullUp 
                  text="From Concept to Production." 
                  className="text-slate-900"
                  delay={0.45}
                />
                <br />
                <WordsPullUp 
                  text="Without Guesswork." 
                  className="text-blue-600 font-bold"
                  delay={0.6}
                />
              </h1>

              {/* Editorial Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl mb-5 sm:mb-6 font-normal"
              >
                We design, develop and deliver advanced engineering solutions across electronics, embedded systems, RF, robotics, industrial automation, and enterprise agentic AI systems.
              </motion.p>

              {/* Capability Tag Cloud */}
              <motion.div 
                variants={tagContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-7 max-w-xl"
              >
                {capabilityTags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={tagItemVariants}
                    whileHover={{ scale: 1.04, y: -1 }}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-white text-slate-700 border border-slate-200/90 shadow-sm hover:border-slate-400 hover:text-slate-900 transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* Tactile Actions (Prisma-inspired button) */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={companyInfo.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between gap-3 pl-5 sm:pl-6 pr-2 py-2 rounded-full bg-slate-900 text-white font-bold text-xs sm:text-sm shadow-md hover:bg-black transition-all"
                >
                  <span>Book Technical Consultation</span>
                  <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#lifecycle"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all"
                >
                  <span>Explore Production Lifecycle</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </motion.div>

            </div>

            {/* Right Column: Halide-inspired Interactive 3D Hardware Canvas */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-center justify-center w-full"
            >
              <Interactive3DHardware />
            </motion.div>

          </div>

          {/* Bottom Interface HUD Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-[10px] sm:text-xs text-slate-500 font-mono"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800 flex-shrink-0" />
              <span className="font-semibold text-slate-800 leading-tight">NDA PROTECTED</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800 flex-shrink-0" />
              <span className="font-semibold text-slate-800 leading-tight">IN-HOUSE SCHEMATICS</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800 flex-shrink-0" />
              <span className="font-semibold text-slate-800 leading-tight">ZERO-OBSOLETE BOM</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800 flex-shrink-0" />
              <span className="font-semibold text-slate-800 leading-tight">100% PRE-COMPLIANCE</span>
            </div>
          </motion.div>

        </motion.div>

      </Container>
    </section>
  );
}
