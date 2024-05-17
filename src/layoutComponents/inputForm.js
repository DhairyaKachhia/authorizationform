import React from "react";

function InputForm(props) {
  return (
    <div className="input-text-box">
      <lable className="text-lable" for={props.placeholder}>
        {props.placeholder}
      </lable>

      <input
        className="text-input-box"
        type={props.type}
        id={props.placeholder}
        name={props.placeholder}
      ></input>
    </div>
  );
}

export default InputForm;
