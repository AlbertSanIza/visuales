import React, { Component } from 'react'
import Countdown from 'react-countdown-now'
import './controls.css'

class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "set",
            seconds: "",
            text: ""
        }
    }
    componentDidMount() {
        window.visualizer_com.onmessage = ev => {
            console.log(ev.data)
        }
    }
    inputHandleChange = e => {
        this.setState({seconds: e.target.value})
    }
    inputTextHandleChange = e => {
        this.setState({text: e.target.value})
    }
    setButton = () => {
        this.setState({status: "isSet"})
        window.controls_com.postMessage({status: "isSet", seconds: this.state.seconds, text: this.state.text})
    }
    startButton = () => {
        this.setState({status: "isStart"})
        window.controls_com.postMessage({status: "isStart", seconds: this.state.seconds, text: this.state.text})
    }
    pauseButton = () => {
        this.setState({status: "isSet"})
        window.controls_com.postMessage({status: "isPause", seconds: this.state.seconds, text: this.state.text})
    }
    resetButton = () => {
        this.setState({status: "set", seconds: "", text: ""})
        window.controls_com.postMessage({status: "isReset", seconds: "0", text: this.state.text})
    }
    onTick = () => {
        this.setState({seconds: this.state.seconds - 1})
        window.controls_com.postMessage({status: "isStart", seconds: this.state.seconds, text: this.state.text})
    }
    onComplete = () => {
        this.setState({status: "set", seconds: ""})
        window.controls_com.postMessage({status: "isReset", seconds: "0"})
    }
    render() {
        return (
            <div className="card border-dark">
            <div className="card-header">
            <b>
            Controles
            {(() => {
                switch (this.state.status) {
                    case "isStart":
                    return (
                        <React.Fragment>
                        <div className="countdown">
                        <Countdown date={Date.now() + (this.state.seconds * 1000)} onTick={this.onTick} onComplete={this.onComplete} renderer={props => <React.Fragment>{props.total / 1000}</React.Fragment>}/>
                        </div>
                        </React.Fragment>
                    )
                    default:
                    return ""
                }
            })()}
            </b>
            </div>
            <div className="card-body">
            <input className="form-control" type="text" placeholder="Tema" disabled={this.state.status !== "set"} value={this.state.text} onChange={this.inputTextHandleChange}/>
            <br/>
            <div className="input-group input-group-sm mb-3">
            <input className="form-control" type="number" placeholder="Tiempo" min="5" disabled={this.state.status !== "set"} value={this.state.seconds} onChange={this.inputHandleChange}/>
            <div className="input-group-append">
            <span className="input-group-text">Segundos</span>
            </div>
            </div>
            {(() => {
                switch (this.state.status) {
                    case "set":
                    return (
                        <button className="btn btn-outline-primary btn-sm btn-block" type="button" onClick={this.setButton} disabled={!this.state.seconds || this.state.seconds < 5}>Mostrar</button>
                    )
                    case "isSet":
                    case "isPause":
                    return (
                        <div className="row">
                        <div className="col">
                        <button className="btn btn-outline-danger btn-sm btn-block" type="button" onClick={this.resetButton}>Cancelar</button>
                        </div>
                        <div className="col">
                        <button className="btn btn-outline-success btn-sm btn-block" type="button" onClick={this.startButton}>Iniciar</button>
                        </div>
                        </div>
                    )
                    case "isStart":
                    return (
                        <div>
                        <button className="btn btn-outline-warning btn-sm btn-block" type="button" onClick={this.pauseButton}>Puasar</button>
                        </div>
                    )
                    default:
                    return null
                }
            })()}
            </div>
            </div>
        )
    }
}

export default Controls
