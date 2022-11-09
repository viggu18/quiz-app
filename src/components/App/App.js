import "./App.css";
import Home from "../Home/Home";
import Question from "../Question/Question";
import Result from "../Result/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/questions" element={<Question />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
