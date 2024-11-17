import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'yourName', headerName: 'Your Name', width: 150 },
  { field: 'rollNo', headerName: 'Roll No.', width: 120 },
  { field: 'referralKidName', headerName: 'Referral Kid Name', width: 180 },
  { field: 'referralParentName', headerName: 'Referral Parent Name', width: 200 },
  {
    field: 'referralMobileNo',
    headerName: 'Referral Mobile No.',
    width: 160,
    type: 'number',
    align: 'left',
    headerAlign: 'left',
  },
  { field: 'enrolledCentre', headerName: 'Enrolled Centre', width: 150 },
  { field: 'referredBy', headerName: 'Referred by', width: 150 },
  { field: 'status', headerName: 'Status', width: 120 },
  {
    field: 'referredTime',
    headerName: 'Referred Time',
    width: 100,
    type: 'dateTime',
    valueGetter: (params) => {
      if (params?.value) {
        const date = new Date(params.value);
        return !isNaN(date.getTime()) ? date : null;
      }
      return null;
    },
    valueFormatter: (params) => {
      const dateValue = params?.value;
      if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
        return dateValue.toLocaleString(); // Formats as 'MM/DD/YYYY, HH:MM:SS AM/PM'
      }
      return ''; // Return an empty string for null or invalid values
    },
  },
];

const rows = [
  {
    id: 1,
    yourName: 'Jon Snow',
    rollNo: '1001',
    referralKidName: 'Arya Snow',
    referralParentName: 'Ned Stark',
    referralMobileNo: '1234567890',
    enrolledCentre: 'Winterfell',
    referredBy: 'Catelyn Stark',
    status: 'Approved',
    referredTime: '2024-11-01T10:30:00',
  },
  {
    id: 2,
    yourName: 'Cersei Lannister',
    rollNo: '1002',
    referralKidName: 'Joffrey Baratheon',
    referralParentName: 'Robert Baratheon',
    referralMobileNo: '9876543210',
    enrolledCentre: 'Casterly Rock',
    referredBy: 'Tywin Lannister',
    status: 'Pending',
    referredTime: '2024-11-02T14:45:00',
  },
  {
    id: 3,
    yourName: 'Jaime Lannister',
    rollNo: '1003',
    referralKidName: 'Tommen Baratheon',
    referralParentName: 'Cersei Lannister',
    referralMobileNo: '1122334455',
    enrolledCentre: "King's Landing",
    referredBy: 'Cersei Lannister',
    status: 'Rejected',
    referredTime: '2024-11-03T09:00:00',
  },
  {
    id: 4,
    yourName: 'Arya Stark',
    rollNo: '1004',
    referralKidName: 'Nymeria',
    referralParentName: 'Ned Stark',
    referralMobileNo: '5566778899',
    enrolledCentre: 'Braavos',
    referredBy: "Jaqen H'ghar",
    status: 'Approved',
    referredTime: '2024-11-04T16:20:00',
  },
  {
    id: 5,
    yourName: 'Tyrion Lannister',
    rollNo: '1005',
    referralKidName: 'Shae',
    referralParentName: 'Tywin Lannister',
    referralMobileNo: '6677889900',
    enrolledCentre: 'The Eyrie',
    referredBy: 'Bronn',
    status: 'Pending',
    referredTime: null, // Testing null value
  },
];

export default function ReferralReportTable() {
  return (
    <Paper sx={{ height: 650, width: '100%', p: 3 , ml:'auto'}}>
      <Box mb={3}>
        <Typography variant="h5" component="h2" align="center">
          Referral Report
        </Typography>
      </Box>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5} // Set default page size
        rowsPerPageOptions={[5, 10, 15]} // Pagination options
        checkboxSelection
        disableSelectionOnClick
        initialState={{
          sorting: {
            sortModel: [{ field: 'yourName', sort: 'asc' }],
          },
        }}
        components={{
          Toolbar: GridToolbar, // Includes filtering, sorting, and searching
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true, // Enables search functionality
            quickFilterProps: { debounceMs: 500 }, // Add a debounce for better performance
          },
        }}
        sx={{
          border: 0,
          '& .MuiDataGrid-toolbarContainer': {
            justifyContent: 'space-between',
            display: 'flex', // Ensures toolbar is visible and in place
            gap: 2,
          },
        }}
      />
    </Paper>
  );
}
