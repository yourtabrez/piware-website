import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Cpu, 
  Activity, 
  GitBranch, 
  Factory, 
  ShieldCheck, 
  Layers, 
  Send 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import BottomNavBar from '../ui/bottom-nav-bar';
import { companyInfo } from '../../data/companyInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('capabilities');
  const [hoveredSection, setHoveredSection] = useState(null);

  const navLinks = [
    { id: 'capabilities', label: 'Capabilities', href: '#capabilities', icon: Cpu },
    { id: 'lifecycle', label: 'Lifecycle', href: '#lifecycle', icon: Activity },
    { id: 'process', label: 'Process', href: '#process', icon: GitBranch },
    { id: 'industries', label: 'Industries', href: '#industries', icon: Factory },
    { id: 'why', label: 'Why Piware', href: '#why', icon: ShieldCheck },
    { id: 'stack', label: 'Stack', href: '#stack', icon: Layers },
    { id: 'contact', label: 'Contact', href: '#contact', icon: Send },
  ];

  // Scroll spy to dynamically track active section in viewport
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map(l => l.id);
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const activeIndex = Math.max(0, navLinks.findIndex(l => l.id === activeSection));

  return (
    <>
      <motion.header 
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05)] py-2.5 sm:py-3' 
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/90 py-3.5 sm:py-4'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo (Always visible on left) */}
            <motion.a 
              href="#" 
              onClick={(e) => scrollToSection(e, 'top')}
              className="flex items-center gap-2.5 group focus:outline-none shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-slate-200/90 shadow-sm flex items-center justify-center p-1 group-hover:border-slate-900 transition-colors">
                <img 
                  src="/assets/images/logo/TPB.webp" 
                  alt="Piware Engineering Logo" 
                  className="w-full h-full object-contain"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-tight text-slate-900 group-hover:text-black transition-colors leading-none">
                  Piware
                </span>
                <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase mt-0.5 font-semibold">
                  Engineering
                </span>
              </div>
            </motion.a>

            {/* Desktop Center: 21st.dev-Inspired Animated Pill Navigation */}
            <motion.nav 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center p-1 rounded-full bg-slate-100/85 backdrop-blur-md border border-slate-200/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] space-x-0.5"
              role="navigation"
              aria-label="Main Navigation"
            >
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredSection === item.id;
                const isExpanded = isActive || isHovered;

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onMouseEnter={() => setHoveredSection(item.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                    whileTap={{ scale: 0.96 }}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`group flex items-center gap-0 px-3 py-1.5 rounded-full transition-all duration-200 relative h-8 select-none focus:outline-none ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm font-semibold'
                        : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                    aria-label={item.label}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon
                      size={15}
                      strokeWidth={isActive ? 2.2 : 1.8}
                      className={`transition-colors duration-200 shrink-0 ${
                        isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-900'
                      }`}
                      aria-hidden="true"
                    />

                    <motion.div
                      initial={false}
                      animate={{
                        width: isExpanded ? 'auto' : '0px',
                        opacity: isExpanded ? 1 : 0,
                        marginLeft: isExpanded ? '6px' : '0px',
                      }}
                      transition={{
                        width: { type: 'spring', stiffness: 380, damping: 30 },
                        opacity: { duration: 0.16 },
                        marginLeft: { duration: 0.16 },
                      }}
                      className="overflow-hidden flex items-center"
                    >
                      <span
                        className={`text-xs whitespace-nowrap select-none transition-colors ${
                          isActive ? 'text-white font-semibold' : 'text-slate-800 font-medium'
                        }`}
                      >
                        {item.label}
                      </span>
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.nav>

            {/* Header Actions (Always visible on right) */}
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 sm:gap-3 shrink-0"
            >
              {/* Studio Capacity Pill */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/70 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="whitespace-nowrap">Studio Open for Q1/Q2</span>
              </div>

              {/* Start Project CTA Button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={companyInfo.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold rounded-full bg-slate-900 text-white hover:bg-black shadow-sm transition-all shrink-0 select-none"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>

              {/* Mobile Drawer Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Dropdown Menu Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-slate-900 text-white font-semibold shadow-sm'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <Icon size={16} className={isActive ? 'text-white' : 'text-slate-500'} />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                  
                  <div className="pt-3 border-t border-slate-100 mt-2">
                    <a
                      href={companyInfo.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>Book Technical Consultation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </motion.header>

      {/* Floating Touch-Friendly Bottom Nav Bar for Mobile / Tablet */}
      <div className="fixed inset-x-0 bottom-4 z-40 lg:hidden flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto">
          <BottomNavBar
            items={navLinks.map(l => ({
              label: l.label,
              icon: l.icon,
              href: l.href,
              onClick: (e) => {
                if (e && e.preventDefault) e.preventDefault();
                const el = document.getElementById(l.id);
                if (el) {
                  const navOffset = 84;
                  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: elementPosition - navOffset,
                    behavior: 'smooth'
                  });
                }
              }
            }))}
            activeIndex={activeIndex}
            className="shadow-xl"
          />
        </div>
      </div>
    </>
  );
}
