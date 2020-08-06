//import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {Link} from 'react-router-dom';
import React, { PureComponent } from 'react';

export default class MainPage extends PureComponent {
    render() {
        return (
            <div>
                <h1> MainPage </h1>
                <li>
                <Link to = "/register">Register Here</Link>
                </li>
                <li>
                <Link to = "/login">Login here </Link>
                </li>
                
                
            </div>
        )
    }
}
