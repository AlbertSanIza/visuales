import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './header/Header.js'
import Controls from './controls/Controls.js'
import VisualizerHolder from './visualizerHolder/VisualizerHolder.js'
import Visualizer from './visualizer/Visualizer.js'
import Footer from './footer/Footer.js'
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
            <div className="row">
            <div className="col-12">
            <Header/>
            </div>
            </div>
            <div className="row">
            <div className="col-4">
            <Controls/>
            </div>
            <div className="col-8">
            <VisualizerHolder/>
            </div>
            </div>
            <div className="row">
            <div className="col-12 text-center">
            <Footer/>
            </div>
            </div>
            </div>
        )
    }
}

export default App
