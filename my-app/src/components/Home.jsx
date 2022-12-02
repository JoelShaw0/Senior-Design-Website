import { Button } from 'react-bootstrap'
import React, { Component } from "react";
import logo from '../images/lockscreen.PNG';

class Home extends Component {
    render() {
        return (
            <div className="Home-div">
                <h1>Live Bolt Smart Lock</h1>
                <h2>Group F Fall 2022</h2>
                <div className="Spacing-div"></div>
                <img className="logo" src={logo} alt="Lock Screen"></img>
            </div>
        );
    }
}

export default Home;