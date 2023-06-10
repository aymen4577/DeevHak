// Quiz.js
import React, { useState, useEffect } from 'react';
import quizService from "../services/quiz.service";
function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    quizService.getAll()
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion === quizzes.length - 1) {
      submitQuiz();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const submitQuiz = () => {
    quizService.submit(answers)
      .then((response) => {
        setScore(response.data.score);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  if (quizzes.length === 0) {
    return <div>Loading...</div>;
  }

  if (score !== null) {
    return <div>Votre score : {score}</div>;
  }

  return (
    <div>
        <div className="container mt-3">
      <h2>{quizzes[currentQuestion].question}</h2>
      <ul>
        {quizzes[currentQuestion].answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(answer.text)}>{answer.text}</button>
          </li>
        ))}
      </ul>
    </div></div>
  );
}

export default Quiz;
