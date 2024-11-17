import Profile from "../../../employee-component/operation-new/dashboard/Profile";
import Sidebar from "../../../employee-component/operation-new/layout/Sidebar";

const ListingEnquiries = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="fixed inset-y-0 left-0 z-50 w-64">
        <Sidebar />
      </div>
      <div className="ml-auto mr-60 p-4 w-82">
        <Profile />
      </div>
    </div>
  );
};

export default ListingEnquiries;