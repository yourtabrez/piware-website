export const capabilities = [
  {
    id: "hardware-architecture",
    title: "Hardware Architecture",
    tagline: "System design, component selection & schematic engineering",
    description: "End-to-end electrical architecture, power tree optimization, component lifecycle validation, and robust schematic capture built for long-term production availability.",
    tags: ["Component Selection", "Power Budgeting", "Schematic Capture", "BOM Optimization"],
    icon: "Cpu",
    stat: "Zero-Obsolete BOM"
  },
  {
    id: "pcb-design",
    title: "High-Speed PCB Design",
    tagline: "Multilayer layouts with strict signal & power integrity",
    description: "Complex HDI, flex-rigid, impedance-controlled, and high-speed differential signal layout designed to pass EMI/EMC compliance on the first spin.",
    tags: ["Multilayer & HDI", "Impedance Control", "EMI/EMC Compliance", "Thermal Management"],
    icon: "Layers",
    stat: "Up to 16 Layers"
  },
  {
    id: "firmware-development",
    title: "Firmware Engineering",
    tagline: "Embedded C/C++, RTOS, device drivers & OTA infrastructure",
    description: "Deterministic embedded firmware written for real-time safety, fault recovery, ultra-low power consumption, and secure encrypted cryptographic bootloaders.",
    tags: ["FreeRTOS / Zephyr", "Bare Metal & C/C++", "Secure Boot & OTA", "BSP & Drivers"],
    icon: "Binary",
    stat: "Microamp Sleep Modes"
  },
  {
    id: "fpga-engineering",
    title: "FPGA & Digital Design",
    tagline: "HDL development, DSP algorithms & high-speed interfaces",
    description: "VHDL and Verilog digital design targeting Xilinx, Altera, and Lattice architectures for high-throughput sensor acquisition, real-time filtering, and custom protocol acceleration.",
    tags: ["Xilinx / Altera", "VHDL / Verilog", "DSP Filtering", "PCIe / Gigabit Eth"],
    icon: "Boxes",
    stat: "Nanosecond Latency"
  },
  {
    id: "mechanical-engineering",
    title: "Mechanical & Enclosure",
    tagline: "Industrial design, thermal analysis & DFM-ready CAD",
    description: "Custom enclosure design tailored for injection molding, CNC machining, or 3D prototyping with IP67 ingress protection, thermal simulations, and ergonomic assembly planning.",
    tags: ["SolidWorks / Autodesk", "Thermal Dissipation", "IP65/IP67 Ingress", "DFM / Rapid Tooling"],
    icon: "Box",
    stat: "IP67 Ingress Ready"
  },
  {
    id: "companion-apps",
    title: "Companion Apps & UI",
    tagline: "Cross-platform mobile apps & intuitive operator dashboards",
    description: "Seamless Bluetooth LE, Wi-Fi, and USB-connected mobile (iOS/Android) and desktop companion apps for device provisioning, diagnostics, telemetry visualization, and field calibration.",
    tags: ["BLE / WiFi Sync", "iOS & Android", "Desktop Diagnostics", "Real-time Telemetry"],
    icon: "Smartphone",
    stat: "Cross-Platform"
  },
  {
    id: "cloud-integration",
    title: "Cloud IoT & Telemetry",
    tagline: "Device fleet management, MQTT/TLS & cloud integrations",
    description: "Scalable cloud device backends using AWS IoT Core, Azure IoT, or custom MQTT brokers for live telemetry streaming, remote fleet diagnostics, and over-the-air firmware deployments.",
    tags: ["AWS IoT / Azure", "MQTT over TLS", "Fleet Telemetry", "REST / GraphQL APIs"],
    icon: "Cloud",
    stat: "End-to-End Encrypted"
  },
  {
    id: "manufacturing-support",
    title: "Turnkey Manufacturing",
    tagline: "DFM reviews, pilot runs, automated test jigs & mass production",
    description: "Seamless handover from design to mass production with automated test fixtures (FCT/ICT), component sourcing partnerships, turnkey PCBA assembly, and end-of-line quality verification.",
    tags: ["DFM / DFT Audits", "Custom Test Fixtures", "Turnkey PCBA Assembly", "Supply Chain Resiliency"],
    icon: "Factory",
    stat: "1 to 100k+ Units"
  }
];

