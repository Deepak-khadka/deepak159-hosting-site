import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import AboutUs from "./aboutus";
import { Routes, Route } from "react-router-dom";

export const NavMenu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Deepak Khadka</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About us</Nav.Link>
            </Nav>

            <Routes>
                <Route path="about-us" element={<AboutUs />} />
              </Routes>

            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                Download CV
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
