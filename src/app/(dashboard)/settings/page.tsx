import PageHeader from "@/components/shared/PageHeader/PageHeader";

export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="System"
        titleAccent="Settings"
        description="Configure system preferences, notifications and account settings."
      />
    </div>
  );
}
