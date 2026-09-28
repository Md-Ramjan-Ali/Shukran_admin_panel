"use client";

import { Search, MapPin, ChevronDown } from "lucide-react";
import { FaUser } from "react-icons/fa";

interface UserFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  branch: string;
  onBranchChange: (value: string) => void;
  role: string;
  onRoleChange: (value: string) => void;
}

export default function UserFilters({
  search,
  onSearchChange,
  branch,
  onBranchChange,
  role,
  onRoleChange,
}: UserFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search Input */}
      <div className="relative flex-1 min-w-100 max-w-lg self-stretch flex items-stretch">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search user by name, email, phone, branch..."
          className="w-full py-2.75 pl-10 pr-4 bg-surface-input border border-border-input rounded-lg text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-accent/60 transition-colors"
        />
      </div>

      {/* Branch Filter */}
      <div className="relative self-stretch flex items-stretch">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
        <select
          value={branch}
          onChange={(e) => onBranchChange(e.target.value)}
          className="py-[10px] pl-8 pr-9 bg-surface-input border border-border-input rounded-lg text-xs text-text-secondary focus:outline-none focus:border-border-accent/60 transition-colors cursor-pointer appearance-none"
        >
          <option value="">All Branches</option>
          <option value="SOHRA BRANCH">Sohra Branch</option>
          <option value="MUSCAT BRANCH">Muscat Branch</option>
          <option value="JALARHALI BRANCH">Jalarhali Branch</option>
          <option value="RIYADH BRANCH">Riyadh Branch</option>
          <option value="ALL BRANCHES">All Branches</option>
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
      </div>

      {/* Role Filter */}
      <div className="relative self-stretch flex items-stretch">
        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-text-muted pointer-events-none" />
        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          className="py-[10px] pl-8 pr-9 bg-surface-input border border-border-input rounded-lg text-xs text-text-secondary focus:outline-none focus:border-border-accent/60 transition-colors cursor-pointer appearance-none"
        >
          <option value="">All Roles</option>
          <option value="ADMIN">Admin (Super Admin)</option>
          <option value="AREA MANAGER">Area Manager</option>
          <option value="EMPLOYEE">Employee</option>
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
      </div>
    </div>
  );
}
