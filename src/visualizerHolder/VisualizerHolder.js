import React, { Component } from 'react'

class VisualizerHolder extends Component {
    render() {
        return (
            <div className="card border-dark">
            <div className="card-header">Vista Anticipada</div>
            <div className="card-body">
            <iframe className="preview" src="https://batallademaestros.github.io/" frameBorder="0" title="visualizer"></iframe>
            </div>
            </div>
        )
    }
}

export default VisualizerHolder
