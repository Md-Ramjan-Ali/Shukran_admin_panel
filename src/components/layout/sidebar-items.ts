import { ElementType } from "react";
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
];

