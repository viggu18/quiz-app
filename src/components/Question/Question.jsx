import "./Question.css";
import Button from "../Button/Button";
import Options from "../Options/Options";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Question = ({ question }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="top-bar" />
      <div className="question-container">
        <div className="question-holder">
          <h3 className="question">
            How do you judge what should be added to the next version of the app
          </h3>
        </div>
        <Options />
      </div>
      <div className="center">
        <Button title="Next" onClick={() => navigate("/result")} />
      </div>
    </div>
  );
};

export default Question;
