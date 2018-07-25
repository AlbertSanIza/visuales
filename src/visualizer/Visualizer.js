import React, { Component } from 'react'
import "./Visualizer.css"

class Visualizer extends Component {
    constructor(props) {
        super(props)
        window.controls_com.onmessage = ev => {
            console.log(ev.data)
        }
    }
    render() {
        return (
            <div className="visualizer fade-in">
            <div>
            Visualizer
            </div>
            </div>
        )
    }
}

export default Visualizer
