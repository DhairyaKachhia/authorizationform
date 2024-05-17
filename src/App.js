import "./App.css";
import InputForm from "./layoutComponents/inputForm";

function App() {
  return (
    <div className="container">
      <form>
        <InputForm placeholder="Name" type="text" />
        <InputForm placeholder="Email" type="text" />
        <InputForm placeholder="Password" type="password" />
        <InputForm placeholder="Confirm Password" type="password" />
        <input id="submit-btn" type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default App;
