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
  headerRender?: () => ReactNode;
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
  itemLabel?: string;
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
  itemLabel = "items",
  onPageChange,
}: DataTableProps<T>) {
  return (
    <div className={cn("flex w-full flex-col", className)}>
      <div
        className={cn(
          "w-full overflow-hidden rounded-2xl border border-border-primary bg-surface-card",
          tableClassName,
        )}
      >
        {title && (
          <h2 className="text-xl font-semibold text-text-primary px-5 pt-5 pb-2">
            {title}
          </h2>
        )}

        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-border-primary hover:bg-transparent bg-surface-table-header">
                {columns.map((column, index) => (
                  <TableHead
                    key={index}
                    className={cn(
                      "h-auto px-3 sm:px-5 py-4 text-xs font-semibold whitespace-nowrap text-text-muted uppercase tracking-wider",
                      column.hideOnMobile && "hidden md:table-cell",
                      column.headerClassName,
                    )}
                  >
                    {column.headerRender ? column.headerRender() : column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.length === 0 ? (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-text-muted"
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
                        "border-border-primary transition-colors",
                        onRowClick && "cursor-pointer",
                        selected
                          ? "bg-surface-hover"
                          : "hover:bg-surface-hover/60",
                      )}
                      onClick={() => onRowClick?.(item)}
                      data-state={selected ? "selected" : undefined}
                    >
                      {columns.map((column, index) => (
                        <TableCell
                          key={index}
                          className={cn(
                            "px-3 sm:px-5 py-4 text-sm whitespace-nowrap text-text-secondary",
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

        {/* Pagination — inside the card */}
        {showPagination && totalItems > 0 && onPageChange && (
          <div className="border-t border-border-primary px-5 py-3 bg-surface-table-header">
            <TablePagination
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              itemLabel={itemLabel}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
