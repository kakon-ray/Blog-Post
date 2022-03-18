/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" style={{ textDecoration: "none" }}>
                <a
                  className={`${activeTab === "Home" ? "active" : ""} nav-link`}
                  onClick={() => setActiveTab("Home")}
                >
                  Home
                </a>
              </Link>

              <Link to="/add" style={{ textDecoration: "none" }}>
                <a
                  className={`${activeTab === "add" ? "active" : ""} nav-link`}
                  onClick={() => setActiveTab("add")}
                >
                  Add
                </a>
              </Link>

              <Link to="/about" style={{ textDecoration: "none" }}>
                <a
                  className={`${
                    activeTab === "about" ? "active" : ""
                  } nav-link`}
                  onClick={() => setActiveTab("about")}
                >
                  About
                </a>
              </Link>

              <NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
                className={`${activeTab === "dropdown" ? "active" : ""}`}
                onClick={() => setActiveTab("dropdown")}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/view" style={{ textDecoration: "none" }}>
                <a
                  className={`${activeTab === "view" ? "active" : ""} nav-link`}
                  onClick={() => setActiveTab("view")}
                >
                  View
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
