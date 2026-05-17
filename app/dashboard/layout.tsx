import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const session = cookieStore.get("session");

  if (!session) {
    redirect("/login");
  }
  const sessionData = JSON.parse(session.value);

  console.log(sessionData);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar role={sessionData.role} />
      console.log(role);
      {/* Content */}
      <div className="flex-1 bg-gray-100 p-6">{children}</div>
    </div>
  );
}
