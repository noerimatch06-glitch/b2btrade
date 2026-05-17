import { prisma } from "@/lib/prisma";

export default function CreatePOPage() {
  async function createPO(formData) {
    "use server";

    const poNumber = formData.get("poNumber");
    const sender = formData.get("sender");
    const poRecipient = formData.get("poRecipient");
    const deliveryLocation = formData.get("deliveryLocation");
    const status = formData.get("status");
    const paymentTerm = formData.get("paymentTerm");
    const poDate = formData.get("poDate");
    const deliveryDate = formData.get("deliveryDate");

    const totalPpn = parseFloat(formData.get("totalPpn"));
    const totalOrder = parseFloat(formData.get("totalOrder"));
    const totalQty = parseInt(formData.get("totalQty"));
    const totalDiscount = parseFloat(formData.get("totalDiscount"));

    const expiredDate = formData.get("expiredDate");

    await prisma.purchaseorder.create({
      data: {
        poNumber,
        sender,
        poRecipient,
        deliveryLocation,
        status,
        paymentTerm,
        poDate,
        deliveryDate,
        totalPpn,
        totalOrder,
        totalQty,
        totalDiscount,
        expiredDate,
      },
    });
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Create Purchase Order</h1>

      <form action={createPO} className="space-y-4">
        <input
          name="poNumber"
          placeholder="PO Number"
          className="w-full border p-2"
        />

        <input
          name="sender"
          placeholder="Sender"
          className="w-full border p-2"
        />

        <input
          name="poRecipient"
          placeholder="PO Recipient"
          className="w-full border p-2"
        />

        <input
          name="deliveryLocation"
          placeholder="Delivery Location"
          className="w-full border p-2"
        />

        <input
          name="status"
          placeholder="Status"
          className="w-full border p-2"
        />

        <input
          name="paymentTerm"
          placeholder="Payment Term"
          className="w-full border p-2"
        />

        <input
          name="poDate"
          placeholder="PO Date"
          className="w-full border p-2"
        />

        <input
          name="deliveryDate"
          placeholder="Delivery Date"
          className="w-full border p-2"
        />

        <input
          name="totalPpn"
          placeholder="Total PPN"
          className="w-full border p-2"
        />

        <input
          name="totalOrder"
          placeholder="Total Order"
          className="w-full border p-2"
        />

        <input
          name="totalQty"
          placeholder="Total Qty"
          className="w-full border p-2"
        />

        <input
          name="totalDiscount"
          placeholder="Total Discount"
          className="w-full border p-2"
        />

        <input
          name="expiredDate"
          placeholder="Expired Date"
          className="w-full border p-2"
        />

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Save PO
        </button>
      </form>
    </div>
  );
}
