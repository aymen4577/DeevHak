import React, { useState } from "react";
import quizService from "../services/quiz.service";

function CreateQuiz() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const quizData = {
      question,
      options,
      answer,
    };

    quizService
      .create(quizData)
      .then((res) => {
        alert("Quiz créé avec succès");
        setQuestion("");
        setOptions([]);
        setAnswer("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-3">
      <div className="content-body">
        <h1 className="mb-4">Create Quiz</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group" controlId="question">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              className="form-control"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>

          <label htmlFor="options">Options</label>
          {options.map((option, index) => (
            <div className="input-group mb-3" key={index}>
              <input
                type="text"
                className="form-control"
                value={option}
                onChange={(e) => handleOptionChange(e, index)}
                required
              />
              <button
                className="btn btn-danger"
                variant="danger"
                onClick={() => handleRemoveOption(index)}
              >
                -
              </button>
            </div>
          ))}
          <div className="row">
            <div className="mb-3 col-md-6">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleAddOption}
                variant="danger"
              >
                Add Option
              </button>
            </div>
          </div>

     
          <button className="btn btn-success" type="submit">
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuiz;
