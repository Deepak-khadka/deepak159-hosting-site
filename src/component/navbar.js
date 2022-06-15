import {Link} from "react-router-dom";
import {Navbar, Container, Nav} from "react-bootstrap";

export const NavMenu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <Link to="/" className="navbar-brand">Deepak Khadka</Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Link className="nav-link" to="/about-us">About us</Link>

                        <Link className="nav-link" to="/contact-us">Contact us</Link>

                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="/download-cv">Download CV</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
