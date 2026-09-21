"use client";

import React, { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  actionText?: string;
  actionIcon?: ReactNode;
  onAction?: () => void;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionText,
  actionIcon,
  onAction,
  className = "",
}) => {
  return (
    <div
      className={`rounded-[24px] sm:rounded-[28px] border border-[#F6E7E7] dark:border-white/10 bg-[#FFF7F6] dark:bg-white/5 p-8 sm:p-12 text-center shadow-[0_1px_2px_0_rgba(216,184,181,0.18)] space-y-4 ${className}`}
    >
      {icon && (
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF0EE] dark:bg-white/10 text-[#80635D] dark:text-[#FAF5F4]">
          {icon}
        </div>
      )}

      <div className="space-y-1">
        <h3 className="text-base font-semibold text-[#62443D] dark:text-[#FAF5F4]">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-[#80635D] dark:text-[#A79896] max-w-sm mx-auto">
            {description}
          </p>
        )}
      </div>

      {actionText && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center gap-1.5 rounded-full border border-[#E2CBC7] dark:border-white/15 bg-[#EED8D6] dark:bg-[#45312E] hover:bg-[#E7CCC9] dark:hover:bg-[#523B38] px-4 py-2 text-xs font-medium text-[#533835] dark:text-[#FAF5F4] transition-colors shadow-2xs cursor-pointer"
        >
          {actionIcon}
          <span>{actionText}</span>
        </button>
      )}
    </div>
  );
};

export default EmptyState;
