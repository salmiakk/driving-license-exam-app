import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Header() {
  return (
  <Box>
    <Typography variant="h3" component="div" align="center" mb={2} sx={{ flexGrow: 1 }}>
      Egzamin na prawo jazdy
    </Typography>
  </Box>
  );
}
export default Header;


