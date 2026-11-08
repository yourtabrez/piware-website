# Piware Engineering — Embedded Product Development Studio

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/assets/images/logo/TPW.webp">
  <img alt="Piware Logo" src="public/assets/images/logo/TPB.webp" width="96" height="96">
</picture>

### From Idea to Shipped Hardware. Without Guesswork.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.9-black.svg?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployment](https://img.shields.io/badge/Deployed-Vercel-black.svg?logo=vercel&logoColor=white)](https://piware-website.vercel.app)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](https://piware.in)

[🌐 Live Production Website](https://piware-website.vercel.app) &bull; [📅 Book Technical Consultation](https://calendly.com/piwareengineering) &bull; [✉️ Contact Studio](mailto:h@piware.in)

</div>

---

## 📌 Executive Overview

**Piware Engineering** is a founder-led electronics design, embedded systems, and intelligent AI product studio headquartered in Ahmedabad, Gujarat, India (`23.0225° N, 72.5714° E`). We architect, prototype, and manufacture production-ready electronic devices, intelligent systems, and enterprise full-stack AI software for high-growth startups and OEMs worldwide.

Unlike fragmented agencies that outsource layout, firmware, or software, our unified engineering team takes single-threaded ownership across the entire product lifecycle:
- **Electrical Architecture & High-Speed Multilayer PCB Layout** (Up to 16 layers, complex HDI, flex-rigid, 50Ω impedance matching, strict EMI/EMC compliance).
- **Antenna & RF Engineering** (Antenna design, RF circuit simulation, impedance matching networks, filter front-ends, tuning, anechoic chamber testing).
- **Deterministic Embedded Firmware & RTOS** (Bare-metal C/C++, FreeRTOS, Zephyr, fault-tolerant state machines, cryptographic secure bootloaders, dual-bank OTA).
- **Robotics & Intelligent Motion Control** (Field-Oriented Control (FOC), 3-phase BLDC/servo drives, 6-DOF kinematics, multi-sensor fusion, edge-AI computer vision).
- **Agentic AI & Multi-Agent Orchestration** (LangGraph state machines, multi-agent supervisor architectures, structured tool-calling, self-healing execution loops).
- **Enterprise RAG & Document Intelligence** (Supabase pgvector, 3072-dimensional embeddings, PyMuPDF local parsing, hybrid semantic search, zero-hallucination citations).
- **Full-Stack Web & AI SaaS Platforms** (Next.js, React, TypeScript, Python FastAPI, PostgreSQL Row Level Security (RLS), Docker containerization, n8n automation).
- **Industry 4.0 & Industrial Automation** (PLC IEC 61131-3 programming, SCADA/HMI dashboards, industrial control panels, VFDs, Modbus, CAN, RS-485 protocols).
- **Turnkey Volume Manufacturing** (DFM/DFT design reviews, custom automated bed-of-nails FCT jigs, supply chain risk audits, pilot runs to 100k+ mass production).

---

## 💎 Design System & Aesthetic Philosophy: Swiss Minimalist Light Theme

The frontend departs radically from clichéd dark AI templates in favor of a clean, authoritative **Swiss Minimalist Light Theme** inspired by classic industrial design masters (Dieter Rams, Massimo Vignelli) and authentic hardware testing labs.

### Core Visual Principles
1. **Precision Blueprint Drafting Grid**: The background is anchored by an authentic millimeter-paper drafting grid (`#FFFFFF` canvas with `rgba(15, 23, 42, 0.045)` hairlines) that reacts dynamically to mouse movement and clicks.
2. **Authoritative Primary Ink (`#0F172A`)**: Deep slate headline typography provides commanding optical hierarchy without the harshness of pure `#000000`.
3. **High-Contrast Telemetry Accents**:
   - **Signal Emerald (`#059669` / `#10B981`)**: Active lab capacity, pass rates, IP67 seals, and live status pulses.
   - **Precision Cobalt Blue (`#2563EB`)**: Power rails, differential traces, and active kinetic cursor warping.
   - **Phosphor Amber / Gold (`#F59E0B` / `#D97706`)**: Immersion gold (ENIG) test points and high-speed bus interfaces.
4. **Authentic Tactile Physics**: Framer Motion spring physics, 3D cursor-following perspective tilts (±14° lerp interpolation), and real physical folder dossiers that elevate and fan out internal documents on click.

### Design System Color Tokens

| Token / Layer | Hex Value / Class | Semantic Application |
| :--- | :--- | :--- |
| **Canvas Background** | `#FFFFFF` | Primary viewport background and clean card fill |
| **Surface Secondary** | `#F8FAFC` (`slate-50`) | Card frames, dossier inner liners, and badge backgrounds |
| **Border Subtle** | `#E2E8F0` (`slate-200`) | Crisp 1px hairline borders and structural dividers |
| **Border Active** | `#CBD5E1` (`slate-300`) | Interactive hover borders and elevated cards |
| **Text Primary (Ink)** | `#0F172A` (`slate-900`) | Primary headlines, bold titles, strong contrast |
| **Text Secondary** | `#475569` (`slate-600`) | Technical descriptions and editorial body copy |
| **Text Muted** | `#64748B` (`slate-500`) | Telemetry labels, specs, coordinates, and net names |
| **Kinetic Grid Hairline** | `rgba(15, 23, 42, 0.045)` | Resting state canvas drafting grid lines |
| **Kinetic Grid Active** | `rgba(37, 99, 235, 0.62)` | Dynamic cursor-warped cobalt blue grid lines |
| **Active Signal (Green)** | `#10B981` (`emerald-500`) | Studio active status, IPC pass badges, live pulses |
| **Hardware Navy** | `#0B1528` & `#2563EB` | Schematic blueprint & power rail traces |
| **Solder Mask Emerald** | `#02281D` & `#F59E0B` | Authentic PCB solder mask & ENIG gold traces |
| **Telemetry Cyan** | `#06B6D4` (`cyan-500`) | Oscilloscope clock waveforms & CAD dimensions |

---

## 🏗️ Architecture & Technology Stack

The codebase is engineered with modern frontend standards, complete zero-configuration build caching, and strict module separation:

```
┌──────────────────────────────────────────────────────────────┐
│                      PIWARE WEB ARCHITECTURE                 │
├───────────────────────────────┬──────────────────────────────┤
│  Layer                        │  Technology / Specification  │
├───────────────────────────────┼──────────────────────────────┤
│  Core Runtime & Framework     │  React 18.3.1 (Concurrent)   │
│  Build Tool & Dev Server      │  Vite 6.4.5 (ESBuild)        │
│  Styling Engine               │  Tailwind CSS 3.4.17         │
│  Motion & Physics Engine      │  Framer Motion 14.9.1        │
│  Iconography                  │  Lucide React 0.475.0        │
│  Typography Pipeline          │  Self-Hosted WOFF2 Fonts     │
│  Production Hosting           │  Vercel Edge Network         │
└───────────────────────────────┴──────────────────────────────┘
```

### Self-Hosted Zero-Latency Typography
To prevent external network dependencies, privacy concerns, and layout shift (CLS), all fonts are hosted locally in `public/assets/fonts/`:
- **`Avenir-Black.woff2` (33 KB)**: Display font for authoritative headlines, numbers, and hero titles (`font-family: 'Avenir Black'`).
- **`Avenir-Light.woff2` (32 KB)**: High-legibility font for technical body paragraphs and lists (`font-family: 'Avenir Light'`).
- **`JetBrains Mono` / System Monospace**: Dedicated font for telemetry readouts, coordinates, IPC specs, and schematic pin designations.

---

## 🧩 Component & UI Architecture

### 1. Viewport-Centered Hero Section ([`HeroSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/HeroSection.jsx))
- **Mathematical Viewport Centering**: Structured with `min-h-[100dvh] flex flex-col justify-center items-center` with balanced vertical padding (`pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-8`). The hero card remains vertically and horizontally centered across 1080p, 1440p, laptops (13"–16"), tablets, and mobile devices without cut-offs or excessive empty voids.
- **Top Telemetry HUD**: Displays real-time studio coordinates (`23.0225° N, 72.5714° E`), pulsing emerald signal beacon, `IPC-A-610 CLASS 3` standards compliance, and `ACTIVE LAB CAPACITY` badge.
- **Kinetic Headline**: Powered by [`WordsPullUp`](file:///f:/Owais/piware-website/src/components/ui/words-pull-up.jsx) with staggered spring entrance delays and IPC asterisk callouts.
- **Capability Tag Cloud**: Interactive pill badges highlighting 7 core disciplines with micro-spring hover animations.
- **Dual CTA Buttons**: Tactile primary button ("Book Technical Consultation" linking directly to Calendly) and secondary ghost button ("Explore Production Lifecycle" scrolling to lifecycle timeline).
- **Enterprise Trust HUD**: Bottom indicator bar certifying NDA Protected, 100% In-House Architecture, Zero-Obsolete BOM Standard, and 100% Pre-Compliance Verified.

### 2. Kinetic Blueprint Grid Canvas ([`kinetic-grid.tsx`](file:///f:/Owais/piware-website/src/components/ui/kinetic-grid.tsx) / [`.jsx`](file:///f:/Owais/piware-website/src/components/ui/kinetic-grid.jsx))
- **Interactive 21st.dev Component**: HTML5 Canvas drafting grid rendered directly behind the hero section.
- **Cursor Warping Physics**: Warps grid lines dynamically toward the pointer with smooth bell falloff, momentum lerping (`LERP_SPEED = 0.08`), and boundary edge pinning (`pinFactor = colPin * colPin * rowPin * rowPin`) to lock boundaries smoothly in place.
- **Concentric Click Ripple Shockwaves**: Clicking anywhere inside the section generates expanding physical waves (400px/s) that displace intersection nodes before fading smoothly.
- **Swiss Minimalist Light Palette Adaptation**:
  - Rest state: Slate hairline grid lines (`rgba(15, 23, 42, 0.045)`) and 1.6px micro-nodes.
  - Active state: Precision cobalt blue (`rgba(37, 99, 235, 0.62)`) lines and 3.2px active nodes with 6.5px radial glow halos.
- **Retina / HiDPI Crispness**: Scales canvas context with `window.devicePixelRatio`, guaranteeing razor-sharp hairlines on Apple Retina and 4K displays.
- **Performance & Battery Throttling**: Employs `IntersectionObserver` to automatically pause `requestAnimationFrame` when the user scrolls away from the hero, reducing CPU/GPU consumption to 0.00%. Also honors `prefers-reduced-motion`.
- **Pointer Transparency**: Configured with `pointer-events-none select-none`, allowing all CTA buttons, links, and 3D PCBA models to receive clicks without obstruction.

### 3. Interactive 3D Hardware Viewport ([`interactive-3d-hardware.jsx`](file:///f:/Owais/piware-website/src/components/ui/interactive-3d-hardware.jsx))
- **Perspective Parallax Canvas**: 3D interactive hardware card rendering an authentic Piware Rev 2.4 dual-core electronic board.
- **Physics Tilt & Touch Engine**: Smoothly calculates cursor and touch coordinates relative to card center, applying up to ±14° of 3D perspective rotation with momentum damping. Features autonomous idle pendulum breathing drift (`sin/cos` lerp) so depth is always dynamic on mobile devices.
- **Multi-Layered Depth Badges**: Elevated 3D chips (`translateZ: 35px`, `55px`) displaying `50Ω DIFF IMPEDANCE`, `PASS DFM`, and live processor telemetry (`STM32 / ESP32-S3 Dual-Core`).
- **Automated Optical Inspection (AOI) Fiducials**: Corner crosshairs and calibration marks reflecting real SMT assembly verification cameras.

### 4. Enterprise Trust & Animated Metric Rollup ([`TrustStrip.jsx`](file:///f:/Owais/piware-website/src/components/sections/TrustStrip.jsx) & [`animated-counter.jsx`](file:///f:/Owais/piware-website/src/components/ui/animated-counter.jsx))
- **Dynamic Viewport Count Rollups**: Integrates Framer Motion `useMotionValue` and custom ease-out curves (`[0.16, 1, 0.3, 1]`) triggering smooth count animations (`25+ PCB Designs`, `15+ Products Developed`, `8+ Tech Domains`, `98% On-Time Delivery`) upon scrolling into view.
- **Mathematical 2x2 Crosshair on Mobile**: Implements precise 2x2 quadrant borders (`border-r` on evens, `border-b` on top row) on mobile screens, resolving the asymmetric `divide-y` artifact, and cleanly transitioning to 4-column vertical dividers on desktop (`md:border-l`).

### 5. Interactive Glass Folder Dossiers ([`CapabilitiesSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/CapabilitiesSection.jsx) & [`glass-folder-cards.jsx`](file:///f:/Owais/piware-website/src/components/ui/glass-folder-cards.jsx))
- **Physical 3D Object Dossiers**: Replaces static capability grids with interactive 3D physical folders containing real fanning deliverables.
- **Three-Layer Depth Architecture**:
  1. **Back Panel**: Carries authentic vector engineering artwork.
  2. **Elevating Deliverable Sheets**: Real DOM buttons that elevate, fan out, and display deliverables upon hover or click.
  3. **Frosted Milk-Glass Front Panel**: `backdrop-filter: blur(20px)` glass panel with light reflection highlight and tab handle.
- **Dynamic Viewport Width Calibration**: Automatically adapts folder width on narrow mobile displays (`<360px`) to prevent card clipping, paired with touch-oriented guidance (*"Tap dossier to fan out deliverables"*).
- **Six Bespoke Vector Engineering Artworks**:
  1. **Hardware Architecture**: Blueprint Navy (`#0B1528`) with golden power rails (`+3.3V_SYS`), decoupling capacitor bank (`C10 100nF`), 24.00MHz crystal oscillator, and `STM32H753` 480MHz MCU pinout block.
  2. **High-Speed PCB Design**: Authentic Dark Emerald Solder Mask (`#02281D`) with ENIG Gold Serpentine Differential Pair delay tuning (`90Ω USB 3.2 / PCIe`), micro-vias, and `BGA-144` 45° dogbone breakout routing.
  3. **Firmware Engineering**: Phosphor Digital Oscilloscope HUD (`#080E18`) with Electric Cyan square-wave clock pulse trains (`CH1: 80MHz`), Neon Emerald SPI byte stream, and FreeRTOS deterministic task scheduler lanes.
  4. **FPGA & Digital Logic**: Silicon Violet Die (`#100C1F`) with digital logic gates (`LUT_AND2`, `D-Flip-Flop`, `XOR_FAST`), 64-bit AXI4 crossbar, and 250 MSPS DSP48E2 MAC filter accelerator.
  5. **Mechanical & Enclosure**: CAD Drafting Charcoal Viewport (`#0E1726`) with Precision Dual-Arrow Dimension Extension Callouts (`142.50 mm`), M3 brass threaded heat-stake screw boss, and vibrant emerald **IP67 silicone waterproof gasket**.
  6. **Turnkey Manufacturing**: Industrial SMT Panel Slate (`#0A121E`) with Optical Alignment Fiducials (`⊕ FID_1`), breakaway mouse-bites, golden bed-of-nails test points (`TP_VBAT`), and 2x2 board panel with green AOI pass stamps.

### 6. Electronics Stage-Gate Lifecycle Explorer ([`TimelineSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TimelineSection.jsx))
- **5-Stage Electronics Engineering Roadmap**:
  1. **POC (Proof of Concept)**: 1–5 units, breadboard/perfboard, core sensor validation, architecture de-risking.
  2. **EVT (Engineering Validation Test)**: 10–20 units, first PCB spin, functional bench bring-up, power tree verification.
  3. **DVT (Design Validation Test)**: 50–100 units, custom tooling, environmental chamber testing (-40°C to +85°C), EMI pre-compliance.
  4. **PVT (Production Validation Test)**: 500–1,000 units, production line validation, automated FCT test jigs, yield target &gt;98.5%.
  5. **MP (Mass Production)**: 5k–100k+ units, turnkey component procurement, automated box-build, supply chain continuity.
- **Mobile Segmented Stage Switcher**: On mobile displays (`lg:hidden`), renders an instant horizontal tab bar (`POC | EVT | DVT | PVT | MP`), eliminating 450px of vertical scrolling and allowing one-thumb stage inspection directly above the milestone deliverables.

### 7. 7-Stage Turnkey Process & 3D Glass Cards ([`ProcessSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/ProcessSection.jsx) & [`glass-card.tsx`](file:///f:/Owais/piware-website/src/components/ui/glass-card.tsx))
- **Interactive 21st.dev 3D Glass Cards**: 7 distinct development phases engineered with 3D perspective layers (`z = 20px` frosted plate, `z = 30px` content layer, `z = 15px` outputs).
- **Concentric Calibration Rings & Medallion**: Top-right 3D telemetry rings (`18px`, `32px`, `48px`, `64px`) and elevated stage number medallion (`z = 85px` &rarr; `105px`).
- **Touch-Optimized Precision**: Scoped 3D hover rotation to `sm:group-hover` to avoid sticky-tilt artifacts on touch devices, with safe right-padding preventing text-medallion collision.

### 8. Target Industry Verticals & Studio Credibility ([`IndustriesSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/IndustriesSection.jsx) & [`WhyPiwareSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/WhyPiwareSection.jsx))
- **10 Demanding Industry Sectors**: Aerospace, Defense, Medical Devices, Automotive EV, Industrial IoT, Robotics, and Consumer Tech presented in a responsive 5-column / 2-column mobile grid.
- **Outcome-Based Proof Points**: Quantified studio advantages (Zero-Obsolete BOM Standard, 100% In-House Firmware, 100% Pre-Compliance Guarantee, Direct Engineering Lead Access).
- **Client Endorsements ([`TestimonialsSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TestimonialsSection.jsx))**: Verified reviews from OEM leaders, CTOs, and startup founders.

### 9. Filterable Industry Tech Stack ([`TechStackSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TechStackSection.jsx))
- Catalogs **35+ industry-standard semiconductor vendors, EDA suites, and measurement equipment** across 6 tabs:
  - *Microcontrollers & SoCs* (STMicroelectronics, Espressif, Texas Instruments, NXP, Microchip, Raspberry Pi, ARM).
  - *EDA & Simulation Tools* (Altium Designer, KiCad, Cadence, Autodesk Fusion, SolidWorks).
  - *Test & Measurement* (Keysight Technologies, Tektronix, Rohde & Schwarz).
  - *Firmware & Embedded OS* (FreeRTOS, Zephyr, Yocto Project, Buildroot, ESP-IDF, MPLAB X, VS Code, STM32CubeMX).
  - *Digital Logic & FPGA* (AMD Xilinx, Intel Altera, Lattice).
  - *Cloud IoT Platforms* (AWS IoT Core, Microsoft Azure IoT, Google Cloud IoT).
- **Touch-Scrollable Pill Navigation**: Features a silky, zero-scrollbar horizontal touch carousel on mobile devices.

### 10. Symmetrical Technical Consultation Suite ([`ConsultationSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/ConsultationSection.jsx))
- **Equal-Height 2-Column Grid (`items-stretch`)**: Solved column height disparity by combining briefing information and direct contact channels into a single unified dossier matching the Calendly scheduler enclosure.
- **Left Column (Direct Access Briefing)**: 30-min technical scoping telemetry badge with live emerald `DIRECT ACCESS` beacon, 3-step structured agenda (`01 Architecture & Silicon Feasibility`, `02 Target Unit Cost (BOM) Modeling`, `03 Stage-Gate Delivery Roadmap`), mutual NDA guarantee, direct phone/email/address, and full-window fallback button.
- **Right Column (Calendly Engine Chassis)**: Dedicated telemetry header bar (`CALENDLY ENGINE • LIVE CALENDAR SYNC • AUTO TIMEZONE`), smooth asynchronous loading placeholder with pulsing calendar icon, and automatic widget re-initialization.

### 11. 21st.dev Animated Expanding Pill Navbar & Mobile Bottom Bar ([`Navbar.jsx`](file:///f:/Owais/piware-website/src/components/layout/Navbar.jsx) & [`bottom-nav-bar.tsx`](file:///f:/Owais/piware-website/src/components/ui/bottom-nav-bar.tsx))
- **Left Brand Anchor (Always Visible)**: Circular Piware logo badge (`TPB.webp`) and authoritative typography with smooth-scroll to top.
- **Center Interactive Expanding Pill**: Features 7 dedicated engineering icons (`Cpu`, `Activity`, `GitBranch`, `Factory`, `ShieldCheck`, `Layers`, `Send`). Inactive tabs remain ultra-clean icons. Hovering or active section state triggers silky Framer Motion spring expansion (`width: auto`, `opacity: 1`, `marginLeft: 6px`) with active dark capsule background (`bg-slate-900 text-white shadow-sm`).
- **Integrated Scroll-Spy**: Continuously monitors viewport scroll position with an 84px offset, dynamically gliding the active pill state across sections as the user navigates down the page.
- **Right Action Anchors (Always Visible)**: Real-time studio capacity badge (`● Studio Open for Q1/Q2` with pulsating emerald LED) and prominent tactile CTA button (`Start Project ↗` linking to Calendly).
- **Touch-Friendly Mobile Bottom Nav Bar**: Pinned at `bottom-4` on mobile and tablet viewports (`lg:hidden`) with `overflow-x-auto no-scrollbar` and `shrink-0` icons, delivering effortless one-thumb section switching.

### 12. 4-Column Engineering Studio Footer ([`Footer.jsx`](file:///f:/Owais/piware-website/src/components/layout/Footer.jsx) & [`footer-7.tsx`](file:///f:/Owais/piware-website/src/components/ui/footer-7.tsx))
- **Semantic 4-Column Architecture**: Brand & mission with white emblem (`TPW.webp`), Engineering Capabilities, Development Methodology, and Studio Coordinates with direct email, phones, and physical location.
- **Mobile Clearance (`pb-24 sm:pb-12`)**: Guarantees copyright notice, IPC-A-610 Class 3 badge, and legal links remain 100% visible without being obscured by the floating mobile bottom nav bar.

### 13. Floating Circular Radial Scroll Progress Tracker ([`scroll-to-top.tsx`](file:///f:/Owais/piware-website/src/components/ui/scroll-to-top.tsx))
- **Dynamic Clockwise SVG Radial Stroke**: Fills in real-time (`pathLength: scrollYProgress`) with Swiss precision cobalt blue (`#2563EB`).
- **Viewport Threshold & Coordinated Elevation**: Smoothly springs into view past `280px` scroll depth. Positioned at `bottom-20 right-4` on mobile (resting 16px cleanly above the mobile bottom nav bar) and `bottom-7 right-7` on desktop.

---

## 🎨 Favicon & Brand Asset Engineering Pipeline

The brand identity was given an optical overhaul to ensure pixel-perfect rendering across all browser tabs, bookmarks, and mobile home screens.

### 1. Optical Centering & Ghost Pixel Eradication
- **The Issue**: Early bounding box calculations (`im_src.getbbox()`) showed the raw glyph at `(247, 273, 778, 935)`, resulting in an optical 182px downward sag.
- **Root Cause**: Two near-invisible stray ghost pixels (`alpha <= 2` at `y = 934`) located deep beneath the logo in the legacy raw source file.
- **The Fix**: Scripted precision alpha thresholding (`alpha > 10`), locating the authentic mathematical boundary of the Pi (`π`) glyph at `(247, 273, 778, 753)`.
- **Result**: Centered inside a 1024x1024 circle with balanced margins:
  - **Horizontal**: Left margin `432px`, Right margin `431px` (Difference: &le;1px).
  - **Vertical**: Top margin `489px`, Bottom margin `488px` (Difference: &le;1px).

### 2. Geometry Transformation: From Box to Circular Badge
- Replaced the harsh square white tile with a modern circular white badge featuring a transparent outer background (`(0, 0, 0, 0)`), ensuring seamless aesthetics on dark and light browser chrome alike.

### 3. Multi-Format Icon Suite
Generated and distributed across `public/favicon/`, `public/assets/images/`, and `favicon/`:
- **`favicon.ico`**: Multi-resolution container embedding 16x16, 32x32, and 48x48 bitmaps.
- **`favicon-16x16.png`** & **`favicon-32x32.png`**: Standard browser tab favicons.
- **`apple-touch-icon.png` (180x180)**: High-resolution iOS home screen badge.
- **`favicon.svg`**: Scalable lossless vector icon for modern browsers.
- **`favicon.webp`**: Lightweight modern web format.
- **Zero Root Clutter**: Loose root-level icon files were moved into structured asset directories.

---

## 📂 Project Directory Structure

```
piware-website/
├── public/                               # Static assets served at root /
│   ├── favicon.ico                       # Multi-resolution root favicon fallback
│   ├── favicon.svg                       # Lossless SVG vector favicon
│   ├── assets/
│   │   ├── fonts/                        # Self-hosted zero-latency fonts
│   │   │   ├── Avenir-Black.woff2        # Primary display typeface (33 KB)
│   │   │   ├── Avenir-Black.ttf          # TrueType fallback (54 KB)
│   │   │   ├── Avenir-Light.woff2        # Primary body typeface (32 KB)
│   │   │   └── Avenir-Light.ttf          # TrueType fallback (52 KB)
│   │   └── images/                       # Optimized web imagery
│   │       ├── favicon.ico               # Structured favicon asset
│   │       ├── hero.webp                 # Optimized hero hardware PCBA (247 KB)
│   │       ├── proto.webp                # Optimized prototype image (89 KB)
│   │       ├── icons/                    # Social & contact vector SVGs (email, x, etc.)
│   │       └── logo/                     # Brand identity wordmarks & badges
│   │           ├── TPB.webp              # Transparent black/light mode logo (30 KB)
│   │           └── TPW.webp              # Transparent white/dark mode logo (34 KB)
│   └── favicon/                          # Favicon suite & 35+ vendor tech logos
│       ├── favicon.ico                   # Standard multi-res ICO
│       ├── favicon-16x16.png             # 16px tab icon
│       ├── favicon-32x32.png             # 32px tab icon
│       ├── apple-touch-icon.png          # 180px iOS icon
│       ├── favicon.svg                   # Vector favicon
│       ├── favicon.webp                  # Compressed WebP favicon
│       └── [35+ vendor logos]           # Altium, STM32, Xilinx, Keysight, etc.
├── src/                                  # Application source code
│   ├── components/
│   │   ├── common/                       # Reusable UI primitives
│   │   │   ├── Container.jsx             # Max-width responsive container (1280px)
│   │   │   └── SectionHead.jsx           # Standardized section title & eyebrow badge
│   │   ├── layout/                       # Global shell components
│   │   │   ├── Navbar.jsx                # Sticky glassmorphic navigation header
│   │   │   └── Footer.jsx                # Engineering studio footer & coordinates
│   │   ├── sections/                     # Feature section views
│   │   │   ├── HeroSection.jsx           # Centered hero + kinetic grid + 3D PCBA card
│   │   │   ├── TrustStrip.jsx            # Enterprise guarantees indicator bar
│   │   │   ├── CapabilitiesSection.jsx   # 6x 3D physical glass folder dossiers
│   │   │   ├── TimelineSection.jsx       # 5-stage electronics lifecycle (POC to MP)
│   │   │   ├── ProcessSection.jsx        # 7-step turnkey engineering process
│   │   │   ├── IndustriesSection.jsx     # 10 targeted industry verticals
│   │   │   ├── WhyPiwareSection.jsx      # Studio differentiators & advantages
│   │   │   ├── TestimonialsSection.jsx   # Client founder & OEM testimonials
│   │   │   ├── TechStackSection.jsx      # Filterable 35+ technology stack badges
│   │   │   └── ConsultationSection.jsx   # Calendly consultation booking module
│   │   └── ui/                           # 21st.dev interactive components
│   │       ├── animated-counter.jsx      # Framer Motion animated number count with easing curve
│   │       ├── bottom-nav-bar.tsx        # 21st.dev touch-friendly pill nav with spring label expansion
│   │       ├── bottom-nav-bar.jsx        # JavaScript export wrapper
│   │       ├── footer-7.tsx              # 21st.dev modern multi-column footer with social links & legal nav
│   │       ├── footer-7.jsx              # JavaScript export wrapper
│   │       ├── glass-card.tsx            # 21st.dev 3D perspective glass card with concentric rings & floating badge
│   │       ├── glass-card.jsx            # JavaScript export wrapper
│   │       ├── glass-folder-cards.jsx    # 3D physical folder dossiers with vector art
│   │       ├── interactive-3d-hardware.jsx # 3D perspective PCBA canvas with AOI
│   │       ├── kinetic-grid.tsx          # TypeScript interactive canvas grid
│   │       ├── kinetic-grid.jsx          # JavaScript export wrapper
│   │       ├── scroll-to-top.tsx         # Circular radial SVG scroll progress ring & floating back-to-top button
│   │       ├── scroll-to-top.jsx         # JavaScript export wrapper
│   │       └── words-pull-up.jsx         # Spring kinetic headline typography
│   ├── data/                             # Decoupled domain content models
│   │   ├── capabilities.js               # 6 core disciplines & deliverable specs
│   │   ├── companyInfo.js                # Studio coordinates, contact, Calendly URL
│   │   ├── industries.js                 # 10 industry verticals data
│   │   ├── process.js                    # 7-phase turnkey development steps
│   │   ├── techStack.js                  # 35+ tech vendors cataloged into 6 groups
│   │   ├── testimonials.js               # Client reviews and partner feedback
│   │   └── timeline.js                   # POC, EVT, DVT, PVT, MP lifecycle criteria
│   ├── lib/
│   │   ├── utils.ts                      # TypeScript cn helper (clsx + twMerge)
│   │   ├── utils.d.ts                    # TypeScript declarations for path alias resolution
│   │   └── utils.js                      # JavaScript fallback export
│   ├── App.jsx                           # Master application layout
│   ├── main.jsx                          # React DOM mount point
│   └── index.css                         # Tailwind directives, fonts, blueprint styles
├── index.html                            # Semantic HTML5 entry with OpenGraph metadata
├── legacy_index.html                     # Archived original static HTML site
├── package.json                          # Dependencies & npm build scripts
├── postcss.config.js                     # PostCSS with Tailwind & Autoprefixer
├── tailwind.config.js                    # Custom color tokens, fonts & elevation
├── tsconfig.json                         # Strict TypeScript configuration with @/* path alias
├── vite.config.js                        # Vite bundler configuration & @ path alias
└── .gitignore                            # Git security rules
```

---

## 📊 Data Layer Specification (`src/data/`)

All site content is decoupled from layout components into structured, typed JavaScript models in `src/data/`:

| Data Module | File Path | Exports & Schema Purpose |
| :--- | :--- | :--- |
| **`capabilities.js`** | [`src/data/capabilities.js`](file:///f:/Owais/piware-website/src/data/capabilities.js) | Defines the 6 core engineering disciplines, subtitle, badges, technical description, tags, and deliverable sheet lists for the 3D Glass Folders. |
| **`companyInfo.js`** | [`src/data/companyInfo.js`](file:///f:/Owais/piware-website/src/data/companyInfo.js) | Single source of truth for studio coordinates (`23.0225° N, 72.5714° E`), phone numbers, email (`h@piware.in`), Calendly URL, studio hours, and social profiles. |
| **`industries.js`** | [`src/data/industries.js`](file:///f:/Owais/piware-website/src/data/industries.js) | Details 10 target industry verticals (Robotics, Medical, Automotive EV, Aerospace, Consumer IoT, Industrial IoT, Renewable Energy, etc.). |
| **`process.js`** | [`src/data/process.js`](file:///f:/Owais/piware-website/src/data/process.js) | 7-step engineering roadmap from initial scoping and power tree budgeting to mass manufacturing handover. |
| **`techStack.js`** | [`src/data/techStack.js`](file:///f:/Owais/piware-website/src/data/techStack.js) | Catalogs 35+ semiconductor vendors and tools into 6 categories with logo paths, technical descriptions, and website references. |
| **`testimonials.js`** | [`src/data/testimonials.js`](file:///f:/Owais/piware-website/src/data/testimonials.js) | Quotes, client names, roles, company names, and project deliverables from OEM and startup partners. |
| **`timeline.js`** | [`src/data/timeline.js`](file:///f:/Owais/piware-website/src/data/timeline.js) | Specifications for POC, EVT, DVT, PVT, and MP stages, including unit batch sizes, duration estimates, risk mitigations, and exit criteria. |

---

## ⚡ Performance Audit & Asset Optimization

| Asset / System | Before Optimization | After Optimization | Improvement |
| :--- | :--- | :--- | :--- |
| **`hero.png` &rarr; `hero.webp`** | `2,347 KB` | `247 KB` | **-89.5% payload reduction** |
| **`proto.png` &rarr; `proto.webp`** | `1,468 KB` | `89 KB` | **-93.9% payload reduction** |
| **`TPB.png` &rarr; `TPB.webp`** | `1,270 KB` | `30 KB` | **-97.6% payload reduction** |
| **`TPW.png` &rarr; `TPW.webp`** | `1,319 KB` | `34 KB` | **-97.4% payload reduction** |
| **Total Media Weight** | **~6,950 KB** | **~417 KB** | **-94.0% total asset weight** |
| **Google Fonts External CDN** | 3 render-blocking HTTP requests | 0 external requests (Self-hosted WOFF2) | **Zero layout shift (0 CLS)** |
| **Calendly Third-Party Script** | Direct synchronous head tag | Deferred lazy script execution | **Eliminated main thread blocking** |
| **Kinetic Grid CPU / GPU Load** | Continuous unthrottled loop | `IntersectionObserver` auto-pause | **0.00% CPU when scrolled offscreen** |

---

## 🛠️ Local Development & Build Workflows

### Prerequisites
- **Node.js**: `v18.0.0` or higher (tested on `v24.12.0`)
- **npm**: `v9.0.0` or higher (tested on `v11.6.2`)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/yourtabrez/piware-website.git
cd piware-website
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The Vite development server boots with Hot Module Replacement (HMR) at:
`http://localhost:3000`

### 3. Production Build
```bash
npm run build
```
Compiles and tree-shakes all JSX, TSX, CSS, and assets into `dist/` with gzip compression (~5 seconds).

### 4. Preview Production Build
```bash
npm run preview
```
Runs a local HTTP server serving the compiled `dist/` output for pre-deployment verification.

---

## 🚀 Cloud Deployment (Vercel)

The repository is linked to **Vercel** (`piware-website.vercel.app`) with automatic continuous delivery:

```
                  Git Push (Branch: main)
                             │
                             ▼
                 Vercel GitHub Webhook Trigger
                             │
                             ▼
         Vercel Cloud Build Environment (Node.js 20+)
                ├─ Command: npm run build
                ├─ Framework: Vite
                └─ Output: dist/
                             │
                             ▼
        Zero-Downtime Deployment to Vercel Global Edge CDN
                   (piware-website.vercel.app)
```

---

## 📜 Full Modernization & Engineering Changelog

Below is the complete chronological log of engineering enhancements and transformations performed:

### Milestone 1: Complete React 18 & Vite SPA Re-Architecture
- Converted legacy monolithic static HTML/CSS site into a clean, modular React 18 single-page application.
- Structured code into `components/common`, `components/layout`, `components/sections`, `components/ui`, `data/`, and `lib/`.
- Preserved legacy site safely in `legacy_index.html` for backward auditing.

### Milestone 2: 21st.dev Prisma Hero Section Modernization
- Integrated kinetic typography ([`words-pull-up.jsx`](file:///f:/Owais/piware-website/src/components/ui/words-pull-up.jsx)) with staggered spring pull-up entrance effects.
- Implemented interactive 3D PCBA card ([`interactive-3d-hardware.jsx`](file:///f:/Owais/piware-website/src/components/ui/interactive-3d-hardware.jsx)) featuring realistic cursor-following 3D perspective rotation (±14° lerp interpolation), multi-layered depth badges (`translateZ: 35px`, `55px`), and AOI fiducial marks.
- Designed top telemetry HUD with studio coordinates (`23.0225° N, 72.5714° E`), IPC-A-610 Class 3 standards, and live active lab capacity pill.
- Built interactive capability tag cloud with staggered Framer Motion entrance animations.

### Milestone 3: 21st.dev Glass Folder Cards Capabilities Integration
- Replaced flat capabilities grid with 3D physical object folder dossiers ([`glass-folder-cards.jsx`](file:///f:/Owais/piware-website/src/components/ui/glass-folder-cards.jsx)).
- Replaced generic abstract art with **six authentic, custom-crafted vector hardware engineering artworks**:
  1. *Hardware Architecture*: Navy blueprint + power rails + crystal oscillator + STM32 MCU pinout.
  2. *High-Speed PCB*: Dark emerald solder mask + ENIG gold serpentine delay tuning + BGA-144 dogbone breakout.
  3. *Firmware*: Digital oscilloscope phosphor HUD + 80MHz clock pulse train + FreeRTOS task lanes.
  4. *FPGA*: Silicon violet die + digital logic gates + 64-bit AXI4 crossbar + DSP48E2 MAC filter.
  5. *Mechanical/CAD*: CAD viewport + dual-arrow dimension callouts + M3 threaded boss + IP67 waterproof gasket.
  6. *Turnkey Manufacturing*: SMT panel slate + optical alignment fiducials + bed-of-nails test points + AOI pass stamps.

### Milestone 4: Hero Viewport Centering & Multi-Device Responsiveness
- Re-architected `HeroSection` to `min-h-[100dvh] flex flex-col justify-center items-center` with balanced padding (`pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-8`).
- Solved layout clipping on standard 1080p, 1440p, laptops (13"–16"), tablets, and mobile displays.
- Integrated staggered entrance transitions across navbar, telemetry HUD, headlines, CTA buttons, and trust strip.

### Milestone 5: Favicon Transformation & Optical Centering
- Eradicated two stray ghost pixels (`alpha <= 2` at `y = 934`) in `TPB.png` that distorted bounding box calculation by 182px.
- Calibrated true Pi glyph `(247, 273, 778, 753)` to mathematical and optical center (`X: 432px/431px`, `Y: 489px/488px`).
- Transformed square white box into a clean circular badge with transparent outer background.
- Cleaned up repository root by moving loose `favicon.ico` into `assets/images/favicon.ico`, `public/favicon/`, and multi-resolution suite (`16x16`, `32x32`, `apple-touch-icon 180x180`, `svg`, `webp`).

### Milestone 6: 21st.dev Kinetic Grid Canvas Integration
- Integrated [`kinetic-grid.tsx`](file:///f:/Owais/piware-website/src/components/ui/kinetic-grid.tsx) and [`kinetic-grid.jsx`](file:///f:/Owais/piware-website/src/components/ui/kinetic-grid.jsx).
- Configured `@/` path alias in [`vite.config.js`](file:///f:/Owais/piware-website/vite.config.js).
- Adapted dark palette to Swiss Minimalist Light Theme: slate drafting hairlines (`rgba(15, 23, 42, 0.045)`), electric cobalt blue active lines (`rgba(37, 99, 235, 0.62)`), and glowing intersection nodes with 6.5px halos.
- Added momentum lerp, elastic bell curve falloff, boundary edge pinning, and concentric click ripple waves.
- Implemented HiDPI retina canvas scaling (`devicePixelRatio`) and `IntersectionObserver` viewport render loop pausing.
- Verified unobstructed pointer interactions (`pointer-events-none`) for all buttons, links, and 3D PCBA models.

### Milestone 7: 21st.dev Expanding Pill Navbar & Mobile Bottom Nav Bar Integration
- Integrated [`bottom-nav-bar.tsx`](file:///f:/Owais/piware-website/src/components/ui/bottom-nav-bar.tsx) and [`bottom-nav-bar.jsx`](file:///f:/Owais/piware-website/src/components/ui/bottom-nav-bar.jsx) in `/components/ui/`.
- Re-engineered [`Navbar.jsx`](file:///f:/Owais/piware-website/src/components/layout/Navbar.jsx) with the 21st.dev-inspired animated expanding pill architecture:
  - Preserved permanent high-visibility for the Left Logo badge (`TPB.webp`) and Right Action Controls (`Studio Open for Q1/Q2` and `Start Project ↗` CTA).
  - Central nav pill features 7 custom engineering icons (`Cpu`, `Activity`, `GitBranch`, `Factory`, `ShieldCheck`, `Layers`, `Send`).
  - Active and hovered states trigger smooth spring label expansion (`width: auto`, `opacity: 1`, `marginLeft: 6px`) on an authoritative dark capsule (`bg-slate-900 text-white shadow-sm`).
  - Integrated active scroll-spy with an 84px nav offset, dynamically tracking user progression through sections.
  - Deployed touch-friendly floating bottom nav bar for mobile and tablet viewports (`lg:hidden`).

### Milestone 8: Modern In-Transition & Animated Number Counter in TrustStrip
- Built [`animated-counter.jsx`](file:///f:/Owais/piware-website/src/components/ui/animated-counter.jsx) powered by Framer Motion's hardware-accelerated `useMotionValue` and `animate` with precision ease-out curve (`[0.16, 1, 0.3, 1]`).
- Re-architected [`TrustStrip.jsx`](file:///f:/Owais/piware-website/src/components/sections/TrustStrip.jsx) with staggered entrance animations (`useInView`, `staggerChildren: 0.12`).
- Integrated dynamic number counts rolling up to `25+`, `15+`, `8+`, and `98%` as the section scrolls into the viewport.
- Added spring-scale animations for suffixes (`+`, `%`) and subtle hover elevations (`y: -2px`) on metric cards.

### Milestone 9: 21st.dev 3D Glass Card Process Section Integration
- Integrated [`glass-card.tsx`](file:///f:/Owais/piware-website/src/components/ui/glass-card.tsx) and [`glass-card.jsx`](file:///f:/Owais/piware-website/src/components/ui/glass-card.jsx) in `/components/ui/`.
- Re-engineered [`ProcessSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/ProcessSection.jsx) replacing static cards with interactive 3D layered glass cards:
  - 3D perspective rotation on hover (`rotate3d(0.8, -0.6, 0, 10deg) translateY(-4px)`).
  - Multi-tier Z-depth architecture: frosted glass plate (`z = 20px`), content layers (`z = 30px`), key deliverables (`z = 15px`).
  - Top-right concentric 3D calibration rings (`z = 18px`, `32px`, `48px`, `64px`) and floating stage number medallion (`z = 85px` &rarr; `105px`).
  - Staggered entrance in-transition powered by Framer Motion's `useInView`.
  - Fully adapted to the Swiss Minimalist Light Theme with clean slate borders, blue badge accents, and emerald status indicators.

### Milestone 10: 21st.dev Multi-Column Animated Footer Architecture
- Integrated [`footer-7.tsx`](file:///f:/Owais/piware-website/src/components/ui/footer-7.tsx) and [`footer-7.jsx`](file:///f:/Owais/piware-website/src/components/ui/footer-7.jsx) with `react-icons`.
- Re-architected [`Footer.jsx`](file:///f:/Owais/piware-website/src/components/layout/Footer.jsx) with semantic 4-column layout:
  - Brand column: White Piware emblem (`TPW.webp`), mission copy, live emerald lab capacity beacon, and spring-scaling social badges (LinkedIn, X, Instagram).
  - Engineering capabilities column: Deep links with hover arrows (`›`) and slide animations.
  - Development methodology column: Process stages and verified tech stack links.
  - Studio coordinates column: Direct email, primary & secondary phone contacts, Ahmedabad physical address, and instant Calendly booking CTA.
  - Sub-footer bar: Copyright notice, IPC-A-610 Class 3 certification badge, legal links, and interactive "Back to Top" floating button.
  - Faint blueprint grid watermark and ambient top radial glow.

### Milestone 11: Floating Circular Radial Scroll Progress Tracker
- Created [`scroll-to-top.tsx`](file:///f:/Owais/piware-website/src/components/ui/scroll-to-top.tsx) and [`scroll-to-top.jsx`](file:///f:/Owais/piware-website/src/components/ui/scroll-to-top.jsx) mounted globally in [`App.jsx`](file:///f:/Owais/piware-website/src/App.jsx).
- Implemented real-time SVG radial progress stroke dynamically filling clockwise (`pathLength: scrollYProgress`) in precision cobalt blue (`#2563EB`).
- Integrated dynamic viewport threshold visibility (`threshold: 280px`) with Framer Motion spring pop-in & pop-out transitions.
- Configured responsive bottom anchoring: `bottom-7 right-7` on desktop, elevated to `bottom-20 right-4` on mobile to rest cleanly above the mobile bottom nav bar.
- Features hover elevation (`whileHover: { scale: 1.08 }`), micro-arrow lift, and silky smooth scroll-to-top execution.

### Milestone 12: Contact / Technical Consultation Section Alignment & Restructuring
- Resolved mismatched column heights, disjointed stacked cards, and awkward white space in [`ConsultationSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/ConsultationSection.jsx).
- Unified left-hand content into an equal-height master engineering briefing card (`rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8`):
  - Telemetry HUD badge with `Clock` icon ("30-Min Technical Scoping") and pulsating emerald `DIRECT ACCESS` status pill.
  - 3-step structured agenda dossier cards with custom Lucide icons (`Cpu`, `DollarSign`, `TrendingUp`) and stage indexing (`01`, `02`, `03`).
  - Mutual NDA & IP protection guarantee badge with `ShieldCheck` icon.
  - Direct studio contact channels (email, phone numbers, and physical studio coordinates).
  - Tactile fallback button ("Open Scheduler in New Window").
- Encased Calendly scheduler inside a matching architectural enclosure with top telemetry bar (`CALENDLY ENGINE • LIVE CALENDAR SYNC • AUTO TIMEZONE`).
- Enforced strict grid alignment via `items-stretch` and `min-h-[660px]`, achieving 100% optical balance between the briefing dossier and the live booking interface.
- Added graceful asynchronous loading skeleton with pulsing calendar icon and real-time availability indicator.

### Milestone 13: Comprehensive Mobile Responsiveness & Touch Optimization
- Deep-analyzed the entire codebase across mobile viewports (360px–430px) and implemented end-to-end responsiveness enhancements:
  - **Touch-Reactive Kinetic Grid ([`kinetic-grid.tsx`](file:///f:/Owais/piware-website/src/components/ui/kinetic-grid.tsx))**: Integrated `touchstart`, `touchmove`, and `touchend` listeners with `{ passive: true }`, allowing mobile users to warp grid lines and trigger shockwave ripples on tap without hindering native page scrolling.
  - **Dynamic 3D Hardware Viewport ([`interactive-3d-hardware.jsx`](file:///f:/Owais/piware-website/src/components/ui/interactive-3d-hardware.jsx))**: Added mobile touch dragging tilt and autonomous idle pendulum breathing drift so the 3D perspective and elevated depth badges remain alive on mobile screens.
  - **Mobile 2x2 Crosshair Quadrant in TrustStrip ([`TrustStrip.jsx`](file:///f:/Owais/piware-website/src/components/sections/TrustStrip.jsx))**: Eliminated the Tailwind `divide-y` asymmetry bug on 2x2 mobile grids, establishing a mathematically balanced crosshair border layout.
  - **Mobile Horizontal Stage-Gate Switcher ([`TimelineSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TimelineSection.jsx))**: Replaced 450px of vertical scrolling button fatigue with a sleek, one-thumb horizontal stage tab bar (`POC | EVT | DVT | PVT | MP`), displaying immediate milestone deliverables without jumping up and down.
  - **Fluid-Scaled Glass Folders ([`CapabilitiesSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/CapabilitiesSection.jsx))**: Dynamically calculates `folderWidth` on small viewports (<360px) to prevent card overflow, paired with touch-oriented guidance (*"Tap dossier to fan out deliverables"*).
  - **Process Glass Card Mobile Polish ([`glass-card.tsx`](file:///f:/Owais/piware-website/src/components/ui/glass-card.tsx))**: Scoped 3D hover tilt to `sm:group-hover` to avoid sticky-tilt artifacts on touch screens, and added header right-padding to prevent medallion text collisions.
  - **Horizontal Tech Stack Pill Scroller ([`TechStackSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TechStackSection.jsx))**: Transformed multi-row wrapped buttons into a sleek native-like horizontal swipe pill selector.
  - **Bottom Bar & Scroll-To-Top Clearance ([`bottom-nav-bar.tsx`](file:///f:/Owais/piware-website/src/components/ui/bottom-nav-bar.tsx) & [`Footer.jsx`](file:///f:/Owais/piware-website/src/components/layout/Footer.jsx))**: Upgraded `BottomNavBar` with `overflow-x-auto no-scrollbar` and `shrink-0` icons, coordinated `ScrollToTop` elevation (16px vertical gap), and added `pb-24` on the footer to guarantee zero content obstruction.

### Milestone 14: Site-Wide Modern In-Transitions & Orchestrated Scrolling Rhythm
- Audited every section and integrated Framer Motion viewport-triggered in-transitions (`useInView({ once: true, margin: "-70px" })`) across previously static components:
  - **Capabilities Section ([`CapabilitiesSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/CapabilitiesSection.jsx))**: Section header slide-up (`y: 24`) and cascading folder stagger (`staggerChildren: 0.09, delayChildren: 0.15`) with spring elevation.
  - **Hardware Lifecycle Section ([`TimelineSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TimelineSection.jsx))**: Coordinated entry with left stage selector slide-in (`x: -24`), right detail enclosure slide-in (`x: 24`), and fluid `AnimatePresence` stage-switch transitions.
  - **Process Section ([`ProcessSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/ProcessSection.jsx))**: Synchronized header entrance preceding the 7-stage 3D glass card cascade.
  - **Target Industries Section ([`IndustriesSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/IndustriesSection.jsx))**: Staggered cascading reveal (`staggerChildren: 0.06`) for all 10 industry cards with smooth hover lifts (`y: -4`).
  - **Why Piware Section ([`WhyPiwareSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/WhyPiwareSection.jsx))**: Staggered entrance (`staggerChildren: 0.08`) for the 6 studio outcome cards with fluid deceleration curves.
  - **Client Testimonials Section ([`TestimonialsSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TestimonialsSection.jsx))**: Staggered quote reveal (`staggerChildren: 0.12, y: 28`) creating an authoritative social proof entrance.
  - **Engineering Tech Stack Section ([`TechStackSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TechStackSection.jsx))**: Smooth category filter bar slide-in and dynamic category-swapping badge stagger (`staggerChildren: 0.025, scale: 0.92 -> 1.0`).
  - **Technical Consultation Section ([`ConsultationSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/ConsultationSection.jsx))**: Header entrance unified with the left briefing card and right Calendly chassis.

### Milestone 15: Typography & Readability Overhaul, New Engineering Disciplines & Hero Copy Updates
- **Typography & Visibility Overhaul**:
  - Replaced ultra-thin font weight in [`src/index.css`](file:///f:/Owais/piware-website/src/index.css) and [`tailwind.config.js`](file:///f:/Owais/piware-website/tailwind.config.js) with standard weight (`font-weight: 400`) and optimized screen legibility (`text-rendering: optimizeLegibility`), resolving website owner feedback (*"Typography looks small improve visibility and readability"* / *"easily padhna mushkil h"*).
  - Scaled up 3D Process cards in [`glass-card.tsx`](file:///f:/Owais/piware-website/src/components/ui/glass-card.tsx): title to `text-xl sm:text-2xl`, summary to `text-sm font-bold text-slate-700`, description to `text-sm text-slate-700`, and deliverables list to `text-sm text-slate-800 font-medium`.
  - Scaled up Lifecycle stage-gate section in [`TimelineSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/TimelineSection.jsx): stage names to `text-base font-extrabold`, headline to `text-lg sm:text-xl font-bold`, objective to `text-base text-slate-700`, and deliverable cards to `text-sm text-slate-900 font-medium`.
- **Hero Section 3-Line Kinetic Headline & Value Proposition**:
  - Implemented the official 3-line kinetic headline in [`HeroSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/HeroSection.jsx):
    1. *Engineering Ideas Into Reality.*
    2. *From Concept to Production.*
    3. *Without Guesswork.*
  - Updated hero editorial paragraph to: *"We design, develop and deliver advanced engineering solutions across electronics, embedded systems, RF, robotics and industrial automation."*
  - Updated capability tags to include *Antenna & RF Engineering*, *Robotics & Intelligent Systems*, and *Industry 4.0 & Automation*.
- **Engineering Disciplines Expansion (3x3 Grid & 9 Interactive Dossiers)**:
  - Added **Antenna & RF Engineering** (Antenna design, RF simulation, 50Ω matching, filter front-ends, tuning, chamber testing).
  - Added **Robotics & Intelligent Systems** (BLDC/servo FOC control, sensor fusion, 6-DOF kinematics, navigation, edge-AI vision).
  - Added **Industry 4.0 & Industrial Automation** (PLC IEC 61131-3, SCADA/HMI, control panels, VFDs, Modbus/CAN, IIoT predictive maintenance).
  - Designed bespoke authentic engineering vector artwork components in [`glass-folder-cards.jsx`](file:///f:/Owais/piware-website/src/components/ui/glass-folder-cards.jsx) (`RfAntennaArt`, `RoboticsArt`, `AutomationArt`).
  - Synchronized data in [`src/data/capabilities.js`](file:///f:/Owais/piware-website/src/data/capabilities.js) and navigation links in [`Footer.jsx`](file:///f:/Owais/piware-website/src/components/layout/Footer.jsx).
- **Phone Number Purge**:
  - Completely removed secondary phone `+91 99244 94036` from [`companyInfo.js`](file:///f:/Owais/piware-website/src/data/companyInfo.js) and documentation, leaving only `+91 76001 00174`.
- **IDE & Development Environment Polish**:
  - Configured [`.vscode/settings.json`](file:///f:/Owais/piware-website/.vscode/settings.json) with `css.lint.unknownAtRules: "ignore"` to eliminate CSS linter warnings on `@tailwind` directives.
  - Added [`.vscode/extensions.json`](file:///f:/Owais/piware-website/.vscode/extensions.json) recommending the official Tailwind CSS IntelliSense extension.

### Milestone 16: Enterprise AI & Full-Stack Studio Expansion (Agentic AI, RAG, SaaS Platforms & Automation)
- **Unified 12-Dossier Modular Catalog with Domain Filter Tabs ([`CapabilitiesSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/CapabilitiesSection.jsx))**:
  - Expanded interactive physical folders into a 12-discipline catalog arranged in a clean 4×3 grid on desktop and responsive swipe layout on mobile.
  - Implemented interactive domain filter tabs:
    - `All Disciplines (12)`: Complete studio catalog.
    - `Hardware & RF (4)`: Hardware Architecture, High-Speed PCB, Antenna & RF, Mechanical CAD.
    - `Intelligent Systems & AI (4)`: Agentic AI & Autonomous Agents, Enterprise RAG Systems, Robotics & Motion Control, Firmware Engineering.
    - `Cloud, Software & Mfg (4)`: Full-Stack SaaS Platforms, Industry 4.0 & Automation, FPGA Digital Logic, Turnkey Volume Manufacturing.
- **Three New Bespoke Engineering Vector Artworks ([`glass-folder-cards.jsx`](file:///f:/Owais/piware-website/src/components/ui/glass-folder-cards.jsx))**:
  - **`AgenticAiArt`**: Interactive LangGraph state machine with cyclic graph loops, Supervisor agent routing, Tool Runner nodes, and JSON function-calling schema validation.
  - **`RagIntelligenceArt`**: Production RAG ingestion pipeline with PyMuPDF document parsing, 3072-dimensional vector space scatter plot, and Supabase pgvector HNSW cosine similarity clustering.
  - **`FullStackSaasArt`**: Clean 3-tier cloud architecture diagram spanning Next.js/React TypeScript DOM tree, FastAPI async REST API router, and PostgreSQL tables with Row Level Security (RLS).
- **Engineering Tech Stack Expansion ([`techStack.js`](file:///f:/Owais/piware-website/src/data/techStack.js))**:
  - Added two dedicated categories to the interactive filter bar:
    - `"Agentic AI & LLMs"`: LangGraph, LangChain, OpenAI APIs, Google Gemini, Supabase pgvector, PyMuPDF.
    - `"Full-Stack & Cloud"`: Next.js, Python & FastAPI, PostgreSQL, Docker, n8n Automation, Tailwind CSS.
- **Brand & Lifecycle Process Synchronization**:
  - **Hero Section ([`HeroSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/HeroSection.jsx))**: Updated telemetry bar to `"STANDARDS: IPC-A-610 CLASS 3 • AGENTIC AI & EMBEDDED LABS"` and refined trust badge to `"Founder-Led Hardware & AI Engineering"`.
  - **Lifecycle Process ([`process.js`](file:///f:/Owais/piware-website/src/data/process.js))**: Weaved AI system topology, cloud vs. edge inference latency modeling, async API pipelines, and autonomous agent evaluation into the 7-stage methodology.
  - **Technical Consultation ([`ConsultationSection.jsx`](file:///f:/Owais/piware-website/src/components/sections/ConsultationSection.jsx))**: Expanded briefing items to evaluate AI model feasibility, cloud inference costs, and full-stack software architecture.
  - **Footer Sitemap ([`Footer.jsx`](file:///f:/Owais/piware-website/src/components/layout/Footer.jsx))**: Updated direct links to include Agentic AI, Enterprise RAG, and Full-Stack SaaS platforms.

---

## 📞 Studio Contact & Coordinates

- **Studio Email**: [h@piware.in](mailto:h@piware.in)
- **Primary Phone**: [+91 76001 00174](tel:+917600100174)
- **Studio Coordinates**: `23.0225° N, 72.5714° E` (Ahmedabad, Gujarat, India)
- **Physical Address**: C-12, Ground Floor, Sumel-10, B/h Kalupur Railway Station, Saraspur, Ahmedabad, Gujarat, India - 380018
- **Online Consultation**: [calendly.com/piwareengineering](https://calendly.com/piwareengineering)
- **Socials**: [LinkedIn](https://www.linkedin.com/company/piware/) &bull; [X (Twitter)](https://x.com/piware) &bull; [Instagram](https://www.instagram.com/piware.engineering/)

---

<div align="center">
<sub>&copy; 2026 Piware Engineering. All rights reserved. Precision Electronics Engineering & Embedded Systems.</sub>
</div>
