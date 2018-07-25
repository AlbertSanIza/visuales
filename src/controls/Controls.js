import React, { Component } from 'react'

class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            status: "set"
        }
    }
    inputHandleChange = e => {
        this.setState({seconds: e.target.value})
    }
    setButton = () => {
        this.setState({status: "isSet"})
    }
    startButton = () => {
        this.setState({status: "isStart"})
    }
    pauseButton = () => {
        this.setState({status: "isSet"})
    }
    resetButton = () => {
        this.setState({status: "set", seconds: 0})
    }
    render() {
        return (
            <div className="card border-dark">
            <div className="card-header">
            <b>Controles</b>
            </div>
            <div className="card-body">
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
