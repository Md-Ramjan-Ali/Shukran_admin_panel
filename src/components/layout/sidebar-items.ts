import { ElementType } from "react";
import { FaUserCog, FaRoute, FaUsers } from "react-icons/fa";
import {
  ClipboardList,
  Store,
  Package,
  TriangleAlert,
  Receipt,
  BarChart2,
  GitBranch,
} from "lucide-react";
import { IoMdHome } from "react-icons/io";

export interface NavItem {
  icon: ElementType;
  label: string;
  href: string;
  badge?: string | number;
}

export const SIDEBAR_ITEMS: NavItem[] = [
  {
    icon: IoMdHome,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: ClipboardList,
    label: "Assignments",
    href: "/assignments",
  },
  {
    icon: FaUserCog,
    label: "Users Management",
    href: "/UserManagement",
  },
  {
    icon: FaRoute,
    label: "Routes & Mapping",
    href: "/routes-mapping",
  },
  {
    icon: Store,
    label: "Shops",
    href: "/shops",
  },
  {
    icon: Package,
    label: "Inventory",
    href: "/inventory",
  },
  {
    icon: TriangleAlert,
    label: "Damaged & Expired Stock",
    href: "/damaged-stock",
  },
  {
    icon: Receipt,
    label: "Orders & Invoices",
    href: "/orders",
  },
  {
    icon: BarChart2,
    label: "Reports",
    href: "/reports",
  },
  {
    icon: FaUsers ,
    label: "Employees",
    href: "/employees",
  },
  {
    icon: GitBranch,
    label: "Branch",
    href: "/branch",
  },
];

