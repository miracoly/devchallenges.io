import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <main>
      <div className="container">
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
        <Input endIcon="circle_notifications">
          {"<Input endIcon='circle_notifications' />"}
        </Input>
        <Input value="Text">{"<Input value='Text' />"}</Input>
        <Input size="sm">{"<Input size='sm' />"}</Input>
        <Input size="md">{"<Input size='md' />"}</Input>
      </div>
      <Input fullWidth>{"<Input fullWidth />"}</Input>
      <Input multiLine row="4">
        {"<Input multiLine row='4' />"}
      </Input>
    </main>
  );
}

export default App;
