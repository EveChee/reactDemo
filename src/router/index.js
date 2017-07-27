/**
 * Created by evechee on 2017/7/26.
 */
import React from 'react'
import {Router, Route, Link} from 'react-router'
import App from '../App'
import Cmain from '../components/cmain/cmain'
React.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="/main" component={Cmain}/>
        </Route>
    </Router>
), document.body)