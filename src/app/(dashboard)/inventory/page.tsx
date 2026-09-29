import PageHeader from "@/components/shared/PageHeader/PageHeader";

export default function InventoryPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        title="Inventory"
        titleAccent="Control"
        description="Track and manage product inventory levels across all branches."
      />
    </div>
  );
}
