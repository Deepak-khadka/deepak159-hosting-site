import "./App.css";
import { NavMenu } from "./component/navbar";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>

      <h4>Hey it's me Deepak Khadka </h4>

      <h2>Website is under construction in react js</h2>

      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default App;
