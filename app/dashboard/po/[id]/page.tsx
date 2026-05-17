import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const po = await prisma.purchaseorder.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!po) {
    return <div className="p-10 text-3xl">PO Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-[#efefef] p-3">
      {/* BUTTON */}
      <div className="mb-3">
        <button className="border bg-white px-5 py-2 text-xl font-bold text-green-600 shadow">
          Create Delivery Order
        </button>
      </div>

      {/* CONTAINER */}
      <div className="border-2 border-black bg-white">
        {/* HEADER */}
        <div className="grid grid-cols-3 p-4">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold">{po.poRecipient}</h2>

            <p className="mt-2 text-xl">Supplier Address</p>

            <div className="mt-16 space-y-2 text-xl">
              <p>NPWP : 123456789</p>

              <p>Telephone : 02199999</p>

              <p>Contact : PIC Supplier</p>
            </div>

            <div className="mt-8 space-y-2 text-xl">
              <p>PO Date :{po.poDate}</p>

              <p className="font-bold">Expiry :{po.expiredDate}</p>

              <p>Note : -</p>
            </div>
          </div>

          {/* CENTER */}
          <div className="text-center">
            <h1 className="text-5xl font-bold">Purchase Order</h1>

            <p className="mt-2 text-4xl font-bold text-[#7a4a00]">
              {po.poNumber}
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <div className="space-y-2 text-xl">
              <p>{po.sender}</p>

              <div className="bg-gray-200 p-2 font-semibold">Send To:</div>

              <p className="font-bold">{po.deliveryLocation}</p>

              <p>Buyer Address</p>
            </div>

            <div className="mt-8 bg-gray-200 p-3 text-xl">
              <div className="grid grid-cols-2 gap-y-2">
                <p>Fax</p>
                <p>-</p>

                <p>Email</p>
                <p>-</p>

                <p>Delivery Date</p>
                <p className="font-bold">{po.deliveryDate}</p>

                <p>Payment Term</p>
                <p className="font-bold">{po.paymentTerm}</p>

                <p>Currency</p>
                <p>IDR</p>

                <p>Prepare By</p>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <table className="w-full border-collapse border-2 border-black text-lg">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="border border-black p-2">No</th>

              <th className="border border-black p-2">Article SKU</th>

              <th className="border border-black p-2">Description</th>

              <th className="border border-black p-2">UoM / MoQ</th>

              <th className="border border-black p-2">Qty</th>

              <th className="border border-black p-2">Discount</th>

              <th className="border border-black p-2">Purchase Price</th>

              <th className="border border-black p-2">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-[#fff6d8] text-center">
              <td className="border border-black p-2">1</td>

              <td className="border border-black p-2 text-blue-700 underline">
                8992761002026
              </td>

              <td className="border border-black p-2 text-left">Coca Cola 1</td>

              <td className="border border-black p-2">EA / 12</td>

              <td className="border border-black p-2">204</td>

              <td className="border border-black p-2">0</td>

              <td className="border border-black p-2 text-right">4.963</td>

              <td className="border border-black p-2 text-right font-bold">
                1.012.452
              </td>
            </tr>
          </tbody>
        </table>

        {/* TOTAL */}
        <div className="grid grid-cols-2 border-x-2 border-b-2 border-black">
          <div className="border-r-2 border-black p-4 text-xl">
            Purchasing Group
          </div>

          <div className="p-4 text-right text-2xl space-y-2">
            <p>
              Total Quantity :
              <span className="ml-3 font-bold">{po.totalQty}</span>
            </p>

            <p>
              Total Discount :
              <span className="ml-3 font-bold">{po.totalDiscount}</span>
            </p>

            <p>
              PPN :<span className="ml-3 font-bold">{po.totalPpn}</span>
            </p>

            <p className="text-3xl font-bold">
              Total : {Number(po.totalOrder).toLocaleString("id-ID")}
            </p>
          </div>
        </div>

        {/* NOTE */}
        <div className="border-x-2 border-b-2 border-black p-3 text-xl">
          Note 1 (Perhatian)
        </div>

        {/* REMARK */}
        <div className="border-x-2 border-b-2 border-black p-3 text-xl">
          Remark:
        </div>
      </div>

      {/* BUTTON */}
      <div className="mt-4 flex justify-center gap-3">
        <button className="bg-blue-600 px-6 py-2 text-xl font-bold text-white">
          Print
        </button>

        <button className="bg-blue-600 px-6 py-2 text-xl font-bold text-white">
          Export
        </button>

        <button className="bg-blue-600 px-6 py-2 text-xl font-bold text-white">
          Back
        </button>
      </div>
    </div>
  );
}
