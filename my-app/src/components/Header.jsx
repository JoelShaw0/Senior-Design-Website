import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Live Bolt Smart Lock</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;