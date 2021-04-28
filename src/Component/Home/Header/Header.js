import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { BrowserRouter as Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand
          as={Link}
          style={{ fontSize: "30px" }}
          className="web-name header-logo"
          to="/"
        >
          MOBILE REPAIR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/sidebar">
              Admin
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signIn"
              className="active btn-brand p-1 px-4"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
