import React, { Component } from 'react'
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
            </div>
            </div>
        )
    }
}

export default Visualizer
