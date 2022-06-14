import "./App.css";
import { NavMenu } from "./component/navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./component/aboutus";
import ContactUs from "./component/contactus";
import Home from "./component/home";
import DownloadCV from "./component/downloadcv";

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="/about-us">
            <AboutUs />
          </Route>

          <Route path="/download-cv">
            <DownloadCV />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
