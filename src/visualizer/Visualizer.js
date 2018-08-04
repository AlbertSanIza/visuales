import React, { Component } from 'react'
import bdm_logo from "./bdm.png"
import "./Visualizer.css"

class Visualizer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "set",
            seconds: ""
        }
        window.controls_com.onmessage = ev => {
            this.setState(ev.data)
        }
    }
    render() {
        return (
            <div className="visualizer fade-in">
            <div>
            Visualizer
            <br/>
            {this.state.status} - {this.state.seconds}
            <br/>
            <img className="logo" src={bdm_logo} alt="BDMLOGO"/>
            </div>
            </div>
        )
    }
}

export default Visualizer
