import React from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: string;
  titleAccent?: string;
  description?: string;
  className?: string;
}

export const PageHeader = ({
  title,
  titleAccent,
  description,
  className,
}: PageHeaderProps) => {
  return (
    <div className={cn("space-y-1.5", className)}>
      <h1 className="font-sans text-2xl sm:text-3xl font-bold leading-tight text-text-primary">
        {title}
        {titleAccent && (
          <span className="text-text-accent"> {titleAccent}</span>
        )}
      </h1>
      {description && (
        <p className="text-sm font-normal leading-5 text-text-muted">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;