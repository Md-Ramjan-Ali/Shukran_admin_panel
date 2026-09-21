# 🌸 GlowRose Admin Dashboard

A high-performance, responsive, and visually elegant Admin Dashboard built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Redux Toolkit**.

---

## ✨ Features

- 🌸 **Bespoke Theme & Aesthetics**: Curated soft blush and warm rose palette with seamless dark mode support.
- 📱 **Mobile-First Responsive Layout**: Drawer navigation on mobile devices with smooth touch handling and persistent desktop sidebar.
- ⚡ **Global State Management**: Powered by **Redux Toolkit** for dashboard layout and UI state.
- 🧭 **Modular Navigation Architecture**: Single source of truth configuration in `sidebar-items.ts` with dynamic breadcrumb routing in Navbar.
- 🔐 **Authentication Flow**: Dedicated login screen with form validation, password visibility toggle, and toast notifications.
- 💎 **Modern UI Components**: Styled with modern typography, smooth micro-transitions, Lucide icons, and Sonner toasts.

---

## 🧭 Application Modules

| Module | Route | Description |
|---|---|---|
| 📊 **Dashboard** | `/dashboard` | Platform metrics, analytics overview, and quick stats |
| 👥 **Users** | `/users` | User management, profile listings, and access controls |
| 💳 **Subscriptions** | `/subscriptions` | Member subscriptions, billing plans, and renewals |
| 🛟 **Support** | `/support` | Customer support tickets and resolution logs |
| 🔔 **Notifications** | `/notifications` | System alerts, broadcasts, and notification history |
| ⚙️ **Settings** | `/settings` | System preferences and administrative configurations |
| 🔐 **Authentication** | `/login` | Secure administrator authentication |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **[Next.js 16](https://nextjs.org/)** | React Framework with App Router & Turbopack |
| **[React 19](https://react.dev/)** | Core UI Component Library |
| **[TypeScript](https://www.typescriptlang.org/)** | Type Safety & Developer Experience |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first Modern Styling Engine |
| **[Redux Toolkit](https://redux-toolkit.js.org/)** | Global Application State Management |
| **[Lucide React](https://lucide.dev/)** | Modern & Clean Icon System |
| **[Sonner](https://sonner.emilkowal.si/)** | Elegant Toast Notifications |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx              # Auth Layout (centered, distraction-free)
│   │   └── login/page.tsx          # Login Page
│   ├── (dashboard)/
│   │   ├── layout.tsx              # Dashboard Shell (Sidebar + Navbar)
│   │   ├── dashboard/page.tsx      # Overview Page
│   │   ├── users/page.tsx          # Users Page
│   │   ├── subscriptions/page.tsx  # Subscriptions Page
│   │   ├── support/page.tsx        # Support Page
│   │   ├── notifications/page.tsx  # Notifications Page
│   │   └── settings/page.tsx       # Settings Page
│   ├── globals.css                 # Theme tokens & styling
│   └── layout.tsx                  # Root Application Layout
├── components/
│   ├── layout/
│   │   ├── navbar.tsx              # Navbar with dynamic breadcrumbs
│   │   ├── sidebar.tsx             # Responsive Navigation Sidebar
│   │   └── sidebar-items.ts        # Navigation items configuration
│   └── shared/                     # Reusable UI components
├── lib/
│   ├── redux/                      # Redux Store, Hooks & Slices
│   └── utils.ts                    # Classnames & UI utilities
└── providers/                      # Redux & Global Providers
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.x` or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dev-Ninjas-Backup/glowrose_admin_dashboard.git
   cd glowrose_admin_dashboard
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
   Navigate to [http://localhost:3000](http://localhost:3000) (or [http://localhost:3000/login](http://localhost:3000/login)) to view the application.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server at `localhost:3000` |
| `npm run build` | Builds the production-ready bundle |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Executes ESLint checks across the codebase |

---

## 📄 License

This project is proprietary and confidential. All rights reserved.
