"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TablePaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function getPageNumbers(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, 3, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}

export function TablePagination({
  currentPage,
  totalItems,
  itemsPerPage = 10,
  onPageChange,
  className,
}: TablePaginationProps) {
  if (totalItems <= 0) return null;

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-1.5 sm:gap-3 w-full",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="shrink-0 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-white dark:bg-white/10 border border-[#EAD9D5]/80 dark:border-white/10 px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#62443D] dark:text-[#D5C6C4] shadow-xs hover:bg-[#FFF9F8] dark:hover:bg-white/15 disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer transition-colors"
        aria-label="Previous page"
      >
        <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#80635D] dark:text-[#C4B6B4]" />
        <span>Previous</span>
      </button>

      <div className="flex items-center gap-0.5 sm:gap-1.5 md:gap-2 overflow-x-auto no-scrollbar py-0.5">
        {pageNumbers.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-0.5 sm:px-1.5 text-xs sm:text-sm font-medium text-[#80635D] dark:text-[#A79896]"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page as number)}
              className={cn(
                "min-w-6 h-7 sm:min-w-8 sm:h-8 px-1 sm:px-2 flex items-center justify-center rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer shrink-0",
                page === currentPage
                  ? "bg-white dark:bg-white/15 text-[#62443D] dark:text-[#FAF5F4] shadow-xs font-semibold"
                  : "text-[#80635D] dark:text-[#C4B6B4] hover:text-[#62443D] dark:hover:text-[#FAF5F4] hover:bg-white/70 dark:hover:bg-white/10",
              )}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ),
        )}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="shrink-0 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-white dark:bg-white/10 border border-[#EAD9D5]/80 dark:border-white/10 px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#62443D] dark:text-[#D5C6C4] shadow-xs hover:bg-[#FFF9F8] dark:hover:bg-white/15 disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer transition-colors"
        aria-label="Next page"
      >
        <span>Next</span>
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#80635D] dark:text-[#C4B6B4]" />
      </button>
    </div>
  );
}
