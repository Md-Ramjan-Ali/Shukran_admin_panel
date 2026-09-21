# 👑 Shukran Admin Panel

A high-performance, scalable, and visually enterprise-grade Admin Dashboard built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Redux Toolkit**.

---

## ✨ Features

- 👑 **Shukran Admin Design System**: Built with modular component architecture and a clean responsive layout.
- 🎨 **Native Tailwind v4 `@theme` Architecture**: Semantic theme tokens (`surface-*`, `text-*`, `border-*`) supporting native opacity modifiers.
- 📏 **Pixel-Perfect Header Alignment**: Standardized `h-20` (80px) header height across the Sidebar Brand Header and Navbar for a seamless horizontal divider line.
- 📱 **Mobile-First Responsive Layout**: Drawer navigation on mobile devices with smooth backdrop blur handling and persistent desktop sidebar.
- ⚡ **Global State Management**: Powered by **Redux Toolkit** (`useAppDispatch`, `useAppSelector`) for responsive sidebar toggle and UI states.
- 🔍 **Integrated Header Widgets**: Global Search input (`Ctrl + K`), real-time Date & Time card (`Bangladesh Standard Time`), Notification bell, and Admin Profile badge.
- 🧭 **Modular Route Configuration**: Single source of truth configuration in `sidebar-items.ts`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **[Next.js 16](https://nextjs.org/)** | React Framework with App Router & Turbopack |
| **[React 19](https://react.dev/)** | Core UI Component Library |
| **[TypeScript](https://www.typescriptlang.org/)** | Type Safety & Developer Experience |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Native `@theme` Utility-First Styling Engine |
| **[Redux Toolkit](https://redux-toolkit.js.org/)** | Global Application State Management |
| **[Lucide React](https://lucide.dev/)** | Modern Icon System |
| **[Sonner](https://sonner.emilkowal.si/)** | Elegant Toast Notifications |

---

## 🚦 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.x` or `v20.x`+
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CodeForestLab/Shukran_admin_panel.git
   cd Shukran_admin_panel
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server at `localhost:3000` |
| `npm run build` | Builds the production-ready bundle with Turbopack |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Executes ESLint checks across the codebase |

---

## 📄 License

This project is proprietary and confidential. All rights reserved by **Shukran Company**.
