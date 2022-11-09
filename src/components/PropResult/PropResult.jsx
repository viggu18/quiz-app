import "./PropResult.css";

function PropResult({ number, positive }) {
  return (
    <div
      className={`proportion-container ${
        positive ? "container-positive" : "container-negative"
      }`}
    >
      <div className="circle-holder">
        <div
          className={`circle ${
            positive ? "circle-positive" : "circle-negative"
          }`}
        />
      </div>
      <div className="prop-holder">
        <a className="outcome">{number}&nbsp;</a>
        <a className="outcome2">{positive ? "Correct" : "Incorrect"}</a>
      </div>
    </div>
  );
}

export default PropResult;
