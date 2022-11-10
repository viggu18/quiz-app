import "./Button.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IconContext } from "react-icons";

const Button = ({ title, onClick }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick}>
        <a className="btn-text">{title}</a>
        {title == "Next" ? (
          <div className="right-arrow">
            {/* to style the icons used inside the button */}
            <IconContext.Provider
              value={{
                color: "white",
                className: "checkmark",
                size: "1.5em",
              }}
            >
              <div>
                <IoMdArrowRoundForward />
              </div>
            </IconContext.Provider>
          </div>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};

export default Button;
