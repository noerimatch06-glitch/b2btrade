import { prisma } from "@/lib/prisma";

export default async function POOutboxPage() {
  const purchaseorders = await prisma.purchaseorder.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-4">
      {/* TITLE */}
      <h1 className="mb-2 text-3xl font-bold">Purchase Order Outbox</h1>

      {/* SUMMARY */}
      <div className="mb-4 flex bg-sky-500 text-white">
        <div className="px-8 py-2 font-bold">ALL: {purchaseorders.length}</div>

        <div className="px-8 py-2 font-bold">
          SENT: {purchaseorders.filter((po) => po.status === "SENT").length}
        </div>

        <div className="px-8 py-2 font-bold">READ: 1</div>

        <div className="px-8 py-2 font-bold">CLOSED: 0</div>

        <div className="px-8 py-2 font-bold">EXPIRED: 0</div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto border bg-white">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="border p-2">
                <input type="checkbox" />
              </th>

              <th className="border p-2 text-left">Sender</th>

              <th className="border p-2 text-left">PO No</th>

              <th className="border p-2 text-left">PO Date</th>

              <th className="border p-2 text-left">Recipient</th>

              <th className="border p-2 text-left">Delivery Location</th>

              <th className="border p-2 text-left">Status</th>

              <th className="border p-2 text-left">Created Date</th>

              <th className="border p-2 text-left">Created By</th>
            </tr>
          </thead>

          <tbody>
            {purchaseorders.map((po) => (
              <tr key={po.id} className="hover:bg-yellow-50">
                <td className="border p-2 text-center">
                  <input type="checkbox" />
                </td>

                <td className="border p-2">{po.sender}</td>

                <td className="border p-2 font-semibold text-blue-600">
                  {po.poNumber}
                </td>

                <td className="border p-2">{po.poDate}</td>

                <td className="border p-2">{po.poRecipient}</td>

                <td className="border p-2">{po.deliveryLocation}</td>

                <td className="border p-2 font-bold">{po.status}</td>

                <td className="border p-2">
                  {new Date(po.createdAt).toLocaleDateString("id-ID")}
                </td>

                <td className="border p-2">Admin</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* BUTTON */}
      <div className="mt-6 flex gap-4">
        <button className="bg-sky-500 px-6 py-2 font-bold text-white">
          Batch Print
        </button>

        <button className="bg-sky-500 px-6 py-2 font-bold text-white">
          Batch Export
        </button>
      </div>
    </div>
  );
}
