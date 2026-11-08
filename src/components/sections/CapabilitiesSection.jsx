import React, { useState, useRef } from 'react';
import { 
  Cpu, 
  Layers, 
  Radio, 
  Binary, 
  Boxes, 
  Bot, 
  Box, 
  Gauge, 
  BrainCircuit, 
  Database, 
  LayoutGrid, 
  Factory, 
  MousePointerClick 
} from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import GlassFolder from '../ui/glass-folder-cards';

export default function CapabilitiesSection() {
  const [activeFolderIndex, setActiveFolderIndex] = useState(null);
  const [folderWidth, setFolderWidth] = useState(320);
  const [activeCategory, setActiveCategory] = useState('all');
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

  const filterCategories = [
    { id: 'all', label: 'All Disciplines', count: 12 },
    { id: 'hardware', label: 'Hardware & RF', count: 4 },
    { id: 'intelligent', label: 'Intelligent Systems & AI', count: 4 },
    { id: 'cloud', label: 'Cloud, Software & Mfg', count: 4 },
  ];

  const dossiers = [
    {
      id: "hardware-arch",
      category: "hardware",
      label: "Hardware Architecture",
      meta: "Schematic & BOM",
      art: "schematic",
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
      category: "hardware",
      label: "High-Speed PCB Design",
      meta: "16-Layer HDI",
      art: "pcb",
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
      id: "antenna-rf",
      category: "hardware",
      label: "Antenna & RF Engineering",
      meta: "Sub-6GHz & 24GHz",
      art: "rf",
      spec: "50Ω Matched • Anechoic Validated",
      description: "Antenna design, RF circuit simulation, impedance matching layout, filter front-ends, antenna tuning, and chamber validation.",
      icon: Radio,
      files: [
        { name: "Antenna_Return_Loss_S11.s2p", meta: "VSWR < 1.5 · 2.4/5.8GHz" },
        { name: "RF_Matching_Smith_Chart.sim", meta: "L-C Pi Network Tuned" },
        { name: "Chamber_Radiation_Pattern.drw", meta: "Anechoic Chamber Validated" },
      ],
    },
    {
      id: "mechanical-cad",
      category: "hardware",
      label: "Mechanical & Enclosure",
      meta: "CAD, DFM & IP67",
      art: "mechanical",
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
      id: "firmware-rtos",
      category: "intelligent",
      label: "Firmware Engineering",
      meta: "RTOS & Secure Boot",
      art: "firmware",
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
      id: "robotics-systems",
      category: "intelligent",
      label: "Robotics & Intelligent Systems",
      meta: "FOC & Sensor Fusion",
      art: "robotics",
      spec: "FOC Motor Drive • Edge AI",
      description: "Custom robotics, motion control architectures, 3-phase BLDC/servo drives, sensor fusion (IMU/LiDAR), navigation, and vision edge-AI.",
      icon: Bot,
      files: [
        { name: "BLDC_FOC_Motor_Controller.c", meta: "Sensorless FOC · 40kHz PWM" },
        { name: "Sensor_Fusion_Kalman_Filter.m", meta: "6-DOF IMU + Odometry" },
        { name: "EdgeAI_Object_Detection.onnx", meta: "NPU Accelerated · 30 FPS" },
      ],
    },
    {
      id: "agentic-ai",
      category: "intelligent",
      label: "Agentic AI & Multi-Agent",
      meta: "LangGraph & Tool Use",
      art: "agentic",
      spec: "LangGraph • Multi-Agent Supervisor",
      description: "Autonomous agentic workflows, multi-agent supervisor coordination, structured tool calling, human-in-the-loop review, and self-healing execution loops.",
      icon: BrainCircuit,
      files: [
        { name: "Supervisor_MultiAgent_Graph.py", meta: "LangGraph · Stateful Routing" },
        { name: "Tool_Execution_Registry.json", meta: "OpenAI / Gemini Tool Calling" },
        { name: "Agent_Evaluation_Benchmark.log", meta: "99.2% Task Success Rate" },
      ],
    },
    {
      id: "enterprise-rag",
      category: "intelligent",
      label: "Enterprise RAG Systems",
      meta: "Supabase pgvector",
      art: "rag",
      spec: "pgvector • 3072-dim Embeddings",
      description: "Production RAG architectures: high-precision document parsing (PyMuPDF), hybrid semantic search, metadata filtering, citation-grounded outputs, and multi-tenant data isolation.",
      icon: Database,
      files: [
        { name: "Supabase_Vector_Schema.sql", meta: "pgvector · HNSW Cosine Index" },
        { name: "Hybrid_Retrieval_Pipeline.py", meta: "PyMuPDF Chunking + Rerank" },
        { name: "Grounding_Evaluation_Report.pdf", meta: "Zero Hallucination Audit" },
      ],
    },
    {
      id: "fpga-logic",
      category: "cloud",
      label: "FPGA & Digital Logic",
      meta: "HDL & Acceleration",
      art: "fpga",
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
      id: "industrial-automation",
      category: "cloud",
      label: "Industry 4.0 & Automation",
      meta: "PLC, SCADA & IIoT",
      art: "automation",
      spec: "IEC 61131-3 • Modbus / CAN",
      description: "Rugged industrial automation: PLC programming, SCADA/HMI interfaces, control panel design, VFDs, Modbus/CAN, and predictive maintenance.",
      icon: Gauge,
      files: [
        { name: "PLC_Ladder_Logic_Master.iec", meta: "IEC 61131-3 · Structured Text" },
        { name: "SCADA_HMI_Telemetry.ui", meta: "Modbus TCP & MQTT Broker" },
        { name: "Industrial_Panel_Wiring.dwg", meta: "24VDC Distribution & Relays" },
      ],
    },
    {
      id: "fullstack-saas",
      category: "cloud",
      label: "Full-Stack SaaS Platforms",
      meta: "Next.js, FastAPI & RLS",
      art: "fullstack",
      spec: "Next.js • FastAPI • PostgreSQL RLS",
      description: "End-to-end commercial software: high-speed Next.js/React frontends, asynchronous Python FastAPI backends, secure multi-tenant PostgreSQL databases, and high-performance cloud APIs.",
      icon: LayoutGrid,
      files: [
        { name: "FastAPI_Async_Engine.py", meta: "Pydantic v2 · OpenAPI Spec" },
        { name: "NextJS_Dashboard_UI.tsx", meta: "TypeScript · Tailwind Architecture" },
        { name: "PostgreSQL_RLS_Policies.sql", meta: "Enterprise Multi-Tenant Security" },
      ],
    },
    {
      id: "turnkey-mfg",
      category: "cloud",
      label: "Turnkey Manufacturing",
      meta: "Pilot to 100k+ Units",
      art: "manufacturing",
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

  const filteredDossiers = activeCategory === 'all'
    ? dossiers
    : dossiers.filter(d => d.category === activeCategory);

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
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8"
        >
          <SectionHead
            eyebrow="Studio Capabilities"
            title="Interactive Engineering Dossiers. Real Deliverables."
            description="Electronics, embedded firmware, agentic AI, and production cloud software — engineered seamlessly under one roof. Hover any dossier to inspect; click to fan out real engineering deliverables."
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

        {/* Discipline Domain Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-10 pb-2 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveFolderIndex(null);
                }}
                className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/80 font-medium'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-white/20 text-white font-bold' : 'bg-slate-200 text-slate-600 font-semibold'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Interactive Glass Folder Grid with Staggered Entrance Animation */}
        <motion.div 
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.06,
                delayChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center items-start pt-2"
        >
          {filteredDossiers.map((dossier, idx) => {
            const IconComp = dossier.icon;

            return (
              <motion.div 
                key={dossier.id}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.96 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } 
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
                    appearDelay={idx * 60}
                    open={activeFolderIndex === idx}
                    onOpenChange={(isOpen) => setActiveFolderIndex(isOpen ? idx : null)}
                  />
                </div>

                {/* Subtitle & Discipline Spec Sheet Card */}
                <div className="w-full bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 shadow-sm group-hover:border-slate-300 group-hover:bg-white transition-all">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-900">
                        {dossier.spec}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
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
