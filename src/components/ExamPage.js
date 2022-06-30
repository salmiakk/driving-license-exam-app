import { React, useState, useContext, useEffect} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Question from './Question.js'
import QuestionContext from './QuestionContext.js';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import '../helpers/array.js'

export function ExamPage(props) {
  
  const questions = useContext(QuestionContext).questions;
  const [examQuestions, setExamQuestions] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(examQuestions.random());
  const [answerGiven, setAnswerGiven] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);
  
  let navigate = useNavigate();
  const navigateBackHome = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  useEffect( () => {
    if(correctAnswerCount+wrongAnswerCount == 15) handleClickEndExam();
  }, [correctAnswerCount, wrongAnswerCount]);

  function handleAnswerGiven(result, correctAnswerCount, wrongAnswerCount){
    setAnswerGiven(result);
    setCorrectAnswerCount(correctAnswerCount);
    setWrongAnswerCount(wrongAnswerCount);
    setCurrentQuestion(examQuestions.random());
    setExamQuestions(examQuestions.filter(item => item !== currentQuestion));
  }
  const handleClickEndExam = () => {
    setAlertOpen(true);
  };

  const handleClickCloseAlert = () => {
    setAlertOpen(false);
    navigateBackHome();
  };

  return (
    <>
    <Typography variant="h6" component="div" align="center" mb={2} sx={{ flexGrow: 1 }}>
      W tym trybie możesz podejść do egzaminu na prawo jazdy. Po kolei otrzymasz 15 pytań, na które powinieneś udzielić odpowiedzi.<br/>
      Po udzieleniu wszystkich odpowiedzi otrzymasz podsumowanie Twojego egzaminu wraz z informacją, czy zdałeś.
    </Typography>
    <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }} >
      <Question
        type={currentQuestion.type} 
        content={currentQuestion.content} 
        imgSrc={currentQuestion.imgSrc} 
        answerOne={currentQuestion.answerOne} 
        answerTwo={currentQuestion.answerTwo} 
        answerThree={currentQuestion.answerThree} 
        correctAnswer={currentQuestion.correctAnswer}
        onAnswerGiven={handleAnswerGiven}
        workingMode='E'
      />
      <Button sx={{ m:0.5 }} size="large" onClick={handleClickEndExam}>Wcześniejsze zakończenie egzaminu</Button>
      <Dialog
        open={alertOpen}
        onClose={handleClickCloseAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Twój wynik egzaminu to:"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { correctAnswerCount+wrongAnswerCount >=15&&wrongAnswerCount <=2 ? (
              "Zdałeś!"
            ) : (
              "Oblałeś!"
            )}
          <br/>
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
export default ExamPage;


