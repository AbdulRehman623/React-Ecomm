import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import NewTests from "./NewTests";

function App() {
  return (
    <div className="App">
      <NewTests />
      <h1>E-comm Project </h1>
      <button>Nomal Button</button>
      <Button>Bootstrap Button</Button>
    </div>
  );
}

export default App;
