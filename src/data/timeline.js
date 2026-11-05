export const timelineStages = [
  {
    stage: "POC",
    name: "Proof of Concept",
    timeline: "15–20 Days",
    batch: "5–6 Units",
    headline: "De-risk core technical assumptions rapidly",
    objective: "Validate fundamental system feasibility, core sensors, microcontroller selection, and algorithm viability using rapid development boards and preliminary schematics.",
    deliverables: [
      "Benchtop functional prototype",
      "Core sensor & communication validation",
      "Power consumption preliminary audit",
      "Critical component risk matrix"
    ],
    statusColor: "emerald"
  },
  {
    stage: "EVT",
    name: "Engineering Validation",
    timeline: "15–20 Days",
    batch: "15–20 Units",
    headline: "First integrated PCB spin in target form factor",
    objective: "Transition proof-of-concept into real custom PCB hardware and initial enclosure prototypes to verify electrical functionality, thermal limits, and firmware bring-up.",
    deliverables: [
      "Custom multilayer fabricated PCBA",
      "First-run mechanical 3D printed enclosures",
      "Board support package (BSP) bring-up",
      "Voltage rail and noise baseline measurements"
    ],
    statusColor: "emerald"
  },
  {
    stage: "DVT",
    name: "Design Validation",
    timeline: "20–25 Days",
    batch: "Up to 200 Units",
    headline: "Full environmental, stress & compliance readiness",
    objective: "Verify that the combined hardware, firmware, and mechanical enclosure operate reliably across full temperature ranges, mechanical shock/vibration, and pre-compliance EMI/EMC standards.",
    deliverables: [
      "Rev 2 PCBA with DFM/DFT refinements",
      "Pre-compliance EMI/EMC & RF performance testing",
      "Environmental & thermal chamber stress logs",
      "Initial injection tooling or CNC metal enclosures"
    ],
    statusColor: "cyan"
  },
  {
    stage: "PVT",
    name: "Production Validation",
    timeline: "15–20 Days",
    batch: "Up to 500 Units",
    headline: "Factory line pilot & test fixture deployment",
    objective: "Validate the manufacturing line, assembly jigs, automated bed-of-nails functional test fixtures (FCT), and operator work instructions to ensure zero-defect yield.",
    deliverables: [
      "Automated test fixture (ICT / FCT) with flashing scripts",
      "Validated Golden Samples & test criteria",
      "Production yield & scrap rate analysis",
      "Packaging, labeling & serialization flow"
    ],
    statusColor: "cyan"
  },
  {
    stage: "MP",
    name: "Mass Production",
    timeline: "Up to 30 Days",
    batch: "1,000+ to 100,000+ Units",
    headline: "Continuous, high-yield scalable manufacturing",
    objective: "Full-scale volume turnkey manufacturing, end-of-line quality audits, global supply chain fulfillment, and proactive lifecycle component management.",
    deliverables: [
      "Volume PCBA fabrication & SMT assembly",
      "100% automated test verification & calibration logging",
      "Box build assembly & final inspection",
      "Ongoing component lifecycle & obsolescence monitoring"
    ],
    statusColor: "emerald"
  }
];

