import logo from "./logo.svg";
import Form from "./tests/Form.js";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Test /> */}
        <Form />
      </header>
    </div>
  );
}

export default App;
