import * as React from "react";

/**
 * Glass Folder Cards — an interactive physical folder drawn as an object.
 *
 * Three layers:
 * 1. Back panel holding authentic engineering drawings (schematics, PCB traces, waveforms, CAD, SMT).
 * 2. Real deliverable sheets that lift and fan out on hover/click.
 * 3. Frosted-glass front panel that blurs whatever sits behind it with dynamic specular lighting.
 */

// #region Authentic Engineering Vector Artworks (Tailored for Piware)

export const SchematicArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blueprint Navy Deep Background */}
    <rect width="340" height="272" fill="#0B1528" />
    
    {/* Engineering Blueprint Grid */}
    <defs>
      <pattern id="schematic-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#1E2E4A" strokeWidth="0.8" />
      </pattern>
      <linearGradient id="rail-gold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <rect width="340" height="272" fill="url(#schematic-grid)" />

    {/* Top Tab Area Engineering Features (Crisp and visible at rest!) */}
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* Power Rail +3.3V Header */}
      <path d="M16 26 L92 26" stroke="url(#rail-gold)" strokeWidth="2" />
      <polygon points="92,23 98,26 92,29" fill="#F59E0B" />
      <text x="18" y="19" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">+3.3V_SYS</text>
      
      {/* Decoupling Capacitor Array */}
      <path d="M48 26 L48 38" stroke="#38BDF8" strokeWidth="1.2" />
      <line x1="40" y1="38" x2="56" y2="38" stroke="#38BDF8" strokeWidth="1.5" />
      <line x1="40" y1="42" x2="56" y2="42" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M48 42 L48 54" stroke="#94A3B8" strokeWidth="1.2" />
      <line x1="42" y1="54" x2="54" y2="54" stroke="#94A3B8" strokeWidth="1.2" />
      <line x1="45" y1="57" x2="51" y2="57" stroke="#94A3B8" strokeWidth="1.2" />
      <text x="60" y="42" fill="#93C5FD" fontSize="7" fontFamily="monospace">C10 100nF</text>

      {/* Crystal Oscillator Tank (24.000 MHz) */}
      <rect x="200" y="12" width="46" height="24" rx="4" fill="#0F1E36" stroke="#38BDF8" strokeWidth="1.4" />
      <text x="204" y="27" fill="#F8FAFC" fontSize="8" fontFamily="monospace" fontWeight="bold">24.00MHz</text>
      <path d="M200 24 L180 24" stroke="#38BDF8" strokeWidth="1.2" />
      <path d="M246 24 L270 24" stroke="#38BDF8" strokeWidth="1.2" />

      {/* Resistor Divider Network */}
      <path d="M125 14 L125 24 L129 27 L121 32 L129 37 L121 42 L125 45 L125 56" stroke="#F59E0B" strokeWidth="1.4" />
      <text x="133" y="36" fill="#FCD34D" fontSize="7" fontFamily="monospace">R1 10kΩ</text>
    </g>

    {/* Center MCU Core Block */}
    <g transform="translate(65, 76)">
      <rect x="0" y="0" width="210" height="136" rx="8" fill="#0C1B33" stroke="#2563EB" strokeWidth="1.8" />
      <rect x="10" y="10" width="190" height="116" rx="4" fill="#081326" stroke="#1D4ED8" strokeWidth="0.8" />
      <text x="45" y="45" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="bold">U1: STM32H753</text>
      <text x="32" y="62" fill="#38BDF8" fontSize="8.5" fontFamily="monospace">480MHz ARM CORTEX-M7</text>
      <text x="40" y="80" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">INTERNAL 2MB DUAL FLASH</text>
      
      {/* Pin Lines & Net Names */}
      <g stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round">
        {/* Left pins */}
        <line x1="-20" y1="30" x2="0" y2="30" />
        <text x="-62" y="33" fill="#60A5FA" fontSize="7.5" fontFamily="monospace">I2C1_SDA</text>
        <line x1="-20" y1="50" x2="0" y2="50" />
        <text x="-62" y="53" fill="#60A5FA" fontSize="7.5" fontFamily="monospace">I2C1_SCL</text>
        <line x1="-20" y1="70" x2="0" y2="70" />
        <text x="-62" y="73" fill="#34D399" fontSize="7.5" fontFamily="monospace">SPI_MOSI</text>
        <line x1="-20" y1="90" x2="0" y2="90" />
        <text x="-62" y="93" fill="#F87171" fontSize="7.5" fontFamily="monospace">SYS_NRST</text>

        {/* Right pins */}
        <line x1="210" y1="30" x2="230" y2="30" />
        <text x="235" y="33" fill="#FCD34D" fontSize="7.5" fontFamily="monospace">UART1_TX</text>
        <line x1="210" y1="55" x2="230" y2="55" />
        <text x="235" y="58" fill="#FCD34D" fontSize="7.5" fontFamily="monospace">UART1_RX</text>
        <line x1="210" y1="80" x2="230" y2="80" />
        <text x="235" y="83" fill="#A78BFA" fontSize="7.5" fontFamily="monospace">SWDIO</text>
        <line x1="210" y1="105" x2="230" y2="105" />
        <text x="235" y="108" fill="#A78BFA" fontSize="7.5" fontFamily="monospace">SWCLK</text>
      </g>
    </g>

    {/* Schematic Title Block */}
    <g transform="translate(170, 226)">
      <rect x="0" y="0" width="160" height="38" rx="4" fill="#0C1B33" stroke="#1E3A8A" strokeWidth="1" />
      <text x="10" y="15" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">DWG: PIW-SCH-V2.4</text>
      <text x="10" y="27" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">SHEET 01/18 &bull; IPC CLASS 3</text>
    </g>
  </svg>
);

export const PcbTracesArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Dark Emerald Solder Mask Background */}
    <rect width="340" height="272" fill="#02281D" />
    
    {/* Copper Ground Mesh */}
    <defs>
      <pattern id="pcb-mesh" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="0.8" fill="#055B42" />
      </pattern>
      <linearGradient id="gold-trace" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    <rect width="340" height="272" fill="url(#pcb-mesh)" />

    {/* Top Tab Area: High-Speed Differential Serpentine Tuning (Crisp & visible at rest!) */}
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* Differential Pair Trace 1 (Gold ENIG) */}
      <path
        d="M16 22 L55 22 L55 34 L68 34 L68 22 L81 22 L81 34 L94 34 L94 22 L130 22 L150 40 L210 40 L225 24 L320 24"
        stroke="url(#gold-trace)"
        strokeWidth="2.2"
      />
      {/* Differential Pair Companion Trace 2 */}
      <path
        d="M16 27 L50 27 L50 39 L73 39 L73 27 L76 27 L76 39 L99 39 L99 27 L126 27 L146 45 L206 45 L221 29 L320 29"
        stroke="url(#gold-trace)"
        strokeWidth="2.2"
      />
      <text x="20" y="14" fill="#FCD34D" fontSize="8" fontFamily="monospace" fontWeight="bold">DIFF_PAIR: 90Ω USB3.2 / PCIE</text>
    </g>

    {/* Annular Ring Vias (Plated Through-Hole & Micro-Vias) */}
    {[
      [55, 22], [94, 22], [150, 40], [210, 40], [225, 24],
      [50, 95], [170, 95], [290, 95], [50, 160], [290, 160]
    ].map(([vx, vy], i) => (
      <g key={i}>
        <circle cx={vx} cy={vy} r="5" fill="#D97706" stroke="#FDE68A" strokeWidth="1" />
        <circle cx={vx} cy={vy} r="2" fill="#02281D" />
      </g>
    ))}

    {/* Center BGA-144 Footprint & Escape Breakout */}
    <g transform="translate(95, 75)">
      {/* BGA IC Outline */}
      <rect x="0" y="0" width="150" height="135" rx="6" fill="#033B2B" stroke="#059669" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#EF4444" /> {/* Pin 1 dot */}
      <text x="35" y="65" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="bold">BGA-144 ESCAPE</text>
      <text x="38" y="80" fill="#34D399" fontSize="8" fontFamily="monospace">0.8mm ULTRA-FINE PITCH</text>

      {/* 45-degree angle escape traces */}
      <g stroke="url(#gold-trace)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M0 30 L-25 15 L-55 15" />
        <path d="M0 60 L-35 60 L-55 80" />
        <path d="M0 90 L-25 110 L-55 110" />
        <path d="M150 30 L175 15 L205 15" />
        <path d="M150 60 L185 60 L205 80" />
        <path d="M150 90 L175 110 L205 110" />
      </g>
    </g>

    {/* Stackup Specification Stamp */}
    <g transform="translate(18, 225)">
      <rect x="0" y="0" width="170" height="36" rx="4" fill="#033B2B" stroke="#059669" strokeWidth="1" />
      <text x="10" y="15" fill="#FCD34D" fontSize="7.5" fontFamily="monospace" fontWeight="bold">16-LAYER HDI &bull; ROGERS/FR4</text>
      <text x="10" y="27" fill="#A7F3D0" fontSize="6.5" fontFamily="monospace">MICRO-VIA 1-2 &bull; CONTROLLED ZO 50Ω</text>
    </g>
  </svg>
);

export const FirmwareSignalArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Dark Digital Phosphor HUD Background */}
    <rect width="340" height="272" fill="#080E18" />

    {/* Scope Graticule Grid */}
    <defs>
      <pattern id="firmware-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#132338" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#firmware-grid)" />

    {/* Center Division Dotted Crosshairs */}
    <line x1="170" y1="0" x2="170" y2="272" stroke="#1E3A5F" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="0" y1="136" x2="340" y2="136" stroke="#1E3A5F" strokeWidth="1" strokeDasharray="3 3" />

    {/* Top Tab Area: Electric Cyan Clock Pulse Waveform (Crisp & visible at rest!) */}
    <g strokeLinecap="square">
      {/* Channel 1: High-Speed System Clock (Cyan 80MHz) */}
      <path
        d="M15 44 L32 44 L32 20 L50 20 L50 44 L68 44 L68 20 L86 20 L86 44 L104 44 L104 20 L122 20 L122 44 L140 44 L140 20 L158 20 L158 44 L176 44 L176 20 L194 20 L194 44 L212 44 L212 20 L230 20 L230 44 L248 44 L248 20 L266 20 L266 44 L284 44 L284 20 L302 20 L302 44 L325 44"
        stroke="#06B6D4"
        strokeWidth="2.2"
      />
      <text x="18" y="15" fill="#22D3EE" fontSize="8" fontFamily="monospace" fontWeight="bold">CH1: SYS_CLK [80.00 MHz]</text>
    </g>

    {/* Channel 2: Serial SPI MOSI Waveform (Neon Emerald) */}
    <g strokeLinecap="square">
      <path
        d="M15 88 L45 88 L45 68 L85 68 L85 88 L125 88 L125 68 L145 68 L145 88 L185 88 L185 68 L235 68 L235 88 L275 88 L275 68 L325 68"
        stroke="#10B981"
        strokeWidth="2"
      />
      <text x="18" y="62" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">CH2: SPI_MOSI (0xA5 0x3F 0xC0)</text>
    </g>

    {/* RTOS Task Scheduler Gantt View & Hex Inspector */}
    <g transform="translate(20, 115)">
      <rect x="0" y="0" width="300" height="96" rx="6" fill="#0C1829" stroke="#1E3A5F" strokeWidth="1.2" />
      <rect x="0" y="0" width="300" height="22" rx="6" fill="#11223A" />
      <text x="10" y="15" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">
        FREERTOS v10.5 &bull; DETERMINISTIC PREEMPTION CORE 0
      </text>

      {/* Task Gantt Lanes */}
      <g transform="translate(10, 30)">
        <text x="0" y="14" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">TASK_RADIO :</text>
        <rect x="75" y="5" width="60" height="12" rx="2" fill="#0284C7" />
        <rect x="185" y="5" width="45" height="12" rx="2" fill="#0284C7" />
        
        <text x="0" y="32" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">TASK_SENS  :</text>
        <rect x="140" y="23" width="40" height="12" rx="2" fill="#059669" />
        <rect x="235" y="23" width="40" height="12" rx="2" fill="#059669" />

        <text x="0" y="50" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">STACK_HIGH :</text>
        <text x="75" y="50" fill="#34D399" fontSize="7.5" fontFamily="monospace">1,480 BYTES SAFE (0 OVERFLOWS)</text>
      </g>
    </g>

    {/* Waveform Measurement Stamp */}
    <g transform="translate(190, 222)">
      <rect x="0" y="0" width="135" height="38" rx="4" fill="#0C1829" stroke="#1E3A5F" strokeWidth="1" />
      <text x="8" y="15" fill="#22D3EE" fontSize="7.5" fontFamily="monospace" fontWeight="bold">RISE TIME: 1.15 ns</text>
      <text x="8" y="27" fill="#34D399" fontSize="7" fontFamily="monospace">SLEEP: 840 nA STANDBY</text>
    </g>
  </svg>
);

export const FpgaLogicArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Deep Silicon Indigo/Violet Background */}
    <rect width="340" height="272" fill="#100C1F" />

    {/* Silicon Logic Grid */}
    <defs>
      <pattern id="fpga-matrix" width="24" height="24" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="24" height="24" fill="none" stroke="#251B42" strokeWidth="0.8" />
        <circle cx="12" cy="12" r="1.2" fill="#3B2D6B" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#fpga-matrix)" />

    {/* Top Tab Area: Glowing Logic Gates & Register (Crisp & visible at rest!) */}
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* AND Gate (LUT_AND2) */}
      <path d="M30 18 L50 18 C60 18 66 23 66 28 C66 33 60 38 50 38 L30 38 Z" fill="#1E1438" stroke="#818CF8" strokeWidth="1.6" />
      <line x1="16" y1="23" x2="30" y2="23" stroke="#818CF8" strokeWidth="1.4" />
      <line x1="16" y1="33" x2="30" y2="33" stroke="#818CF8" strokeWidth="1.4" />
      <line x1="66" y1="28" x2="85" y2="28" stroke="#818CF8" strokeWidth="1.4" />
      <text x="32" y="14" fill="#A5B4FC" fontSize="7.5" fontFamily="monospace" fontWeight="bold">LUT_AND2</text>

      {/* D-Flip-Flop Register */}
      <rect x="115" y="14" width="46" height="40" rx="3" fill="#1E1438" stroke="#A78BFA" strokeWidth="1.6" />
      <path d="M115 31 L121 34 L115 37" fill="none" stroke="#A78BFA" strokeWidth="1.2" /> {/* Clock triangle */}
      <text x="120" y="25" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">D</text>
      <text x="145" y="25" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">Q</text>
      <text x="120" y="48" fill="#C4B5FD" fontSize="6.5" fontFamily="monospace">D-FF</text>
      <line x1="95" y1="23" x2="115" y2="23" stroke="#A78BFA" strokeWidth="1.4" />
      <line x1="161" y1="23" x2="185" y2="23" stroke="#A78BFA" strokeWidth="1.4" />

      {/* XOR Gate (LUT_XOR) */}
      <path d="M210 18 C216 24 216 32 210 38 M214 18 C220 24 220 32 214 38 L226 38 C236 38 244 33 246 28 C244 23 236 18 226 18 Z" fill="#1E1438" stroke="#F59E0B" strokeWidth="1.6" />
      <line x1="195" y1="23" x2="212" y2="23" stroke="#F59E0B" strokeWidth="1.4" />
      <line x1="195" y1="33" x2="212" y2="33" stroke="#F59E0B" strokeWidth="1.4" />
      <line x1="246" y1="28" x2="275" y2="28" stroke="#F59E0B" strokeWidth="1.4" />
      <text x="216" y="14" fill="#FCD34D" fontSize="7.5" fontFamily="monospace" fontWeight="bold">XOR_FAST</text>
    </g>

    {/* Center FPGA Silicon Block Architecture */}
    <g transform="translate(35, 76)">
      <rect x="0" y="0" width="270" height="126" rx="6" fill="#17102D" stroke="#6366F1" strokeWidth="1.6" />
      
      {/* AXI4 Bus Crossbar */}
      <rect x="10" y="10" width="75" height="106" rx="4" fill="#201540" stroke="#818CF8" strokeWidth="1" />
      <text x="18" y="32" fill="#A5B4FC" fontSize="8.5" fontFamily="monospace" fontWeight="bold">AXI4 BUS</text>
      <text x="18" y="48" fill="#C4B5FD" fontSize="7" fontFamily="monospace">CROSSBAR</text>
      <text x="18" y="64" fill="#C4B5FD" fontSize="7" fontFamily="monospace">DMA STREAM</text>
      <text x="18" y="80" fill="#34D399" fontSize="7" fontFamily="monospace">64-BIT / 200M</text>

      {/* DSP48E2 MAC Engine */}
      <rect x="95" y="10" width="165" height="50" rx="4" fill="#201540" stroke="#F59E0B" strokeWidth="1" />
      <text x="105" y="30" fill="#FCD34D" fontSize="8.5" fontFamily="monospace" fontWeight="bold">DSP48E2 MAC ACCELERATOR</text>
      <text x="105" y="45" fill="#34D399" fontSize="7.5" fontFamily="monospace">250 MSPS REAL-TIME FIR FILTER</text>

      {/* High-Speed Transceivers */}
      <rect x="95" y="66" width="165" height="50" rx="4" fill="#201540" stroke="#EC4899" strokeWidth="1" />
      <text x="105" y="86" fill="#F472B6" fontSize="8.5" fontFamily="monospace" fontWeight="bold">GIGABIT TRANSCEIVER PHY</text>
      <text x="105" y="101" fill="#A5B4FC" fontSize="7.5" fontFamily="monospace">PCIe GEN2 x4 &bull; SFP+ 10Gbps</text>
    </g>

    {/* Timing Closure Badge */}
    <g transform="translate(185, 222)">
      <rect x="0" y="0" width="140" height="38" rx="4" fill="#17102D" stroke="#059669" strokeWidth="1" />
      <text x="8" y="15" fill="#34D399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">TIMING: ZERO VIOLATIONS</text>
      <text x="8" y="27" fill="#A7F3D0" fontSize="6.5" fontFamily="monospace">WNS: +0.482 ns &bull; TNS: 0.00 ns</text>
    </g>
  </svg>
);

export const MechanicalCadArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Precision CAD Drafting Charcoal Background */}
    <rect width="340" height="272" fill="#0E1726" />

    {/* Isometric Drafting Grid */}
    <defs>
      <pattern id="cad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1D2E45" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#cad-grid)" />

    {/* Top Tab Area: Dimension Extension Lines & Screw Boss (Crisp & visible at rest!) */}
    <g strokeLinecap="round">
      {/* Dimension Line with Double Arrows */}
      <line x1="28" y1="22" x2="162" y2="22" stroke="#38BDF8" strokeWidth="1.4" />
      <polygon points="28,19 20,22 28,25" fill="#38BDF8" />
      <polygon points="162,19 170,22 162,25" fill="#38BDF8" />
      <line x1="20" y1="14" x2="20" y2="30" stroke="#64748B" strokeWidth="1" />
      <line x1="170" y1="14" x2="170" y2="30" stroke="#64748B" strokeWidth="1" />
      <text x="68" y="16" fill="#F8FAFC" fontSize="8.5" fontFamily="monospace" fontWeight="bold">142.50 mm</text>

      {/* Brass Threaded Screw Boss Detail */}
      <circle cx="230" cy="26" r="14" fill="#16273E" stroke="#F59E0B" strokeWidth="1.4" />
      <circle cx="230" cy="26" r="8" fill="#0E1726" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="230" cy="26" r="3" fill="#FCD34D" />
      <line x1="210" y1="26" x2="250" y2="26" stroke="#475569" strokeWidth="0.8" strokeDasharray="2 2" />
      <line x1="230" y1="6" x2="230" y2="46" stroke="#475569" strokeWidth="0.8" strokeDasharray="2 2" />
      <text x="250" y="22" fill="#FCD34D" fontSize="7" fontFamily="monospace">M3x0.5 THREAD</text>
    </g>

    {/* Center 3D Isometric Enclosure Assembly */}
    <g transform="translate(70, 75)" stroke="#38BDF8" strokeWidth="1.6" strokeLinejoin="round" fill="none">
      {/* Top Enclosure Lid Wireframe */}
      <polygon points="100,10 180,45 100,80 20,45" fill="#132338" fillOpacity="0.8" stroke="#60A5FA" />
      <polygon points="20,45 100,80 100,110 20,75" fill="#0C1B2E" stroke="#38BDF8" />
      <polygon points="100,80 180,45 180,75 100,110" fill="#091524" stroke="#2563EB" />

      {/* IP67 Waterproof Silicone Gasket Ribbon (Vibrant Emerald) */}
      <path d="M28 47 L100 78 L172 47" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 2" />
      <text x="95" y="65" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">IP67 SILICONE GASKET</text>

      {/* Internal Ribs & Heat Dissipation Fins */}
      <g stroke="#64748B" strokeWidth="1">
        <line x1="35" y1="58" x2="55" y2="75" />
        <line x1="55" y1="58" x2="75" y2="75" />
        <line x1="75" y1="58" x2="95" y2="75" />
      </g>
    </g>

    {/* CAD Engineering Specs Stamp */}
    <g transform="translate(175, 222)">
      <rect x="0" y="0" width="150" height="38" rx="4" fill="#16273E" stroke="#2563EB" strokeWidth="1" />
      <text x="10" y="15" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">SOLIDWORKS 2026 CAD</text>
      <text x="10" y="27" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">LEXAN PC/ABS &bull; DRAFT 1.5°</text>
    </g>
  </svg>
);

export const ManufacturingSmtArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Industrial SMT Slate Background */}
    <rect width="340" height="272" fill="#0A121E" />

    {/* Panel Border Rails */}
    <rect x="12" y="12" width="316" height="248" rx="6" fill="none" stroke="#263852" strokeWidth="1.4" strokeDasharray="6 3" />

    {/* Top Tab Area: Optical Inspection Fiducials & Test Points (Crisp & visible at rest!) */}
    <g strokeWidth="1.2">
      {/* Corner Optical Fiducial 1 */}
      <circle cx="28" cy="28" r="8" fill="#14243B" stroke="#F59E0B" strokeWidth="1.4" />
      <circle cx="28" cy="28" r="3" fill="#EF4444" />
      <text x="42" y="31" fill="#F8FAFC" fontSize="7.5" fontFamily="monospace" fontWeight="bold">FID_1 (OPTICAL)</text>

      {/* Break-away Mouse Bites (Perforated Tabs) */}
      <g fill="#64748B">
        <circle cx="118" cy="12" r="1.8" />
        <circle cx="125" cy="12" r="1.8" />
        <circle cx="132" cy="12" r="1.8" />
        <circle cx="139" cy="12" r="1.8" />
      </g>

      {/* Bed-of-Nails Gold Test Points */}
      <g transform="translate(180, 18)">
        <circle cx="12" cy="10" r="4.5" fill="#F59E0B" stroke="#FDE68A" strokeWidth="1" />
        <text x="20" y="13" fill="#FCD34D" fontSize="7" fontFamily="monospace">TP_VBAT</text>
        <circle cx="70" cy="10" r="4.5" fill="#F59E0B" stroke="#FDE68A" strokeWidth="1" />
        <text x="78" y="13" fill="#FCD34D" fontSize="7" fontFamily="monospace">TP_SWDIO</text>
      </g>
    </g>

    {/* Center SMT 2x2 Panel Matrix & AOI Passes */}
    <g transform="translate(35, 74)">
      {/* Board 1 in Panel */}
      <rect x="0" y="0" width="128" height="114" rx="4" fill="#122035" stroke="#334D6E" strokeWidth="1.4" />
      <rect x="15" y="15" width="42" height="42" rx="3" fill="#0C1626" stroke="#2563EB" strokeWidth="1" />
      <circle cx="22" cy="22" r="2" fill="#EF4444" />
      <text x="65" y="32" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="bold">BOARD_01</text>
      <text x="65" y="47" fill="#34D399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">✓ AOI PASS</text>

      {/* Board 2 in Panel */}
      <rect x="142" y="0" width="128" height="114" rx="4" fill="#122035" stroke="#334D6E" strokeWidth="1.4" />
      <rect x="157" y="15" width="42" height="42" rx="3" fill="#0C1626" stroke="#2563EB" strokeWidth="1" />
      <circle cx="164" cy="22" r="2" fill="#EF4444" />
      <text x="207" y="32" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="bold">BOARD_02</text>
      <text x="207" y="47" fill="#34D399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">✓ AOI PASS</text>
    </g>

    {/* Production QC Barcode & Verified Stamp */}
    <g transform="translate(160, 218)">
      <rect x="0" y="0" width="165" height="40" rx="4" fill="#122035" stroke="#059669" strokeWidth="1.2" />
      {/* Mini Barcode Lines */}
      <g stroke="#FFFFFF" strokeWidth="1.5">
        <line x1="10" y1="8" x2="10" y2="24" />
        <line x1="13" y1="8" x2="13" y2="24" strokeWidth="0.8" />
        <line x1="16" y1="8" x2="16" y2="24" strokeWidth="2.2" />
        <line x1="20" y1="8" x2="20" y2="24" />
        <line x1="25" y1="8" x2="25" y2="24" strokeWidth="1.8" />
        <line x1="29" y1="8" x2="29" y2="24" strokeWidth="0.8" />
        <line x1="33" y1="8" x2="33" y2="24" strokeWidth="2.4" />
      </g>
      <text x="42" y="16" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">QC: 100% TESTED</text>
      <text x="42" y="28" fill="#A7F3D0" fontSize="6.5" fontFamily="monospace">BED-OF-NAILS FCT &bull; IPC CLASS 3</text>
    </g>
  </svg>
);

export const RfAntennaArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blueprint RF Deep Navy Background */}
    <rect width="340" height="272" fill="#0A1324" />
    <defs>
      <pattern id="rf-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#162947" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#rf-grid)" />

    {/* Top Tab Area Engineering Features */}
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* 50 Ohm Microstrip Feedline */}
      <path d="M16 26 L80 26" stroke="#38BDF8" strokeWidth="2.4" />
      <text x="18" y="19" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">50Ω_RF_FEED</text>
      {/* Impedance Matching Pi-Network */}
      <circle cx="80" cy="26" r="3.5" fill="#38BDF8" />
      <path d="M80 26 L120 26" stroke="#F59E0B" strokeWidth="1.8" />
      <text x="86" y="19" fill="#FCD34D" fontSize="7" fontFamily="monospace">L1 2.2nH</text>
      <path d="M100 26 L100 40" stroke="#38BDF8" strokeWidth="1.2" />
      <line x1="94" y1="40" x2="106" y2="40" stroke="#38BDF8" strokeWidth="1.5" />
      <line x1="94" y1="43" x2="106" y2="43" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M100 43 L100 52" stroke="#94A3B8" strokeWidth="1" />
      <line x1="96" y1="52" x2="104" y2="52" stroke="#94A3B8" strokeWidth="1" />
      <text x="110" y="44" fill="#93C5FD" fontSize="6.5" fontFamily="monospace">C1 0.8pF</text>
      <path d="M120 26 L160 26" stroke="#38BDF8" strokeWidth="2.4" />

      {/* Frequency & Bandwidth Pill */}
      <rect x="200" y="14" width="76" height="22" rx="4" fill="#0C1B33" stroke="#38BDF8" strokeWidth="1.2" />
      <text x="206" y="29" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">2.44 & 5.8 GHz</text>
    </g>

    {/* Center Smith Chart & Polar Radiation Pattern Visualization */}
    <g transform="translate(60, 68)">
      {/* Smith Chart Outer Boundary Circle */}
      <circle cx="110" cy="80" r="66" fill="#0B1A30" stroke="#1E3A8A" strokeWidth="1.6" />
      {/* Horizontal Axis */}
      <line x1="44" y1="80" x2="176" y2="80" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
      {/* Resistance Circles */}
      <circle cx="125" cy="80" r="51" fill="none" stroke="#2563EB" strokeWidth="0.8" opacity="0.6" />
      <circle cx="143" cy="80" r="33" fill="none" stroke="#2563EB" strokeWidth="0.8" opacity="0.6" />
      <circle cx="160" cy="80" r="16" fill="none" stroke="#38BDF8" strokeWidth="0.9" opacity="0.8" />
      {/* Reactance Arcs */}
      <path d="M176 80 A 66 66 0 0 0 110 14" fill="none" stroke="#60A5FA" strokeWidth="0.8" opacity="0.5" />
      <path d="M176 80 A 66 66 0 0 1 110 146" fill="none" stroke="#60A5FA" strokeWidth="0.8" opacity="0.5" />
      
      {/* Tuned Match Marker (Center 50Ω Prime Point) */}
      <circle cx="110" cy="80" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
      <text x="118" y="76" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">Z0 = 50.2 + j0.4 Ω</text>
      <text x="118" y="87" fill="#94A3B8" fontSize="7" fontFamily="monospace">VSWR: 1.08:1</text>

      {/* S11 Return Loss Waveform Plot (Bottom left of block) */}
      <path d="M-20 120 L20 120 L40 142 L55 124 L80 124" fill="none" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" />
      <text x="-20" y="114" fill="#FCD34D" fontSize="7" fontFamily="monospace">S11: -28.4 dB @ 2.44GHz</text>
    </g>

    {/* Title Block */}
    <g transform="translate(170, 226)">
      <rect x="0" y="0" width="160" height="38" rx="4" fill="#0C1B33" stroke="#1E3A8A" strokeWidth="1" />
      <text x="10" y="15" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">RF LAB: ANECHOIC CHAMBER</text>
      <text x="10" y="27" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">50Ω MATCH &bull; DUAL-BAND PASS</text>
    </g>
  </svg>
);

export const RoboticsArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blueprint Deep Navy Background */}
    <rect width="340" height="272" fill="#0B1322" />
    <defs>
      <pattern id="robot-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#182A45" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#robot-grid)" />

    {/* Top Tab Area Engineering Features */}
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* 3-Phase FOC Drive Header */}
      <path d="M16 26 L56 26" stroke="#38BDF8" strokeWidth="2" />
      <text x="18" y="19" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">FOC_PWM_3PHASE</text>
      <path d="M64 26 L100 26" stroke="#F59E0B" strokeWidth="2" />
      <text x="66" y="19" fill="#FCD34D" fontSize="8" fontFamily="monospace" fontWeight="bold">U/V/W</text>
      
      {/* Encoder Telemetry Pill */}
      <rect x="180" y="14" width="94" height="22" rx="4" fill="#0D1E38" stroke="#34D399" strokeWidth="1.2" />
      <text x="188" y="29" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">ENCODER: 4096 CPR</text>
    </g>

    {/* Center 6-DOF Kinematic Robot Arm & Motor Control Schematic */}
    <g transform="translate(40, 60)">
      {/* Kinematic Arm Base & Joints */}
      <rect x="20" y="110" width="48" height="16" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="44" cy="110" r="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.8" />
      <text x="38" y="114" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">J1</text>
      
      {/* Link 1 */}
      <line x1="44" y1="102" x2="90" y2="40" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
      <circle cx="90" cy="40" r="7" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.8" />
      <text x="85" y="44" fill="#FCD34D" fontSize="8" fontFamily="monospace" fontWeight="bold">J2</text>

      {/* Link 2 */}
      <line x1="90" y1="40" x2="160" y2="60" stroke="#38BDF8" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="160" cy="60" r="6" fill="#0F172A" stroke="#10B981" strokeWidth="1.8" />
      <text x="156" y="64" fill="#34D399" fontSize="7" fontFamily="monospace" fontWeight="bold">J3</text>

      {/* End Effector Vector */}
      <line x1="160" y1="60" x2="195" y2="50" stroke="#A855F7" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="195" cy="50" r="3.5" fill="#A855F7" />
      <text x="175" y="42" fill="#C084FC" fontSize="7.5" fontFamily="monospace">TCP [X,Y,Z]</text>

      {/* 3-Phase Inverter Bridge Signals (Right side) */}
      <g transform="translate(140, 80)">
        <rect x="0" y="0" width="110" height="52" rx="4" fill="#0A182E" stroke="#1E3A8A" strokeWidth="1.2" />
        <text x="8" y="14" fill="#38BDF8" fontSize="7" fontFamily="monospace" fontWeight="bold">BLDC GATE DRIVE (40kHz)</text>
        <path d="M10 26 L22 26 L22 36 L34 36 L34 26 L46 26" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
        <text x="52" y="33" fill="#60A5FA" fontSize="7" fontFamily="monospace">PHASE U</text>
        <path d="M10 44 L16 44 L16 38 L28 38 L28 44 L40 44" fill="none" stroke="#F59E0B" strokeWidth="1.2" />
        <text x="52" y="44" fill="#FCD34D" fontSize="7" fontFamily="monospace">PHASE V</text>
      </g>
    </g>

    {/* Title Block */}
    <g transform="translate(170, 226)">
      <rect x="0" y="0" width="160" height="38" rx="4" fill="#0C1B33" stroke="#1E3A8A" strokeWidth="1" />
      <text x="10" y="15" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">DWG: ROBOT-FOC-V3.1</text>
      <text x="10" y="27" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">KALMAN FILTER &bull; 6-DOF FOC</text>
    </g>
  </svg>
);

export const AutomationArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blueprint Deep Navy Background */}
    <rect width="340" height="272" fill="#081426" />
    <defs>
      <pattern id="auto-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#142642" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#auto-grid)" />

    {/* Top Tab Area Engineering Features */}
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* 24VDC Industrial Bus Rail */}
      <path d="M16 26 L80 26" stroke="#EF4444" strokeWidth="2.2" />
      <text x="18" y="19" fill="#F87171" fontSize="8" fontFamily="monospace" fontWeight="bold">+24VDC_IND</text>
      <path d="M90 26 L150 26" stroke="#38BDF8" strokeWidth="1.8" />
      <text x="92" y="19" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">MODBUS_RS485</text>
      
      {/* SCADA Telemetry Pill */}
      <rect x="180" y="14" width="94" height="22" rx="4" fill="#0B1D36" stroke="#10B981" strokeWidth="1.2" />
      <text x="188" y="29" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">IIoT: CANopen &bull; 1Mb/s</text>
    </g>

    {/* Center PLC Ladder Logic & Industrial Control Schematic */}
    <g transform="translate(45, 66)">
      {/* Power Rail Left & Right */}
      <line x1="0" y1="0" x2="0" y2="140" stroke="#EF4444" strokeWidth="2.2" />
      <line x1="250" y1="0" x2="250" y2="140" stroke="#38BDF8" strokeWidth="2.2" />

      {/* Rung 001: Start/Stop Motor Latch */}
      <g transform="translate(0, 24)">
        <line x1="0" y1="0" x2="30" y2="0" stroke="#94A3B8" strokeWidth="1.4" />
        {/* Normally Open Contact (PB_START) */}
        <line x1="30" y1="-8" x2="30" y2="8" stroke="#38BDF8" strokeWidth="1.6" />
        <line x1="40" y1="-8" x2="40" y2="8" stroke="#38BDF8" strokeWidth="1.6" />
        <text x="24" y="-12" fill="#38BDF8" fontSize="7" fontFamily="monospace">PB_START</text>
        <line x1="40" y1="0" x2="90" y2="0" stroke="#94A3B8" strokeWidth="1.4" />
        
        {/* Normally Closed Contact (ESTOP) */}
        <line x1="90" y1="-8" x2="90" y2="8" stroke="#EF4444" strokeWidth="1.6" />
        <line x1="100" y1="-8" x2="100" y2="8" stroke="#EF4444" strokeWidth="1.6" />
        <line x1="88" y1="8" x2="102" y2="-8" stroke="#EF4444" strokeWidth="1.4" />
        <text x="86" y="-12" fill="#F87171" fontSize="7" fontFamily="monospace">E_STOP</text>
        <line x1="100" y1="0" x2="180" y2="0" stroke="#94A3B8" strokeWidth="1.4" />

        {/* Output Coil (M1_CONTACTOR) */}
        <path d="M180 -8 A 8 8 0 0 1 180 8" fill="none" stroke="#10B981" strokeWidth="1.8" />
        <path d="M194 -8 A 8 8 0 0 0 194 8" fill="none" stroke="#10B981" strokeWidth="1.8" />
        <text x="174" y="-12" fill="#34D399" fontSize="7" fontFamily="monospace">M1_RUN</text>
        <line x1="194" y1="0" x2="250" y2="0" stroke="#94A3B8" strokeWidth="1.4" />
      </g>

      {/* Rung 002: 4-20mA Sensor & VFD Analog Loop */}
      <g transform="translate(0, 80)">
        <line x1="0" y1="0" x2="40" y2="0" stroke="#94A3B8" strokeWidth="1.4" />
        <rect x="40" y="-14" width="70" height="28" rx="3" fill="#0C1B33" stroke="#F59E0B" strokeWidth="1.2" />
        <text x="46" y="-1" fill="#FCD34D" fontSize="7" fontFamily="monospace">4-20mA ADC</text>
        <text x="46" y="9" fill="#94A3B8" fontSize="6" fontFamily="monospace">PRESSURE SENSOR</text>
        <line x1="110" y1="0" x2="150" y2="0" stroke="#94A3B8" strokeWidth="1.4" />
        
        {/* VFD Modbus RS485 Block */}
        <rect x="150" y="-14" width="65" height="28" rx="3" fill="#0C1B33" stroke="#38BDF8" strokeWidth="1.2" />
        <text x="156" y="-1" fill="#38BDF8" fontSize="7" fontFamily="monospace">VFD DRIVE</text>
        <text x="156" y="9" fill="#93C5FD" fontSize="6" fontFamily="monospace">MODBUS RTU</text>
        <line x1="215" y1="0" x2="250" y2="0" stroke="#94A3B8" strokeWidth="1.4" />
      </g>
    </g>

    {/* Title Block */}
    <g transform="translate(170, 226)">
      <rect x="0" y="0" width="160" height="38" rx="4" fill="#0C1B33" stroke="#1E3A8A" strokeWidth="1" />
      <text x="10" y="15" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">DWG: IND-AUTO-V4.0</text>
      <text x="10" y="27" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">IEC 61131-3 &bull; PLC & SCADA</text>
    </g>
  </svg>
);

export const AgenticAiArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blueprint Dark Navy Background */}
    <rect width="340" height="272" fill="#081022" />
    <defs>
      <pattern id="agent-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#12223D" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#agent-grid)" />

    {/* Top Header Engineering Features */}
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 26 L80 26" stroke="#38BDF8" strokeWidth="2" />
      <text x="18" y="19" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">LANGGRAPH_STATE_V2</text>
      <path d="M90 26 L150 26" stroke="#818CF8" strokeWidth="1.8" />
      <text x="94" y="19" fill="#A5B4FC" fontSize="8" fontFamily="monospace" fontWeight="bold">CYCLIC_LOOP</text>

      {/* Execution Status Badge */}
      <rect x="180" y="14" width="104" height="22" rx="4" fill="#0B1A32" stroke="#34D399" strokeWidth="1.2" />
      <text x="186" y="29" fill="#34D399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">STATE: STEP 03/05 PASS</text>
    </g>

    {/* Center LangGraph Multi-Agent State Machine Architecture */}
    <g transform="translate(40, 60)">
      {/* Supervisor Agent Node (Center Top) */}
      <rect x="80" y="8" width="100" height="34" rx="6" fill="#0D1E38" stroke="#38BDF8" strokeWidth="1.6" />
      <circle cx="94" cy="25" r="4" fill="#38BDF8" />
      <text x="104" y="23" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">SUPERVISOR</text>
      <text x="104" y="33" fill="#93C5FD" fontSize="6.5" fontFamily="monospace">ROUTER &bull; STATE</text>

      {/* Directed Edge: Supervisor -> Researcher */}
      <path d="M90 42 L45 80" stroke="#38BDF8" strokeWidth="1.4" strokeDasharray="3 3" />
      <polygon points="43,82 50,78 47,85" fill="#38BDF8" />

      {/* Directed Edge: Supervisor -> Tool Runner */}
      <path d="M170 42 L215 80" stroke="#38BDF8" strokeWidth="1.4" strokeDasharray="3 3" />
      <polygon points="217,82 213,85 210,78" fill="#38BDF8" />

      {/* Researcher / RAG Agent Node (Bottom Left) */}
      <rect x="0" y="82" width="90" height="34" rx="6" fill="#0B1B30" stroke="#818CF8" strokeWidth="1.4" />
      <circle cx="14" cy="99" r="4" fill="#818CF8" />
      <text x="24" y="97" fill="#E0E7FF" fontSize="7.5" fontFamily="monospace" fontWeight="bold">RESEARCHER</text>
      <text x="24" y="107" fill="#A5B4FC" fontSize="6.5" fontFamily="monospace">RAG &bull; CONTEXT</text>

      {/* Tool Runner / Execution Node (Bottom Right) */}
      <rect x="170" y="82" width="90" height="34" rx="6" fill="#0B1B30" stroke="#F59E0B" strokeWidth="1.4" />
      <circle cx="184" cy="99" r="4" fill="#F59E0B" />
      <text x="194" y="97" fill="#FEF3C7" fontSize="7.5" fontFamily="monospace" fontWeight="bold">TOOL RUNNER</text>
      <text x="194" y="107" fill="#FCD34D" fontSize="6.5" fontFamily="monospace">CALL: EXECUTE</text>

      {/* Cyclic Feedback Edge: Tool Runner -> Supervisor */}
      <path d="M215 82 C 215 50, 190 25, 180 25" fill="none" stroke="#34D399" strokeWidth="1.4" />
      <polygon points="180,25 186,22 186,28" fill="#34D399" />

      {/* Function Calling JSON Payload Preview (Bottom Center) */}
      <rect x="50" y="124" width="160" height="26" rx="4" fill="#060D1A" stroke="#1E293B" strokeWidth="1" />
      <text x="58" y="137" fill="#38BDF8" fontSize="6.5" fontFamily="monospace">{`tools: ["fetch_metrics", "execute"]`}</text>
      <text x="58" y="145" fill="#94A3B8" fontSize="6" fontFamily="monospace">Structured Output &bull; Schema Validated</text>
    </g>

    {/* Title Block */}
    <g transform="translate(170, 226)">
      <rect x="0" y="0" width="160" height="38" rx="4" fill="#0C1B33" stroke="#1E3A8A" strokeWidth="1" />
      <text x="10" y="15" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">AI LAB: LANGGRAPH ENGINE</text>
      <text x="10" y="27" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">MULTI-AGENT &bull; SELF-HEALING</text>
    </g>
  </svg>
);

export const RagIntelligenceArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blueprint Dark Navy Background */}
    <rect width="340" height="272" fill="#081120" />
    <defs>
      <pattern id="rag-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#12233E" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#rag-grid)" />

    {/* Top Header Engineering Features */}
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 26 L80 26" stroke="#38BDF8" strokeWidth="2" />
      <text x="18" y="19" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">SUPABASE_PGVECTOR</text>
      <path d="M90 26 L150 26" stroke="#34D399" strokeWidth="1.8" />
      <text x="94" y="19" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">HNSW_COSINE</text>

      {/* Embedding Dimension Badge */}
      <rect x="180" y="14" width="104" height="22" rx="4" fill="#0B1A32" stroke="#818CF8" strokeWidth="1.2" />
      <text x="186" y="29" fill="#C7D2FE" fontSize="7.5" fontFamily="monospace" fontWeight="bold">EMBED: 3072-DIM</text>
    </g>

    {/* Center Ingestion Pipeline & Vector Scatter Plot */}
    <g transform="translate(40, 60)">
      {/* Step 1: Document Chunking */}
      <rect x="0" y="15" width="60" height="40" rx="4" fill="#0C1B33" stroke="#38BDF8" strokeWidth="1.2" />
      <text x="8" y="32" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace" fontWeight="bold">PyMuPDF</text>
      <text x="8" y="44" fill="#93C5FD" fontSize="6.5" fontFamily="monospace">PARSER</text>

      <path d="M60 35 L85 35" stroke="#38BDF8" strokeWidth="1.4" />
      <polygon points="85,35 80,32 80,38" fill="#38BDF8" />

      {/* Step 2: Vector Space Coordinates */}
      <g transform="translate(95, 0)">
        <rect x="0" y="0" width="120" height="74" rx="6" fill="#08152A" stroke="#1E3A8A" strokeWidth="1.2" />
        <circle cx="60" cy="37" r="28" fill="none" stroke="#2563EB" strokeWidth="0.8" strokeDasharray="2 2" />
        
        {/* Clustered Vector Points */}
        <circle cx="45" cy="28" r="3" fill="#38BDF8" />
        <circle cx="52" cy="24" r="2.5" fill="#38BDF8" />
        <circle cx="48" cy="35" r="3.5" fill="#34D399" />
        <circle cx="75" cy="48" r="2.5" fill="#F59E0B" />
        <circle cx="82" cy="42" r="3" fill="#F59E0B" />
        
        {/* Nearest Neighbor Match Vector */}
        <line x1="48" y1="35" x2="52" y2="24" stroke="#34D399" strokeWidth="1.4" />
        <text x="10" y="66" fill="#34D399" fontSize="6.5" fontFamily="monospace">COSINE SIM: 0.942</text>
      </g>

      <path d="M215 35 L240 35" stroke="#38BDF8" strokeWidth="1.4" />
      <polygon points="240,35 235,32 235,38" fill="#38BDF8" />

      {/* Step 3: Grounded Context LLM Prompt */}
      <g transform="translate(40, 88)">
        <rect x="0" y="0" width="180" height="42" rx="5" fill="#0A182E" stroke="#10B981" strokeWidth="1.2" />
        <text x="10" y="16" fill="#34D399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">GROUNDED CITATION RETRIEVAL</text>
        <text x="10" y="27" fill="#E2E8F0" fontSize="7" fontFamily="monospace">doc_id: 138-pg &bull; 275 chunks indexed</text>
        <text x="10" y="37" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">Zero Hallucination &bull; RLS Multi-Tenant</text>
      </g>
    </g>

    {/* Title Block */}
    <g transform="translate(170, 226)">
      <rect x="0" y="0" width="160" height="38" rx="4" fill="#0C1B33" stroke="#1E3A8A" strokeWidth="1" />
      <text x="10" y="15" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">RAG LAB: HYBRID RETRIEVAL</text>
      <text x="10" y="27" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">SUPABASE &bull; PGVECTOR HNSW</text>
    </g>
  </svg>
);

export const FullStackSaasArt = () => (
  <svg
    viewBox="0 0 340 272"
    className="gf-art w-full h-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blueprint Dark Navy Background */}
    <rect width="340" height="272" fill="#081224" />
    <defs>
      <pattern id="saas-grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#132442" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="340" height="272" fill="url(#saas-grid)" />

    {/* Top Header Engineering Features */}
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 26 L80 26" stroke="#38BDF8" strokeWidth="2" />
      <text x="18" y="19" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">NEXTJS_FASTAPI_APP</text>
      <path d="M90 26 L150 26" stroke="#10B981" strokeWidth="1.8" />
      <text x="94" y="19" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">POSTGRES_RLS</text>

      {/* Latency Telemetry Badge */}
      <rect x="180" y="14" width="104" height="22" rx="4" fill="#0B1A32" stroke="#38BDF8" strokeWidth="1.2" />
      <text x="186" y="29" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">API LATENCY: 18ms</text>
    </g>

    {/* Center 3-Tier Full-Stack Architecture */}
    <g transform="translate(40, 56)">
      {/* Tier 1: Frontend Client (Next.js / React) */}
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="260" height="30" rx="5" fill="#0C1B33" stroke="#38BDF8" strokeWidth="1.2" />
        <text x="12" y="19" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">TIER 1: NEXT.JS / REACT CLIENT</text>
        <text x="156" y="19" fill="#93C5FD" fontSize="7" fontFamily="monospace">TYPESCRIPT &bull; TAILWIND</text>
      </g>

      {/* Bus Connector 1 */}
      <line x1="130" y1="30" x2="130" y2="44" stroke="#38BDF8" strokeWidth="1.6" strokeDasharray="2 2" />
      <text x="136" y="40" fill="#60A5FA" fontSize="6.5" fontFamily="monospace">HTTPS / REST JSON</text>

      {/* Tier 2: Async Backend Router (FastAPI / Python) */}
      <g transform="translate(0, 44)">
        <rect x="0" y="0" width="260" height="34" rx="5" fill="#0A182E" stroke="#10B981" strokeWidth="1.2" />
        <text x="12" y="18" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">TIER 2: FASTAPI ASYNC BACKEND</text>
        <text x="12" y="28" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">PYDANTIC V2 &bull; JWT AUTH &bull; ASYNC WORKERS</text>
      </g>

      {/* Bus Connector 2 */}
      <line x1="130" y1="78" x2="130" y2="92" stroke="#10B981" strokeWidth="1.6" strokeDasharray="2 2" />
      <text x="136" y="88" fill="#34D399" fontSize="6.5" fontFamily="monospace">SQL POOL &bull; TLS</text>

      {/* Tier 3: Database & Security (PostgreSQL / Supabase RLS) */}
      <g transform="translate(0, 92)">
        <rect x="0" y="0" width="260" height="38" rx="5" fill="#081426" stroke="#818CF8" strokeWidth="1.2" />
        <text x="12" y="18" fill="#A5B4FC" fontSize="8" fontFamily="monospace" fontWeight="bold">TIER 3: POSTGRESQL & SUPABASE RLS</text>
        <text x="12" y="30" fill="#E2E8F0" fontSize="6.5" fontFamily="monospace">ROW LEVEL SECURITY &bull; N8N WORKFLOW AUTOMATION</text>
      </g>
    </g>

    {/* Title Block */}
    <g transform="translate(170, 226)">
      <rect x="0" y="0" width="160" height="38" rx="4" fill="#0C1B33" stroke="#1E3A8A" strokeWidth="1" />
      <text x="10" y="15" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="bold">SAAS LAB: FULL-STACK PROD</text>
      <text x="10" y="27" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">FASTAPI &bull; NEXTJS &bull; POSTGRES</text>
    </g>
  </svg>
);

export const ART_COMPONENTS = {
  schematic: SchematicArt,
  pcb: PcbTracesArt,
  rf: RfAntennaArt,
  firmware: FirmwareSignalArt,
  fpga: FpgaLogicArt,
  robotics: RoboticsArt,
  mechanical: MechanicalCadArt,
  automation: AutomationArt,
  agentic: AgenticAiArt,
  rag: RagIntelligenceArt,
  fullstack: FullStackSaasArt,
  manufacturing: ManufacturingSmtArt,
};

export const ENGINEERING_ARTS = {
  schematic: <SchematicArt />,
  pcb: <PcbTracesArt />,
  rf: <RfAntennaArt />,
  firmware: <FirmwareSignalArt />,
  fpga: <FpgaLogicArt />,
  robotics: <RoboticsArt />,
  mechanical: <MechanicalCadArt />,
  automation: <AutomationArt />,
  agentic: <AgenticAiArt />,
  rag: <RagIntelligenceArt />,
  fullstack: <FullStackSaasArt />,
  manufacturing: <ManufacturingSmtArt />,
};

// #endregion

const W = 340;
const H = 272;
const HEADROOM = 54;
const FRONT_TOP = 74;
const FRONT_H = H - FRONT_TOP;
const SHEET_W = 272;
const SHEET_H = 184;

const BACK_PATH =
  "M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z";
const FRONT_PATH =
  "M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 " +
  (FRONT_H - 22) +
  "A22 22 0 0 1 318 " +
  FRONT_H +
  "L22 " +
  FRONT_H +
  "A22 22 0 0 1 0 " +
  (FRONT_H - 22) +
  "Z";

const MAX_VISIBLE = 4;

export function fanSlot(index, count) {
  return count <= 1 ? 0 : (index / (count - 1)) * 2 - 1;
}

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export default function GlassFolder({
  label = "Engineering Dossier",
  meta,
  tone = "light",
  art = "schematic",
  image,
  files: initialFiles = [],
  action = "none",
  labelPlacement = "bottom-left",
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onFileSelect,
  width = 320,
  appear = true,
  appearDelay = 0,
  className = "",
  style,
}) {
  const uid = React.useId().replace(/:/g, "");
  const rootRef = React.useRef(null);
  const filesRef = React.useRef(null);
  const hitRef = React.useRef(null);

  const [files] = React.useState(initialFiles);
  const ids = React.useRef(initialFiles.map((_, i) => i));

  const [openState, setOpenState] = React.useState(defaultOpen);
  const open = openProp ?? openState;
  const setOpen = React.useCallback(
    (next) => {
      if (openProp === undefined) setOpenState(next);
      onOpenChange?.(next);
    },
    [openProp, onOpenChange]
  );

  const [entered, setEntered] = React.useState(!appear);

  const k = width / W;

  React.useEffect(() => {
    if (!appear) return;
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setEntered(true);
      return;
    }
    let t = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        t = window.setTimeout(() => setEntered(true), appearDelay);
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [appear, appearDelay]);

  // Pointer tracking for realistic specular light angle
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let raf = 0;
    let px = 0;
    let py = 0;
    const write = () => {
      raf = 0;
      el.style.setProperty("--gf-px", px.toFixed(3));
      el.style.setProperty("--gf-py", py.toFixed(3));
    };
    const move = (e) => {
      if (e.pointerType === "touch") return;
      const r = el.getBoundingClientRect();
      px = ((e.clientX - r.left) / r.width) * 2 - 1;
      py = ((e.clientY - r.top) / r.height) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(write);
    };
    const leave = () => {
      px = 0;
      py = 0;
      if (!raf) raf = requestAnimationFrame(write);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  React.useEffect(() => {
    filesRef.current?.toggleAttribute("inert", !open);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        hitRef.current?.focus();
      }
    };
    const onDown = (e) => {
      if (open && !rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open, setOpen]);

  const start = Math.max(0, files.length - MAX_VISIBLE);
  const visible = files.slice(start);
  const count = files.length;
  const metaLine = meta ?? count + (count === 1 ? " deliverable" : " deliverables");

  // Determine back artwork: custom engineering SVG or image
  const renderBackArt = () => {
    if (image) {
      return <img className="gf-art" src={image} alt="" width={W + 24} height={H + 24} draggable={false} />;
    }
    const ArtComp = ART_COMPONENTS[art] || (typeof art === 'function' ? art : null);
    if (ArtComp) {
      return <ArtComp />;
    }
    if (ENGINEERING_ARTS[art]) {
      return ENGINEERING_ARTS[art];
    }
    if (React.isValidElement(art)) {
      return art;
    }
    return <SchematicArt />;
  };

  return (
    <div
      ref={rootRef}
      className={"gf-root " + className}
      data-tone={tone}
      data-open={open || undefined}
      data-entered={entered || undefined}
      data-place={labelPlacement}
      style={{ width, height: (H + HEADROOM) * k, ...style }}
    >
      <style>{GF_CSS}</style>
      <div className="gf-stage" style={{ transform: "translateY(" + HEADROOM * k + "px) scale(" + k + ")" }}>
        <div className="gf-tilt">
          <div className="gf-shadow" aria-hidden="true" />

          {/* Back panel holding real engineering artwork */}
          <div className="gf-back" style={{ clipPath: "path('" + BACK_PATH + "')" }} aria-hidden="true">
            {renderBackArt()}
            <div className="gf-back-sheen" />
          </div>
          <svg className="gf-rim gf-back-rim" viewBox={"0 0 " + W + " " + H} aria-hidden="true">
            <path d={BACK_PATH} />
          </svg>

          {/* Frosted front glass panel hinged on bottom */}
          <div className="gf-front" style={{ clipPath: "path('" + FRONT_PATH + "')" }}>
            <div className="gf-tint" aria-hidden="true" />
            <div className="gf-spec" aria-hidden="true" />
            <svg className="gf-rim gf-front-rim" viewBox={"0 0 " + W + " " + FRONT_H} aria-hidden="true">
              <defs>
                <linearGradient id={"gf-rim-" + uid} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
                  <stop offset="0.35" stopColor="#fff" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path d={FRONT_PATH} stroke={"url(#gf-rim-" + uid + ")"} />
            </svg>
            <button
              ref={hitRef}
              type="button"
              className="gf-hit"
              aria-expanded={open}
              aria-label={(open ? "Close " : "Open ") + label + ", " + count + " items"}
              onClick={() => setOpen(!open)}
            />
            <div className="gf-label">
              <span className="gf-title">{label}</span>
              <span className="gf-meta" key={metaLine}>
                {metaLine}
              </span>
            </div>
          </div>

          {/* Engineering Deliverable Sheets Inside */}
          <div ref={filesRef} className="gf-files" role="list" aria-label={label + " contents"}>
            {visible.map((file, v) => {
              const id = ids.current[start + v];
              const slot = fanSlot(v, visible.length);
              const jitter = rng(hashString(file.name) + id);
              
              const inner = (
                <>
                  <span className="gf-lines" aria-hidden="true">
                    <i style={{ width: "86%" }} />
                    <i style={{ width: "92%" }} />
                    <i style={{ width: "64%" }} />
                    <i style={{ width: "88%" }} />
                    <i style={{ width: "42%" }} />
                  </span>
                  <span className="gf-sheet-head">
                    <span className="gf-sheet-name">{file.name}</span>
                    {file.meta ? <span className="gf-sheet-meta">{file.meta}</span> : null}
                  </span>
                </>
              );
              const common = {
                className: "gf-sheet",
                style: {
                  "--gf-slot": slot,
                  "--gf-depth": visible.length - 1 - v,
                  "--gf-jx": ((jitter() - 0.5) * 10).toFixed(2) + "px",
                  "--gf-jr": ((jitter() - 0.5) * 3.2).toFixed(2) + "deg",
                  zIndex: v + 1,
                },
              };
              return (
                <div key={id} role="listitem" className="gf-sheet-slot">
                  <button {...common} type="button" onClick={() => onFileSelect?.(file, start + v)}>
                    {inner}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const GF_CSS = `
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-ease: cubic-bezier(.2, .8, .2, 1);
  --gf-spring: cubic-bezier(.34, 1.36, .5, 1);
  --gf-hinge: 0deg;
  --gf-lift: 42px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 15px;
  --gf-ink: #0f172a;
  --gf-ink-soft: rgba(15, 23, 42, .65);
  position: relative;
  display: inline-block;
  flex: none;
  vertical-align: top;
  font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;
}
.gf-root[data-tone="dark"] { --gf-ink: #f8fafc; --gf-ink-soft: rgba(248, 250, 252, .65); }
.gf-root:hover, .gf-root:focus-within { --gf-hinge: -12deg; --gf-lift: -36px; --gf-spread: 12px; --gf-fan: 2deg; --gf-stack: 12px; }
.gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: -96px; --gf-spread: 42px; --gf-fan: 5.5deg; --gf-stack: 30px; }

.gf-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 272px;
  transform-origin: 0 0;
}
.gf-tilt {
  position: absolute;
  inset: 0;
  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3.5deg)) rotateY(calc(var(--gf-px) * 4.5deg));
  transition: transform .8s var(--gf-ease);
}

.gf-shadow {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: -6px;
  height: 50px;
  border-radius: 40px;
  background: rgba(15, 23, 42, .09);
  filter: blur(18px);
  transform: translateX(calc(var(--gf-px) * -8px));
  transition: transform .8s var(--gf-ease), opacity .8s var(--gf-ease);
}

.gf-back {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #F8FAFC;
  border-radius: 22px;
  border: 1px solid #E2E8F0;
}
.gf-art {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gf-back-sheen {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .45) 0%, rgba(255, 255, 255, 0) 30%),
    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .3), rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.gf-rim {
  position: absolute;
  left: 0;
  top: 0;
  max-width: none;
  overflow: visible;
  pointer-events: none;
  fill: none;
}
.gf-back-rim { width: 340px; height: 272px; }
.gf-back-rim path { stroke: rgba(15, 23, 42, .1); stroke-width: 1.2; }

/* ---- files ---------------------------------------------------------------- */
.gf-files {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  clip-path: inset(-400px -400px 10px -400px);
}
.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  top: 96px;
  width: 272px;
  height: 184px;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid rgba(226, 232, 240, .95);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, .05),
    0 10px 24px -6px rgba(15, 23, 42, .09);
  transform-origin: 50% 100%;
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))
    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition:
    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),
    box-shadow .4s var(--gf-ease);
}
.gf-root[data-open] .gf-sheet:hover,
.gf-root[data-open] .gf-sheet:focus-visible {
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))
    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));
  box-shadow: 0 18px 38px -10px rgba(15, 23, 42, .2);
  transition-delay: 0s;
}
.gf-sheet:focus-visible { outline: 2px solid #0f172a; outline-offset: 2px; }
.gf-sheet-head {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 12px;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  white-space: nowrap;
}
.gf-sheet-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: -.01em;
  color: #0f172a;
  font-family: ui-monospace, "SF Mono", monospace;
}
.gf-sheet-meta {
  flex: none;
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 9.5px;
  letter-spacing: .02em;
  color: #64748b;
  font-weight: 600;
}
.gf-lines {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 44px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.gf-lines i {
  display: block;
  height: 4px;
  border-radius: 2px;
  background: rgba(15, 23, 42, .07);
}
.gf-lines i:first-child { height: 7px; margin-bottom: 2px; background: rgba(15, 23, 42, .13); }

/* ---- front glass ----------------------------------------------------------- */
.gf-front {
  position: absolute;
  left: 0;
  top: 74px;
  width: 340px;
  height: 198px;
  z-index: 10;
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  backdrop-filter: blur(20px) saturate(1.4);
  transform-origin: 50% 100%;
  transform: perspective(760px) rotateX(var(--gf-hinge));
  transition: transform .8s var(--gf-spring);
}
.gf-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, .45) 0%, rgba(255, 255, 255, .75) 45%, rgba(255, 255, 255, .97) 100%);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
}
.gf-spec {
  position: absolute;
  inset: 0;
  background: radial-gradient(240px 180px at calc(50% + var(--gf-px) * 44%) calc(30% + var(--gf-py) * 36%), rgba(255, 255, 255, .9), rgba(255, 255, 255, 0) 70%);
  mix-blend-mode: overlay;
  opacity: .95;
  pointer-events: none;
}
.gf-front-rim { width: 340px; height: 198px; }
.gf-front-rim path { stroke-width: 2.2; }

.gf-hit {
  all: unset;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}

.gf-label {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-width: 240px;
  pointer-events: none;
  left: 24px;
  bottom: 26px;
  color: var(--gf-ink);
}
.gf-title {
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -.02em;
  color: #0f172a;
}
.gf-meta {
  font-family: ui-monospace, "SF Mono", monospace;
  font-size: 11px;
  letter-spacing: .02em;
  color: #64748b;
  font-weight: 600;
}

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .gf-tilt { transform: none; }
}
`;
