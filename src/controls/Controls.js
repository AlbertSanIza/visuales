import React, { Component } from 'react'

class Controls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0
        }
    }
    inputHandleChange = e => {
        this.setState({seconds: e.target.value})
    }
    setButton = () => {
        console.log("set")
    }
    startButton = () => {
        console.log("start")
    }
    pauseButton = () => {
        console.log("pause")
    }
    resetButton = () => {
        console.log("reset")
    }
    render() {
        return (
            <div className="card border-dark">
            <div className="card-header">
            <b>Controles</b>
            </div>
            <div className="card-body">
            <div className="input-group input-group-sm mb-3">
            <input className="form-control" type="number" placeholder="Tiempo" min="0" onChange={this.inputHandleChange}/>
            <div className="input-group-append">
            <span className="input-group-text">Segundos</span>
            </div>
            </div>
            <button className="btn btn-outline-primary btn-sm btn-block" type="button" onClick={this.setButton}>Mostrar</button>
            <button className="btn btn-outline-success btn-sm btn-block" type="button" onClick={this.startButton}>Iniciar</button>
            <button className="btn btn-outline-warning btn-sm btn-block" type="button" onClick={this.pauseButton}>Puasar</button>
            <button className="btn btn-outline-danger btn-sm btn-block" type="button" onClick={this.resetButton}>Cancelar</button>
            </div>
            </div>
        )
    }
}

export default Controls
