"use client";

import { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { TablePagination } from "./TablePagination";

export interface Column<T> {
  header: string;
  accessor?: keyof T;
  render?: (item: T) => ReactNode;
  headerClassName?: string;
  cellClassName?: string;
  hideOnMobile?: boolean;
}

interface DataTableProps<T> {
  title?: string;
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
  getRowKey: (item: T) => string;
  isRowSelected?: (item: T) => boolean;
  className?: string;
  tableClassName?: string;
  showPagination?: boolean;
  currentPage?: number;
  totalItems?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
}

export function DataTable<T>({
  title,
  columns,
  data,
  emptyMessage = "No data found",
  onRowClick,
  getRowKey,
  isRowSelected,
  className,
  tableClassName,
  showPagination = false,
  currentPage = 1,
  totalItems = 0,
  itemsPerPage = 10,
  onPageChange,
}: DataTableProps<T>) {
  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      <div
        className={cn(
          "w-full overflow-hidden rounded-[28px] border border-[#F0E4E2] dark:border-white/10 bg-[#FFF9F8]/90 dark:bg-white/5 p-3 sm:p-5 shadow-[0_4px_20px_rgba(140,85,80,0.05)]",
          tableClassName,
        )}
      >
        {title && (
          <h2 className="text-xl font-semibold text-[#62443D] dark:text-[#FAF5F4] p-2">
            {title}
          </h2>
        )}

        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-[#F0E4E2] dark:border-white/10 hover:bg-transparent">
                {columns.map((column, index) => (
                  <TableHead
                    key={index}
                    className={cn(
                      "h-auto px-3 sm:px-5 py-4 text-sm font-semibold whitespace-nowrap text-[#62443D] dark:text-[#FAF5F4]",
                      column.hideOnMobile && "hidden md:table-cell",
                      column.headerClassName,
                    )}
                  >
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-[#80635D] dark:text-[#A79896]"
                  >
                    {emptyMessage}
                  </TableCell>
                </TableRow>
              ) : (
                data.map((item) => {
                  const selected = isRowSelected?.(item) ?? false;

                  return (
                    <TableRow
                      key={getRowKey(item)}
                      className={cn(
                        "border-[#F6EBE9] dark:border-white/5 transition-colors",
                        onRowClick && "cursor-pointer",
                        selected
                          ? "bg-[#F3DDD9] dark:bg-white/10"
                          : "hover:bg-[#FBF6F5] dark:hover:bg-white/5",
                      )}
                      onClick={() => onRowClick?.(item)}
                      data-state={selected ? "selected" : undefined}
                    >
                      {columns.map((column, index) => (
                        <TableCell
                          key={index}
                          className={cn(
                            "px-3 sm:px-5 py-4 text-sm whitespace-nowrap text-[#62443D] dark:text-[#D5C6C4]",
                            column.hideOnMobile && "hidden md:table-cell",
                            column.cellClassName,
                          )}
                        >
                          {column.render
                            ? column.render(item)
                            : column.accessor
                              ? String(item[column.accessor as keyof T])
                              : null}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {showPagination && totalItems > 0 && onPageChange && (
        <TablePagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
