import { useState } from "react";
import "./App.css";
import InputForm from "./layoutComponents/inputForm";

function App() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });

  const formFields = [
    {
      id: 1,
      name: "name",
      type: "text",
      lable: "Full Name",
      placeholder: "Full Name",
      errorMsg: "Name should contain 3-20 letters!",
      pattern: "^[A-Za-z0-9]{3,20}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      lable: "Email",
      placeholder: "Email",
      errorMsg: "Invalid email type!",
      required: true,
    },
    {
      id: 3,
      name: "birthdate",
      type: "date",
      lable: "Birthdate",
      placeholder: "Birthdate",
      errorMsg: "Birthdate cannot pass current date!",
      required: false,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      lable: "Password",
      placeholder: "Password",
      errorMsg:
        "Password must contain 8-14 characters and should include 1 letter, 1 number, and 1 special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,14}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      lable: "Confirm Password",
      placeholder: "Confirm Password",
      errorMsg: "Passwords does not match",
      pattern: inputValues.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form>
        <h1 className="form-title">Register</h1>
        {formFields.map((input) => (
          <InputForm
            key={input.id}
            {...input}
            value={inputValues[input.name]}
            handleOnChange={onChange}
          />
        ))}
        <button id="submit-btn">submit</button>
      </form>
    </div>
  );
}

export default App;
