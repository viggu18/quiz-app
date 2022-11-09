import "./Options.css";
import { IconContext } from "react-icons";
import { IoIosCheckmark } from "react-icons/io";

function Options() {
  return (
    <div className="options-container">
      <div className="checkmark-container">
        <div className="checkmark-circle-checked">
          <IconContext.Provider
            value={{
              color: "white",
              className: "checkmark",
              size: "1.4em",
            }}
          >
            <div>
              <IoIosCheckmark />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="option-holder">
        <a className="option">Data analysis</a>
      </div>
    </div>
  );
}

export default Options;
