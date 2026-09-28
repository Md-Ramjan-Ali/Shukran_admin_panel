import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserStatus } from "./data";

// --- Status Badge ---
export function StatusBadge({ status }: { status: UserStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide",
        status === "ACTIVE" && "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
        status === "LINKED" && "bg-blue-500/15 text-blue-400 border border-blue-500/30",
        status === "INACTIVE" && "bg-text-muted/15 text-text-muted border border-border-secondary",
      )}
    >
      {status}
    </span>
  );
}

// --- Role Badge ---
export function RoleBadge({ role }: { role: string }) {
  const isAdmin = role.toLowerCase().includes("admin");
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border",
        isAdmin
          ? "bg-surface-accent/15 text-text-accent border-border-accent/30"
          : "bg-surface-hover text-text-secondary border-border-secondary",
      )}
    >
      {role}
    </span>
  );
}

// --- Branch Badge ---
export function BranchBadge({ branch }: { branch: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-text-secondary">
      <MapPin className="w-3 h-3 text-text-accent shrink-0" />
      {branch}
    </span>
  );
}

// --- User Avatar ---
export function UserAvatar({ name, color }: { name: string; color?: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0",
        color || "bg-surface-accent",
      )}
    >
      {initials}
    </div>
  );
}

// --- Checkbox ---
export function Checkbox({
  checked,
  indeterminate,
  onChange,
}: {
  checked: boolean;
  indeterminate?: boolean;
  onChange: () => void;
}) {
  return (
    <input
      type="checkbox"
      checked={checked}
      ref={(el) => {
        if (el) el.indeterminate = indeterminate ?? false;
      }}
      onChange={onChange}
      onClick={(e) => e.stopPropagation()}
      className="w-4 h-4 rounded border-border-secondary bg-surface-hover accent-surface-accent cursor-pointer"
    />
  );
}
