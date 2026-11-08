import React, { useRef } from 'react';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import Container from '../common/Container';
import { companyInfo } from '../../data/companyInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const capabilityLinks = [
    { name: "Hardware Architecture & Schematics", href: "#capabilities" },
    { name: "High-Speed Multilayer PCB (16-Layer)", href: "#capabilities" },
    { name: "Antenna & RF Engineering (50Ω)", href: "#capabilities" },
    { name: "Deterministic Firmware & RTOS", href: "#capabilities" },
    { name: "FPGA & Digital Logic (DSP/AXI)", href: "#capabilities" },
    { name: "Robotics & Motion Control (FOC)", href: "#capabilities" },
    { name: "Industry 4.0 & Industrial Automation", href: "#capabilities" },
    { name: "DFM Mechanical CAD & IP67 Enclosure", href: "#capabilities" },
    { name: "Turnkey Volume Manufacturing", href: "#capabilities" },
  ];

  const processLinks = [
    { name: "01 Discovery & Feasibility", href: "#process" },
    { name: "02 Architecture & Part Selection", href: "#process" },
    { name: "03 Schematic & PCB Layout", href: "#process" },
    { name: "04 Firmware Bring-up & HAL", href: "#process" },
    { name: "05 Validation & EMI/EMC Testing", href: "#process" },
    { name: "Product Lifecycle (POC to MP)", href: "#lifecycle" },
    { name: "Verified Technology Stack", href: "#stack" },
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 sm:pt-20 pb-24 sm:pb-12 relative z-10 overflow-hidden"
    >
      {/* Precision Blueprint Grid Watermark Background */}
      <div 
        className="absolute inset-0 bg-grid-blueprint opacity-[0.035] pointer-events-none"
        aria-hidden="true"
      />
      {/* Subtle Top Ambient Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-900/90"
        >
          {/* Column 1: Brand & Studio Mission */}
          <motion.div variants={columnVariants} className="lg:col-span-4 flex flex-col items-start">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="flex items-center gap-2.5 mb-4 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white/10 border border-slate-800 flex items-center justify-center p-1 group-hover:border-slate-600 transition-colors">
                <img 
                  src="/assets/images/logo/TPW.webp" 
                  alt="Piware Engineering Logo" 
                  className="w-full h-full object-contain"
                  width={36}
                  height={36}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-slate-200 transition-colors leading-none">
                  Piware
                </span>
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase mt-0.5 font-semibold">
                  Engineering Studio
                </span>
              </div>
            </a>

            {/* Description */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-5">
              Founder-led embedded systems & electronic product studio. Architecting, prototyping, and scaling production hardware without guesswork.
            </p>

            {/* Active Lab Telemetry Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-800/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Lab Capacity &bull; Ahmedabad, India</span>
            </div>

            {/* Social Links with Smooth Hover Scaling */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FaLinkedin className="w-4 h-4" />, href: companyInfo.socials.linkedin, label: "LinkedIn" },
                { icon: <FaTwitter className="w-4 h-4" />, href: companyInfo.socials.x, label: "X (Twitter)" },
                { icon: <FaInstagram className="w-4 h-4" />, href: companyInfo.socials.instagram, label: "Instagram" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/90 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-850 shadow-sm transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Engineering Capabilities */}
          <motion.div variants={columnVariants} className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-3 rounded-full bg-blue-500" />
              <span>Capabilities</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              {capabilityLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-all duration-200"
                  >
                    <span className="text-slate-600 group-hover:text-blue-400 transition-colors">&rsaquo;</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Development Process & Roadmap */}
          <motion.div variants={columnVariants} className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-3 rounded-full bg-emerald-500" />
              <span>Methodology</span>
            </h3>
            <ul className="space-y-2.5 text-xs">
              {processLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="group inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-all duration-200"
                  >
                    <span className="text-slate-600 group-hover:text-emerald-400 transition-colors">&rsaquo;</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Studio Coordinates & Consultation CTA */}
          <motion.div variants={columnVariants} className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-3 rounded-full bg-amber-500" />
              <span>Studio Coordinates</span>
            </h3>
            
            <div className="space-y-3.5 text-xs">
              {/* Direct Email */}
              <div className="flex items-center gap-2.5 group">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-slate-300" />
                </div>
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="text-slate-300 hover:text-white transition-colors font-mono"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* Direct Phone Numbers */}
              {companyInfo.phones.map((phone) => (
                <div key={phone.label} className="flex items-center gap-2.5 group">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                  <a 
                    href={phone.href} 
                    className="text-slate-300 hover:text-white transition-colors font-mono"
                  >
                    {phone.label}
                  </a>
                </div>
              ))}

              {/* Physical Studio Address */}
              <div className="flex items-start gap-2.5 pt-1">
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <span className="text-slate-400 leading-relaxed font-mono text-[11px]">
                  {companyInfo.address}
                </span>
              </div>

              {/* Quick Book Consultation CTA */}
              <div className="pt-2">
                <motion.a
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href={companyInfo.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-xs shadow-sm transition-all"
                >
                  <span>Book Technical Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="order-2 sm:order-1 text-center sm:text-left">
            &copy; {currentYear} Piware Engineering. All rights reserved.
          </div>

          <div className="order-1 sm:order-2 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>IPC-A-610 Class 3</span>
            </span>

            <a 
              href={companyInfo.legal.privacy} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            
            <a 
              href={companyInfo.legal.terms} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </a>

            {/* Back to Top Floating Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all shadow-sm"
              aria-label="Scroll back to top"
              type="button"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
