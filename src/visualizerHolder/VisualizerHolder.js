import React, { Component } from 'react'
import linkLogo from './linkLogo.svg'
import "./VisualizerHolder.css"

class VisualizerHolder extends Component {
    render() {
        return (
            <div className="card border-dark">
            <div className="card-header">
            <b>Vista Anticipada</b>
            <span className="float-right">
            <a href="/visualizer" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={linkLogo} alt=""/>
            </a>
            </span>
            </div>
            <div className="card-body">
            <iframe className="visualizer-holder" src="/visualizer" frameBorder="0" title="visualizer"></iframe>
            </div>
            </div>
        )
    }
}

export default VisualizerHolder
