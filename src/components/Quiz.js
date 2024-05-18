import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
const [showResult, setShowResult] = useState(false)

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);

    }
  };
  
  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0)
    } else {
      setShowResult(true)
    }
  
  };
  const resetAll = () =>{
setShowResult(false)
setCurrentQuestion(0)
setClickedOption(0)
setScore(0)
  }
  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <QuizResult score = {score} totalscore = {QuizData.length} tryAgain = {resetAll}   />
        ):(
          <>
        <div className="question">
          <span className="question-number">{currentQuestion + 1}. </span>
          <span className="question-txt">
            {QuizData[currentQuestion].question}
          </span>
        </div>
        <div className="option-container">
          {QuizData[currentQuestion].options.map((option, i) => {
            return (
              <button
                
className={`option-btn ${
  clickedOption === i + 1 ? "checked": null
}`}
                key={i}
                onClick={() => setClickedOption(i + 1)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <input
          type="button"
          value="Next"
          id="next-button"
          onClick={changeQuestion}
        />
        </>)}
      </div>
    </div>
  );
}

export default Quiz;
