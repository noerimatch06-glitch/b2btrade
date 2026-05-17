import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default function PurchaseOrderPage() {
  async function createPO(formData: FormData) {
    "use server";

    const poNumber = formData.get("poNumber") as string;
    const customerName = formData.get("customerName") as string;
    const productName = formData.get("productName") as string;

    const qty = Number(formData.get("qty"));
    const unitPrice = Number(formData.get("unitPrice"));

    const total = qty * unitPrice;

    const notes = formData.get("notes") as string;

    const po = await prisma.purchaseOrder.create({
      data: {
        poNumber,
        customerName,
        productName,
        qty,
        unitPrice,
        total,
        notes,
      },
    });

    redirect(`/dashboard/po/${po.id}`);
  }

  return (
    <div className="flex justify-center p-10">
      <div className="w-full max-w-4xl rounded-xl border p-8 shadow">
        <h1 className="mb-8 text-3xl font-bold">Create Purchase Order</h1>

        <form action={createPO} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="poNumber"
              placeholder="PO Number"
              className="w-full rounded border p-3"
            />

            <input
              type="text"
              name="customerName"
              placeholder="Customer Name"
              className="w-full rounded border p-3"
            />
          </div>

          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="w-full rounded border p-3"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="qty"
              placeholder="Qty"
              className="w-full rounded border p-3"
            />

            <input
              type="number"
              name="unitPrice"
              placeholder="Unit Price"
              className="w-full rounded border p-3"
            />
          </div>

          <textarea
            name="notes"
            placeholder="Notes"
            className="w-full rounded border p-3"
            rows={4}
          />

          <button className="rounded bg-black px-6 py-3 text-white">
            Save Purchase Order
          </button>
        </form>
      </div>
    </div>
  );
}
