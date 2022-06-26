import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export function Nav() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Link color="inherit" underline="none" variant="h6" sx={{ flexGrow: 1 }}>
              <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/learn">Tryb nauki</NavLink>
            </Link>
            <Link color="inherit" underline="none" variant="h6" sx={{ flexGrow: 1 }}>
              <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/exam">Tryb egzaminu</NavLink>
            </Link>
            <Link color="inherit" underline="none" variant="h6" sx={{ flexGrow: 1 }}>
              <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/edit">Tryb edycji</NavLink>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Nav;


