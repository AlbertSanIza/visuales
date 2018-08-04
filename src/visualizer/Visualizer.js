import React, { Component } from 'react'
import Particles from 'react-particles-js'
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
            <Particles className="particles"/>
            <img className="bdm-logo" src={bdm_logo} alt="BDMLOGO"/>
            </div>
        )
    }
}

export default Visualizer
