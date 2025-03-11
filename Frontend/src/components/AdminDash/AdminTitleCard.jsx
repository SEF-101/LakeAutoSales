export default function AdminTitleCard() {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-black text-white p-10 rounded-lg shadow-lg text-center">
    <div className="flex flex-col items-center space-y-2">
      <h1 className="text-4xl font-extrabold">Management Dashboard</h1>
      <p className="text-lg text-gray-200">
        Manage vehicle listings and track inventory.
      </p>
    </div>
  </div>
  );
}