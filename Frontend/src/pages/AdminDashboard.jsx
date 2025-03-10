import AllListingsCard from "../components/AdminDash/AllListingsCard";

function AdminDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
      <AllListingsCard />
    </div>
  );
}

export default AdminDashboard;