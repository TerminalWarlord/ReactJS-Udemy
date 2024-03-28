import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from "../questions.js";


export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
    const skippedPercentage = Math.round((skippedAnswers.length / QUESTIONS.length) * 100);
    const correctAnswersPercentage = Math.round((correctAnswers.length / QUESTIONS.length) * 100);
    const incorrectAnswersPercentage = 100 - correctAnswersPercentage - skippedPercentage;
    return <div id="summary">
        <img src={quizCompleteImg} alt="Trophy Logo" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skippedPercentage}%</span>
                <span className="text">answered skipped</span>
            </p>
            <p>
                <span className="number">{correctAnswersPercentage}%</span>
                <span className="text">answered correctly</span>
            </p>
            <p>
                <span className="number">{incorrectAnswersPercentage}%</span>
                <span className="text">answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, answerIndex) => {
                let cssClass = 'user-answer';
                if (answer === null) {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[answerIndex].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }
                return <li key={answerIndex}>
                    <h3>{answerIndex + 1}</h3>
                    <p className="question">{QUESTIONS[answerIndex].text}</p>
                    <p className={cssClass}>{answer ?? "Skipped"}</p>
                </li>
            })}

        </ol>
    </div>



}