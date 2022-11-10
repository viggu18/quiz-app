import "./Home.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = ({ buttonHandler, setState }) => {
  const navigate = useNavigate();

  const getQuestions = async () => {
    await axios
      .get("http://localhost:8080/api/questions")
      .then((res) => console.log(res));
  };

  const buttonClick = () => {
    // getQuestions();
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
