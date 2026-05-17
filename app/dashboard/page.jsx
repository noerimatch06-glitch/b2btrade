export default function PurchaseOrderPage() {
  return (
    <div className="p-10">
      <h1 className="mb-6 text-3xl font-bold">Purchase Order</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="PO Number"
          className="w-full rounded border p-3"
        />

        <input
          type="text"
          placeholder="Customer Name"
          className="w-full rounded border p-3"
        />

        <input
          type="number"
          placeholder="Total Amount"
          className="w-full rounded border p-3"
        />

        <button className="rounded bg-black px-6 py-3 text-white">
          Save PO
        </button>
      </form>
    </div>
  );
}
