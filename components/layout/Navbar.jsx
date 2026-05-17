export default function Navbar({ activeMenu }) {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h2 className="text-xl font-semibold">{activeMenu}</h2>

      <p>Welcome Admin</p>
    </div>
  );
}
