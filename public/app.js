import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from '../src/App'


class App extends React.Component {
    render() {
        return (
            <AppContainer />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))