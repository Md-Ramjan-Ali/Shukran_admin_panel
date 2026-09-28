"use client";

import { Search, MapPin, Shield } from "lucide-react";

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
      <div className="relative flex-1 min-w-50 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search user by name, email, phone, branch..."
          className="w-full h-9 pl-9 pr-4 bg-surface-card border border-border-secondary rounded-xl text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-accent/60 transition-colors"
        />
      </div>

      {/* Branch Filter */}
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
        <select
          value={branch}
          onChange={(e) => onBranchChange(e.target.value)}
          className="h-9 pl-8 pr-8 bg-surface-card border border-border-secondary rounded-xl text-xs text-text-secondary focus:outline-none focus:border-border-accent/60 transition-colors cursor-pointer appearance-none"
        >
          <option value="">All Branches</option>
          <option value="SOHRA BRANCH">Sohra Branch</option>
          <option value="MUSCAT BRANCH">Muscat Branch</option>
          <option value="JALARHALI BRANCH">Jalarhali Branch</option>
          <option value="RIYADH BRANCH">Riyadh Branch</option>
          <option value="ALL BRANCHES">All Branches</option>
        </select>
      </div>

      {/* Role Filter */}
      <div className="relative">
        <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
        <select
          value={role}
          onChange={(e) => onRoleChange(e.target.value)}
          className="h-9 pl-8 pr-8 bg-surface-card border border-border-secondary rounded-xl text-xs text-text-secondary focus:outline-none focus:border-border-accent/60 transition-colors cursor-pointer appearance-none"
        >
          <option value="">All Roles</option>
          <option value="ADMIN">Admin (Super Admin)</option>
          <option value="AREA MANAGER">Area Manager</option>
          <option value="EMPLOYEE">Employee</option>
        </select>
      </div>
    </div>
  );
}
