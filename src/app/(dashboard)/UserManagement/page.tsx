"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import AddBtn from "@/components/shared/AddBtn/AddBtn";
import UserFilters from "@/components/features/user-management/UserFilters";
import UserTable from "@/components/features/user-management/UserTable";

const TOTAL_USERS = 2500;

export default function UserManagementPage() {
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("");
  const [role, setRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <PageHeader
        title="Users"
        titleAccent="Management"
        description="Manage system users, roles and permissions across all branches."
      />

      {/* Toolbar: Filters + Add Button */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <UserFilters
          search={search}
          onSearchChange={setSearch}
          branch={branch}
          onBranchChange={setBranch}
          role={role}
          onRoleChange={setRole}
        />
        <AddBtn
          text="Add User"
          icon={<Plus className="w-4 h-4" />}
          onClick={() => console.log("Add User clicked")}
        />
      </div>

      {/* Users Table */}
      <UserTable
        currentPage={currentPage}
        totalItems={TOTAL_USERS}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
