import AttendanceDashboard from "../../../employee-component/operation-new/dashboard/AttendanceDashboard";
import Sidebar from "../../../employee-component/operation-new/layout/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="ml-64 flex-1"> {/* Adjusted margin-left to match sidebar width */}
        <AttendanceDashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
