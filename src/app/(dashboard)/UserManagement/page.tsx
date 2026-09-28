import PageHeader from "@/components/shared/PageHeader/PageHeader";

export default function UserManagementPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="Users"
        titleAccent="Management"
        description="Manage all registered users, roles, and permissions."
      />
    </div>
  );
}
