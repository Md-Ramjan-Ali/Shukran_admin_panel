import { ElementType } from "react";
import { FaUserCog } from "react-icons/fa";
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
    icon: FaUserCog,
    label: "Users Management",
    href: "/UserManagement",
  },
];

