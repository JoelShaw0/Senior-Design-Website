import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Features from "./Features";
import Demo from "./Demo";
import Documents from "./Documents";
import Team from "./Team";

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="light" variant="light" background-color="blue" fixed="top">
                        <Container>
                            <Navbar.Brand as={Link} to={"/home"}>Live Bolt Smart Lock</Navbar.Brand>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                    <Nav.Link as={Link} to={"/features"}>Features</Nav.Link>
                                    <Nav.Link as={Link} to={"/demo"}>Demo</Nav.Link>
                                    <Nav.Link as={Link} to={"/documents"}>Documents</Nav.Link>
                                    <Nav.Link as={Link} to={"/team"}>Team</Nav.Link>
                                    <Nav.Link as={Link} to={"/gallery"}>Gallery</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route exact path="/" element = { <Home />}></Route>
                        <Route exact path="/about" element = {<About />}></Route>
                        <Route exact path="/features" element = {<Features />}></Route>
                        <Route exact path="/demo" element = {<Demo />}></Route>
                        <Route exact path="/documents" element = {<Documents />}></Route>
                        <Route exact path="/team" element = {<Team />}></Route>
                        <Route exact path="/gallery" element = {<Gallery />}></Route>
                        <Route exact path="/home" element = { <Home />}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default Header;