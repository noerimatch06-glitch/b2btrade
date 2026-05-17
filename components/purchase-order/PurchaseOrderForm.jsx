"use client";

import { useState } from "react";

export default function PurchaseOrderForm() {
  const [formData, setFormData] = useState({
    poType: "",
    documentNo: "",
    sender: "",
    recipient: "",
    deliveryLocation: "",
    status: "",
    orderDate: "",
    deliveryDate: "",
    expiryDate: "",
    paymentTerm: "",
    totalPPN: "",
    totalDisc: "",
  });

  const [items, setItems] = useState([
    {
      itemName: "",
      qty: 1,
      price: 0,
    },
  ]);

  // =========================
  // HANDLE FORM CHANGE
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // HANDLE ITEM CHANGE
  // =========================

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];

    updatedItems[index][field] = value;

    setItems(updatedItems);
  };

  // =========================
  // ADD ITEM
  // =========================

  const addItemRow = () => {
    setItems([
      ...items,
      {
        itemName: "",
        qty: 1,
        price: 0,
      },
    ]);
  };

  // =========================
  // DELETE ITEM
  // =========================

  const deleteItemRow = (index) => {
    const updatedItems = items.filter((_, itemIndex) => itemIndex !== index);

    setItems(updatedItems);
  };

  // =========================
  // TOTAL QTY
  // =========================

  const totalQtyAmount = items.reduce(
    (total, item) => total + Number(item.qty),
    0,
  );

  // =========================
  // TOTAL ORDER
  // =========================

  const totalOrderAmount = items.reduce(
    (total, item) => total + Number(item.qty) * Number(item.price),
    0,
  );

  // =========================
  // PPN 11%
  // =========================

  const totalPPNAmount = totalOrderAmount * 0.11;

  // =========================
  // GRAND TOTAL
  // =========================

  const grandTotal =
    totalOrderAmount + totalPPNAmount - Number(formData.totalDisc || 0);

  // =========================
  // FORMAT RUPIAH
  // =========================

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // =========================
  // VALIDATION
  // =========================

  const handleSave = () => {
    if (!formData.poType) {
      alert("PO Type wajib diisi");
      return;
    }

    if (!formData.documentNo) {
      alert("Document No wajib diisi");
      return;
    }

    if (!formData.sender) {
      alert("Sender wajib diisi");
      return;
    }

    if (!formData.recipient) {
      alert("Recipient wajib diisi");
      return;
    }

    if (!formData.status) {
      alert("Status wajib diisi");
      return;
    }

    if (!formData.orderDate) {
      alert("Order Date wajib diisi");
      return;
    }

    alert("Purchase Order Saved");

    console.log(formData);
    console.log(items);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-2xl font-bold mb-8">Create Purchase Order</h1>

      {/* PURCHASE ORDER INFO */}

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          Purchase Order Information
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* PO TYPE */}

          <div>
            <label className="block mb-1 text-sm font-medium">PO Type</label>

            <select
              name="poType"
              value={formData.poType}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="">Select PO Type</option>
              <option value="Local">Local</option>
              <option value="Import">Import</option>
              <option value="Project">Project</option>
            </select>
          </div>

          {/* DOCUMENT NO */}

          <InputField
            label="Document No"
            name="documentNo"
            value={formData.documentNo}
            onChange={handleChange}
          />

          {/* STATUS */}

          <div>
            <label className="block mb-1 text-sm font-medium">Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="">Select Status</option>
              <option value="Draft">Draft</option>
              <option value="Open">Open</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {/* PAYMENT TERM */}

          <div>
            <label className="block mb-1 text-sm font-medium">
              Payment Term
            </label>

            <select
              name="paymentTerm"
              value={formData.paymentTerm}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="">Select Payment Term</option>
              <option value="Cash">Cash</option>
              <option value="30 Days">30 Days</option>
              <option value="60 Days">60 Days</option>
              <option value="90 Days">90 Days</option>
            </select>
          </div>
        </div>
      </div>

      {/* SHIPPING INFO */}

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

        <div className="grid grid-cols-2 gap-6">
          <InputField
            label="Sender"
            name="sender"
            value={formData.sender}
            onChange={handleChange}
          />

          <InputField
            label="Recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
          />

          <InputField
            label="Delivery Location"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* DATE INFO */}

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Date Information</h2>

        <div className="grid grid-cols-2 gap-6">
          <InputField
            label="Order Date"
            name="orderDate"
            type="date"
            value={formData.orderDate}
            onChange={handleChange}
          />

          <InputField
            label="Delivery Date"
            name="deliveryDate"
            type="date"
            value={formData.deliveryDate}
            onChange={handleChange}
          />

          <InputField
            label="Expiry Date"
            name="expiryDate"
            type="date"
            value={formData.expiryDate}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* TOTAL INFO */}

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Total Information</h2>

        <div className="grid grid-cols-2 gap-6">
          <InputField
            label="Total Qty"
            value={totalQtyAmount}
            readOnly={true}
          />

          <InputField
            label="Total Order"
            value={formatRupiah(totalOrderAmount)}
            readOnly={true}
          />

          <InputField
            label="PPN 11%"
            value={formatRupiah(totalPPNAmount)}
            readOnly={true}
          />

          <InputField
            label="Total Discount"
            name="totalDisc"
            value={formData.totalDisc}
            onChange={handleChange}
            type="number"
          />

          <InputField
            label="Grand Total"
            value={formatRupiah(grandTotal)}
            readOnly={true}
          />
        </div>
      </div>

      {/* ITEM TABLE */}

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Purchase Order Items</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-slate-300">
            <thead className="bg-slate-100">
              <tr>
                <th className="border p-3">Item Name</th>
                <th className="border p-3">Qty</th>
                <th className="border p-3">Price</th>
                <th className="border p-3">Subtotal</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <input
                      type="text"
                      value={item.itemName}
                      onChange={(e) =>
                        handleItemChange(index, "itemName", e.target.value)
                      }
                      className="w-full border rounded p-2"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) =>
                        handleItemChange(index, "qty", e.target.value)
                      }
                      className="w-full border rounded p-2"
                    />
                  </td>

                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        handleItemChange(index, "price", e.target.value)
                      }
                      className="w-full border rounded p-2"
                    />
                  </td>

                  <td className="border p-2 text-center">
                    {formatRupiah(item.qty * item.price)}
                  </td>

                  <td className="border p-2 text-center">
                    <button
                      onClick={() => deleteItemRow(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={addItemRow}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Add Item
        </button>
      </div>

      {/* SAVE BUTTON */}

      <button
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold"
      >
        SAVE PURCHASE ORDER
      </button>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  readOnly = false,
}) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full border rounded-lg px-3 py-2 ${
          readOnly ? "bg-slate-100 cursor-not-allowed" : "border-slate-300"
        }`}
      />
    </div>
  );
}
