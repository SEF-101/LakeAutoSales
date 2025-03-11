import AllListingsCard from "../components/AdminDash/AllListingsCard";

function AdminDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="bg-gradient-to-r from-blue-800 to-black text-white p-10 rounded-lg shadow-lg text-center">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-4xl font-extrabold">Admin Dashboard</h1>
          <p className="text-lg text-gray-200">
            Manage vehicle listings and track inventory.
          </p>
        </div>
      </div>

      <AllListingsCard />
    </div>
  );
}

export default AdminDashboard;
