import React, {Component} from 'react';
import logo from './logo.svg';
import './less/reset.less';
import './less/app.less';

import Header from './components/app/header/Header'
import Clock from './components/Clock'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Clock bob="666"/>
                <Clock bob="777"/>
                <Clock bob="888"/>
            </div>
        );
    }
}

export default App;
