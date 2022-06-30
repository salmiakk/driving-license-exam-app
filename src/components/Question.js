import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import CardActions from '@mui/material/Card';
import CardMedia from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Answers from './Answers.js'

export function Question(props) {
    
    return (
    <Card align="center" sx={{ minWidth: 275, bgcolor: 'background.paper' }}>
        <CardContent>
        <Typography variant="h4" component="div">
            { props.content }
        </Typography>
        </CardContent>
        <CardMedia
            sx={{ m:2 }}
            component="img"
            height="350"
            src={ props.imgSrc }
        />
        <CardActions>
            {props.type=="YesOrNo" ? (
            <Answers
                type={props.type}
                content={props.content}
                imgSrc={props.imgSrc}
                correctAnswer={props.correctAnswer}
                onAnswerGiven={props.onAnswerGiven}
                workingMode={props.workingMode}
            />
            ) : (
                <Answers
                type={props.type}
                content={props.content}
                imgSrc={props.imgSrc}
                answerOne={props.answerOne}
                answerTwo={props.answerTwo}
                answerThree={props.answerThree}
                correctAnswer={props.correctAnswer}
                onAnswerGiven={props.onAnswerGiven}
                workingMode={props.workingMode}
            />
            )}

        </CardActions>
    </Card>
    );
}
export default Question;