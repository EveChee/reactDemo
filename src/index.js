import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Cmain from './components/cmain/cmain'
ReactDOM.render(
    <Router history={ReactRouter.hashHistory}>
        <div>
            <Route path="/" component={App}>
                <Route path="/main" component={Cmain}/>
            </Route>
        </div>
    </Router>
    , document.getElementById('root'))
registerServiceWorker();
