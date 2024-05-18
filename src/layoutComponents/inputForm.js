import React from "react";
import "./inputForm.css";

function InputForm(props) {
  const { lable, errorMsg, handleOnChange, id, ...inputProps } = props;

  return (
    <div className="input-text-box">
      <lable className="text-lable">{lable}</lable>

      <input
        className="text-input-box"
        {...inputProps}
        onChange={handleOnChange}
      ></input>
      <span>{errorMsg}</span>
    </div>
  );
}

export default InputForm;
