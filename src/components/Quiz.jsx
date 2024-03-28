import QUESTIONS from "../questions.js";
import { useState, useCallback } from "react";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelection = useCallback(function handleSelection(userAnswer) {
        setUserAnswers(prevState => {
            return [
                ...prevState,
                userAnswer
            ]
        });
    }, [])
    const handleSkipAnswer = useCallback(() => handleSelection(null), [handleSelection])


    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />
    }


    return <div id="quiz">
        <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSkipAnswer={handleSkipAnswer}
            onSelectAnswer={handleSelection}
        />
    </div>
} 