"use client";

import * as React from "react";
import { Instagram, Twitter, Github, ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ULogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29.667 31.69"
    {...props}
  >
    <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" />
    <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
    <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
  </svg>
);

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  step?: string;
  title?: string;
  summary?: string;
  description?: string;
  deliverables?: string[];
  icon?: LucideIcon | React.ComponentType<{ className?: string; size?: number }>;
  theme?: "light" | "dark";
  badgeText?: string;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      step,
      title,
      summary,
      description,
      deliverables,
      icon: Icon,
      theme = "light",
      badgeText,
      children,
      ...props
    },
    ref
  ) => {
    const isCustomContent = Boolean(step || title || description);

    // If used as the custom Process card in Swiss Minimalist Light Theme
    if (isCustomContent) {
      return (
        <div
          ref={ref}
          className={cn(
            "group h-full w-full min-h-[420px] [perspective:1000px] select-none",
            className
          )}
          {...props}
        >
          <div className="relative h-full rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-white via-slate-50/90 to-slate-100/70 border border-slate-200/90 p-5 sm:p-7 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.07)] transition-all duration-500 ease-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(15,23,42,0.14)_0px_25px_40px_-15px,rgba(37,99,235,0.06)_0px_0px_25px_0px] sm:group-hover:[transform:rotate3d(0.8,-0.6,0,10deg)_translateY(-4px)]">
            
            {/* 3D Frosted Glass Inner Plate */}
            <div className="absolute inset-2 sm:inset-2.5 rounded-[24px] sm:rounded-[30px] border border-white/80 bg-white/60 backdrop-blur-md shadow-inner [transform-style:preserve-3d] [transform:translate3d(0,0,20px)] pointer-events-none transition-all duration-500 group-hover:bg-white/75" />

            {/* Top-Right 3D Concentric Calibration Rings & Floating Badge */}
            <div className="absolute top-0 right-0 pointer-events-none [transform-style:preserve-3d]">
              {[
                { size: "150px", pos: "6px", z: "18px", delay: "0s", opacity: "bg-slate-900/[0.02] border-slate-200/50" },
                { size: "120px", pos: "10px", z: "32px", delay: "0.2s", opacity: "bg-slate-900/[0.03] border-slate-200/60" },
                { size: "90px", pos: "16px", z: "48px", delay: "0.4s", opacity: "bg-blue-500/[0.04] border-blue-200/50" },
                { size: "65px", pos: "22px", z: "64px", delay: "0.6s", opacity: "bg-blue-500/[0.06] border-blue-300/60" },
              ].map((circle, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute aspect-square rounded-full border transition-all duration-500 ease-out",
                    circle.opacity
                  )}
                  style={{
                    width: circle.size,
                    top: circle.pos,
                    right: circle.pos,
                    transform: `translate3d(0, 0, ${circle.z})`,
                    transitionDelay: circle.delay,
                  }}
                />
              ))}

              {/* Floating Top-Right 3D Medallion */}
              <div
                className="absolute grid aspect-square w-11 h-11 place-content-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-[0_8px_16px_-4px_rgba(15,23,42,0.35)] transition-all duration-500 ease-out [transform:translate3d(0,0,85px)] group-hover:[transform:translate3d(0,0,105px)_scale(1.05)] border border-slate-700/60"
                style={{ top: "20px", right: "20px" }}
              >
                {step ? (
                  <span className="font-mono text-sm font-extrabold tracking-tighter text-white">
                    {step}
                  </span>
                ) : Icon ? (
                  <Icon size={18} className="text-white" />
                ) : (
                  <ULogo className="w-4 fill-white" />
                )}
              </div>
            </div>

            {/* Main Content Floating Layer (Z: 30px) */}
            <div className="relative z-10 flex flex-col justify-between h-full [transform-style:preserve-3d] [transform:translate3d(0,0,30px)]">
              
              <div className="pr-12 sm:pr-14">
                {/* Step Subtitle / Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-100/80">
                    STAGE {step || "01"}
                  </span>
                  {badgeText && (
                    <span className="text-[10px] font-mono text-slate-500 font-medium">
                      {badgeText}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-black transition-colors mb-1.5">
                  {title}
                </h3>

                {/* Summary */}
                {summary && (
                  <p className="text-xs font-mono text-slate-500 font-semibold mb-3">
                    {summary}
                  </p>
                )}

                {/* Description */}
                {description && (
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {description}
                  </p>
                )}
              </div>

              {/* Deliverables / Key Outputs Layer (Z: 40px) */}
              {deliverables && deliverables.length > 0 && (
                <div className="pt-4 border-t border-slate-200/70 [transform-style:preserve-3d] [transform:translate3d(0,0,15px)]">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                      Key Outputs & Deliverables:
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>

                  <ul className="space-y-1.5">
                    {deliverables.map((deliv, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-700 flex items-start gap-2 group/item"
                      >
                        <span className="text-blue-500 text-[11px] font-bold shrink-0 mt-0.5">
                          &bull;
                        </span>
                        <span className="leading-tight group-hover/item:text-slate-900 transition-colors">
                          {deliv}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {children}
            </div>
          </div>
        </div>
      );
    }

    // Default 21st.dev GlassCard implementation (Dark / Original Demo)
    return (
      <div
        ref={ref}
        className={cn(
          "group h-[300px] w-[290px] [perspective:1000px] select-none",
          className
        )}
        {...props}
      >
        <div className="relative h-full rounded-[50px] bg-gradient-to-br from-zinc-900 to-black shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:rgba(0,0,0,0.3)_30px_50px_25px_-40px,rgba(0,0,0,0.1)_0px_25px_30px_0px] group-hover:[transform:rotate3d(1,1,0,30deg)]">
          <div className="absolute inset-2 rounded-[55px] border-b border-l border-white/20 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]" />
          <div className="absolute [transform:translate3d(0,0,26px)]">
            <div className="px-7 pt-[100px] pb-0">
              <span className="block text-xl font-black text-white">
                Monochrome
              </span>
              <span className="mt-5 block text-[15px] text-zinc-300">
                Create, share, and use beautiful custom elements made with CSS.
              </span>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
            <div className="flex gap-2.5 [transform-style:preserve-3d]">
              {[
                { icon: Instagram, delay: "400ms" },
                { icon: Twitter, delay: "600ms" },
                { icon: Github, delay: "800ms" },
              ].map(({ icon: SocialIcon, delay }, index) => (
                <button
                  key={index}
                  className="group/social grid h-[30px] w-[30px] place-content-center rounded-full border-none bg-white shadow-[rgba(0,0,0,0.5)_0px_7px_5px_-5px] transition-all duration-200 ease-in-out group-hover:[box-shadow:rgba(0,0,0,0.2)_-5px_20px_10px_0px] group-hover:[transform:translate3d(0,0,50px)] hover:bg-black active:bg-yellow-400"
                  style={{ transitionDelay: delay }}
                  type="button"
                >
                  <SocialIcon className="h-4 w-4 stroke-black transition-colors" />
                </button>
              ))}
            </div>
            <div className="flex w-2/5 cursor-pointer items-center justify-end transition-all duration-200 ease-in-out hover:[transform:translate3d(0,0,10px)]">
              <button
                className="border-none bg-none text-xs font-bold text-white"
                type="button"
              >
                View more
              </button>
              <ChevronDown className="h-4 w-4 stroke-white" strokeWidth={3} />
            </div>
          </div>
          <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
            {[
              { size: "170px", pos: "8px", z: "20px", delay: "0s" },
              { size: "140px", pos: "10px", z: "40px", delay: "0.4s" },
              { size: "110px", pos: "17px", z: "60px", delay: "0.8s" },
              { size: "80px", pos: "23px", z: "80px", delay: "1.2s" },
            ].map((circle, index) => (
              <div
                key={index}
                className="absolute aspect-square rounded-full bg-white/10 shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              />
            ))}
            <div
              className="absolute grid aspect-square w-[50px] place-content-center rounded-full bg-white shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out [transform:translate3d(0,0,100px)] [transition-delay:1.6s] group-hover:[transform:translate3d(0,0,120px)]"
              style={{ top: "30px", right: "30px" }}
            >
              <ULogo className="w-5 fill-black" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;

