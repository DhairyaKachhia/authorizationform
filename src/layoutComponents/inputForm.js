import React, { useState } from "react";
import "./inputForm.css";

function InputForm(props) {
  const [focused, setFocused] = useState(false);
  const { lable, errorMsg, handleOnChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="input-text-box">
      <label className="text-lable">{lable}</label>

      <input
        className="text-input-box"
        {...inputProps}
        onChange={handleOnChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMsg}</span>
    </div>
  );
}

export default InputForm;
