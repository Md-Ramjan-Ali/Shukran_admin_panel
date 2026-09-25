import React from "react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">
          Dashboard <span className="text-text-accent">Overview</span>
        </h1>
        <p className="text-xs text-text-muted mt-1">
          Here&apos;s what&apos;s happening with your business today.
        </p>
      </div>
    </div>
  );
}
