import React, { useState, useEffect, useContext }  from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UsersForm from './UsersForm.js'
import UserContext from './UserContext.js'
import UsersOverview from './UsersOverview.js'

export function UsersPage(props) {

    const [users, setUsers ] = useState([
        {"id": 0, "name":"Grzegorz", surname: "Bułka", email: "gbulka@wp.pl", password: "aGFzbG8K" },
        {"id": 1, "name":"Marta", surname: "Karnowicz", email: "mkarnowicz@wp.pl", password: "aGFsd4zbG8K"}
    ]);
    return (
    <UserContext.Provider value={{ users, setUsers }}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
            <Typography align="center" variant="h6" component="div">
            W tym trybie możesz sprawdzić aktualnych użytkowników aplikacji oraz dodać nowych.
            </Typography>
            <UsersForm/>
            <UsersOverview/>
        </Box>
    </UserContext.Provider>
    );
}
export default UsersPage;
