import React, { useState, useContext }  from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import UserContext from './UserContext.js'

export function UsersOverview() {
  const {users, setUsers} = useContext(UserContext);

  const columns = [
    { field: 'name', headerName: 'Imię', width: 100 },
    { field: 'surname', headerName: 'Nazwisko', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 }
  ];

  const rows = users;
  return (
  <Box align="center" sx={{ m:2, height: "44%" }}>
    <Typography sx={{m:2}} align="center" variant="h7" component="div">
        Podgląd istniejących użytkowników
    </Typography>
    <DataGrid
        getRowId={(row) => row.email}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
  </Box>
  );
}
export default UsersOverview;


