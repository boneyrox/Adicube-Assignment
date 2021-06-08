import logo from "./logo.svg";
import "./App.css";
import Influencer from "./Frontend/Influencer";
import Brand from "./Frontend/Brand";
import Home from "./Frontend/Home";

function App() {
  return (
    <div className="App">
      <Influencer />
      <Home />
      <Brand />
    </div>
  );
}

export default App;
