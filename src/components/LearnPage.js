import React, { useState, useEffect, useContext }  from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Question from './Question.js'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import QuestionContext from './QuestionContext.js';
import '../helpers/array.js'

export function LearnPage(props) {
  
  let navigate = useNavigate();
  const navigateBackHome = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  const [answerGiven, setAnswerGiven] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  const questions = useContext(QuestionContext).questions;

  let [currentQuestion, setCurrentQuestion] = useState(questions.random());
  
  function handleAnswerGiven(result, correctAnswerCount, wrongAnswerCount){
    setAnswerGiven(result);
    setCorrectAnswerCount(correctAnswerCount);
    setWrongAnswerCount(wrongAnswerCount);
  }
  const handleClickEndLearning = () => {
    setAlertOpen(true);
  };

  const handleClickCloseAlert = () => {
    setAlertOpen(false);
    navigateBackHome();
  };

  return (
    <>
    <Typography variant="h6" component="div" align="center" mb={2} sx={{ flexGrow: 1 }}>
      Po wybraniu odpowiedzi zostanie ona zaznaczona na zielono - odpowiedź poprawna, lub czerwono - odpowiedź błędna.<br/>
      Wciśnij przycisk "Losuj kolejne pytanie", aby przejść do następnego pytania. <br/>
      Aby podsumować wyniki nauki, kliknij "zakończ naukę".
    </Typography>
    <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
      <Question
        type={currentQuestion.type} 
        content={currentQuestion.content} 
        imgSrc={currentQuestion.imgSrc} 
        answerOne={currentQuestion.answerOne} 
        answerTwo={currentQuestion.answerTwo} 
        answerThree={currentQuestion.answerThree} 
        correctAnswer={currentQuestion.correctAnswer}
        onAnswerGiven={handleAnswerGiven}
        workingMode='L'
      />
      <Button  sx={{ m:0.5 }} size="large" onClick={()=>(
        setAnswerGiven(false),
        setCurrentQuestion(questions.filter(
          item => item !== currentQuestion
        ).random(),
        ))
      }>Losuj kolejne pytanie</Button>
      <Button sx={{ m:0.5 }} size="large" onClick={handleClickEndLearning}>Zakończ naukę</Button>

      <Dialog
        open={alertOpen}
        onClose={handleClickCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Twój wynik to:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Liczba poprawnych odpowiedzi: { correctAnswerCount } <br/>
          Liczba błędnych odpowiedzi: { wrongAnswerCount }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickCloseAlert} autoFocus>
            Rozumiem
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    </>
  );
}
export default LearnPage;


