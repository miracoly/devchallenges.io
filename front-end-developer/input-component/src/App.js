import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input>{"<Input />"}</Input>
      <Input error>{"<Input error />"}</Input>
      <Input disabled>{"<Input disabled />"}</Input>
    </div>
  );
}

export default App;
