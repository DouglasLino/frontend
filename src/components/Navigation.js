// componente encargado de la navegacion

import React, { Component } from 'react'
// para que no refrescara
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                             </i> Salarios
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Sumas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Crear suma</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

