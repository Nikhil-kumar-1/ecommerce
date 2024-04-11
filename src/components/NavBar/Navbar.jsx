import React from "react";
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar1 = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Navbar.Brand href="#home" className="navbar-brand">
        Zemon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Location" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Location 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Location 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Location 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
          </NavDropdown>
          <Form className="align-items-center">
            <FormControl
              style={{ width: "40vh" }}
              type="text"
              placeholder="Search"
              className="mr-sm-2 search-input"
            />
            <Button variant="primary" className="ml-sm-2">
              Search
            </Button>
          </Form>
          <div style={{ position: "absolute", right: "0px", display: "flex" }}>

            <Link to="/" className="nav-link">Home</Link>
            <Link to="/offers" className="nav-link">Offers</Link>
            <Link to="/help" className="nav-link">Help</Link>
            <Link to="/signin" className="nav-link">Sign In</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
            {/* <link to="/otp" className="nav-link">OTPPage</link> */}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar1;

