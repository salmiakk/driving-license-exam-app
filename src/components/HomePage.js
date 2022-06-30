import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function HomePage(props) {
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
      <Typography variant="h6" component="div" align="center" mb={2} sx={{ flexGrow: 1 }}>
        W tej aplikacji możesz sprawdzić swoją wiedzę przed teoretycznym egzaminem na prawo jazdy. Wybierz jeden z powyższych trybów i rozpocznij naukę.
      </Typography>
    </Box>
  );
}
export default HomePage;


