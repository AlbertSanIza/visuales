import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Footer from './Footer.js'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
            <Footer/>
            </div>
        )
    }
}

export default App
