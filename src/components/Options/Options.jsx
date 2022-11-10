import "./Options.css";
import { IconContext } from "react-icons";
import { IoIosCheckmark } from "react-icons/io";
// import { useState } from "react";

function Options({
  state,
  setState,
  optionText,
  multiSelection,
  unselectable,
}) {
  const clickHandlerMutli = () => {
    if (state.includes(optionText)) {
      state.splice(state.indexOf(optionText), 1);
    } else {
      setState([...state, optionText]);
    }
  };

  const initialState = [];

  const clickHandlerSingle = () => {
    if (unselectable) {
      return;
    }
    if (state.includes(optionText)) {
      setState(initialState);
    } else {
      setState(initialState);
      setState([optionText]);
    }
  };

  return (
    <div
      className={`options-container ${
        state.includes(optionText) ? "options-container-selected" : ""
      }`}
      onClick={multiSelection ? clickHandlerMutli : clickHandlerSingle}
    >
      <div className="checkmark-container">
        <div
          className={`${
            state.includes(optionText)
              ? "checkmark-circle-checked"
              : "checkmark-circle-uncheckeds"
          }`}
        >
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
        <p className="option">{optionText}</p>
      </div>
    </div>
  );
}

export default Options;
