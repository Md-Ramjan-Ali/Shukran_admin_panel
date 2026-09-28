"use client";

import React, { ReactNode } from "react";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface DropdownItem {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
  className?: string;
  showDivider?: boolean;
  disabled?: boolean;
}

interface ActionDropdownProps {
  items: DropdownItem[];
  trigger?: ReactNode;
  title?: string;
  align?: "start" | "center" | "end";
}

export const ActionDropdown: React.FC<ActionDropdownProps> = ({
  items,
  trigger,
  title = "Actions",
  align = "end",
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-1.5 hover:bg-surface-hover rounded-lg transition-colors text-text-muted hover:text-text-primary hover:cursor-pointer outline-none flex items-center justify-center">
        {trigger || <EllipsisVertical className="w-5 h-5" />}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align={align}
        className="w-48 bg-surface-card rounded-xl shadow-xl border border-border-primary py-1 text-text-primary"
      >
        {title && (
          <DropdownMenuGroup>
            <DropdownMenuLabel className="px-4 py-2 text-xs font-bold text-text-muted uppercase tracking-wider text-left">
              {title}
            </DropdownMenuLabel>
          </DropdownMenuGroup>
        )}

        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.showDivider && (
              <DropdownMenuSeparator className="my-1 border-t border-border-primary" />
            )}
            <DropdownMenuItem
              onClick={item.onClick}
              disabled={item.disabled}
              className={`flex items-center justify-between w-full gap-3 px-4 py-2 text-sm transition-colors cursor-pointer focus:bg-surface-hover outline-none disabled:opacity-50 disabled:cursor-not-allowed ${item.className || "text-text-secondary hover:text-text-primary"}`}
            >
              <span>{item.label}</span>
              {item.icon && (
                <span className="w-4 h-4 flex items-center justify-center">
                  {item.icon}
                </span>
              )}
            </DropdownMenuItem>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
