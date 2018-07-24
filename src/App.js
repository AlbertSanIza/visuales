import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
            <Header/>
            <Footer/>
            </div>
        )
    }
}

export default App
