import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function TextPlaceholder(props) {
  return (
    <Box  sx={{ width: '100%', maxWidth: 500 }}>
    <Typography variant="h1" component="div" gutterBottom> 
      { props.text }
    </Typography>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    DUZY TEKST
    </Box>
  );
}
export default TextPlaceholder;


