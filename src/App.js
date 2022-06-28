import "./App.css";
import { NavMenu } from "./component/navbar";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AboutUs from "./component/aboutus";
import ContactUs from "./component/contactus";
import Home from "./component/home";
import DownloadCV from "./component/downloadcv";
import Blogs from "./component/Blogs";

function App() {
  return (
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="download-cv" element={<DownloadCV />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
