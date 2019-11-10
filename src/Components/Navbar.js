import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav id="navbar">
                <div>
                    <div className="navbar-header">
                        <h3 className="navbar-brand">Rishit Rathod</h3>
                    </div>
                    <ul id="navItems" className="navbar-nav">
                        <li className="nav-item"><NavLink to="intro" className="nav-link">Intro</NavLink></li>
                        <li className="nav-item"><NavLink to="about" className="nav-link">About</NavLink></li>
                        <li className="nav-item"><NavLink to="projects" className="nav-link">Projects</NavLink></li>
                        <li className="nav-item"><NavLink to="contact" className="nav-link">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;