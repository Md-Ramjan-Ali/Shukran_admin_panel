"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Bell, Calendar, Menu } from "lucide-react";
import { useAppDispatch } from "@/lib/redux/hooks";
import { toggleSidebar } from "@/lib/redux/slices/dashboardSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const [formattedTime, setFormattedTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      setFormattedTime(now.toLocaleString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between bg-surface-main px-4 md:px-6 border-b border-border-primary select-none">
      {/* Left Section — Mobile Menu Toggle & Global Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        {/* Mobile menu toggle */}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="rounded-lg p-2 text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors lg:hidden cursor-pointer"
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full h-9 pl-9 pr-14 bg-surface-card border border-border-secondary rounded-xl text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-accent/50 transition-colors"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-surface-hover border border-border-secondary text-[10px] text-text-secondary font-mono pointer-events-none">
            Ctrl + K
          </div>
        </div>
      </div>

      {/* Right Section — Notifications, Date & Profile Greeting */}
      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <button
          type="button"
          className="relative p-2 rounded-xl bg-surface-card border border-border-secondary text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-surface-accent ring-2 ring-surface-main" />
        </button>

        {/* Date & Time Widget */}
        <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-surface-card border border-border-secondary">
          <Calendar className="h-4 w-4 text-text-accent shrink-0" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[11px] font-semibold text-text-primary tracking-tight">
              {formattedTime || "Sep 20, 2026, 1:43:19 PM"}
            </span>
            <span className="text-[9px] text-text-muted mt-0.5">
              Bangladesh Standard Time
            </span>
          </div>
        </div>

        {/* Greeting & Admin Avatar */}
        <div className="flex items-center gap-2.5 pl-2">
          <div className="hidden md:flex flex-col text-right leading-none">
            <span className="text-[11px] text-text-secondary">Good Afternoon,</span>
            <span className="text-xs font-bold text-text-accent mt-0.5">
              Admin
            </span>
          </div>

          <Link
            href="/dashboard"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-hover border border-border-accent/40 text-text-accent font-bold text-xs shadow-xs hover:scale-105 transition-transform select-none cursor-pointer"
            title="Admin Profile"
          >
            SA
          </Link>
        </div>
      </div>
    </header>
  );
}
