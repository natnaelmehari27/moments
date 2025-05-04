import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"; // Import your logo image here
import styles from "../styles/NavBar.module.css"; // Import your CSS module here
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45"></img>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/"> 
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin">
              <i className="fas fa-sign-in-alt"></i>sign in
            </NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup">
              <i className="fas fa-user-plus"></i>sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
// This is a placeholder for the NavBar component. It will be replaced with the actual implementation later.
