"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Point {
  x: number;
  y: number;
}

export interface Ripple {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  born: number;
}

export interface ColorRGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface ThemeConfig {
  bg: string;
  lineBase: ColorRGBA;
  lineActive: ColorRGBA;
  nodeBase: ColorRGBA;
  nodeActive: ColorRGBA;
  glow: string;
  ripple: string;
  dots: string;
}

export type GridTheme = "light" | "slate" | "default" | "monochrome";

export interface KineticGridProps {
  children?: React.ReactNode;
  className?: string;
  globalColor?: GridTheme;
  theme?: GridTheme;
  cellSize?: number;
  influenceRadius?: number;
  maxWarp?: number;
  dotSpacing?: number;
  showDots?: boolean;
  isFixed?: boolean;
  transparent?: boolean;
}

// ─── Theme Presets ────────────────────────────────────────────────────────────

const THEMES: Record<GridTheme, ThemeConfig> = {
  // Precision Swiss Light Theme (Tailwind Slate + Engineering Blue)
  light: {
    bg: "#FFFFFF",
    lineBase: { r: 15, g: 23, b: 42, a: 0.045 },
    lineActive: { r: 37, g: 99, b: 235, a: 0.62 }, // Electric engineering blue
    nodeBase: { r: 15, g: 23, b: 42, a: 0.10 },
    nodeActive: { r: 37, g: 99, b: 235, a: 0.90 },
    glow: "37, 99, 235",
    ripple: "37, 99, 235",
    dots: "rgba(15, 23, 42, 0.035)",
  },
  // Monochrome Light Theme (Clean slate accents)
  slate: {
    bg: "#FFFFFF",
    lineBase: { r: 15, g: 23, b: 42, a: 0.045 },
    lineActive: { r: 15, g: 23, b: 42, a: 0.45 },
    nodeBase: { r: 15, g: 23, b: 42, a: 0.10 },
    nodeActive: { r: 15, g: 23, b: 42, a: 0.75 },
    glow: "15, 23, 42",
    ripple: "15, 23, 42",
    dots: "rgba(15, 23, 42, 0.03)",
  },
  // 21st.dev Dark Theme
  default: {
    bg: "#161618",
    lineBase: { r: 255, g: 255, b: 255, a: 0.13 },
    lineActive: { r: 74, g: 158, b: 255, a: 0.9 },
    nodeBase: { r: 255, g: 255, b: 255, a: 0.2 },
    nodeActive: { r: 74, g: 158, b: 255, a: 1.0 },
    glow: "74, 158, 255",
    ripple: "100, 180, 255",
    dots: "rgba(255, 255, 255, 0.05)",
  },
  // 21st.dev Pure Black Monochrome
  monochrome: {
    bg: "#000000",
    lineBase: { r: 255, g: 255, b: 255, a: 0.13 },
    lineActive: { r: 255, g: 255, b: 255, a: 0.9 },
    nodeBase: { r: 255, g: 255, b: 255, a: 0.2 },
    nodeActive: { r: 255, g: 255, b: 255, a: 1.0 },
    glow: "255, 255, 255",
    ripple: "255, 255, 255",
    dots: "rgba(255, 255, 255, 0.05)",
  },
};

const DEFAULT_CELL_SIZE = 52;
const DEFAULT_INFLUENCE_RADIUS = 260;
const DEFAULT_MAX_WARP = 24;
const DEFAULT_DOT_SPACING = 28;
const LERP_SPEED = 0.08;
const NODE_BASE_RADIUS = 1.6;
const NODE_ACTIVE_RADIUS = 3.2;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerpN(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpColor(base: ColorRGBA, active: ColorRGBA, t: number): string {
  const r = Math.round(lerpN(base.r, active.r, t));
  const g = Math.round(lerpN(base.g, active.g, t));
  const b = Math.round(lerpN(base.b, active.b, t));
  const a = lerpN(base.a, active.a, t);
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function KineticGrid({
  children,
  className,
  globalColor,
  theme: themeProp,
  cellSize = DEFAULT_CELL_SIZE,
  influenceRadius = DEFAULT_INFLUENCE_RADIUS,
  maxWarp = DEFAULT_MAX_WARP,
  dotSpacing = DEFAULT_DOT_SPACING,
  showDots = true,
  isFixed = false,
  transparent = false,
}: KineticGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const targetMouseRef = useRef<Point>({ x: -9999, y: -9999 });
  const ripplesRef = useRef<Ripple[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef<{ w: number; h: number; dpr: number }>({ w: 0, h: 0, dpr: 1 });
  const isVisibleRef = useRef<boolean>(true);

  // Selected Theme (defaults to light for Piware website)
  const activeThemeKey: GridTheme = themeProp || globalColor || "light";
  const currentTheme = THEMES[activeThemeKey] || THEMES.light;

  // ── Warp ────────────────────────────────────────────────────────────────────

  const getWarpedPoint = useCallback(
    (
      gx: number,
      gy: number,
      col: number,
      row: number,
      mouse: Point,
      ripples: Ripple[],
      cols: number,
      rows: number,
    ): { pt: Point; proximity: number } => {
      // Edge pin — smoothly locks boundary rows/cols in place
      const edgeMargin = 1.5;
      const colPin = Math.min(
        col / edgeMargin,
        (cols - 1 - col) / edgeMargin,
        1,
      );
      const rowPin = Math.min(
        row / edgeMargin,
        (rows - 1 - row) / edgeMargin,
        1,
      );
      const pinFactor = colPin * colPin * rowPin * rowPin;

      const dx = gx - mouse.x;
      const dy = gy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const proximity = Math.max(0, 1 - dist / influenceRadius) * pinFactor;

      // Ripple displacement
      let rx = 0;
      let ry = 0;
      for (const r of ripples) {
        const rdx = gx - r.x;
        const rdy = gy - r.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        const waveWidth = 55;
        const diff = rdist - r.radius;
        if (Math.abs(diff) < waveWidth) {
          const strength =
            (1 - Math.abs(diff) / waveWidth) * r.opacity * 18 * pinFactor;
          const angle = Math.atan2(rdy, rdx);
          const sign = diff < 0 ? -1 : 1;
          rx += Math.cos(angle) * strength * sign * -1;
          ry += Math.sin(angle) * strength * sign * -1;
        }
      }

      // Cursor warp with smooth bell falloff
      if (dist < influenceRadius && dist > 0 && pinFactor > 0) {
        const t = dist / influenceRadius;
        const eased = t < 0.01 ? 0 : (1 - t) * (1 - t) * Math.min(1, dist / 60);
        const warpAmt = eased * maxWarp * pinFactor;
        const angle = Math.atan2(dy, dx);
        return {
          pt: {
            x: gx - Math.cos(angle) * warpAmt + rx,
            y: gy - Math.sin(angle) * warpAmt + ry,
          },
          proximity,
        };
      }

      return { pt: { x: gx + rx, y: gy + ry }, proximity };
    },
    [influenceRadius, maxWarp],
  );

  // ── Draw ────────────────────────────────────────────────────────────────────

  const draw = useCallback(
    (now: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w: W, h: H, dpr } = sizeRef.current;
      if (W === 0 || H === 0) return;

      const mouse = mouseRef.current;
      const ripples = ripplesRef.current;
      const theme = currentTheme;

      // Reset transform and clear
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Scale for crisp HiDPI / Retina rendering
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Optional Background Fill
      if (!transparent) {
        ctx.fillStyle = theme.bg;
        ctx.fillRect(0, 0, W, H);
      }

      // Static background dot texture
      if (showDots) {
        ctx.fillStyle = theme.dots;
        for (let x = dotSpacing / 2; x < W; x += dotSpacing) {
          for (let y = dotSpacing / 2; y < H; y += dotSpacing) {
            ctx.beginPath();
            ctx.arc(x, y, 0.7, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const age = (now - r.born) / 1000;
        r.radius = Math.max(0, age * 400);
        r.opacity = Math.max(0, 1 - age * 1.2);
        if (r.opacity <= 0) ripples.splice(i, 1);
      }

      // ── Build warped grid ─────────────────────────────────────────────────
      const cols = Math.max(2, Math.ceil(W / cellSize)) + 1;
      const rows = Math.max(2, Math.ceil(H / cellSize)) + 1;
      const cellW = W / (cols - 1);
      const cellH = H / (rows - 1);

      const pts: Point[][] = [];
      const prox: number[][] = [];

      for (let row = 0; row < rows; row++) {
        pts[row] = [];
        prox[row] = [];
        for (let col = 0; col < cols; col++) {
          const { pt, proximity } = getWarpedPoint(
            col * cellW,
            row * cellH,
            col,
            row,
            mouse,
            ripples,
            cols,
            rows,
          );
          pts[row][col] = pt;
          prox[row][col] = proximity;
        }
      }

      // ── Grid lines ────────────────────────────────────────────────────────
      const drawSeg = (p1: Point, p2: Point, pr1: number, pr2: number) => {
        const avg = (pr1 + pr2) / 2;
        const t = avg * avg * (3 - 2 * avg); // smoothstep
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = lerpColor(theme.lineBase, theme.lineActive, t);
        ctx.lineWidth = lerpN(0.75, 1.45, t);
        ctx.stroke();
      };

      ctx.lineCap = "round";

      // Horizontal lines
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 1; col++) {
          drawSeg(
            pts[row][col],
            pts[row][col + 1],
            prox[row][col],
            prox[row][col + 1],
          );
        }
      }

      // Vertical lines
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 1; row++) {
          drawSeg(
            pts[row][col],
            pts[row + 1][col],
            prox[row][col],
            prox[row + 1][col],
          );
        }
      }

      // ── Intersection nodes ────────────────────────────────────────────────
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const p = pts[row][col];
          const pr = prox[row][col];
          const t = pr * pr * (3 - 2 * pr); // smoothstep
          const r = lerpN(NODE_BASE_RADIUS, NODE_ACTIVE_RADIUS, t);

          // Outer glow ring for active nodes
          if (t > 0.25) {
            const glowR = r + lerpN(0, 6.5, (t - 0.25) / 0.75);
            const grd = ctx.createRadialGradient(
              p.x,
              p.y,
              r * 0.4,
              p.x,
              p.y,
              glowR,
            );
            grd.addColorStop(0, `rgba(${theme.glow},${(t * 0.35).toFixed(3)})`);
            grd.addColorStop(1, `rgba(${theme.glow},0)`);
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }

          // Node fill
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = lerpColor(theme.nodeBase, theme.nodeActive, t);
          ctx.fill();
        }
      }

      // ── Ripple rings ──────────────────────────────────────────────────────
      for (const r of ripples) {
        const safeRadius = Math.max(0, r.radius);
        ctx.beginPath();
        ctx.arc(r.x, r.y, safeRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${theme.ripple},${(r.opacity * 0.32).toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    },
    [cellSize, currentTheme, dotSpacing, getWarpedPoint, showDots, transparent],
  );

  // ── Animation loop ──────────────────────────────────────────────────────────

  const animate = useCallback(
    (now: number) => {
      if (isVisibleRef.current) {
        const m = mouseRef.current;
        const t = targetMouseRef.current;

        m.x = lerpN(m.x, t.x, LERP_SPEED);
        m.y = lerpN(m.y, t.y, LERP_SPEED);

        draw(now);
      }
      rafRef.current = requestAnimationFrame(animate);
    },
    [draw],
  );

  // ── Setup & Listeners ───────────────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setSize = () => {
      const parent = canvas.parentElement || document.body;
      const rect = parent.getBoundingClientRect();
      const w = isFixed ? window.innerWidth : rect.width || window.innerWidth;
      const h = isFixed ? window.innerHeight : rect.height || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      sizeRef.current = { w, h, dpr };

      if (mouseRef.current.x === -9999) {
        mouseRef.current = { x: -9999, y: -9999 };
        targetMouseRef.current = { x: -9999, y: -9999 };
      }
    };

    setSize();

    // Window and ResizeObserver
    window.addEventListener("resize", setSize);
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => setSize());
      resizeObserver.observe(canvas.parentElement);
    }

    // Viewport IntersectionObserver to pause loop offscreen
    let intersectionObserver: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          isVisibleRef.current = entry.isIntersecting;
        },
        { threshold: 0.05 },
      );
      intersectionObserver.observe(canvas);
    }

    // Accurate mouse listener taking into account canvas offset & scroll
    const onMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      const margin = 120;
      if (
        e.clientX >= rect.left - margin &&
        e.clientX <= rect.right + margin &&
        e.clientY >= rect.top - margin &&
        e.clientY <= rect.bottom + margin
      ) {
        targetMouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      } else {
        targetMouseRef.current = { x: -9999, y: -9999 };
      }
    };

    const onMouseLeave = () => {
      targetMouseRef.current = { x: -9999, y: -9999 };
    };

    const onClick = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        ripplesRef.current.push({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          radius: 0,
          opacity: 1,
          born: performance.now(),
        });
      }
    };

    // Mobile touch interaction listeners (passive to ensure zero scroll blocking)
    const onTouchMove = (e: TouchEvent) => {
      if (prefersReducedMotion || !e.touches[0]) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        targetMouseRef.current = {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        };
      } else {
        targetMouseRef.current = { x: -9999, y: -9999 };
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (prefersReducedMotion || !e.touches[0]) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      if (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      ) {
        targetMouseRef.current = {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        };
        ripplesRef.current.push({
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
          radius: 0,
          opacity: 1,
          born: performance.now(),
        });
      }
    };

    const onTouchEnd = () => {
      targetMouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });
    window.addEventListener("click", onClick, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      if (resizeObserver) resizeObserver.disconnect();
      if (intersectionObserver) intersectionObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate, isFixed]);

  // If used as background element without children
  if (!children) {
    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          isFixed ? "fixed inset-0" : "absolute inset-0",
          "w-full h-full z-0 pointer-events-none select-none",
          className,
        )}
      />
    );
  }

  // If used as wrapper element with children
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full min-h-screen overflow-hidden",
        !transparent && (
          activeThemeKey === "monochrome"
            ? "bg-[#000000]"
            : activeThemeKey === "default"
              ? "bg-[#161618]"
              : "bg-[#FFFFFF]"
        ),
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          isFixed ? "fixed inset-0" : "absolute inset-0",
          "w-full h-full z-0 pointer-events-none select-none",
        )}
      />

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

