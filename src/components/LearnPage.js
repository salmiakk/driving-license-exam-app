import React from "react";
import Box from '@mui/material/Box';
import Question from './Question.js'
export function LearnPage(props) {
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Question
        type="YesOrNo" 
        content="Czy zachowanie kierującego, który pozostawił samochód na postoju jest poprawne?"
        imgSrc="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <Question
        type="MultipleAnswer" 
        content="W jakich godzinach na obszarze zabudowanym obowiązuje dopuszczalna prędkość 60 km/h?"
        imgSrc="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
    </Box>
  );
}
export default LearnPage;


