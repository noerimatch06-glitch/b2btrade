"use client";

import Link from "next/link";

export default function Sidebar({ role }) {
  console.log(role);

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col justify-between overflow-y-auto">
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-3xl font-bold">Viktorindo</h1>
        </div>

        {/* MENU */}
        <div className="p-4">
          <ul className="space-y-2">
            {/* DASHBOARD */}
            <li>
              <Link
                href="/dashboard"
                className="block rounded-lg px-4 py-3 hover:bg-blue-600"
              >
                📊 Dashboard
              </Link>
            </li>

            {/* PURCHASES */}
            {(role === "admin" || role === "purchasing") && (
              <>
                <li className="rounded-lg px-4 py-3 font-semibold text-slate-300 hover:bg-blue-600 cursor-pointer">
                  📦 Purchases
                </li>

                <ul className="ml-6 space-y-2">
                  <li>
                    <Link
                      href="/dashboard/purchases/create-po"
                      className="block rounded-lg px-4 py-2 hover:bg-blue-600"
                    >
                      🛒 Create PO
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/dashboard/purchases/po-outbox"
                      className="block rounded-lg px-4 py-2 hover:bg-blue-600"
                    >
                      📄 PO Outbox
                    </Link>
                  </li>
                </ul>
              </>
            )}

            {/* FINANCE */}
            {(role === "admin" || role === "finance") && (
              <li>
                <Link
                  href="/finance"
                  className="block rounded-lg px-4 py-3 hover:bg-blue-600"
                >
                  🏢 Finance
                </Link>
              </li>
            )}

            {/* SETTINGS */}
            {role === "admin" && (
              <>
                <li>
                  <Link
                    href="/settings"
                    className="block rounded-lg px-4 py-3 hover:bg-blue-600"
                  >
                    ⚙️ Settings
                  </Link>
                </li>

                <li>
                  <Link
                    href="/auditlog"
                    className="block rounded-lg px-4 py-3 hover:bg-blue-600"
                  >
                    💰 Audit Log
                  </Link>
                </li>

                <li>
                  <Link
                    href="/reports"
                    className="block rounded-lg px-4 py-3 hover:bg-blue-600"
                  >
                    📈 Reports
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-700 p-4">
        <p className="text-sm text-slate-400">Login as</p>

        <h2 className="mb-4 font-semibold">{role}</h2>

        <button
          onClick={async () => {
            await fetch("/api/auth/logout", {
              method: "POST",
            });

            alert("Logout Success");

            window.location.href = "/login";
          }}
          className="w-full rounded-lg bg-red-500 py-3 font-semibold hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
