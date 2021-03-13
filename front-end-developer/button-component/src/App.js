import "./App.css";
import Button from "./components/button/Button";

const App = () => (
  <div className="container">
    <h1>Button Component</h1>
    <div className="button-container">
      <p>{"<Button />"}</p> <Button>Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button variant=”outline” />"}</p>
      <Button variant="outline">Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button variant=”text” />"}</p>
      <Button variant="text">Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button disableShadow />"}</p>
      <Button disableShadow>Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button disabled />"}</p>
      <Button disabled>Default</Button>
    </div>
  </div>
);

export default App;
