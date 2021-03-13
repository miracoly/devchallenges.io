import "./App.css";
import Button from "./components/button/Button";

const App = () => (
  <div className="container">
    <h1>Button Component</h1>
    <div className="button-container">
      <p>{"<Button />"}</p> <Button>Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button variant='outline' />"}</p>
      <Button variant="outline">Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button variant='text' />"}</p>
      <Button variant="text">Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button disableShadow />"}</p>
      <Button disableShadow>Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button disabled />"}</p>
      <Button disabled>Disabled</Button>
    </div>
    <div className="button-container">
      <p>{"<Button variant='text'  disabled />"}</p>
      <Button variant="text" disabled>
        Disabled
      </Button>
    </div>
    <div className="button-container">
      <p>{"<Button size='sm' />"}</p> <Button size="sm">Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button size='md' />"}</p> <Button size="md">Default</Button>
    </div>
    <div className="button-container">
      <p>{"<Button size='lg' />"}</p> <Button size="lg">Default</Button>
    </div>
  </div>
);

export default App;
