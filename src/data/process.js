export const processSteps = [
  {
    step: "01",
    title: "Discovery & Feasibility",
    summary: "De-risk technical viability and align on specs",
    description: "We dissect your product vision, commercial requirements, unit cost targets (BOM), battery life expectations, regulatory constraints, and software/AI integration scope before writing a line of code or schematic.",
    deliverables: ["Product Requirements Document (PRD)", "Preliminary BOM & Cost Model", "Architecture Feasibility Memo"]
  },
  {
    step: "02",
    title: "Architecture & Selection",
    summary: "Silicon selection, system topology & AI design",
    description: "Component lifecycle validation, power rail budgeting, high-speed routing strategies, database schemas, and AI inference latency targets (cloud vs. edge) are fully architected.",
    deliverables: ["System Block Diagram", "Power Tree & Thermal Budget", "Silicon & Cloud Tech Architecture"]
  },
  {
    step: "03",
    title: "Schematic & PCB Layout",
    summary: "Precision HDI & multilayer layout",
    description: "Schematic capture, strict impedance calculations, differential pair tuning, RF strip-line modeling, and full 3D clearance checks with mechanical enclosures.",
    deliverables: ["Complete Schematic Capture", "Gerber & ODB++ Production Files", "3D STEP CAD Model of PCBA"]
  },
  {
    step: "04",
    title: "Firmware & Software Bring-up",
    summary: "Deterministic low-level code & async APIs",
    description: "Board bring-up on initial silicon, peripheral driver integration, RTOS task structuring, low-power sleep profiling, and async backend APIs with live device telemetry pipelines.",
    deliverables: ["Validated Board Support Package (BSP)", "RTOS Core Firmware", "Async Backend & Telemetry Bridge"]
  },
  {
    step: "05",
    title: "Validation & Testing",
    summary: "Stress, thermal, pre-compliance & AI audits",
    description: "Rigorous benchtop testing across voltage margins, thermal cycling, environmental chambers, signal integrity eye-diagram checks, pre-compliance EMI/EMC scans, and AI benchmark evaluations.",
    deliverables: ["Hardware Verification Test (DVT) Report", "Pre-Compliance EMI/EMC Scan Logs", "Firmware & AI Security Audit"]
  },
  {
    step: "06",
    title: "Manufacturing Transfer",
    summary: "DFM, tooling, and test fixtures",
    description: "Handover to high-volume assembly partners, design of bed-of-nails automated test fixtures (FCT), production flashing scripts, and line ramp supervision.",
    deliverables: ["Automated Factory Test Fixture (FCT)", "Panelized Gerber Files & Centroid Data", "Assembly & Inspection Work Instructions"]
  },
  {
    step: "07",
    title: "Lifecycle & Scaling",
    summary: "Post-launch support, agent monitoring & scaling",
    description: "Long-term partnership: secure OTA firmware updates, fleet telemetry monitoring, autonomous AI agent evaluation, alternate component sourcing, and engineering next hardware revisions.",
    deliverables: ["OTA Fleet Update Pipeline", "Autonomous Agent Monitoring", "Continuous Revision Roadmap"]
  }
];
