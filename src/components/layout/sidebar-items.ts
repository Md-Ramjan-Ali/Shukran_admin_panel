import {
  LayoutGrid,
  LucideIcon,
} from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  badge?: string | number;
}

export const SIDEBAR_ITEMS: NavItem[] = [
  {
    icon: LayoutGrid,
    label: "Dashboard",
    href: "/dashboard",
  },
];

