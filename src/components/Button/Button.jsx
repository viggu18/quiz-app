import "./Button.css";

const Button = ({ title, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <a className="btn-text">{title}</a>
    </button>
  );
};

export default Button;
