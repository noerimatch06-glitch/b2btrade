"use client";

import { useState } from "react";

export default function CreatePOPage() {
  const [form, setForm] = useState({
    poNumber: "",
    sender: "",
    poRecipient: "",
    deliveryLocation: "",
    status: "",
    paymentTerm: "",
    poDate: "",
    deliveryDate: "",
    totalPpn: "",
    totalOrder: "",
    totalQty: "",
    totalDiscount: "",
    expiredDate: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/purchase-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      alert(data.message);

      // RESET FORM
      setForm({
        poNumber: "",
        sender: "",
        poRecipient: "",
        deliveryLocation: "",
        status: "",
        paymentTerm: "",
        poDate: "",
        deliveryDate: "",
        totalPpn: "",
        totalOrder: "",
        totalQty: "",
        totalDiscount: "",
        expiredDate: "",
      });
    } catch (error) {
      console.log(error);

      alert("Save Failed");
    }
  };

  return (
    <div className="max-w-6xl">
      <h1 className="mb-6 text-3xl font-bold">Create PO</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-3 rounded-xl bg-white p-4 shadow md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">PO Number</label>

            <input
              type="text"
              name="poNumber"
              placeholder="PO Number"
              value={form.poNumber}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Supplier Name
            </label>

            <input
              type="text"
              name="poRecipient"
              placeholder="Supplier Name"
              value={form.poRecipient}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Buyer Name</label>

            <input
              type="text"
              name="sender"
              placeholder="Buyer Name"
              value={form.sender}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Delivery Location
            </label>

            <input
              type="text"
              name="deliveryLocation"
              placeholder="Delivery Location"
              value={form.deliveryLocation}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Status</label>

            <input
              type="text"
              name="status"
              placeholder="Status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Payment Term
            </label>

            <input
              type="text"
              name="paymentTerm"
              placeholder="Payment Term"
              value={form.paymentTerm}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">PO Date</label>

            <input
              type="date"
              name="poDate"
              value={form.poDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Delivery Date
            </label>

            <input
              type="date"
              name="deliveryDate"
              value={form.deliveryDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Total PPN</label>

            <input
              type="number"
              name="totalPpn"
              placeholder="Total PPN"
              value={form.totalPpn}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Total Order
            </label>

            <input
              type="number"
              name="totalOrder"
              placeholder="Total Order"
              value={form.totalOrder}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Total Qty</label>

            <input
              type="number"
              name="totalQty"
              placeholder="Total Qty"
              value={form.totalQty}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Total Discount
            </label>

            <input
              type="number"
              name="totalDiscount"
              placeholder="Total Discount"
              value={form.totalDiscount}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Expired Date
            </label>

            <input
              type="date"
              name="expiredDate"
              value={form.expiredDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
        >
          Save PO
        </button>
      </form>
    </div>
  );
}
