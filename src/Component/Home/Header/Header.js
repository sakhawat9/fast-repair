import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar style={{position: 'absolute', left: 0, top: 0, right: 0,zIndex: 3 }} bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand
          as={Link}
          style={{ fontSize: "30px"}}
          className="web-name header-logo text-white"
          to="/"
        >
          FAST REPAIR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className=" text-white" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className=" text-white" as={Link} to="#">
              About us
            </Nav.Link>
            <Nav.Link className=" text-white" as={Link} to="#">
              Projects
            </Nav.Link>
            <Nav.Link className=" text-white" as={Link} to="#">
              Contact
            </Nav.Link>
            <Nav.Link className=" text-white" as={Link} to="/sidebar">
              Admin
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signIn"
              className="active p-1 px-4 btn btn-primary text-white border-box"
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
