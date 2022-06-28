import { React, useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function ExamPage(props) {

  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem("questions");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
      {questions.map(name => (
        <li>  
        {name.type}  
        </li>  
      ))}
    </Box>
  );
}
export default ExamPage;


