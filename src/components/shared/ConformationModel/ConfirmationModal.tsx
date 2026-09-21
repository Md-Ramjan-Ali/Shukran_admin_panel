"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { HelpCircle, Loader2, AlertTriangle } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  icon?: React.ReactNode;
  isLoading?: boolean;
  variant?: "default" | "destructive";
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  icon,
  isLoading = false,
  variant,
}: ConfirmationModalProps) => {
  const isDestructive =
    variant === "destructive" ||
    confirmText.toLowerCase().includes("delete") ||
    confirmText.toLowerCase().includes("remove");

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-105 rounded-[28px] border border-[#F0E4E2] dark:border-white/10 bg-[#FFF9F8] dark:bg-[#1E1514] p-6 sm:p-7 shadow-2xl space-y-4">
        <div className="flex flex-col items-center text-center space-y-3 pt-2">
          {/* Top Icon Badge */}
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors ${
              isDestructive
                ? "bg-[#FDE8E8] dark:bg-red-950/40 text-[#C94A4A] dark:text-red-400"
                : "bg-[#FFF0EE] dark:bg-white/10 text-[#80635D] dark:text-[#FAF5F4]"
            }`}
          >
            {icon ||
              (isDestructive ? (
                <AlertTriangle className="h-7 w-7" />
              ) : (
                <HelpCircle className="h-7 w-7" />
              ))}
          </div>

          <DialogHeader className="space-y-1 text-center">
            <DialogTitle className="text-lg sm:text-xl font-semibold text-[#533835] dark:text-[#FAF5F4] text-center">
              {title}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-[#80635D] dark:text-[#A79896] leading-relaxed text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <DialogFooter className="flex flex-row items-center gap-3 pt-4 border-t border-[#F0E4E2] dark:border-white/10 sm:justify-center">
          <button
            type="button"
            disabled={isLoading}
            onClick={handleCancel}
            className="flex-1 rounded-full border border-[#E8D5D1] dark:border-white/15 bg-white dark:bg-white/5 py-2.5 px-4 text-xs sm:text-sm font-medium text-[#62443D] dark:text-[#FAF5F4] hover:bg-[#F8EFEF] dark:hover:bg-white/10 transition-colors shadow-2xs cursor-pointer disabled:opacity-50"
          >
            {cancelText}
          </button>
          <button
            type="button"
            disabled={isLoading}
            onClick={handleConfirm}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 px-4 text-xs sm:text-sm font-medium transition-colors shadow-2xs cursor-pointer disabled:opacity-50 ${
              isDestructive
                ? "border border-red-200 dark:border-red-900/40 bg-[#D9534F] hover:bg-[#C9423E] text-white shadow-red-500/10"
                : "border border-[#E2CBC7] dark:border-white/15 bg-[#EED8D6] dark:bg-[#45312E] hover:bg-[#E7CCC9] dark:hover:bg-[#523B38] text-[#533835] dark:text-[#FAF5F4]"
            }`}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              confirmText
            )}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
