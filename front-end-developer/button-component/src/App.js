import "./App.css";
import ButtonContainer from "./components/button-container/ButtonContainer";

const App = () => (
  <div className="container">
    <h1>Button Component</h1>
    <ButtonContainer desc="<Button />" />
    <ButtonContainer desc="<Button variant=”outline” />" variant="outline" />
    <ButtonContainer desc="<Button variant=”text” />" variant="text" />
  </div>
);

export default App;
