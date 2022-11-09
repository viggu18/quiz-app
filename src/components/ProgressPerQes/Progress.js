import "./Progress.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

function Progress({ numberOfQuestions, currentQuestion }) {
  return (
    <div className="add-bg">
      <div className="progressbar-container">
        <CircularProgressbarWithChildren
          value={currentQuestion}
          maxValue={numberOfQuestions}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textSize: 16,
            pathTransitionDuration: 0.5,
            pathColor: "#35d299",
            textColor: "black",
            trailColor: "rgba(243, 244, 250, 1)",
            backgroundColor: { fill: "#fff" },
          })}
        >
          <div className="text-holder">
            <a className="currentQuestion">{currentQuestion}</a>
            <a className="progressbar-text">/{numberOfQuestions}</a>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}

export default Progress;
