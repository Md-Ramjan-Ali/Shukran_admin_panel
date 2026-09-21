import React from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const PageHeader = ({
  title,
  description,
  className,
}: PageHeaderProps) => {
  return (
    <div className={cn("space-y-3", className)}>
      <h1 className="font-sans text-2xl sm:text-3xl md:text-[42px] font-medium leading-[125%] md:leading-[52.5px] text-[#62443D] dark:text-[#FAF5F4] font-features-['dlig'_on]">
        {title}
      </h1>
      {description && (
        <p className="self-stretch font-sans text-sm font-normal leading-5 text-[#80635D] dark:text-[#A79896] font-features-['dlig'_on]">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;