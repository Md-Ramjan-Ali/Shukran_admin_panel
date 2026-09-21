"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  isUnread?: boolean;
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    title: "New User Registered",
    description: "A new user, Olivia Martin, has created an account.",
    time: "5m ago",
    isUnread: true,
  },
  {
    id: "2",
    title: "New Premium Subscription",
    description: "Emma Wilson has subscribed to the Premium Monthly Plan.",
    time: "2h ago",
    isUnread: true,
  },
  {
    id: "3",
    title: "New Support Request",
    description:
      'Sophia Brown submitted a new support request: "Premium feature not working."',
    time: "5h ago",
    isUnread: true,
  },
  {
    id: "4",
    title: "Support Request Updated",
    description: "A user has replied to support request #4829.",
    time: "Yesterday",
    isUnread: false,
  },
];

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => n.isUnread).length;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Bell Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#231B1B] border border-[#EFE5E3] dark:border-[#2F2424] shadow-xs hover:bg-[#FAF7F6] dark:hover:bg-[#2D2323] transition-all cursor-pointer group"
        aria-label="Toggle notifications"
        aria-expanded={isOpen}
      >
        <Bell className="h-4.5 w-4.5 text-[#5A4644] dark:text-[#EDE3E2] group-hover:scale-105 transition-transform" />

        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#DFC1BD] text-[#42312F] text-[10.5px] font-bold ring-2 ring-[#F0DCD9] dark:ring-[#1A1414] shadow-xs">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Popover Dropdown Card */}
      {isOpen && (
        <div
          className={cn(
            "absolute right-0 top-12 z-50 w-82.5 sm:w-92.5 rounded-3xl bg-[#FFF8F6] dark:bg-[#1E1717] border border-[#F4E6E3] dark:border-[#2E2424] shadow-xl p-5 sm:p-6 animate-in fade-in zoom-in-95 duration-200",
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F6ECE9] dark:border-[#2A2020]">
            <h3 className="text-lg font-bold text-[#4A322F] dark:text-[#F3EBE9] tracking-tight">
              Notifications
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBF0ED] dark:bg-[#2C2121] text-[#7A6461] dark:text-[#C5B8B6] hover:bg-[#F3E5E2] dark:hover:bg-[#382C2C] transition-colors cursor-pointer"
              aria-label="Close notifications modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Notifications Items List */}
          <div className="divide-y divide-[#F6ECE9] dark:divide-[#2A2020] max-h-95 overflow-y-auto overflow-x-hidden custom-scrollbar">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="py-3 flex items-start gap-3 px-2 rounded-xl group cursor-pointer hover:bg-[#FBF0ED]/60 dark:hover:bg-[#251D1D]/60 transition-colors"
              >
                {/* Unread Indicator Dot */}
                <div className="w-2.5 pt-1.5 shrink-0 flex justify-center">
                  {item.isUnread ? (
                    <span className="h-2 w-2 rounded-full bg-[#8C6B67] dark:bg-[#D4B5B0]" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-transparent" />
                  )}
                </div>

                {/* Content Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-[14px] font-semibold text-[#3D2927] dark:text-[#EFE5E3] leading-snug truncate">
                      {item.title}
                    </h4>
                    <span className="text-[12px] text-[#A08E8C] dark:text-[#8C7A78] shrink-0 font-normal">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#7A6461] dark:text-[#B3A4A2] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
