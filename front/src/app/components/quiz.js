import React, { useState, useEffect } from "react";
import quizService from "../services/quiz.service";

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    quizService
      .getAll()
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    const currentQuiz = quizzes[currentQuestion];
    if (selectedAnswer === currentQuiz.answer) {
      setScore(score + 1);
    }
    setSelectedAnswer("");
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    const currentQuiz = quizzes[currentQuestion];
    if (selectedAnswer === currentQuiz.answer) {
      setScore(score + 1);
    }
    setFinished(true);
  };

  return (
    <div>
      <div className="content-body">
      <h1>Quiz</h1>
        {quizzes.length > 0 ? (
          <div className="card">
            <div className="card-body">
               
              <h5 className="card-title">
              <h3 className="mb-4">{quizzes[currentQuestion].question}</h3> 
              </h5>
              <form>
                {quizzes[currentQuestion].options.map((option) => (
                  <div key={option}>
                    <input
                      type="radio"
                      name={`quiz-${quizzes[currentQuestion].id}-options`}
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={handleAnswerChange}
                    />
                    <label
                      htmlFor={`quiz-${quizzes[currentQuestion].id}-options-${option}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </form>
              {currentQuestion > 0 && (
                <button onClick={handlePreviousQuestion} className="btn btn-secondary">Back</button>
              )}
              {currentQuestion < quizzes.length - 1 ? (
                <button onClick={handleNextQuestion} className="btn btn-success" >Next</button>
              ) : (
                <button onClick={handleFinish} className="btn btn-info">Finish</button>
              )}
             
            </div>
          </div>
        ) : (
          <p>Loading quizzes...</p>
        )}
        {finished && (
          <div>
            <h2>Quiz Finished</h2>
            <p className="card-text">
                Score: {score}/{quizzes.length}
              </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizList;
