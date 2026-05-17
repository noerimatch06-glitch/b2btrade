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
    <div>
      <h1>Create PO</h1>

      <form action={createPO}>
        <input name="poNumber" placeholder="PO Number" />
        <input name="sender" placeholder="Sender" />
        <input name="poRecipient" placeholder="PO Recipient" />
        <input name="deliveryLocation" placeholder="Delivery Location" />
        <input name="status" placeholder="Status" />
        <input name="paymentTerm" placeholder="Payment Term" />
        <input name="poDate" placeholder="PO Date" />
        <input name="deliveryDate" placeholder="Delivery Date" />
        <input name="totalPpn" placeholder="Total PPN" />
        <input name="totalOrder" placeholder="Total Order" />
        <input name="totalQty" placeholder="Total Qty" />
        <input name="totalDiscount" placeholder="Total Discount" />
        <input name="expiredDate" placeholder="Expired Date" />

        <button type="submit">Save PO</button>
      </form>
    </div>
  );
}
