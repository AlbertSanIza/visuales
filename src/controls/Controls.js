import React, { Component } from 'react'

class Controls extends Component {
    render() {
        return (
            <div className="card border-dark">
            <div className="card-header">
            <b>Controles</b>
            </div>
            <div className="card-body">
            <div className="input-group input-group-sm mb-3">
            <input className="form-control" type="number" placeholder="Tiempo" min="0"/>
            <div className="input-group-append">
            <span className="input-group-text">Segundos</span>
            </div>
            </div>
            <button className="btn btn-outline-primary btn-sm btn-block" type="button">Mostrar</button>
            <button className="btn btn-outline-success btn-sm btn-block" type="button">Iniciar</button>
            <button className="btn btn-outline-warning btn-sm btn-block" type="button">Puasar</button>
            <button className="btn btn-outline-danger btn-sm btn-block" type="button">Cancelar</button>
            </div>
            </div>
        )
    }
}

export default Controls
