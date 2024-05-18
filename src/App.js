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
    },
    {
      id: 2,
      name: "email",
      type: "email",
      lable: "Email",
      placeholder: "Email",
    },
    {
      id: 3,
      name: "birthdate",
      type: "date",
      lable: "Birthdate",
      placeholder: "Birthdate",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      lable: "Password",
      placeholder: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      lable: "Confirm Password",
      placeholder: "Confirm Password",
    },
  ];

  const OnChange = (e) => {
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
            handleOnChange={OnChange}
          />
        ))}
        <button id="submit-btn">submit</button>
      </form>
    </div>
  );
}

export default App;
