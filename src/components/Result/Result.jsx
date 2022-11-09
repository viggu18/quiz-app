import Button from "../Button/Button";
import PropResult from "../PropResult/PropResult";
import "./Result.css";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  return (
    <div className="result-container">
      <div className="top-bar" />
      <div className="bottom-bar">
        <a className="page-title">Your result</a>
        <div className="outcome-holder">
          <PropResult number="3" positive />
          <PropResult number="2" />
        </div>
      </div>
      <Button title="Start again" onClick={() => navigate("/")} />
    </div>
  );
}

export default Result;
