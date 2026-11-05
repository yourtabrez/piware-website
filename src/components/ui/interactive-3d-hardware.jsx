import React, { useEffect, useRef, useState } from 'react';
import { Cpu, ShieldCheck, Activity, Layers } from 'lucide-react';

export default function Interactive3DHardware() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let rafId;
    let targetRotateX = 8;
    let targetRotateY = -12;
    let currentRotateX = 8;
    let currentRotateY = -12;

    let isInteracting = false;

    const handleMouseMove = (e) => {
      isInteracting = true;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtle natural tilt limits (±14 deg)
      targetRotateY = ((mouseX - centerX) / centerX) * 16;
      targetRotateX = -((mouseY - centerY) / centerY) * 14;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      isInteracting = true;
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      isInteracting = false;
      targetRotateX = 6;
      targetRotateY = -8;
    };

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      isInteracting = true;
      const rect = container.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      const touchY = e.touches[0].clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      targetRotateY = ((touchX - centerX) / centerX) * 14;
      targetRotateX = -((touchY - centerY) / centerY) * 12;
    };

    const handleTouchStart = (e) => {
      isInteracting = true;
      setIsHovered(true);
      handleTouchMove(e);
    };

    const handleTouchEnd = () => {
      isInteracting = false;
      setIsHovered(false);
      targetRotateX = 6;
      targetRotateY = -8;
    };

    const updateTransform = (time) => {
      // Gentle subtle breathing float when idle
      if (!isInteracting) {
        const t = time * 0.0012;
        targetRotateX = 6 + Math.sin(t) * 2.5;
        targetRotateY = -8 + Math.cos(t * 1.3) * 3.5;
      }

      // Smooth interpolation (lerp) for buttery feel
      currentRotateX += (targetRotateX - currentRotateX) * 0.08;
      currentRotateY += (targetRotateY - currentRotateY) * 0.08;

      canvas.style.transform = `rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg)`;
      rafId = requestAnimationFrame(updateTransform);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    rafId = requestAnimationFrame(updateTransform);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto aspect-[4/3] flex items-center justify-center cursor-crosshair select-none"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Canvas Box */}
      <div
        ref={canvasRef}
        className="relative w-[92%] h-[90%] rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] p-3 transition-shadow duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(8deg) rotateY(-12deg)',
        }}
      >
        {/* Corner Precision Optical Ticks (AOI Machine Markers) */}
        <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-400 select-none pointer-events-none">+ [0,0]</div>
        <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-400 select-none pointer-events-none">[X_MAX] +</div>
        <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-400 select-none pointer-events-none">+ [Y_MAX]</div>
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-400 select-none pointer-events-none">[FIDUCIAL_3] +</div>

        {/* LAYER 1: Deep Circuit Substrate with subtle topographical rings */}
        <div 
          className="absolute inset-3 rounded-xl bg-slate-950 overflow-hidden shadow-inner pointer-events-none"
          style={{ transform: 'translateZ(0px)' }}
        >
          {/* Base PCBA Photography */}
          <picture>
            <source srcSet="/assets/images/hero.webp" type="image/webp" />
            <img
              src="/assets/images/hero.png"
              alt="Piware Multilayer Hardware PCBA"
              className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
              loading="eager"
            />
          </picture>

          {/* Topographical Vector Impedance Contours Overlay */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 45%, transparent 0, transparent 40px, rgba(255,255,255,0.18) 41px, transparent 42px)',
              backgroundSize: '84px 84px',
            }}
          />
        </div>

        {/* LAYER 2: Floating Microcontroller Spec Badge (translateZ: 35px) */}
        <div
          className="absolute -top-3 -right-2 sm:-right-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md text-[10px] sm:text-xs font-mono text-slate-800 flex items-center gap-1.5 sm:gap-2 pointer-events-none transition-transform duration-300"
          style={{ transform: 'translateZ(35px)' }}
        >
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-slate-900">STM32 / ESP32-S3</span>
          <span className="hidden sm:inline text-[10px] text-slate-400">&bull; 240MHz Dual-Core</span>
        </div>

        {/* LAYER 3: Floating Bus Inspection Callout (translateZ: 55px) */}
        <div
          className="absolute -bottom-3 -left-2 sm:-left-3 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-[10px] sm:text-xs font-mono text-slate-800 flex items-center justify-between gap-2 sm:gap-3 pointer-events-none transition-transform duration-300"
          style={{ transform: 'translateZ(55px)' }}
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Activity className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-700" />
            <div>
              <div className="font-bold text-[10px] sm:text-[11px] text-slate-900">50Ω DIFF IMPEDANCE</div>
              <div className="hidden sm:block text-[9px] text-slate-500">8-Layer HDI &bull; IPC Class 3</div>
            </div>
          </div>
          <span className="px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            PASS
          </span>
        </div>

        {/* Interactive Mouse Hint Overlay */}
        <div 
          className={`absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[10px] font-mono text-white/90 transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-0' : 'opacity-80'
          }`}
          style={{ transform: 'translateZ(20px)' }}
        >
          Interactive 3D Viewport
        </div>
      </div>
    </div>
  );
}

