"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  LineChart,
  CreditCard,
  MessageCircle,
  Trophy,
  User,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  icon: LucideIcon | React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  href?: string;
  onClick?: () => void;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Home", icon: Home },
  { label: "Portfolio", icon: LineChart },
  { label: "Transactions", icon: CreditCard },
  { label: "Messages", icon: MessageCircle },
  { label: "Rewards", icon: Trophy },
  { label: "Profile", icon: User },
];

const MOBILE_LABEL_WIDTH = 76;

export type BottomNavBarProps = {
  items?: NavItem[];
  className?: string;
  defaultIndex?: number;
  activeIndex?: number;
  onSelect?: (index: number, item: NavItem) => void;
  stickyBottom?: boolean;
  theme?: "light" | "slate" | "dark";
};

export function BottomNavBar({
  items = DEFAULT_NAV_ITEMS,
  className,
  defaultIndex = 0,
  activeIndex: controlledIndex,
  onSelect,
  stickyBottom = false,
  theme = "light",
}: BottomNavBarProps) {
  const [internalIndex, setInternalIndex] = useState(defaultIndex);
  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const handleSelect = (idx: number, item: NavItem) => {
    if (controlledIndex === undefined) {
      setInternalIndex(idx);
    }
    if (onSelect) {
      onSelect(idx, item);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <motion.nav
      initial={{ scale: 0.92, opacity: 0, y: stickyBottom ? 20 : 0 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full flex items-center p-1 sm:p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] space-x-0.5 sm:space-x-1 max-w-[calc(100vw-24px)] overflow-x-auto no-scrollbar h-[48px] sm:h-[52px]",
        stickyBottom && "fixed inset-x-0 bottom-4 mx-auto z-40 w-fit",
        className,
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        const content = (
          <>
            <Icon
              size={17}
              strokeWidth={isActive ? 2.2 : 1.8}
              aria-hidden="true"
              className={cn(
                "transition-colors duration-200 shrink-0",
                isActive ? "text-white" : "text-slate-600 group-hover:text-slate-900"
              )}
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "5px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 360, damping: 30 },
                opacity: { duration: 0.18 },
                marginLeft: { duration: 0.18 },
              }}
              className="overflow-hidden flex items-center max-w-[80px]"
            >
              <span
                className={cn(
                  "font-medium text-[11px] sm:text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis leading-tight",
                  isActive ? "text-white" : "opacity-0"
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </>
        );

        if (item.href) {
          return (
            <motion.a
              key={item.label}
              href={item.href}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleSelect(idx, item)}
              className={cn(
                "group flex items-center gap-0 px-2.5 sm:px-3 py-1 rounded-full transition-all duration-200 relative h-8 sm:h-9 shrink-0 focus:outline-none select-none",
                isActive
                  ? "bg-slate-900 text-white shadow-sm font-semibold"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
              )}
              aria-label={item.label}
            >
              {content}
            </motion.a>
          );
        }

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "group flex items-center gap-0 px-2.5 sm:px-3 py-1 rounded-full transition-all duration-200 relative h-8 sm:h-9 shrink-0 focus:outline-none select-none",
              isActive
                ? "bg-slate-900 text-white shadow-sm font-semibold"
                : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
            )}
            onClick={() => handleSelect(idx, item)}
            aria-label={item.label}
            type="button"
          >
            {content}
          </motion.button>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;

