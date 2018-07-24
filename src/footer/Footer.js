import React, { Component } from 'react'
import instagramLogo from './instagramLogo.svg'
import githubLogo from './githubLogo.svg'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12 text-center">
            <hr/>
            Creado por <a href="https://github.com/AlbertSanIza" target="_blank" rel="noopener noreferrer">Albert Sanchez</a>
            <br/>
            <a href="https://www.instagram.com/albertsaniza/" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={instagramLogo} alt=""/>
            </a>
            <a href="https://github.com/BatallaDeMaestros" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={githubLogo} alt=""/>
            </a>
            </div>
            </div>
        )
    }
}

export default Footer
