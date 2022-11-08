import "./Home.css";
import Button from "../Button/Button";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h3 className="header-title">upraised</h3>
      </div>
      <div className="circle">
        <h4 className="quiz">Quiz</h4>
      </div>
      <div className="align-bottom">
        <Button title={"Start"} onClick={() => alert("hello")} />
      </div>
    </div>
  );
};

export default Home;
