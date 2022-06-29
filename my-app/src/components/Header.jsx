import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" background-color="blue" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Live Bolt Smart Lock</Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">About</Nav.Link>
                                <Nav.Link href="#home">Features</Nav.Link>
                                <Nav.Link href="#home">Demo</Nav.Link>
                                <Nav.Link href="#home">Documents</Nav.Link>
                                <Nav.Link href="#home">Team</Nav.Link>
                                <Nav.Link href="#home">Gallery</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;