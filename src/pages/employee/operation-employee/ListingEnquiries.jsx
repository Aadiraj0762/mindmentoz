import Enquires from "../../../employee-component/operation-new/dashboard/Enquires";
import Sidebar from "../../../employee-component/operation-new/layout/Sidebar";

const ListingEnquiries = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 mr-4 p-4 overflow-x-hidden">
        {/* Content inside the main area */}
        <Enquires />
      </div>
    </div>
  );
};

export default ListingEnquiries;
