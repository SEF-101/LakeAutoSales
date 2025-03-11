import AllListingsCard from "../components/AdminDash/AllListingsCard";
import AdminTitleCard from "../components/AdminDash/AdminTitleCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

function AdminDashboard() {
  return (
  <HelmetProvider>
    <>
      <Helmet>
        <title>Lakes Auto Sales | Management Dashboard</title>
      </Helmet>
    <div className="container mx-auto p-6 space-y-6">
      <AdminTitleCard />
      <AllListingsCard />
    </div>
    </>
  </HelmetProvider>
  );
}

export default AdminDashboard;
