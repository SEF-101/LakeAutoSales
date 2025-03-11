import AllListingsCard from "../components/AdminDash/AllListingsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

function AdminDashboard() {
  return (
  <HelmetProvider>
    <>
      <Helmet>
        <title>Lakes Auto Sales | Management Dashboard</title>
      </Helmet>
    <div className="container mx-auto p-6 space-y-6">
      <div className="bg-gradient-to-r from-blue-800 to-black text-white p-10 rounded-lg shadow-lg text-center">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-4xl font-extrabold">Management Dashboard</h1>
          <p className="text-lg text-gray-200">
            Manage vehicle listings and track inventory.
          </p>
        </div>
      </div>

      <AllListingsCard />
    </div>
    </>
  </HelmetProvider>
  );
}

export default AdminDashboard;
