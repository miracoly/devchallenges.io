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
      <Input startIcon="face">{"<Input startIcon='face' />"}</Input>
      <Input error startIcon="add_task">
        {"<Input error startIcon='add_task' />"}
      </Input>
      <Input endIcon="face">{"<Input startIcon='face' />"}</Input>
    </div>
  );
}

export default App;
