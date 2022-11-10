import "./Question.css";
import Button from "../Button/Button";
import Options from "../Options/Options";
import { useNavigate } from "react-router-dom";
import Progress from "../ProgressPerQes/Progress";
import { useEffect, useState } from "react";

const Question = ({ questions, setAnswers, answers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const navigate = useNavigate();

  const initialState = [];
  var start = new Date().getTime();

  console.log(selectedOptions);

  // Returns the time taken to answer the question
  const checkTimeSpent = (start) => {
    var current = new Date().getTime();
    var totalTime = (current - start) / 1000;
    setTimeSpent((prevVal) => totalTime);
  };

  // Adds data to the answers object to push the data to the app state
  const buttonHandler = () => {
    if (selectedOptions.length == 0) {
      setError(true);
      return null;
    }
    if (currentQuestion + 1 == questions.length) {
      navigate("/result");
    }
    setSelectedOptions(initialState);
    setError(false);
    checkTimeSpent(start);
    start = new Date().getTime();
    setAnswers([
      ...answers,
      {
        id: questions[currentQuestion].id,
        correctAnswers: questions[currentQuestion].correctAnswer,
        userAnswers: selectedOptions,
        multipleAnswers: questions[currentQuestion].multipleAnswers,
        timeTaken: timeSpent,
      },
    ]);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="container">
      <div className="top-bar" />
      <div className="question-container">
        <div className="question-holder">
          <h3 className="question">{questions[currentQuestion].question}</h3>
        </div>
        {error ? (
          <div>
            <a style={{ color: "red" }}>Please select an option</a>
          </div>
        ) : (
          <></>
        )}
        {questions[currentQuestion].imageUrl ? (
          <div className="image-holder">
            <img src={questions[currentQuestion].imageUrl} width="90%" />
          </div>
        ) : (
          <></>
        )}
        {questions[currentQuestion].options.map((option, index) => (
          <Options
            key={index}
            state={selectedOptions}
            setState={setSelectedOptions}
            optionText={option}
            multiSelection={questions[currentQuestion].multipleAnswers}
          />
        ))}

        <Options
          unselectable
          state={selectedOptions}
          setState={setSelectedOptions}
        />
      </div>
      <div className="progress-holder">
        <Progress
          numberOfQuestions={questions.length}
          currentQuestion={currentQuestion + 1}
        />
      </div>
      <div className="center">
        <Button title="Next" onClick={buttonHandler} />
      </div>
    </div>
  );
};

export default Question;
