import AllListingsCard from "../components/AdminDash/AllListingsCard";
import AdminTitleCard from "../components/AdminDash/AdminTitleCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactMessages from "../components/AdminDash/ContactMessages";

function AdminDashboard() {
  return (
  <HelmetProvider>
    <>
      <Helmet>
        <title>Lakes Auto Sales | Management Dashboard</title>
      </Helmet>
    <div className="container mx-auto p-6 space-y-6">
      <AdminTitleCard />
      <ContactMessages />
      <AllListingsCard />
    </div>
    </>
  </HelmetProvider>
  );
}

export default AdminDashboard;
