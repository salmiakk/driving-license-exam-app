import React, { useState, useEffect }  from "react";
import Box from '@mui/material/Box';
import Question from './Question.js'


export function LearnPage(props) {
  
  const [answerGiven, setAnswerGiven] = useState(false);
  Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }
  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem("questions");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  let currentQuestion = questions.random();

  function handleAnswerGiven(result){
    setAnswerGiven(result); 
  }
  useEffect(()=>{
    
  });
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
      <Question
        type={currentQuestion.type} 
        content={currentQuestion.content} 
        imgSrc={currentQuestion.imgSrc} 
        answerOne={currentQuestion.answerOne} 
        answerTwo={currentQuestion.answerTwo} 
        answerThree={currentQuestion.answerThree} 
        correctAnswer={currentQuestion.correctAnswer}
        onAnswerGiven={handleAnswerGiven}
      />
      {answerGiven ? (
        <div>Dales odpowiedz</div>
      ):(
        <div> Cos innego</div>
      )
      }
    </Box>
  );
}
export default LearnPage;


