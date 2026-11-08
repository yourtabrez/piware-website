export const capabilities = [
  {
    id: "hardware-architecture",
    title: "Hardware Architecture",
    tagline: "System design, component selection & schematic engineering",
    description: "End-to-end electrical architecture, power tree optimization, component lifecycle validation, and robust schematic capture built for long-term production availability.",
    tags: ["Component Selection", "Power Budgeting", "Schematic Capture", "BOM Optimization"],
    icon: "Cpu",
    stat: "Zero-Obsolete BOM",
    category: "hardware"
  },
  {
    id: "pcb-design",
    title: "High-Speed PCB Design",
    tagline: "Multilayer layouts with strict signal & power integrity",
    description: "Complex HDI, flex-rigid, impedance-controlled, and high-speed differential signal layout designed to pass EMI/EMC compliance on the first spin.",
    tags: ["Multilayer & HDI", "Impedance Control", "EMI/EMC Compliance", "Thermal Management"],
    icon: "Layers",
    stat: "Up to 16 Layers",
    category: "hardware"
  },
  {
    id: "antenna-rf",
    title: "Antenna & RF Engineering",
    tagline: "Antenna design, RF simulation & impedance matching",
    description: "Full RF development lifecycle: custom antenna design and development, RF circuit simulation, RF PCB layout and 50Ω impedance matching, antenna integration, RF front-end and filter design, antenna tuning and matching networks, and RF testing and performance validation.",
    tags: ["Antenna Design & Development", "RF Circuit Simulation", "RF PCB & Impedance Matching", "Antenna Integration", "RF Front-End & Filter Design", "Tuning Networks", "RF Testing & Validation"],
    icon: "Radio",
    stat: "Sub-6GHz & 24GHz",
    category: "hardware"
  },
  {
    id: "firmware-development",
    title: "Firmware Engineering",
    tagline: "Embedded C/C++, RTOS, device drivers & OTA infrastructure",
    description: "Deterministic embedded firmware written for real-time safety, fault recovery, ultra-low power consumption, and secure encrypted cryptographic bootloaders.",
    tags: ["FreeRTOS / Zephyr", "Bare Metal & C/C++", "Secure Boot & OTA", "BSP & Drivers"],
    icon: "Binary",
    stat: "Microamp Sleep Modes",
    category: "intelligent"
  },
  {
    id: "fpga-engineering",
    title: "FPGA & Digital Design",
    tagline: "HDL development, DSP algorithms & high-speed interfaces",
    description: "VHDL and Verilog digital design targeting Xilinx, Altera, and Lattice architectures for high-throughput sensor acquisition, real-time filtering, and custom protocol acceleration.",
    tags: ["Xilinx / Altera", "VHDL / Verilog", "DSP Filtering", "PCIe / Gigabit Eth"],
    icon: "Boxes",
    stat: "Nanosecond Latency",
    category: "software"
  },
  {
    id: "robotics-systems",
    title: "Robotics & Intelligent Systems",
    tagline: "Custom robotics, motion control & edge AI integration",
    description: "Custom robotic systems, embedded robotics and control architectures, BLDC and servo motor control, sensor integration and multi-sensor fusion, navigation and positioning systems, robotic electronics and controller design, wireless robotics and telemetry, and computer vision with edge-AI integration.",
    tags: ["Custom Robotic Systems", "Embedded Control Systems", "BLDC & Servo Motor Control", "Sensor Integration & Fusion", "Navigation & Positioning", "Robotic Controller Design", "Wireless Telemetry", "Edge-AI & Computer Vision"],
    icon: "Bot",
    stat: "Field-Oriented Control",
    category: "intelligent"
  },
  {
    id: "mechanical-engineering",
    title: "Mechanical & Enclosure",
    tagline: "Industrial design, thermal analysis & DFM-ready CAD",
    description: "Custom enclosure design tailored for injection molding, CNC machining, or 3D prototyping with IP67 ingress protection, thermal simulations, and ergonomic assembly planning.",
    tags: ["SolidWorks / Autodesk", "Thermal Dissipation", "IP65/IP67 Ingress", "DFM / Rapid Tooling"],
    icon: "Box",
    stat: "IP67 Ingress Ready",
    category: "hardware"
  },
  {
    id: "industrial-automation",
    title: "Industry 4.0 & Industrial Automation",
    tagline: "PLC programming, SCADA, HMI & IIoT telemetry",
    description: "PLC programming and integration, SCADA system development, HMI design and development, industrial control panel design, VFD and motor control integration, Industrial IoT (IIoT), Modbus, CAN, RS-485 and industrial protocols, machine monitoring and data acquisition, production monitoring and dashboards, and remote monitoring with predictive maintenance.",
    tags: ["PLC Programming (IEC 61131)", "SCADA Development", "HMI Design", "Control Panel Design", "VFD & Motor Control", "Industrial IoT (IIoT)", "Modbus / CAN / RS-485", "Machine Monitoring", "Predictive Maintenance"],
    icon: "Gauge",
    stat: "IEC 61131-3 & IIoT",
    category: "software"
  },
  {
    id: "agentic-ai",
    title: "Agentic AI & Multi-Agent Systems",
    tagline: "LangGraph, autonomous tool-use & multi-agent orchestration",
    description: "Enterprise agentic workflows, multi-agent supervisor architectures, structured tool/function calling, human-in-the-loop validation, and self-healing execution loops built on LangGraph, LangChain, and state-of-the-art LLMs.",
    tags: ["LangGraph & LangChain", "Multi-Agent Architectures", "Autonomous Tool Calling", "Structured Outputs", "Human-in-the-Loop", "Context & Memory Management", "Agent Evaluation Benchmarks"],
    icon: "BrainCircuit",
    stat: "Stateful Graph Loops",
    category: "intelligent"
  },
  {
    id: "enterprise-rag",
    title: "Enterprise RAG & Knowledge Systems",
    tagline: "High-precision vector retrieval, pgvector & document intelligence",
    description: "Production RAG architectures: local document parsing (PyMuPDF), 3072-dimensional vector embeddings, hybrid vector/keyword search with Supabase pgvector, reranking, citation-grounded outputs, and multi-tenant data isolation.",
    tags: ["Supabase pgvector", "3072-dim Embeddings", "Hybrid Semantic Search", "PyMuPDF Document Parsing", "Citation-Grounded RAG", "Multi-Tenant Data Isolation", "Zero-Hallucination Audits"],
    icon: "Database",
    stat: "3072-dim Vector Search",
    category: "intelligent"
  },
  {
    id: "fullstack-saas",
    title: "Full-Stack Web & AI SaaS Platforms",
    tagline: "Next.js, FastAPI, PostgreSQL RLS & enterprise workflow automation",
    description: "Turnkey commercial applications: high-performance Next.js/React frontends, asynchronous Python FastAPI backends, secure PostgreSQL databases with Row Level Security (RLS), Docker deployment, and event-driven n8n workflow automation.",
    tags: ["Next.js & React", "Python & FastAPI", "PostgreSQL & Supabase RLS", "Async REST APIs", "Docker Microservices", "n8n Workflow Automation", "CRM & Webhook Pipelines"],
    icon: "LayoutGrid",
    stat: "Production-Grade SaaS",
    category: "software"
  },
  {
    id: "manufacturing-support",
    title: "Turnkey Manufacturing",
    tagline: "DFM reviews, pilot runs, automated test jigs & mass production",
    description: "Seamless handover from design to mass production with automated test fixtures (FCT/ICT), component sourcing partnerships, turnkey PCBA assembly, and end-of-line quality verification.",
    tags: ["DFM / DFT Audits", "Custom Test Fixtures", "Turnkey PCBA Assembly", "Supply Chain Resiliency"],
    icon: "Factory",
    stat: "1 to 100k+ Units",
    category: "software"
  }
];
