"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10">Viktorindo</h1>

      <div className="flex flex-col gap-3">
        <Link
          href="/dashboard"
          className="hover:bg-slate-800 px-4 py-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          href="/relationship"
          className="hover:bg-slate-800 px-4 py-3 rounded-lg"
        >
          Relationship
        </Link>

        <Link
          href="/purchases"
          className="hover:bg-slate-800 px-4 py-3 rounded-lg"
        >
          Purchases
        </Link>

        <Link
          href="/invoice"
          className="hover:bg-slate-800 px-4 py-3 rounded-lg"
        >
          Invoice
        </Link>

        <Link
          href="/settings"
          className="hover:bg-slate-800 px-4 py-3 rounded-lg"
        >
          Settings
        </Link>
      </div>
    </div>
  );
}
