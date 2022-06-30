import { React, useState, useContext} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import QuestionContext from './QuestionContext.js';
import '../helpers/array.js'

export function ExamPage(props) {
  
  const questions = useContext(QuestionContext).questions;

  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }} >
      {questions.map(name => (
        <li>  
        {name.type}  
        </li>  
      ))}
    </Box>
  );
}
export default ExamPage;


