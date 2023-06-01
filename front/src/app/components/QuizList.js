import React, { useState, useEffect } from "react";
import quizService from "../services/quiz.service";
function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
   quizService.getAll()
      .then((response) => {
        setQuizzes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removeQuiz = (id) => {
    quizService.deleteAll(id)
      .then(() => {
        window.location.reload();
      })
      .catch(() => {
      console.log();
      });
  };
 
  return (
    <div>
        <div className="content-body">
      <h1 className="mb-4">Quiz List</h1>
      <ul>
      {quizzes.map((quiz) => (
  <li key={quiz.id}>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{quiz.question}</h5>
        <form>
          {quiz.options.map((option) => (
            <div key={option}>
              <input type="radio" name={`quiz-${quiz.id}-options`} value={option} />
              <label htmlFor={`quiz-${quiz.id}-options-${option}`}>{option}</label>
            </div>
          ))}
        </form>
        <p className="card-text">Answer: {quiz.answer}</p>
      </div>
    </div>
  </li>
))}

</ul>
<button onClick={()=>{removeQuiz(quizzes.id)}} className="btn btn-danger " >Dellet</button>
<button  className="btn btn-success " >Update</button>
    </div></div>
  );
}

export default QuizList;
