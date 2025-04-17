import logo from "./logo.svg";
import MyComponent from "./tests/MyComponent.js";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Test /> */}
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
