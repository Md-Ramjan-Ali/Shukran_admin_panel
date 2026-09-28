"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { DataTable, Column } from "@/components/shared/DataTable/DataTable";
import { ActionDropdown } from "@/components/shared/ActionDropdown/ActionDropdown";
import { UserItem, MOCK_USERS } from "./data";
import {
  StatusBadge,
  RoleBadge,
  BranchBadge,
  UserAvatar,
  Checkbox,
} from "./UserTableCells";

interface UserTableProps {
  data?: UserItem[];
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export default function UserTable({
  data = MOCK_USERS,
  currentPage,
  totalItems,
  onPageChange,
}: UserTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const isAllSelected =
    data.length > 0 && selectedIds.length === data.length;
  const isSomeSelected =
    selectedIds.length > 0 && selectedIds.length < data.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(data.map((item) => item.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const columns: Column<UserItem>[] = [
    {
      header: "",
      headerRender: () => (
        <Checkbox
          checked={isAllSelected}
          indeterminate={isSomeSelected}
          onChange={toggleSelectAll}
        />
      ),
      render: (item) => (
        <Checkbox
          checked={selectedIds.includes(item.id)}
          onChange={() => toggleSelectRow(item.id)}
        />
      ),
      headerClassName: "w-10 text-center",
      cellClassName: "w-10 text-center",
    },
    {
      header: "#",
      render: (item) => (
        <span className="text-text-muted text-xs font-medium">{item.serial}</span>
      ),
      headerClassName: "w-10",
      cellClassName: "w-10",
    },
    {
      header: "Name",
      render: (item) => (
        <div className="flex items-center gap-3">
          <UserAvatar name={item.name} color={item.avatarColor} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-text-primary">
              {item.name}
            </span>
            <span className="text-[11px] text-text-muted">{item.email}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Phone",
      render: (item) => (
        <span className="text-xs text-text-secondary">{item.phone}</span>
      ),
      headerClassName: "hidden md:table-cell",
      cellClassName: "hidden md:table-cell",
    },
    {
      header: "Branch",
      render: (item) => <BranchBadge branch={item.branch} />,
      headerClassName: "hidden lg:table-cell",
      cellClassName: "hidden lg:table-cell",
    },
    {
      header: "Role",
      render: (item) => <RoleBadge role={item.role} />,
      headerClassName: "hidden lg:table-cell",
      cellClassName: "hidden lg:table-cell",
    },
    {
      header: "Status",
      render: (item) => <StatusBadge status={item.status} />,
    },
    {
      header: "Actions",
      render: (item) => (
        <div className="flex justify-end">
          <ActionDropdown
            title="User Actions"
            items={[
              {
                label: "Edit User",
                icon: <Pencil className="w-3.5 h-3.5" />,
                onClick: () => console.log("Edit", item.id),
              },
              {
                label: "Delete User",
                icon: <Trash2 className="w-3.5 h-3.5" />,
                onClick: () => console.log("Delete", item.id),
                className: "text-red-400 hover:text-red-300",
                showDivider: true,
              },
            ]}
          />
        </div>
      ),
      headerClassName: "text-right w-12",
      cellClassName: "text-right w-12",
    },
  ];

  return (
    <DataTable<UserItem>
      columns={columns}
      data={data}
      getRowKey={(item) => item.id}
      emptyMessage="No users found."
      showPagination
      currentPage={currentPage}
      totalItems={totalItems}
      itemsPerPage={8}
      itemLabel="users"
      onPageChange={onPageChange}
    />
  );
}
