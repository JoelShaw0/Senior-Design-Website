import { Button } from 'react-bootstrap'
import React, { Component } from "react";
import logo from '../images/lockscreen.PNG';

class Home extends Component {
    render() {
        return (
            <div className="Home-div">
                <h1>Live Bolt Smart Lock</h1>
                <h2>A new way to keep your home safe</h2>
                <div className="Spacing-div"></div>
                <Button variant="primary" size="lg">
                    Get Started
                </Button>
                <div className="Spacing-div"></div>
                <img className="logo" src={logo} alt="Lock Screen"></img>
            </div>
        );
    }
}

export default Home;