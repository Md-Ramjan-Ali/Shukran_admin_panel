import PageHeader from "@/components/shared/PageHeader/PageHeader";

export default function EmployeesPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Employees"
        titleAccent="Management"
        description="Manage employee records, roles and performance across all branches."
      />
    </div>
  );
}
