import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import React from "react";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  iconBg?: string;
  iconColor?: string;
  hideIconBg?: boolean;
  change?: number;
  periodText?: string;
  description?: React.ReactNode;
  isGrowth?: boolean;
  isCurrency?: boolean;
  isPositive?: boolean;
  sign?: "up" | "down" | "flat";
  trendIcon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  iconBg,
  iconColor = "text-gray-400",
  hideIconBg = false,
  change,
  periodText,
  description,
  isGrowth,
  isCurrency,
  isPositive: isPositiveProp,
  sign,
  trendIcon: TrendIcon,
  className,
  onClick,
}: StatCardProps) => {
  const showChange = change !== undefined;
  const isPositive = isPositiveProp ?? (change ?? 0) >= 0;

  return (
    <Card
      onClick={onClick}
      className={cn(
        "flex-1 flex flex-col justify-between py-8 px-6 rounded-[24px] border border-[#F6E7E7] dark:border-white/10 bg-[#FFF7F6] dark:bg-white/5 shadow-[0_1.332px_2.663px_0_rgba(216,184,181,0.18)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] ring-0 transition-all duration-300",
        onClick &&
          "cursor-pointer hover:border-[#DFBFBA]/60 hover:shadow-[0_8px_25px_rgba(140,85,80,0.12)] hover:-translate-y-0.5 active:scale-[0.98] select-none",
        className,
      )}
    >
      <CardContent className="p-0 flex flex-col justify-between h-full min-h-35 gap-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <p className="self-stretch text-sm font-medium leading-5 text-[#80635D] dark:text-[#A79896]">
            {title}
          </p>

          {Icon && (
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-xl",
                !hideIconBg && (iconBg || "bg-[#F5ECEB] dark:bg-[#2A2020]"),
                iconColor,
              )}
            >
              <Icon size={18} strokeWidth={2.2} />
            </div>
          )}
        </div>

        {/* Value */}
        <h3 className="self-stretch text-2xl md:text-[36px] font-bold leading-11 tracking-[-0.72px] text-[#62443D] dark:text-[#FAF5F4]">
          {isCurrency ? `$${value}` : value}
          {isGrowth ? ` %` : ``}
        </h3>

        {/* Change OR Description */}
        {showChange ? (
          <div className="mt-2 flex items-center gap-1.5 text-xs font-medium">
            <span
              className={cn(
                "flex items-center gap-0.5",
                sign === "flat"
                  ? "text-[#8C7470] dark:text-[#A79896]"
                  : isPositive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-rose-500",
              )}
            >
              {TrendIcon ? (
                <TrendIcon size={12} strokeWidth={2.5} />
              ) : sign === "up" || isPositive ? (
                <ArrowUpRight size={12} />
              ) : (
                <ArrowDownRight size={12} />
              )}
              {isPositive && "+"}
              {change}%
            </span>
            <span className="text-[#8C7470] dark:text-[#A79896]">
              {periodText}
            </span>
          </div>
        ) : description ? (
          <div className="self-stretch text-xs font-normal leading-4.5 text-[#80635D] dark:text-[#A79896]">
            {description}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};
