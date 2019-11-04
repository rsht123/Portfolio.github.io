import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <h3 className="navbar-brand">Rishit Rathod</h3>
                    </div>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navItems">
                        <span className="navbar-toggler-icon toggle-btn"></span>
                    </button>
                    <div id="navItems" className="navbar-collapse collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Projects</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;