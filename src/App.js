import React from "react";
import ReactDOM from 'react-dom'
import { HashRouter as Router, HashRouterProps, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import './styles/index.scss'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <Router>
                <Navbar />
                {window.location.pathname == "./#/" && 
                    <Redirect to="/intro" />
                }
                <Route exact path="/intro" component={Intro} />
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))