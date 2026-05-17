"use client";

import { useState } from "react";

export default function POTable({ purchaseOrders }) {
  const [sortField, setSortField] = useState("poNumber");

  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const sortedData = [...purchaseOrders].sort((a, b) => {
    let valueA = a[sortField];
    let valueB = b[sortField];

    if (typeof valueA === "string") {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB) {
      return sortAsc ? -1 : 1;
    }

    if (valueA > valueB) {
      return sortAsc ? 1 : -1;
    }

    return 0;
  });

  const SortButton = ({ field }) => (
    <button
      onClick={() => handleSort(field)}
      className="cursor-pointer text-lg font-bold hover:text-yellow-300"
    >
      {sortField === field ? (sortAsc ? "↑" : "↓") : "↕"}
    </button>
  );

  return (
    <table className="w-full">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="p-4">
            <input type="checkbox" />
          </th>

          <th className="p-4 text-left">
            <div className="flex items-center gap-2">
              <span>PO Number</span>

              <SortButton field="poNumber" />
            </div>
          </th>

          <th className="p-4 text-left">
            <div className="flex items-center gap-2">
              <span>Supplier</span>

              <SortButton field="supplierName" />
            </div>
          </th>

          <th className="p-4 text-left">
            <div className="flex items-center gap-2">
              <span>Buyer</span>

              <SortButton field="buyerName" />
            </div>
          </th>

          <th className="p-4 text-left">
            <div className="flex items-center gap-2">
              <span>Currency</span>

              <SortButton field="currency" />
            </div>
          </th>

          <th className="p-4 text-left">
            <div className="flex items-center gap-2">
              <span>Grand Total</span>

              <SortButton field="grandTotal" />
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        {sortedData.map((po) => (
          <tr key={po.id} className="border-b hover:bg-gray-50">
            <td className="p-4">
              <input type="checkbox" />
            </td>

            <td className="p-4">
              <a
                href={`/dashboard/po/${po.id}`}
                className="font-semibold text-blue-600 hover:underline"
              >
                {po.poNumber}
              </a>
            </td>

            <td className="p-4">{po.supplierName}</td>

            <td className="p-4">{po.buyerName}</td>

            <td className="p-4">{po.currency}</td>

            <td className="p-4">{po.grandTotal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
