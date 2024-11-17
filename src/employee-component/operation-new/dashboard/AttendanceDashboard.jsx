// import React, { useState } from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   Avatar,
//   Chip,
//   LinearProgress,
//   Paper,
//   IconButton,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   styled,
//   useTheme,
// } from '@mui/material';
// import {
//   Timeline,
//   TimelineItem,
//   TimelineContent,
//   TimelineDot,
//   TimelineSeparator,
//   TimelineConnector,
// } from '@mui/lab';
// import {
//   TrendingUp,
//   TrendingDown,
//   CheckCircle,
//   Cancel,
//   WatchLater,
//   NavigateBefore,
//   NavigateNext,
//   Person,
//   Group,
//   CalendarMonth,
// } from '@mui/icons-material';

// const AnimatedCard = styled(Card)(({ theme }) => ({
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-4px)',
//   },
//   height: '100%',
// }));

// const StatsCard = styled(Card)(({ theme }) => ({
//   background: theme.palette.primary.gradient,
//   color: theme.palette.primary.contrastText,
//   transition: 'all 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.02)',
//   },
// }));

// const AttendanceCell = styled(TableCell)(({ status, theme }) => ({
//   color: status === 'present' ? theme.palette.success.main :
//          status === 'absent' ? theme.palette.error.main :
//          status === 'late' ? theme.palette.warning.main : 
//          theme.palette.text.primary,
//   fontWeight: 'bold',
//   animation: 'fadeIn 0.5s ease-in-out',
//   '@keyframes fadeIn': {
//     '0%': {
//       opacity: 0,
//       transform: 'scale(0.9)',
//     },
//     '100%': {
//       opacity: 1,
//       transform: 'scale(1)',
//     },
//   },
// }));

// const EmployeeAttendanceDashboard = () => {
//   const theme = useTheme();
//   const [currentMonth, setCurrentMonth] = useState('November 2024');
  
//   // Sample data
//   const monthlyStats = {
//     totalEmployees: 125,
//     presentToday: 118,
//     lateToday: 5,
//     absentToday: 2,
//     averageAttendance: 96,
//   };

//   const recentActivities = [
//     { employee: 'John Doe', action: 'Checked In', time: '9:00 AM', status: 'present' },
//     { employee: 'Jane Smith', action: 'Checked In', time: '9:15 AM', status: 'late' },
//     { employee: 'Mike Johnson', action: 'Absent', time: '-', status: 'absent' },
//   ];

//   const generateMonthData = () => {
//     const employees = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams', 'Robert Brown'];
//     const days = Array.from({ length: 31 }, (_, i) => i + 1);
//     const statuses = ['present', 'present', 'present', 'present', 'late', 'absent'];
    
//     return employees.map(employee => ({
//       name: employee,
//       attendance: days.map(() => statuses[Math.floor(Math.random() * 6)]),
//     }));
//   };

//   const monthData = generateMonthData();

//   return (
//     <Box sx={{ p: 3, bgcolor: 'background.default', minHeight: '100vh' }}>
//       {/* Header */}
//       <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
//           Employee Attendance Dashboard
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <IconButton><NavigateBefore /></IconButton>
//           <Typography variant="h6">{currentMonth}</Typography>
//           <IconButton><NavigateNext /></IconButton>
//         </Box>
//       </Box>

//       {/* Stats Cards */}
//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         <Grid item xs={12} sm={6} md={3}>
//           <AnimatedCard sx={{ bgcolor: theme.palette.primary.main, color: 'white' }}>
//             <CardContent>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Group fontSize="large" />
//                 <Box>
//                   <Typography variant="h4">{monthlyStats.totalEmployees}</Typography>
//                   <Typography variant="subtitle2">Total Employees</Typography>
//                 </Box>
//               </Box>
//             </CardContent>
//           </AnimatedCard>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <AnimatedCard sx={{ bgcolor: theme.palette.success.main, color: 'white' }}>
//             <CardContent>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <CheckCircle fontSize="large" />
//                 <Box>
//                   <Typography variant="h4">{monthlyStats.presentToday}</Typography>
//                   <Typography variant="subtitle2">Present Today</Typography>
//                 </Box>
//               </Box>
//             </CardContent>
//           </AnimatedCard>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <AnimatedCard sx={{ bgcolor: theme.palette.warning.main, color: 'white' }}>
//             <CardContent>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <WatchLater fontSize="large" />
//                 <Box>
//                   <Typography variant="h4">{monthlyStats.lateToday}</Typography>
//                   <Typography variant="subtitle2">Late Today</Typography>
//                 </Box>
//               </Box>
//             </CardContent>
//           </AnimatedCard>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <AnimatedCard sx={{ bgcolor: theme.palette.error.main, color: 'white' }}>
//             <CardContent>
//               <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                 <Cancel fontSize="large" />
//                 <Box>
//                   <Typography variant="h4">{monthlyStats.absentToday}</Typography>
//                   <Typography variant="subtitle2">Absent Today</Typography>
//                 </Box>
//               </Box>
//             </CardContent>
//           </AnimatedCard>
//         </Grid>
//       </Grid>

//       {/* Monthly Attendance Table */}
//       <Paper sx={{ mb: 4, overflow: 'hidden' }}>
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Employee</TableCell>
//                 {Array.from({ length: 31 }, (_, i) => (
//                   <TableCell key={i + 1} align="center">{i + 1}</TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {monthData.map((employee, index) => (
//                 <TableRow key={employee.name} sx={{
//                   animation: `slideIn 0.5s ease-in-out ${index * 0.1}s`,
//                   '@keyframes slideIn': {
//                     '0%': {
//                       opacity: 0,
//                       transform: 'translateX(-20px)',
//                     },
//                     '100%': {
//                       opacity: 1,
//                       transform: 'translateX(0)',
//                     },
//                   },
//                 }}>
//                   <TableCell component="th" scope="row">
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
//                         {employee.name.charAt(0)}
//                       </Avatar>
//                       {employee.name}
//                     </Box>
//                   </TableCell>
//                   {employee.attendance.map((status, day) => (
//                     <AttendanceCell key={day} align="center" status={status}>
//                       {status === 'present' ? '✓' : status === 'late' ? 'L' : '✗'}
//                     </AttendanceCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>

//       {/* Recent Activity Timeline */}
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <AnimatedCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>Recent Activity</Typography>
//               <Timeline>
//                 {recentActivities.map((activity, index) => (
//                   <TimelineItem key={index}>
//                     <TimelineSeparator>
//                       <TimelineDot color={
//                         activity.status === 'present' ? 'success' :
//                         activity.status === 'late' ? 'warning' : 'error'
//                       } />
//                       <TimelineConnector />
//                     </TimelineSeparator>
//                     <TimelineContent sx={{
//                       animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s`,
//                     }}>
//                       <Typography variant="subtitle2" component="span">
//                         {activity.employee}
//                       </Typography>
//                       <Typography>{activity.action}</Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         {activity.time}
//                       </Typography>
//                     </TimelineContent>
//                   </TimelineItem>
//                 ))}
//               </Timeline>
//             </CardContent>
//           </AnimatedCard>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <AnimatedCard>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>Attendance Overview</Typography>
//               <Box sx={{ mt: 2 }}>
//                 <Typography variant="subtitle2" gutterBottom>
//                   Monthly Attendance Rate
//                 </Typography>
//                 <LinearProgress
//                   variant="determinate"
//                   value={monthlyStats.averageAttendance}
//                   sx={{ height: 10, borderRadius: 5, mb: 2 }}
//                 />
//                 <Typography variant="body2" color="text.secondary">
//                   {monthlyStats.averageAttendance}% attendance this month
//                 </Typography>
//               </Box>
//             </CardContent>
//           </AnimatedCard>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default EmployeeAttendanceDashboard;


// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Info } from 'lucide-react';

// const AttendanceCalendar = () => {
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
//   const [hoveredDate, setHoveredDate] = useState(null);

//   // Sample attendance data - in real app, this would come from props or API
//   const attendanceData = {
//     // Format: 'YYYY-MM-DD': status
//     '2024-11-15': 'present',
//     '2024-11-16': 'absent',
//     '2024-11-17': 'leave',
//     '2024-11-18': 'holiday',
//     // Add more dates as needed
//   };

//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'present':
//         return 'bg-green-100 hover:bg-green-200 border-green-300';
//       case 'absent':
//         return 'bg-red-100 hover:bg-red-200 border-red-300';
//       case 'leave':
//         return 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300';
//       case 'holiday':
//         return 'bg-blue-100 hover:bg-blue-200 border-blue-300';
//       default:
//         return 'bg-gray-50 hover:bg-gray-100 border-gray-200';
//     }
//   };

//   const getDaysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (year, month) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const generateCalendarDays = (year, month) => {
//     const daysInMonth = getDaysInMonth(year, month);
//     const firstDay = getFirstDayOfMonth(year, month);
//     const days = [];

//     // Add empty cells for days before the first day of the month
//     for (let i = 0; i < firstDay; i++) {
//       days.push(null);
//     }

//     // Add the days of the month
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(day);
//     }

//     return days;
//   };

//   const handlePreviousMonth = () => {
//     if (selectedMonth === 0) {
//       setCurrentYear(prev => prev - 1);
//       setSelectedMonth(11);
//     } else {
//       setSelectedMonth(prev => prev - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (selectedMonth === 11) {
//       setCurrentYear(prev => prev + 1);
//       setSelectedMonth(0);
//     } else {
//       setSelectedMonth(prev => prev + 1);
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6">
//       <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.01]">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
//           <div className="flex items-center justify-between text-white">
//             <div className="flex items-center space-x-4">
//               <CalendarIcon className="w-8 h-8" />
//               <h1 className="text-2xl font-bold">Employee Attendance</h1>
//             </div>
//             <div className="text-xl">{currentYear}</div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <button
//             onClick={handlePreviousMonth}
//             className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <h2 className="text-xl font-semibold">
//             {months[selectedMonth]} {currentYear}
//           </h2>
//           <button
//             onClick={handleNextMonth}
//             className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Calendar Grid */}
//         <div className="p-4">
//           {/* Weekday Headers */}
//           <div className="grid grid-cols-7 mb-2">
//             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//               <div key={day} className="text-center font-semibold text-gray-600 p-2">
//                 {day}
//               </div>
//             ))}
//           </div>

//           {/* Calendar Days */}
//           <div className="grid grid-cols-7 gap-2">
//             {generateCalendarDays(currentYear, selectedMonth).map((day, index) => {
//               const dateString = day ? `${currentYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}` : '';
//               const status = attendanceData[dateString] || 'none';

//               return (
//                 <div
//                   key={index}
//                   className={`relative aspect-square ${day ? getStatusColor(status) : 'bg-transparent'} 
//                     rounded-lg border transition-all duration-300 transform
//                     ${day ? 'hover:scale-105' : ''}`}
//                   onMouseEnter={() => setHoveredDate(dateString)}
//                   onMouseLeave={() => setHoveredDate(null)}
//                 >
//                   {day && (
//                     <>
//                       <div className="absolute top-1 left-2 text-gray-700">
//                         {day}
//                       </div>
//                       {hoveredDate === dateString && status !== 'none' && (
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <div className="bg-white px-2 py-1 rounded-full text-sm shadow-lg capitalize">
//                             {status}
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Legend */}
//         <div className="p-4 border-t">
//           <div className="flex flex-wrap gap-4 justify-center">
//             {[
//               { status: 'present', color: 'bg-green-100' },
//               { status: 'absent', color: 'bg-red-100' },
//               { status: 'leave', color: 'bg-yellow-100' },
//               { status: 'holiday', color: 'bg-blue-100' }
//             ].map(({ status, color }) => (
//               <div key={status} className="flex items-center space-x-2">
//                 <div className={`w-4 h-4 rounded ${color}`}></div>
//                 <span className="text-sm capitalize">{status}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceCalendar;



import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Info, UserCheck, UserX, Coffee, Sun, Clock, CheckCircle, XCircle, PieChart } from 'lucide-react';

const AttendanceCalendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [hoveredDate, setHoveredDate] = useState(null);
  const [activeTab, setActiveTab] = useState('summary');

  // Sample attendance data - in real app, this would come from props or API
  const attendanceData = {
    // Format: 'YYYY-MM-DD': status
    '2024-11-15': 'present',
    '2024-11-16': 'absent',
    '2024-11-17': 'leave',
    '2024-11-18': 'holiday',
    // Add more dates as needed
  };

  // Sample statistics - in real app, this would be calculated from actual data
  const statistics = {
    summary: {
      totalWorkingDays: 30,
      present: 28,
      absent: 2,
      leave: 1,
      holiday: 4,
      attendance: '92%',
    },
    leaves: [
      { date: '2024-11-17', type: 'Sick Leave', status: 'Approved' },
      { date: '2024-11-25', type: 'Casual Leave', status: 'Pending' },
    ],
    upcomingHolidays: [
      { date: '2024-11-23', name: 'Thanksgiving' },
      { date: '2024-12-25', name: 'Christmas' },
    ]
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 hover:bg-green-200 border-green-300';
      case 'absent':
        return 'bg-red-100 hover:bg-red-200 border-red-300';
      case 'leave':
        return 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300';
      case 'holiday':
        return 'bg-blue-100 hover:bg-blue-200 border-blue-300';
      default:
        return 'bg-gray-50 hover:bg-gray-100 border-gray-200';
    }
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handlePreviousMonth = () => {
    if (selectedMonth === 0) {
      setCurrentYear(prev => prev - 1);
      setSelectedMonth(11);
    } else {
      setSelectedMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setCurrentYear(prev => prev + 1);
      setSelectedMonth(0);
    } else {
      setSelectedMonth(prev => prev + 1);
    }
  };

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className={`bg-white rounded-lg p-4 shadow-md border-l-4 ${color} transform transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Icon className={`w-8 h-8 ${color.replace('border', 'text')}`} />
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Calendar Section */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.01]">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <CalendarIcon className="w-8 h-8" />
                  <h1 className="text-2xl font-bold">Employee Attendance</h1>
                </div>
                <div className="text-xl">{currentYear}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-4 border-b">
              <button
                onClick={handlePreviousMonth}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h2 className="text-xl font-semibold">
                {months[selectedMonth]} {currentYear}
              </h2>
              <button
                onClick={handleNextMonth}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              <div className="grid grid-cols-7 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-semibold text-gray-600 p-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {generateCalendarDays(currentYear, selectedMonth).map((day, index) => {
                  const dateString = day ? `${currentYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}` : '';
                  const status = attendanceData[dateString] || 'none';

                  return (
                    <div
                      key={index}
                      className={`relative aspect-square ${day ? getStatusColor(status) : 'bg-transparent'} 
                        rounded-lg border transition-all duration-300 transform
                        ${day ? 'hover:scale-105' : ''}`}
                      onMouseEnter={() => setHoveredDate(dateString)}
                      onMouseLeave={() => setHoveredDate(null)}
                    >
                      {day && (
                        <>
                          <div className="absolute top-1 left-2 text-gray-700">
                            {day}
                          </div>
                          {hoveredDate === dateString && status !== 'none' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-white px-2 py-1 rounded-full text-sm shadow-lg capitalize">
                                {status}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="p-4 border-t">
              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { status: 'present', color: 'bg-green-100' },
                  { status: 'absent', color: 'bg-red-100' },
                  { status: 'leave', color: 'bg-yellow-100' },
                  { status: 'holiday', color: 'bg-blue-100' }
                ].map(({ status, color }) => (
                  <div key={status} className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded ${color}`}></div>
                    <span className="text-sm capitalize">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
  {/* First Card - Full Width */}
  <div className="col-span-2">
    <StatCard 
      icon={UserCheck} 
      title="Present Days" 
      value={statistics.summary.present}
      color="border-green-500"
    />
  </div>

  {/* Second Card - Half Width */}
  <StatCard 
    icon={UserX} 
    title="Absent Days" 
    value={statistics.summary.absent}
    color="border-red-500"
  />

  {/* Third Card - Half Width */}
  <StatCard 
    icon={Coffee} 
    title="Leaves Taken" 
    value={statistics.summary.leave}
    color="border-yellow-500"
  />

  {/* Fourth Card - Full Width */}
  <div className="col-span-2">
    <StatCard 
      icon={Sun} 
      title="Holidays" 
      value={statistics.summary.holiday}
      color="border-blue-500"
    />
  </div>
</div>


          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b">
              {[
                { id: 'summary', icon: PieChart, label: 'Summary' },
                { id: 'leaves', icon: Coffee, label: 'Leaves' },
                { id: 'holidays', icon: Sun, label: 'Holidays' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 flex items-center justify-center space-x-2 transition-colors duration-200
                    ${activeTab === tab.id ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-4">
              {activeTab === 'summary' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Working Days</span>
                    <span className="font-semibold">{statistics.summary.totalWorkingDays}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Attendance Rate</span>
                    <span className="font-semibold text-green-600">{statistics.summary.attendance}</span>
                  </div>
                </div>
              )}

              {activeTab === 'leaves' && (
                <div className="space-y-3">
                  {statistics.leaves.map((leave, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">{leave.type}</p>
                        <p className="text-sm text-gray-600">{leave.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-sm ${
                        leave.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {leave.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'holidays' && (
                <div className="space-y-3">
                  {statistics.upcomingHolidays.map((holiday, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="font-medium">{holiday.name}</span>
                      <span className="text-sm text-gray-600">{holiday.date}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalendar;