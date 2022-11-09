import "./Home.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Home = ({ buttonHandler }) => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="header">
        <h3 className="header-title">upraised</h3>
      </div>
      <div className="circle-holder">
        <div className="circle">
          <h4 className="quiz">Quiz</h4>
        </div>
      </div>
      <Button title={"Start"} onClick={() => navigate("/questions")} />
    </div>
  );
};

export default Home;
