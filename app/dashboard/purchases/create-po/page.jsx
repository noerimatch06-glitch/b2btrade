import { prisma } from "@/lib/prisma";

export default function CreatePOPage() {
  async function createPO(formData) {
    "use server";

    await prisma.purchaseorder.create({
      data: {
        poNumber: formData.get("poNumber"),
        sender: formData.get("sender"),
        poRecipient: formData.get("poRecipient"),
        deliveryLocation: formData.get("deliveryLocation"),
        status: formData.get("status"),
        paymentTerm: formData.get("paymentTerm"),
        poDate: formData.get("poDate"),
        deliveryDate: formData.get("deliveryDate"),
        totalPpn: parseFloat(formData.get("totalPpn") || "0"),
        totalOrder: parseFloat(formData.get("totalOrder") || "0"),
        totalQty: parseInt(formData.get("totalQty") || "0"),
        totalDiscount: parseFloat(formData.get("totalDiscount") || "0"),
        expiredDate: formData.get("expiredDate"),
      },
    });
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create Purchase Order</h1>

      <form action={createPO} className="space-y-4">
        <input
          name="poNumber"
          placeholder="PO Number"
          className="border p-2 w-full"
        />

        <input
          name="sender"
          placeholder="Sender"
          className="border p-2 w-full"
        />

        <input
          name="poRecipient"
          placeholder="PO Recipient"
          className="border p-2 w-full"
        />

        <input
          name="deliveryLocation"
          placeholder="Delivery Location"
          className="border p-2 w-full"
        />

        <input
          name="status"
          placeholder="Status"
          className="border p-2 w-full"
        />

        <input
          name="paymentTerm"
          placeholder="Payment Term"
          className="border p-2 w-full"
        />

        <input
          name="poDate"
          placeholder="PO Date"
          className="border p-2 w-full"
        />

        <input
          name="deliveryDate"
          placeholder="Delivery Date"
          className="border p-2 w-full"
        />

        <input
          name="totalPpn"
          placeholder="Total PPN"
          className="border p-2 w-full"
        />

        <input
          name="totalOrder"
          placeholder="Total Order"
          className="border p-2 w-full"
        />

        <input
          name="totalQty"
          placeholder="Total Qty"
          className="border p-2 w-full"
        />

        <input
          name="totalDiscount"
          placeholder="Total Discount"
          className="border p-2 w-full"
        />

        <input
          name="expiredDate"
          placeholder="Expired Date"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save PO
        </button>
      </form>
    </div>
  );
}
