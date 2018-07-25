import React, { Component } from 'react'
import "./VisualizerHolder.css"

class VisualizerHolder extends Component {
    render() {
        return (
            <div className="card border-dark">
            <div className="card-header">
            <b>Vista Anticipada</b>
            <div className="card-body">
            <iframe className="visualizer-holder" src="/visualizer" frameBorder="0" title="visualizer"></iframe>
            </div>
            </div>
        )
    }
}

export default VisualizerHolder
