import "./App.css";
import Home from "../Home/Home";
import Question from "../Question/Question";
import Result from "../Result/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const questions = [
  //static data supplied to the question page
  {
    id: 1,
    question: "What is the capital of India ?",
    options: ["Delhi", "Kolkata", "Bangalore", "Chennai"],
    correctAnswer: ["Delhi"],
    multipleAnswers: false,
  },
  {
    id: 2,
    question: "Which is the largest continent in the world ?",
    options: ["Australia", "Europe", "Asia", "Antartica"],
    correctAnswer: ["Asia"],
    multipleAnswers: false,
  },
  {
    id: 3,
    question: "Select the options which a classified as bird",
    options: ["Crow", "Lion", "Flemingo", "Cheetha"],
    correctAnswer: ["Crow", "Flemino"],
    multipleAnswers: true,
  },
  {
    id: 4,
    question: "Which year had the most saled according to the chart displayed",
    imageUrl:
      "https://www.zippia.com/wp-content/uploads/2022/04/us-road-bicycling-participants-over-time.jpg",
    options: [2018, 2019, 2020],
    correctAnswer: [2020],
    multipleAnswers: false,
  },
];
const App = () => {
  const [Questions, setQuestions] = useState(questions);
  const [answers, setAnswers] = useState([]);

  console.log(answers);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home setState={setQuestions} />} />
          <Route
            exact
            path="/questions"
            element={
              <Question
                questions={Questions}
                answers={answers}
                setAnswers={setAnswers}
              />
            }
          />
          <Route
            exact
            path="/result"
            element={
              <Result
                questions={Questions}
                answers={answers}
                setAnswers={setAnswers}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
