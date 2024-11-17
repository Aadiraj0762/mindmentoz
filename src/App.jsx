import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';


import ParentLogin from "./component/parent-component/ParentLogin";
import ParentOtpPage from "./component/parent-component/ParentOtpPage";
import ParentRegistration from "./component/parent-component/ParentRegistartion";
import ParentKidsRegistration from "./component/parent-component/ParentKidsRegistarion";
import KidsRegistration from "./component/parent-component/KidsRegistration";




import KidsLoginPage from "./components/child/KidsLoginPage";
import KidsOtpPage from "./components/child/KidsOtpPage";

import DashboardPage from "./pages/DashboardPage";
import KidsPage from "./pages/KidsPage";
import AttendancePage from "./pages/AttandancePage";
import FeeDetailsPage from "./pages/FeeDetailsPage";
import ClassShedulePage from "./pages/ClassShedulePage";

import LoginPage from "./employee-component/LoginPage";
import OperationDashboardPage from "./pages/employee/operation-employee/OperationDashboardPage";
import SEnquiryFormPage from "./pages/employee/operation-employee/SEnquiryFormPage";
import ParentKidsDetailsPage from "./pages/ParentKidsListPage";
import HomePage from "./landingPage/HomePage";
import OperationLoginPage from "./employee-component/operation-new/OperationLoginPage";
// import OperationDashboardPage from "./pages/employee/operation-employee/OperationDashboardPage";
// import SEnquiryFormPage from "./pages/employee/operation-employee/SEnquiryFormPage";
import ListingEnquiries from "./pages/employee/operation-employee/ListingEnquiries";
// import AddKid from "./components/parent/AddKid";
import MyTaskPage from "./pages/employee/operation-employee/MyTaskPage";
import ProspectPage from "./pages/employee/operation-employee/ProspectPage";
import ReferalPage from "./pages/employee/operation-employee/ReferalPage";
import TaskAssignByMePage from "./pages/employee/operation-employee/TaskAssignByMePage";
import TasksPage from "./pages/employee/operation-employee/TasksPage";

import SupportPage from "./pages/employee/operation-employee/SupportPage";
import MessageStusTrackPage from "./pages/employee/operation-employee/MessageStusTrackPage";
import SupportRequest from "./pages/employee/operation-employee/SupportRequest";
import ScheduleClass from "./pages/employee/operation-employee/ScheduleClass";
import LeavesPage from "./pages/employee/operation-employee/LeavesPage";
import LeaveFormPage from "./pages/employee/operation-employee/LeaveFormPage"
import EmpAttendance from "./pages/employee/operation-employee/EmpAttendance"

import Profile from "./pages/employee/operation-employee/Profile"
import InvoicePage from "./pages/employee/operation-employee/InvoicePage"
import StudentReport from "./pages/employee/operation-employee/StudentReport"
import CoachFeedback from "./pages/employee/operation-employee/CoachFeedback"

function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<HomePage/>} />





        {/* Parent Routes */}
        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/parent/enter-otp" element={<ParentOtpPage />} />
        <Route path="/parent/registration" element={<ParentRegistration />} />
        <Route path="/parent/parent-kids-registration" element={<ParentKidsRegistration />} />
        <Route path="/parent/kids/demo" element={<KidsRegistration />} />


        {/* Kids Routes */}
        <Route path="/kids/login" element={<KidsLoginPage />} />
        <Route path="/kids/otp" element={<KidsOtpPage />} />

        {/* Other Routes */}
        <Route path="/parent/dashboard" element={<DashboardPage />} />
        {/* <Route path="/parent/kid" element={<ParentKidsDetailsPage />} /> */}
        {/* <Route path="/parent/kid/attendance/:id" element={<AttendancePage />} /> */}
        {/* <Route path="/parent/add-kid" element={<AddKid />} /> */}


        
        {/* <Route path="/parent/kid/attendance" element={<KidsPage />} /> */}
        {/* <Route path="/fee-details" element={<FeeDetailsPage />} /> */}
        {/* <Route path="/class-schedule" element={<ClassShedulePage />} /> */}


        {/* <Route path="/employee-login" element={<OperationLoginPage />} /> */}
        {/* <Route path="/employee-operation-dashboard" element={<OperationDashboardPage />} /> */}
        {/* <Route path="/crm/employee-operation-enquiry-form" element={<SEnquiryFormPage />} /> */}
        {/* <Route path="/crm/employee-operation-enquiry-list" element={<ListingEnquiries/>} /> */}







        <Route path="/employee-login" element={<LoginPage />} />
        <Route path="/employee-operation-dashboard" element={<OperationDashboardPage />} />
        <Route path="/employee-operation-enquiry-form" element={<SEnquiryFormPage />} /> 
        <Route path="/employee-operation-enquiry-list" element={<ListingEnquiries/>} />
        <Route path="/employee-operation-tasks/add" element={<MyTaskPage/>} />
        <Route path="/employee-operation/prospects" element={<ProspectPage/>} />
        <Route path="/employee-operation/referal" element={<ReferalPage/>} />
        TaskAssignByMePage
        <Route path="/employee-operation-tasks/assigntask" element={<TaskAssignByMePage/>} />
        <Route path="/employee-operation-tasks/tasks" element={<TasksPage/>} />
        <Route path="/employee-operation-tasks/support/add" element={<SupportPage/>} />
        <Route path="/employee-operation-tasks/supportTrack" element={<MessageStusTrackPage/>} />
        <Route path="/employee-operation-tasks/supports" element={<SupportRequest/>} />
        <Route path="/employee-operation/schedule" element={<ScheduleClass/>} />
        <Route path="/employee-operation/leaves" element={<LeavesPage/>} />
        <Route path="/employee-operation/leaves/add" element={<LeaveFormPage/>} />
        AttendanceDashboard
        <Route path="/employee-operation/attendance" element={<EmpAttendance/>} />
        <Route path="/employee-operation/profile" element={<Profile/>} />
        <Route path="/employee-operation/invoice" element={<InvoicePage/>} />
        <Route path="/employee-operation/studentreport" element={<StudentReport/>} />
        <Route path="/employee-operation/coachfeedback" element={<CoachFeedback/>} />

        Profile
        .jsx

      </Routes>
    </Router>
  );
}

export default App;
