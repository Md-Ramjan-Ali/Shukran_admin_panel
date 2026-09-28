// --- Types ---
export type UserStatus = "ACTIVE" | "LINKED" | "INACTIVE";

export interface UserItem {
  id: string;
  serial: number;
  name: string;
  email: string;
  phone: string;
  branch: string;
  role: string;
  status: UserStatus;
  avatarColor?: string;
}

// --- Mock Data ---
export const MOCK_USERS: UserItem[] = [
  { id: "1", serial: 1, name: "Abdullah", email: "abdullah@shukranbeverage.com", phone: "8140864892", branch: "SOHRA BRANCH", role: "ADMIN (SUPER ADMIN)", status: "ACTIVE", avatarColor: "bg-amber-500" },
  { id: "2", serial: 2, name: "Abdullah Al Maruf", email: "maruf@shukranbeverage.com", phone: "98852876", branch: "SOHRA BRANCH", role: "AREA MANAGER", status: "ACTIVE", avatarColor: "bg-blue-500" },
  { id: "3", serial: 3, name: "Abdullah Hossain", email: "abdulmanager@gmail.com", phone: "8170089900", branch: "ALL BRANCHES", role: "AREA MANAGER", status: "ACTIVE", avatarColor: "bg-purple-500" },
  { id: "4", serial: 5, name: "Abdur Rahim", email: "rahim@shukranbevcago.com", phone: "71128567", branch: "SOHRA BRANCH", role: "AREA MANAGER", status: "ACTIVE", avatarColor: "bg-green-600" },
  { id: "5", serial: 6, name: "Abdur Rahman", email: "rahman@shukranbeverage.com", phone: "+966711134112", branch: "MUSCAT BRANCH", role: "AREA MANAGER", status: "LINKED", avatarColor: "bg-red-500" },
  { id: "6", serial: 7, name: "Abu Razzak babu", email: "babu@shukranbeverage.com", phone: "93135789", branch: "JALARHALI BRANCH", role: "AREA MANAGER", status: "ACTIVE", avatarColor: "bg-orange-500" },
  { id: "7", serial: 8, name: "Abu sayed", email: "sayed@shukranbeverage.com", phone: "986025496", branch: "MUSCAT BRANCH", role: "AREA MANAGER", status: "ACTIVE", avatarColor: "bg-teal-500" },
  { id: "8", serial: 9, name: "ABU TAWER AL AMIN", email: "abtawer@shukranbeverage.com", phone: "79908165", branch: "RIYADH BRANCH", role: "AREA MANAGER", status: "ACTIVE", avatarColor: "bg-cyan-600" },
];
