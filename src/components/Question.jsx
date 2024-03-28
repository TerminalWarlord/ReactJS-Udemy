import { useState } from "react";
import ProgressBar from "./ProgressBar.jsx"
import Answers from "./Answers.jsx"
import QUESTIONS from "../questions.js";


export default function Question({
    onSelectAnswer,
    onSkipAnswer,
    index }) {

    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });
    let timer = 10000;
    if (answer.selectedAnswer) {
        timer = 1000;
    }
    if (answer.isCorrect !== null) {
        timer = 2000;
    }
    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })
            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }


    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return <div id="question">
        <ProgressBar
            key={timer}
            timeout={timer}
            onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
            mode={answerState}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
            answers={QUESTIONS[index].answers}
            selectedAnswer={answer.selectedAnswer}
            onSelect={handleSelectAnswer}
            answerState={answerState}
        />
    </div>
}