import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input>{"<Input />"}</Input>
      <Input error>{"<Input error />"}</Input>
      <Input disabled>{"<Input disabled />"}</Input>
      <Input helperText="Some interesting text">
        {"<Input helperText='Some interesting text' />"}
      </Input>
      <Input error helperText="Some interesting text">
        {"<Input error helperText='Some interesting text' />"}
      </Input>
    </div>
  );
}

export default App;
