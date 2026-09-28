import React, { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddBtnProps {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const AddBtn: React.FC<AddBtnProps> = ({
  text,
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-2.5",
        "bg-surface-accent hover:bg-surface-accent/90 text-text-inverse",
        "font-semibold text-sm rounded-sm transition-all duration-200",
        "active:scale-95 shadow-sm cursor-pointer",
        className,
      )}
    >
      {icon ? (
        <span className="flex items-center justify-center">{icon}</span>
      ) : (
        <Plus className="w-4 h-4" />
      )}
      <span className="whitespace-nowrap">{text}</span>
    </button>
  );
};

export default AddBtn;