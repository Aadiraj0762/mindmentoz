import LeavesTable from "../../../employee-component/operation-new/dashboard/LeavesTable";
import Sidebar from "../../../employee-component/operation-new/layout/Sidebar";

const ListingEnquiries = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 mr-4 p-4 overflow-x-hidden">
        <LeavesTable />
      </div>
    </div>
  );
};

export default ListingEnquiries;
