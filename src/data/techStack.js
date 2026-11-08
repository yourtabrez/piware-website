export const techCategories = [
  { id: "all", label: "All Technologies" },
  { id: "ai", label: "Agentic AI & LLMs" },
  { id: "fullstack", label: "Full-Stack & Cloud" },
  { id: "design", label: "EDA & Mechanical CAD" },
  { id: "silicon", label: "Microcontrollers & SoC" },
  { id: "fpga", label: "FPGA, Analog & Power" },
  { id: "os", label: "RTOS & Embedded Linux" },
  { id: "tools", label: "IDE & Firmware Tooling" },
  { id: "cloud", label: "Cloud IoT & DevOps" },
  { id: "test", label: "Test & Measurement" },
];

export const techItems = [
  // Agentic AI & LLMs
  { name: "LangGraph", category: "ai", image: "/favicon/langgraph-logo.svg", description: "Stateful multi-agent cyclic graph orchestration" },
  { name: "LangChain", category: "ai", image: "/favicon/langchain-logo.svg", description: "Agent memory, chains & tool-calling primitives" },
  { name: "OpenAI APIs", category: "ai", image: "/favicon/openai-logo.svg", description: "GPT-4o, embeddings & structured function calling" },
  { name: "Google Gemini", category: "ai", image: "/favicon/gemini-logo.svg", description: "Multimodal Gemini Live & Long-Context models" },
  { name: "Supabase pgvector", category: "ai", image: "/favicon/supabase-logo.svg", description: "High-dimensional HNSW cosine vector search" },
  { name: "PyMuPDF", category: "ai", image: "/favicon/pymupdf-logo.svg", description: "High-precision document parsing & text extraction" },

  // Full-Stack & Automation
  { name: "Next.js", category: "fullstack", image: "/favicon/nextjs-logo.svg", description: "Full-stack React framework & server components" },
  { name: "Python & FastAPI", category: "fullstack", image: "/favicon/fastapi-logo.svg", description: "High-performance async REST APIs & Pydantic" },
  { name: "PostgreSQL", category: "fullstack", image: "/favicon/postgresql-logo.svg", description: "Relational modeling & Row Level Security (RLS)" },
  { name: "Docker", category: "fullstack", image: "/favicon/docker-logo.svg", description: "Containerized microservices & reproducible envs" },
  { name: "n8n Automation", category: "fullstack", image: "/favicon/n8n-logo.svg", description: "Self-hosted event-driven webhook orchestration" },
  { name: "Tailwind CSS", category: "fullstack", image: "/favicon/tailwind-logo.svg", description: "Utility-first design token styling system" },

  // EDA & Mechanical
  { name: "Altium Designer", category: "design", image: "/favicon/Altium_Logo.svg.webp", description: "Multilayer high-speed PCB layout & routing" },
  { name: "KiCad EDA", category: "design", image: "/favicon/kicad.svg", description: "Open-source schematic & board layout" },
  { name: "Cadence Allegro", category: "design", image: "/favicon/Cadence-Logo.svg.webp", description: "Enterprise signal integrity & HDI design" },
  { name: "SolidWorks", category: "design", image: "/favicon/solidworks.svg", description: "Parametric 3D CAD & thermal enclosures" },
  { name: "Autodesk Fusion", category: "design", image: "/favicon/Autodesk_Logo_2021.svg.webp", description: "Industrial design & DFM prototype tooling" },

  // Silicon
  { name: "STMicroelectronics", category: "silicon", image: "/favicon/st-logo-blue.svg", description: "STM32 ARM Cortex-M0/M4/M7 series" },
  { name: "Espressif", category: "silicon", image: "/favicon/Espressif_Logo.svg.webp", description: "ESP32, ESP32-S3, C3 WiFi/BLE dual-core SoCs" },
  { name: "NXP Semiconductors", category: "silicon", image: "/favicon/1280px-NXP_Semiconductors_logo_2023.svg.webp", description: "i.MX RT crossover & automotive microcontrollers" },
  { name: "Microchip / Atmel", category: "silicon", image: "/favicon/microchip.avif", description: "PIC, AVR & SAM ARM architectures" },
  { name: "ARM Architecture", category: "silicon", image: "/favicon/arm_brand_logo_guidelines_300x175px_01.png", description: "Cortex-M, Cortex-A architecture optimizations" },
  { name: "AMD Embedded", category: "silicon", image: "/favicon/amd-header-logo.svg", description: "Embedded processing & high compute silicon" },
  { name: "Raspberry Pi", category: "silicon", image: "/favicon/raspberry-logo-raspberry-pi-svgrepo-com.svg", description: "RP2040, RP2350 & Compute Module 4/5 integration" },

  // FPGA & Power
  { name: "AMD Xilinx", category: "fpga", image: "/favicon/Xilinx_logo.webp", description: "Artix-7, Zynq-7000 SoC & Vivado HDL design" },
  { name: "Intel Altera", category: "fpga", image: "/favicon/altera-logo.png", description: "Cyclone IV/V & MAX 10 FPGA architectures" },
  { name: "Texas Instruments", category: "fpga", image: "/favicon/Texas_Instruments_logo_2024.svg.webp", description: "Precision analog, PMICs & industrial converters" },
  { name: "Analog Devices", category: "fpga", image: "/favicon/analog-devices-1-logo-png-transparent.png", description: "High-dynamic ADCs, RF & low-noise power" },
  { name: "Infineon", category: "fpga", image: "/favicon/Infineon_logo.svg", description: "Automotive semiconductors, MOSFETs & radar" },

  // RTOS & Embedded OS
  { name: "FreeRTOS", category: "os", image: "/favicon/freertos-logo.svg", description: "Deterministic pre-emptive real-time operating system" },
  { name: "Zephyr Project", category: "os", image: "/favicon/zephyr-logo.svg", description: "Modern modular RTOS with robust BLE/IP stacks" },
  { name: "Embedded Linux", category: "os", image: "/favicon/linux-embedded.png", description: "Custom kernel bring-up, device trees & rootfs" },
  { name: "Yocto Project", category: "os", image: "/favicon/YoctoProject_Logo_RGB_White_small.svg", description: "Custom reproducible Linux board distributions" },
  { name: "Buildroot", category: "os", image: "/favicon/buildroot-logo.png", description: "Fast, minimal embedded Linux distributions" },

  // Tools
  { name: "ESP-IDF", category: "tools", image: "/favicon/Esp-idf-logo.png", description: "Official Espressif IoT development framework" },
  { name: "PlatformIO", category: "tools", image: "/favicon/PlatformIO_logo.svg.webp", description: "Cross-platform embedded C/C++ IDE ecosystem" },
  { name: "MPLAB X IDE", category: "tools", image: "/favicon/mplab-xide-transparent-background.avif", description: "Microchip toolchain & hardware debuggers" },
  { name: "STM32Cube", category: "tools", image: "/favicon/STM32CubeMX.avif", description: "STM32 pinout configuration & HAL generators" },
  { name: "VS Code", category: "tools", image: "/favicon/VS-code-stable.png", description: "C/C++, CMake & embedded debugging setup" },
  { name: "Git", category: "tools", image: "/favicon/git-logo.svg", description: "Version-controlled firmware & hardware repos" },

  // Cloud IoT
  { name: "Amazon Web Services", category: "cloud", image: "/favicon/amazon-web-services-logo-png_seeklogo-532166.png", description: "AWS IoT Core, Lambda, DynamoDB & S3" },
  { name: "Microsoft Azure", category: "cloud", image: "/favicon/Azure.webp", description: "Azure IoT Hub, Device Provisioning Service (DPS)" },
  { name: "Google Cloud", category: "cloud", image: "/favicon/google-cloud-logo-fullcolor.svg", description: "GCP Pub/Sub, Cloud Functions & BigQuery" },
  { name: "GitHub DevOps", category: "cloud", image: "/favicon/Github.png", description: "Automated firmware CI/CD pipelines & release artifacts" },

  // Test & Measurement
  { name: "Keysight Technologies", category: "test", image: "/favicon/keysight-logo.svg", description: "High-bandwidth oscilloscopes & spectrum analyzers" },
  { name: "Rohde & Schwarz", category: "test", image: "/favicon/Rohde_&_Schwarz_(2009).svg.webp", description: "RF vector signal generators & EMC receivers" },
  { name: "Tektronix", category: "test", image: "/favicon/Tektronix.svg", description: "Mixed signal oscilloscopes & arbitrary generators" },
  { name: "National Instruments", category: "test", image: "/favicon/ni-logo.svg", description: "Automated DAQ & modular instrumentation" },
  { name: "LabVIEW", category: "test", image: "/favicon/labview-logo.svg", description: "Custom automated manufacturing test fixtures (FCT)" },
];
