import React, { Component } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import About from "./About";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Intro />
                <About />
            </div>
        );
  }
}

export default App;
