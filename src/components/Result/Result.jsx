import Button from "../Button/Button";
import PropResult from "../PropResult/PropResult";
import "./Result.css";
import GaugeChart from "react-gauge-chart";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Result({ questions, answers, setAnswers }) {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  // Stores the number of correct and incorrect answers
  const [outcome, setOutcome] = useState({
    correct: 0,
    incorrect: 0,
  });
  const [match, setMatch] = useState(false);
  const initialState = 0;
  const scorePerQuestion = 100 / questions.length;

  console.log(answers);

  // Logic to calculate the score of the user

  const generateScore = () => {
    var count = 0;
    setOutcome((outcome) => ({ ...outcome, correct: 0, incorrect: 0 }));
    setScore((prevVal) => 0);
    setMatch(false);
    // User answers are matched with the actual answers
    answers.map((item) => {
      if (item.multipleAnswers) {
        item.correctAnswers.map((ans) => {
          if (item.userAnswers.includes(ans)) {
            // When one of the answers selected from the user to the questions which have multiple answers user is awarded with full marks
            setScore((prevVal) => prevVal + scorePerQuestion);
            count = count + 1;
            console.log(match);
          }
        });
        if (count > 0) {
          setOutcome((outcome) => ({
            ...outcome,
            correct: outcome.correct + 1,
          }));
        } else {
          setOutcome((outcome) => ({
            ...outcome,
            incorrect: outcome.incorrect + 1,
          }));
        }
      } else {
        // To the questions which have only one options the first element of the array is matched
        if (item.correctAnswers[0] == item.userAnswers[0]) {
          setScore((prevVal) => prevVal + scorePerQuestion);
          setOutcome((outcome) => ({
            ...outcome,
            correct: outcome.correct + 1,
          }));
        } else {
          setOutcome((outcome) => ({
            ...outcome,
            incorrect: outcome.incorrect + 1,
          }));
        }
      }
    });
  };

  // Redirects to the home page if the answers object is undefined
  useEffect(() => {
    if (answers == null) {
      navigate("/");
    } else {
      generateScore();
    }
  });

  // Answer object is resetted to null when user clicks try again
  const buttonHandler = () => {
    setAnswers((answers) => []);
    navigate("/questions");
  };
  return (
    <div className="result-container">
      <div className="top-bar" />
      <div className="bottom-bar">
        <a className="page-title">Your result</a>

        <GaugeChart
          id="gauge-chart1"
          nrOfLevels={10}
          colors={[" #44B77B", "#FFD033", "#FF3B3F"]}
          textColor={"black"}
          percent={score ? score / 100 : 0}
        />
        <div className="outcome-holder">
          <PropResult number={outcome.correct ? outcome.correct : 0} positive />
          <PropResult
            number={outcome.incorrect ? outcome.incorrect : 0}
            negative
          />
        </div>
      </div>
      <Button title="Start again" onClick={buttonHandler} />
    </div>
  );
}

export default Result;
