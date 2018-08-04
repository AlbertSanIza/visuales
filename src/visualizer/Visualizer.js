import React, { Component } from 'react'
import Particles from 'react-particles-js'
import puma_logo from "./puma.svg"
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
            <Particles className="particles" params={{
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 1400
                        }
                    },
                    "color": {
                        "value": "#ff0000"
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ff0000",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                }
            }}/>
            <img className="bdm-logo" src={bdm_logo} alt="BDMLOGO"/>
            <img className="bdm-logo" src={puma_logo} alt="BDMLOGO"/>
            </div>
        )
    }
}

export default Visualizer
