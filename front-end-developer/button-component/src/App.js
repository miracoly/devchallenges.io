import "./App.css";
import Button from "./components/button/Button";

const App = () => (
  <main>
    <h1>Button Component</h1>
    <div className="container">
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
    </div>

    <div className="container">
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

    <div className="container">
      <div className="button-container">
        <p>{"<Button color='default' />"}</p>
        <Button color="default">Default</Button>
      </div>
      <div className="button-container">
        <p>{"<Button color='primary' />"}</p>
        <Button color="primary">Primary</Button>
      </div>
      <div className="button-container">
        <p>{"<Button color='secondary' />"}</p>
        <Button color="secondary">Secondary</Button>
      </div>
      <div className="button-container">
        <p>{"<Button color='danger' />"}</p>
        <Button color="danger">Danger</Button>
      </div>
    </div>

    <div className="container">
      <div className="button-container">
        <p>{"<Button startIcon='local_grocery_store' />"}</p>
        <Button color="primary" startIcon="local_grocery_store">
          Default
        </Button>
      </div>
      <div className="button-container">
        <p>{"<Button endIcon='local_grocery_store' />"}</p>
        <Button color="primary" endIcon="local_grocery_store">
          Default
        </Button>
      </div>
    </div>
  </main>
);

export default App;
