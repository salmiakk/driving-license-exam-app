import React, { useState, useEffect }  from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export function Answers(props) {
    let answers;
    let [buttonColors, setButtonColors ] = useState(["primary","primary","primary"]);
    let [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    let [wrongAnswerCount, setWrongAnswerCount] = useState(0);
    
    useEffect(() => {
        //console.log("Correct answer count: ", correctAnswerCount);
        //setButtonColors(["primary","primary","primary"]);
    });
    
    var checkAnswer = function(answer){
        if(props.correctAnswer == answer){
            setCorrectAnswerCount(correctAnswerCount+1);
        }else{
            setWrongAnswerCount(wrongAnswerCount+1);
        }
        setButtonColors(() => {
            let newState = ["error", "error", "error"];
            newState[props.correctAnswer] = "success";
            return newState;
        });     
        props.onAnswerGiven(true);
    };
    if(props.type =="YesOrNo"){
        answers = <>
            <Button color={buttonColors[0]} size="large" onClick={()=> checkAnswer(0)}>TAK</Button>
            <Button color={buttonColors[1]} size="large" onClick={()=> checkAnswer(1)}>NIE</Button>
        </>;
    } else if (props.type == "MultipleAnswer"){
        answers = <>
        <Box sx={{ display: 'grid', gridAuto: '1fr' }}>
            <Button color={buttonColors[0]} sx={{ m:0.5 }} size="large" onClick={()=> checkAnswer(0)}>{ props.answerOne }</Button>
            <Button color={buttonColors[1]} sx={{ m:0.5 }} size="large" onClick={()=> checkAnswer(1)}>{ props.answerTwo }</Button>
            <Button color={buttonColors[2]} sx={{ m:0.5 }} size="large" onClick={()=> checkAnswer(2)}>{ props.answerThree }</Button>
        </Box>
        </>;
    }
    return (
        answers
    );
}
export default Answers;



