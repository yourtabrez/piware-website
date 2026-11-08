import React, { useEffect, useState, useRef } from 'react';
import { 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Cpu, 
  DollarSign, 
  TrendingUp 
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Container from '../common/Container';
import SectionHead from '../common/SectionHead';
import { companyInfo } from '../../data/companyInfo';

export default function ConsultationSection() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  useEffect(() => {
    // Lazy load Calendly widget script only when user approaches contact section
    const scriptId = 'calendly-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        setCalendlyLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      setCalendlyLoaded(true);
      if (window.Calendly && typeof window.Calendly.initInlineWidgets === 'function') {
        window.Calendly.initInlineWidgets();
      }
    }
  }, []);

  const agendaItems = [
    {
      num: "01",
      icon: Cpu,
      title: "Architecture, Silicon & AI Feasibility",
      description: "Review your system block diagram, MCU selection, cloud vs. edge latency, or AI agent workflow requirements.",
    },
    {
      num: "02",
      icon: DollarSign,
      title: "Target Unit Cost (BOM) & Cloud Modeling",
      description: "Assess volume pricing thresholds, component risk alternatives, API cost models, and tooling expenditure.",
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "Stage-Gate Delivery Roadmap",
      description: "Map realistic milestones from breadboard POC to EVT/DVT spins and production-ready software transfer.",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-24 sm:py-28 bg-gradient-to-b from-white via-slate-50/70 to-slate-50 border-t border-slate-200/90 relative overflow-hidden"
    >
      {/* Background Blueprint Grid Watermark */}
      <div 
        className="absolute inset-0 bg-grid-blueprint opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHead
            eyebrow="Technical Consultation"
            title="Book an Architecture Session with Our Engineering Leads."
            description="Bring your schematic, concept sketch, or target specs. We'll assess technical feasibility, BOM cost expectations, and realistic production ramp timelines."
            align="center"
          />
        </motion.div>

        {/* Equal-Height Symmetrical Consultation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto pt-4">
          
          {/* Left Column: Comprehensive Engineering Briefing & Direct Channels */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 shadow-[0_10px_35px_-15px_rgba(15,23,42,0.06)]"
          >
            <div>
              {/* Header Telemetry Badge */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-800">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>30-Min Technical Scoping</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>DIRECT ACCESS</span>
                </div>
              </div>

              {/* Title & Expectation Summary */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Directly with Senior Hardware & Firmware Partners
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                No account managers or sales discovery reps. You speak directly with the principal engineers who will architect, lay out, and validate your product.
              </p>

              {/* 3-Step Agenda Dossier */}
              <div className="space-y-4 mb-7">
                {agendaItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.num}
                      className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 transition-colors flex items-start gap-3.5 group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0 text-slate-900 group-hover:text-blue-600 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h4 className="text-xs font-bold text-slate-900">
                            {item.title}
                          </h4>
                          <span className="font-mono text-[10px] text-slate-400 font-bold">
                            {item.num}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Direct Contacts & Security Assurance */}
            <div className="pt-6 border-t border-slate-100">
              {/* Mutual NDA & Privacy Guarantee */}
              <div className="flex items-center gap-2 mb-5 text-xs text-slate-600 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mutual NDA protected before any schematics or IP are shared.</span>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-2.5 text-xs font-mono mb-5">
                <div className="flex items-center gap-2.5 text-slate-700">
                  <Mail className="w-4 h-4 text-slate-900 shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-blue-600 font-semibold transition-colors">
                    {companyInfo.email}
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-700">
                  {companyInfo.phones.map((phone) => (
                    <div key={phone.label} className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                      <a href={phone.href} className="hover:text-blue-600 font-semibold transition-colors">
                        {phone.label}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-2.5 text-slate-500 pt-1">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    {companyInfo.address}
                  </span>
                </div>
              </div>

              {/* Open in Full Window Fallback Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-sm hover:bg-black transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Open Scheduler in New Window</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Embedded Calendly Scheduler in Architectural Enclosure */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col h-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_35px_-15px_rgba(15,23,42,0.06)] overflow-hidden"
          >
            {/* Scheduler Top Telemetry Interface Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-slate-50/90 border-b border-slate-200/80 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-800 uppercase text-[11px] sm:text-xs">CALENDLY ENGINE</span>
                <span className="text-slate-400">&bull;</span>
                <span className="text-slate-500 hidden sm:inline">LIVE CALENDAR SYNC</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-[10px] sm:text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>AUTO TIMEZONE</span>
              </div>
            </div>

            {/* Calendly Inline Widget Container */}
            <div className="p-2 sm:p-4 flex-1 flex flex-col justify-center min-h-[560px] sm:min-h-[660px] relative">
              {!calendlyLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0 bg-white">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 animate-pulse">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-slate-800 mb-1">Connecting to Calendly Engine...</p>
                  <p className="text-xs text-slate-400 font-mono">Fetching real-time engineering lead availability</p>
                </div>
              )}
              <div 
                className="calendly-inline-widget w-full flex-1 relative z-10" 
                data-url={companyInfo.calendlyUrl} 
                style={{ minWidth: '280px', height: '620px', width: '100%' }}
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
