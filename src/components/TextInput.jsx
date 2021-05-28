import React from "react";
import ClassNames from "classnames";

function Input({name, placeholder, autofocus, currentValue, handleInput}) {
  return (
    <input
        type="text"
        name={name}
        className={ClassNames("page-content-input")}
        placeholder={placeholder}
        autoFocus={autofocus}
        value={currentValue}
        onChange={handleInput}
    />
  )
}

export default Input;