"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TablePaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage?: number;
  itemLabel?: string;
  onPageChange: (page: number) => void;
  className?: string;
}

function getPageNumbers(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5, "ellipsis", totalPages];
  }
  if (currentPage >= totalPages - 2) {
    return [1, "ellipsis", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages];
}

export function TablePagination({
  currentPage,
  totalItems,
  itemsPerPage = 10,
  itemLabel = "items",
  onPageChange,
  className,
}: TablePaginationProps) {
  if (totalItems <= 0) return null;

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, totalItems);
  const formattedTotal = totalItems.toLocaleString();

  return (
    <div className={cn("flex items-center justify-between gap-3 w-full", className)}>
      {/* Left: Showing X to Y of Z */}
      <p className="text-xs text-text-muted shrink-0">
        Showing{" "}
        <span className="font-semibold text-text-secondary">{from}</span>
        {" "}to{" "}
        <span className="font-semibold text-text-secondary">{to}</span>
        {" "}of{" "}
        <span className="font-semibold text-text-secondary">{formattedTotal}</span>
        {" "}{itemLabel}
      </p>

      {/* Right: Prev + Page Numbers + Next */}
      <div className="flex items-center gap-1">
        {/* Prev */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-7 h-7 flex items-center justify-center rounded-md border border-border-secondary bg-surface-hover text-text-muted hover:text-text-primary hover:border-border-accent/50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="w-7 h-7 flex items-center justify-center text-xs text-text-muted"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page as number)}
              className={cn(
                "w-7 h-7 flex items-center justify-center rounded-md text-xs font-medium transition-all cursor-pointer",
                page === currentPage
                  ? "bg-surface-accent text-text-inverse font-bold"
                  : "text-text-muted hover:text-text-primary hover:bg-surface-hover border border-transparent hover:border-border-secondary",
              )}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ),
        )}

        {/* Next */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-7 h-7 flex items-center justify-center rounded-md border border-border-secondary bg-surface-hover text-text-muted hover:text-text-primary hover:border-border-accent/50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
