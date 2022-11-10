import "./Home.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Home = ({ buttonHandler, setState }) => {
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate("/questions");
  };

  return (
    <div className="home-container">
      <div className="header">
        <h3 className="header-title">upraised</h3>
      </div>
      <>
        <div className="circle-holder">
          <div className="circle">
            <a className="quiz">Quiz</a>
          </div>
        </div>
      </>
      <Button title={"Start"} onClick={buttonClick} />
    </div>
  );
};

export default Home;
