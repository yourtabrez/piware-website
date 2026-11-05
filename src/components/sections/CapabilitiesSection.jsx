import React, { useState, useRef } from 'react';
import { 
  Cpu, 
  Layers, 
  Binary, 
  Boxes, 
  Box, 
  Factory, 
  MousePointerClick
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import GlassFolder from '../ui/glass-folder-cards';

export default function CapabilitiesSection() {
  const [activeFolderIndex, setActiveFolderIndex] = useState(null);
  const [folderWidth, setFolderWidth] = useState(320);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-70px" });

  // Dynamic responsive folder width calibration for small mobile screens
  React.useEffect(() => {
    const updateWidth = () => {
      const screenW = window.innerWidth;
      if (screenW < 360) {
        setFolderWidth(Math.max(260, screenW - 40));
      } else if (screenW < 400) {
        setFolderWidth(300);
      } else {
        setFolderWidth(320);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth, { passive: true });
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const dossiers = [
    {
      id: "hardware-arch",
      label: "Hardware Architecture",
      meta: "Schematic & BOM",
      art: "schematic", // Authentic Schematic & Power Rail Blueprint
      spec: "Zero-Obsolete BOM Standard",
      description: "End-to-end electrical design, power tree budgeting, component lifecycle risk audits, and multi-rail schematics.",
      icon: Cpu,
      files: [
        { name: "Schematic_Master_Rev2.pdf", meta: "Altium · 18 Sheets" },
        { name: "BOM_Lifecycle_Audit.xlsx", meta: "Zero-Obsolete · Active" },
        { name: "Power_Tree_Simulation.raw", meta: "94.2% Efficiency" },
      ],
    },
    {
      id: "pcb-layout",
      label: "High-Speed PCB Design",
      meta: "16-Layer HDI",
      art: "pcb", // High-Speed Serpentine & Differential Pair Layout
      spec: "Up to 16 Layers • 50Ω Tuned",
      description: "Impedance-controlled multilayer layout, length matching for DDR/PCIe, and strict EMI/EMC compliance on the first spin.",
      icon: Layers,
      files: [
        { name: "Layer_Stackup_16L.ipc", meta: "IPC-2141 · 50Ω/90Ω" },
        { name: "Differential_Pair_Tuning.drw", meta: "Gigabit Ethernet / PCIe" },
        { name: "ODB++_Production_Fab.zip", meta: "Gerber 274X · DFM Pass" },
      ],
    },
    {
      id: "firmware-rtos",
      label: "Firmware Engineering",
      meta: "RTOS & Secure Boot",
      art: "firmware", // Logic Analyzer & Oscilloscope Clock Waveform
      spec: "Deterministic • Sub-µA Sleep",
      description: "Deterministic embedded firmware written for real-time safety, fault recovery, ultra-low power, and encrypted dual-bank OTA.",
      icon: Binary,
      files: [
        { name: "FreeRTOS_Deterministic_Tasks.c", meta: "C/C++ · Hard Real-Time" },
        { name: "Secure_Crypto_Bootloader.bin", meta: "Dual-Bank OTA" },
        { name: "Deep_Sleep_Power_Profile.log", meta: "Sub-Microamp Standby" },
      ],
    },
    {
      id: "fpga-logic",
      label: "FPGA & Digital Logic",
      meta: "HDL & Acceleration",
      art: "fpga", // Digital Logic Gates, D-FF, AXI4 Pipeline
      spec: "Nanosecond Latency DSP",
      description: "VHDL and Verilog digital design targeting Xilinx, Altera, and Lattice architectures for real-time sensor DSP and custom buses.",
      icon: Boxes,
      files: [
        { name: "Vivado_Block_Design.bd", meta: "Xilinx Zynq-7000 / Artix" },
        { name: "Realtime_DSP_Pipeline.vhd", meta: "Nanosecond Latency" },
        { name: "Static_Timing_Report.txt", meta: "Zero Slack Violations" },
      ],
    },
    {
      id: "mechanical-cad",
      label: "Mechanical & Enclosure",
      meta: "CAD, DFM & IP67",
      art: "mechanical", // Isometric 3D CAD Wireframe & Dimension Extension
      spec: "IP67 Submersible Ready",
      description: "Custom enclosure design tailored for injection molding, CNC machining, thermal FEA dissipation, and ingress protection.",
      icon: Box,
      files: [
        { name: "Enclosure_Master_3D.step", meta: "SolidWorks · Tooling Ready" },
        { name: "Thermal_FEA_Dissipation.sim", meta: "Chamber Validated" },
        { name: "IP67_Gasket_Seal_Spec.pdf", meta: "Submersible Ingress" },
      ],
    },
    {
      id: "turnkey-mfg",
      label: "Turnkey Manufacturing",
      meta: "Pilot to 100k+ Units",
      art: "manufacturing", // SMT Panelization, Optical Fiducials & FCT Test Points
      spec: "Automated FCT & SMT Yield",
      description: "Seamless handover to mass production with custom automated bed-of-nails test fixtures (FCT/ICT) and supply chain continuity.",
      icon: Factory,
      files: [
        { name: "Automated_FCT_Test_Jig.dwg", meta: "Bed-of-Nails ICT / FCT" },
        { name: "SMT_Panelization_Centroid.xy", meta: "High-Yield Assembly" },
        { name: "First_Article_Inspection.pdf", meta: "IPC-A-610 Class 3" },
      ],
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="capabilities" 
      className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Background blueprint subtle dots */}
      <div className="absolute inset-0 bg-dot-blueprint opacity-50 pointer-events-none"></div>

      <Container className="relative z-10">
        
        {/* Section Header with Fluid In-Transition */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <SectionHead
            eyebrow="Engineering Capabilities"
            title="Interactive Engineering Dossiers. Real Deliverables."
            description="Hardware, firmware, mechanical CAD, and volume manufacturing — unified without handoff friction. Hover any dossier to inspect; click to fan out engineering deliverables."
            align="left"
            className="mb-0 max-w-2xl"
          />

          {/* Interaction Instruction Hint */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200/80 shadow-sm self-start lg:self-end">
            <MousePointerClick className="w-4 h-4 text-slate-900 shrink-0" />
            <span className="hidden sm:inline">Hover to lean &bull; Click to open files</span>
            <span className="sm:hidden">Tap dossier to fan out deliverables</span>
          </div>
        </motion.div>

        {/* Interactive Glass Folder Grid with Staggered Entrance Animation */}
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center items-start pt-4"
        >
          {dossiers.map((dossier, idx) => {
            const IconComp = dossier.icon;

            return (
              <motion.div 
                key={dossier.id}
                variants={{
                  hidden: { opacity: 0, y: 32, scale: 0.96 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
                  },
                }}
                className="flex flex-col items-center w-full max-w-[340px] group"
              >
                {/* 3D Glass Folder Object with Authentic Engineering Vector Artwork */}
                <div className="relative mb-2">
                  <GlassFolder
                    label={dossier.label}
                    meta={dossier.meta}
                    art={dossier.art}
                    files={dossier.files}
                    tone="light"
                    width={folderWidth}
                    appearDelay={idx * 70}
                    open={activeFolderIndex === idx}
                    onOpenChange={(isOpen) => setActiveFolderIndex(isOpen ? idx : null)}
                  />
                </div>

                {/* Subtitle & Discipline Spec Sheet Card */}
                <div className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 shadow-sm group-hover:border-slate-300 group-hover:bg-white transition-all">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-900">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-900">
                        {dossier.spec}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dossier.description}
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
