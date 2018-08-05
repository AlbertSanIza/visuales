import React, { Component } from 'react'
import Particles from 'react-particles-js'
import puma_logo from "./puma.png"
import bdm_logo from "./bdm.png"
import "./Visualizer.css"

const VisualizerHeader = () => (
    <div className="visualizer-header">
    <img className="bdm-logo-sm" src={bdm_logo} alt="LOGO"/>
    <img className="puma-logo-sm" src={puma_logo} alt="LOGO"/>
    </div>
)

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
            <div className="visualizer flex fade-in">
            {(() => {
                if(this.state.status === "isStart") {
                    return (
                        <VisualizerHeader/>
                    )
                }
            })()}
            <Particles className="particles" params={{
                "particles": {
                    "number": {
                        "value": 70,
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
            </div>
        )
    }
}

export default Visualizer
