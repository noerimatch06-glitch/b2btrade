import Link from "next/link";

export default function LoginFooter() {
  return (
    <div className="mt-6 flex items-center justify-between">
      <label className="flex items-center gap-2 text-sm text-slate-600">
        <input type="checkbox" />
        Remember me
      </label>

      <Link
        href="/forgot-password"
        className="text-sm text-blue-500 hover:underline"
      >
        Forgot Password?
      </Link>
    </div>
  );
}
