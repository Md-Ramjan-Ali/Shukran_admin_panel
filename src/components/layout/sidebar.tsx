"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { setSidebarOpen } from "@/lib/redux/slices/dashboardSlice";
import { SIDEBAR_ITEMS } from "./sidebar-items";

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(
    (state) => state.dashboard.isSidebarOpen,
  );

  // Close sidebar on mobile after navigating to a route
  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      dispatch(setSidebarOpen(false));
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-xs z-40 transition-opacity lg:hidden",
          isSidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
        onClick={() => dispatch(setSidebarOpen(false))}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-66 bg-surface-sidebar border-r border-border-primary transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 shrink-0 flex flex-col justify-between select-none",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* Brand Header — Fixed h-20 height matching Navbar */}
          <div className="h-20 flex items-center p-5 gap-3.5 self-stretch border-b border-border-primary shrink-0">
            <Link
              href="/dashboard"
              onClick={handleNavClick}
              className="flex flex-col group cursor-pointer justify-center"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-text-primary tracking-wide leading-none">
                  Shukran <span className="text-text-accent">Admin</span>
                </span>
              </div>
              <p className="text-[11px] text-text-muted font-medium tracking-wider mt-1 leading-none">
                Control • Monitor • Grow
              </p>
            </Link>
          </div>

          {/* Navigation Menu + Footer Section */}
          <div className="flex-1 flex flex-col justify-between p-3 overflow-hidden">
            <nav className="flex-1 w-full overflow-y-auto custom-scrollbar pr-1">
              <div className="space-y-1 w-full">
                {SIDEBAR_ITEMS.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/dashboard" &&
                      pathname.startsWith(item.href));

                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      prefetch={true}
                      href={item.href}
                      onClick={handleNavClick}
                      className={cn(
                        "flex items-center justify-between px-3.5 py-2.5 rounded-sm transition-all duration-100 group w-full text-[13.5px]",
                        isActive
                          ? "bg-surface-accent text-text-inverse font-semibold shadow-xs"
                          : "text-text-secondary hover:bg-surface-hover hover:text-text-primary font-normal",
                      )}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <Icon
                          className={cn(
                            "w-4.5 h-4.5 shrink-0 transition-transform duration-150 group-hover:scale-105",
                            isActive
                              ? "text-text-inverse"
                              : "text-text-secondary group-hover:text-text-primary",
                          )}
                          strokeWidth={isActive ? 2.2 : 1.8}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>

                      {item.badge !== undefined && (
                        <span
                          className={cn(
                            "px-2 py-0.5 rounded-full text-[11px] font-bold shrink-0 ml-2",
                            isActive
                              ? "bg-black/20 text-text-inverse"
                              : "bg-surface-accent text-text-inverse",
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Bottom Section: Admin User Footer Card */}
            <div className="pt-3 border-t border-border-primary mt-2 shrink-0">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-card border border-border-secondary">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-surface-hover text-text-secondary flex items-center justify-center shrink-0 border border-border-secondary">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-text-primary truncate leading-tight">
                      Admin User
                    </p>
                    <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider truncate mt-0.5">
                      ADMINISTRATOR
                    </p>
                  </div>
                </div>
                <Link
                  href="/settings"
                  onClick={handleNavClick}
                  className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors cursor-pointer"
                  title="Settings"
                >
                  <Settings className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
