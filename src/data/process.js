export const processSteps = [
  {
    step: "01",
    title: "Discovery & Feasibility",
    summary: "De-risk technical viability and align on specs",
    description: "We dissect your product vision, commercial requirements, unit cost targets (BOM), battery life expectations, and regulatory constraints before drawing a single line of schematic.",
    deliverables: ["Product Requirements Document (PRD)", "Preliminary BOM & Cost Model", "Architecture Feasibility Memo"]
  },
  {
    step: "02",
    title: "Architecture & Selection",
    summary: "Silicon selection & system topology",
    description: "Component lifecycle validation (securing long lead-time parts), power rail budgeting, high-speed routing strategies, and firmware stack decisions are finalized.",
    deliverables: ["System Block Diagram", "Power Tree & Thermal Budget", "Validated Part Selection & Footprints"]
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
    title: "Firmware & Bring-up",
    summary: "Deterministic low-level software",
    description: "Board bring-up on initial silicon, peripheral driver integration, RTOS task structuring, low-power sleep profiling, and robust communication protocol stacks.",
    deliverables: ["Validated Board Support Package (BSP)", "RTOS Core Firmware", "Hardware Abstraction Layer (HAL)"]
  },
  {
    step: "05",
    title: "Validation & Testing",
    summary: "Stress, thermal, and pre-compliance audits",
    description: "Rigorous benchtop testing across voltage margins, thermal cycling, environmental chambers, signal integrity eye-diagram checks, and pre-compliance EMI/EMC scans.",
    deliverables: ["Hardware Verification Test (DVT) Report", "Pre-Compliance EMI/EMC Scan Logs", "Firmware Code Quality & Static Audit"]
  },
  {
    step: "06",
    title: "Manufacturing Transfer",
    summary: "DFM, tooling, and test fixtures",
    description: "Handover to high-volume assembly partners, design of bed-of-nails automated test fixtures (FCT), flashing scripts, and production line ramp supervision.",
    deliverables: ["Automated Factory Test Fixture (FCT)", "Panelized Gerber Files & Centroid Data", "Assembly & Inspection Work Instructions"]
  },
  {
    step: "07",
    title: "Lifecycle & Scaling",
    summary: "Post-launch support & next-gen evolution",
    description: "Long-term partnership: secure OTA firmware updates, fleet monitoring, alternate component sourcing against supply disruptions, and engineering next hardware revisions.",
    deliverables: ["OTA Fleet Update Pipeline", "Proactive Obsolescence Alerts", "Revision 2.0 Roadmap"]
  }
];

